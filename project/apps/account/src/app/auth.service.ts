import * as dayjs from 'dayjs';
import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { BlogUserRepository, BlogUserEntity } from '../../blog-user';
import { UserRole } from '@project/core';

import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly blogUserRepository: BlogUserRepository,
    private readonly configService: ConfigService,
  ) {
   
  }

  public async register(dto: CreateUserDto): Promise<BlogUserEntity> {
    const {email, firstname, lastname, password, dateBirth} = dto;

    const blogUser = {
      email, firstname, lastname, role: UserRole.User,
      avatar: '', dateOfBirth: dayjs(dateBirth).toDate(),
      passwordHash: ''
    };

    const existUser = await this.blogUserRepository
      .findByEmail(email);

    if (existUser) {
      throw new ConflictException("AUTH_USER_EXISTS");
    }

    const userEntity = await new BlogUserEntity(blogUser)
      .setPassword(password)

    this.blogUserRepository
      .save(userEntity);

    return userEntity;
  }

  public async verifyUser(dto: LoginUserDto) {
    const {email, password} = dto;
    const existUser = await this.blogUserRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException("Не найден");
    }

    if (!await existUser.comparePassword(password)) {
      throw new UnauthorizedException("Неверный пароль");
    }

    return existUser;
  }

  public async getUser(id: string) {
    const user = await this.blogUserRepository.findById(id);

    if (! user) {
      throw new NotFoundException("Нет такого пользователч");
    }

    return user;
  }
}