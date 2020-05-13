import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { JwtModule } from '@nestjs/jwt';
import {secretC} from './auth.constants';
import {UserModule} from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './auth.strategy';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]), UserModule,
        JwtModule.register({
            secretOrPrivateKey: 'secret'
        })
    ],
    providers : [AuthService, UserService, JwtStrategy],
    controllers: [AuthController]
})
export class AuthModule {}
