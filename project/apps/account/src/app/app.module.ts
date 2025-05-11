import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, } from '@nestjs/config';
import { BlogUserModule } from '../../blog-user/blog-user.module';
import { getMongooseOptions } from './helpers';
import { ENV_USERS_FILE_PATH } from './consts';
import { AuthenticationController } from './auth.controller';
import { AuthenticationService } from './auth.service';

@Module({
  imports: [  BlogUserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      // TODO: Передать список конфигураций для загрузки
      load: [],
      envFilePath: ENV_USERS_FILE_PATH,
      ignoreEnvFile: true
    }),
    
    MongooseModule.forRootAsync(
      getMongooseOptions()
    )
  ],
  controllers: [AppController, AuthenticationController],
  providers: [AppService, AuthenticationService],
})
export class AppModule {}
