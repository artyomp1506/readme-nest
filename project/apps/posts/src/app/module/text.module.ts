import { PrismaClientModule } from "@project/blog-models";
import { QuoteFactory } from "../quote-factory";
import { QuotePostRepository } from "../repository/quote-post.repository";
import { TextFactory } from "../text-factory";
import { TextPostRepository } from "../repository/text-post.repository";
import { Module } from "@nestjs/common";

@Module({
    imports: [TextFactory, PrismaClientModule],
    providers: [
      TextPostRepository,
      {
        provide: 'EntityFactory<TextPostEntity>',
        useClass: TextFactory,
      },
    ],
    exports: [TextPostRepository],
  })
  export class TextModule {}