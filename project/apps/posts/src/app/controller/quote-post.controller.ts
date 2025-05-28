import { Body, Controller, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QuotePostService } from '../service/quote.service';
import { CreateQuotePostDto } from './dto/create-quote-post.dto';
import { QuotePostRdo } from './rdo/quote-post.rdo';


@ApiTags('posts', 'quote')
@Controller('posts/quote')
export class QuotePostController {
  constructor(
    private readonly quotePostService: QuotePostService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: "Цитата создана",
    content: {
        'application/json': {
          example: {
            author: 'Пушкин',
            tags: ['цитата', 'стихи', 'проза'],
          }
        }
  }})
   @ApiBody({ 
      type: CreateQuotePostDto,
      examples: {
        example1: {
          summary: 'Пример создания цитаты',
          value: {
            author: 'Пушкин',
            tags: ['цитата', 'стихи', 'проза'],
          }
        },
    }
})
  @Post()
  public async create(@Body() dto: CreateQuotePostDto) {
    const newPost = await this.quotePostService.create(dto);
  }

  @ApiResponse({
    type: QuotePostRdo,
    status: HttpStatus.OK,
    description: "Цитата найдена",
  })
  @Get(':id')
  public async show(@Param('id') id: string) {
    const post = await this.quotePostService.findById(id);
    return post.toPOJO();
  }

  @ApiResponse({
    type: QuotePostRdo,
    status: HttpStatus.OK,
    description: "Цитата обновлена",
  })
  @Put(':id')
  public async update(@Param('id') id: string, @Body() dto: CreateQuotePostDto) {
    const updatedPost = await this.quotePostService.update(id, dto);
    return updatedPost.toPOJO();
  }
}