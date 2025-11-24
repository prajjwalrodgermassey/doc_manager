import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LogInDto } from './dto/login.dto';
import * as jwt from 'jsonwebtoken';
import { instanceToPlain } from 'class-transformer';
import { ERROR } from 'src/common/constants';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signin(signIn: CreateUserDto) {
    try {
      const user = await this.usersService.findByUserName(signIn.username);

      if (user) {
        throw new Error(ERROR.USER.ALREADY_EXISTS);
      }

      return await this.usersService.create(signIn);
    } catch (err: unknown) {
      if ((err as Error).message === ERROR.USER.ALREADY_EXISTS) {
        throw new HttpException(ERROR.USER.ALREADY_EXISTS, 409);
      }

      throw new HttpException(ERROR.USER.CANNOT_CREATE, HttpStatus.BAD_REQUEST);
    }
  }

  async login(login: LogInDto) {
    try {
      const user = await this.usersService.findByUserName(login.username);

      if (!user) {
        throw new Error(ERROR.USER.NOT_FOUND);
      }

      const result = await bcrypt.compare(login.password, user.password);

      if (!result) {
        throw new Error(ERROR.USER.WRONG_PASSWORD);
      }

      const token = jwt.sign(instanceToPlain(login), 'secret', {
        expiresIn: 60 * 5,
      });

      const refreshToken = jwt.sign(instanceToPlain(login), 'secret', {
        expiresIn: 60 * 6,
      });

      return { token, refreshToken };
    } catch (err: unknown) {
      if ((err as Error).message === ERROR.USER.NOT_FOUND) {
        throw new HttpException(ERROR.USER.NOT_FOUND, HttpStatus.NOT_FOUND);
      }
      if ((err as Error).message === ERROR.USER.WRONG_PASSWORD) {
        throw new HttpException(
          ERROR.USER.WRONG_PASSWORD,
          HttpStatus.NOT_FOUND,
        );
      }

      throw new HttpException(ERROR.USER.LOGIN_FAILED, HttpStatus.BAD_GATEWAY);
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
