import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogUserModel, BlogUserSchema } from './blog-user.model';
import { BlogUserRepository } from './blog-user.repository';
import { BlogUserFactory } from './blog-user.factory';

@Module({  imports: [MongooseModule.forFeature([
    { name: BlogUserModel.name, schema: BlogUserSchema }
  ])],
  providers: [BlogUserRepository, BlogUserFactory],
  exports: [BlogUserRepository],
})

export class BlogUserModule {}
