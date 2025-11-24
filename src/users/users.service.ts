import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { pagination } from 'src/common/functions/pagination';
import { PaginationQueryParam } from 'src/common/dto/pagination-query-param.dto';
import * as bcrypt from 'bcrypt';
import { ERROR, SALT_ROUNDS } from 'src/common/constants';

@Injectable()
export class UsersService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(User) private usersRepo: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const password = await bcrypt.hash(createUserDto.password, SALT_ROUNDS);

      console.log(password);

      await this.usersRepo.save({
        age: createUserDto.age,
        email: createUserDto.email,
        name: createUserDto.name,
        username: createUserDto.username,
        password: password,
        //TODO - manage these 'system' by JWT token after authentication and authorization
        created_by: createUserDto.username,
        updated_by: createUserDto.username,
      });

      return `New User created`;
    } catch (err) {
      console.log(err);

      throw new HttpException(
        'User could not be created',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll(paginationParam: PaginationQueryParam) {
    try {
      const countQuery = `SELECT COUNT(*) as total FROM doc_manager.user as u WHERE u.name LIKE "%"?"%" OR u.username LIKE "%"?"%"`;
      const query = `SELECT * FROM doc_manager.user as u WHERE u.name LIKE "%"?"%" OR u.username LIKE "%"?"%"`;

      const data = await pagination(
        query,
        countQuery,
        [paginationParam.q || '', paginationParam.q || ''],
        paginationParam,
        this.usersRepo,
      );

      return data;
    } catch (err) {
      console.log(err);
      throw new HttpException(
        'Users could not be fetched',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  async findByUserName(username: string) {
    try {
      const query = `SELECT * FROM doc_manager.user as u WHERE u.username LIKE "%"?"%" OR u.email LIKE "%"?"%"`;
      const users: User[] = await this.usersRepo.query(query, [
        username,
        username,
      ]);

      return users[0];
    } catch (err: any) {
      console.log(err);
      throw new HttpException(ERROR.USER.NOT_FOUND, HttpStatus.BAD_REQUEST);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
