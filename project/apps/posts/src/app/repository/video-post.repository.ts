import { PrismaClientService } from '@project/blog-models';
import * as core from '@project/core';
import { VideoPostEntity } from '../entity/video-post.entity';
import { BasePostgresRepository } from '@project/data-access';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class VideoPostRepository extends BasePostgresRepository<VideoPostEntity> {
  constructor(
    @Inject('EntityFactory<VideoPostEntity>') 
    entityFactory: core.EntityFactory<VideoPostEntity>,
    client: PrismaClientService,
  ) {
    super(entityFactory, client);
  }

  public override async findById(id: string): Promise<VideoPostEntity> {
    const document = await this.client.videoPost.findFirst({
      where: { id },
    });
    return this.createEntityFromDocument(document);
  }

  public override async save(entity: VideoPostEntity): Promise<void> {
    const pojo = entity.toPOJO();
    await this.client.videoPost.create({
      data: {
        ...pojo,
        tags: pojo.tags,
      },
    });
  }

  public override async update(entity: VideoPostEntity): Promise<VideoPostEntity> {
    const pojo = entity.toPOJO();
    const updated = await this.client.videoPost.update({
      where: { id: entity.id },
      data: {
        name: pojo.name,
        link: pojo.link,
        tags: pojo.tags,
      },
    });
    return this.createEntityFromDocument(updated);
  }

  public override async deleteById(id: string): Promise<void> {
    await this.client.videoPost.delete({
      where: { id },
    });
  }
}