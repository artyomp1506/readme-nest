import { Injectable } from '@nestjs/common';
import { VideoPostRepository } from '../repository/video-post.repository';
import { VideoPostEntity } from '../entity/video-post.entity'
import { CreateVideoPostDto } from '../controller/dto/create-video-post.dto';

@Injectable()
export class VideoPostService {
  constructor(
    private readonly videoPostRepository: VideoPostRepository,
  ) {}

  public async create(dto: CreateVideoPostDto): Promise<void> {
    const post = new VideoPostEntity(dto.name, dto.link, dto.tags || []);
    return this.videoPostRepository.save(post);
  }

  public async findById(id: string): Promise<VideoPostEntity> {
    return this.videoPostRepository.findById(id);
  }

  public async update(id: string, dto: CreateVideoPostDto): Promise<VideoPostEntity> {
    const existsPost = await this.videoPostRepository.findById(id);
    
    if (dto.name) existsPost.name = dto.name;
    if (dto.link) existsPost.link = dto.link;
    if (dto.tags) existsPost.tags = dto.tags;

    return this.videoPostRepository.update(existsPost);
  }
}