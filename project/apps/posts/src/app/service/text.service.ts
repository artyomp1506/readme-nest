import { Injectable } from '@nestjs/common';

import { TextPostEntity } from '../entity/text-post.entity';
import { TextPostRepository } from '../repository/text-post.repository';
import { CreateTextPostDto } from '../controller/dto/create-text-post.dto';


@Injectable()
export class TextPostService {
  constructor(
    private readonly textPostRepository: TextPostRepository,
  ) {}

  public async create(dto: CreateTextPostDto): Promise<void> {
    const post = new TextPostEntity(dto.announcement, dto.text, dto.tags || []);
   this.textPostRepository.save(post);
  }

  public async findById(id: string): Promise<TextPostEntity> {
    return this.textPostRepository.findById(id);
  }

  public async update(id: string, dto: CreateTextPostDto): Promise<TextPostEntity> {
    const existsPost = await this.textPostRepository.findById(id);
    
    if (dto.announcement) existsPost.announcement = dto.announcement;
    if (dto.text) existsPost.text = dto.text;
    if (dto.tags) existsPost.tags = dto.tags;

    return this.textPostRepository.update(existsPost);
  }
}