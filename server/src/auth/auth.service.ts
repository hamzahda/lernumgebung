import { Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';

import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    private readonly userService: UserService,
  ) {}

  private async validate(user: User) {
    let selected: User = await this.userService.getUserByName(user.uname);
    if (selected) {
      let cmpr: boolean = await bcrypt.compare(user.pwrd, selected.pwrd);
      if (cmpr) return selected;
    }
    return;
  }
  
  public async login(user: User): Promise<any> {
    return this.validate(user).then(userData => {
      if (userData) {
        let payload = `${userData.uname}${userData.id}`;
        const accessToken = this.jwt.sign(payload);
        const user = userData;
        return {
          user: userData,
          accessToken: accessToken,
        };
      }
      return { status: 'not found' };
    });
  }

  public async register(user: User): Promise<any> {
    return await this.userService.createUser(user);
  }
}
