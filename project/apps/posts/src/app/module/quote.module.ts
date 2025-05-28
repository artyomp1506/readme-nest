import { Module } from "@nestjs/common";
import { PrismaClientModule } from "@project/blog-models";
import { QuotePostRepository } from "../repository/quote-post.repository";
import { QuoteFactory } from "../quote-factory";

@Module({
    imports: [QuoteFactory, PrismaClientModule],
    providers: [
      QuotePostRepository,
      {
        provide: 'EntityFactory<QuotePostEntity>',
        useClass: QuoteFactory, 
      },
    ],
    exports: [QuotePostRepository],
  })
  export class QuoteModule {}