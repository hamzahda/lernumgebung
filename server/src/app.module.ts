import { Module } from '@nestjs/common'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3306,
      username: 'user',
      password: 'user',
      database: 'lerndb',
      entities: [
          'dist/**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  UserModule,
  AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
