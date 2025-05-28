import { Injectable } from '@nestjs/common';
import { QuotePostRepository } from '../repository/quote-post.repository';
import { QuotePostEntity } from '../entity/quote-post.entity';
import { CreateQuotePostDto } from '../controller/dto/create-quote-post.dto';


@Injectable()
export class QuotePostService {
  constructor(
    private readonly quotePostRepository: QuotePostRepository,
  ) {}

  public async create(dto: CreateQuotePostDto): Promise<void> {
    const post = new QuotePostEntity(dto.author, dto.tags || []);
    this.quotePostRepository.save(post);
  }

  public async findById(id: string): Promise<QuotePostEntity> {
    return this.quotePostRepository.findById(id);
  }

  public async update(id: string, dto: CreateQuotePostDto): Promise<QuotePostEntity> {
    const existsPost = await this.quotePostRepository.findById(id);
    
    if (dto.author) existsPost.author = dto.author;
    if (dto.tags) existsPost.tags = dto.tags;

    return this.quotePostRepository.update(existsPost);
  }
}