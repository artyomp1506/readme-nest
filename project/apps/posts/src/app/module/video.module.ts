import { Module } from "@nestjs/common";
import { VideoPostRepository } from "../repository/video-post.repository";
import { VideoFactory } from "../video-factory";
import { PrismaClientModule } from "@project/blog-models";

@Module({
    imports: [VideoFactory, PrismaClientModule], 
    providers: [
      VideoPostRepository, 
      {
        provide: 'EntityFactory<VideoPostEntity>', 
        useClass: VideoFactory,
      },
    ],
    exports: [VideoPostRepository],
  })
  export class VideoModule {}
