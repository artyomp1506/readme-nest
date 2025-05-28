import { PrismaClientModule, PrismaClientService } from "@project/blog-models";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { VideoPostController } from "./controller/video-post.controller";
import { VideoPostService } from "./service/video.service";
import { Module } from "@nestjs/common";
import { VideoModule } from "./module/video.module";
import { QuoteModule } from "./module/quote.module";
import { QuotePostService } from "./service/quote.service";
import { QuotePostController } from "./controller/quote-post.controller";
import { TextModule } from "./module/text.module";
import { TextPostController } from "./controller/text-post.controller";
import { TextPostService } from "./service/text.service";

@Module({
  imports: [PrismaClientModule, VideoModule, QuoteModule, TextModule ],
  controllers: [AppController, VideoPostController, QuotePostController, TextPostController],
  providers: [
    AppService,
    VideoPostService,
    QuotePostService,
    TextPostService,
    PrismaClientService
  ],
})
export class AppModule {}