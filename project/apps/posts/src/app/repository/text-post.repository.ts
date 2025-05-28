import { PrismaClientService } from '@project/blog-models';
import * as core from '@project/core';
import { TextPostEntity } from '../entity/text-post.entity';
import { BasePostgresRepository } from '@project/data-access';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class TextPostRepository extends BasePostgresRepository<TextPostEntity> {
  constructor(
     @Inject('EntityFactory<TextPostEntity>') 
    entityFactory: core.EntityFactory<TextPostEntity>,
    client: PrismaClientService,
  ) {
    super(entityFactory, client);
  }

  public override async findById(id: string): Promise<TextPostEntity> {
    const document = await this.client.textPost.findFirst({
      where: { id },
    });
    return this.createEntityFromDocument(document);
  }

  public override async save(entity: TextPostEntity): Promise<void> {
    const pojo = entity.toPOJO();
    await this.client.textPost.create({
      data: {
        ...pojo,
        tags: pojo.tags,
      },
    });
  }

  public override async update(entity: TextPostEntity): Promise<TextPostEntity> {
    const pojo = entity.toPOJO();
    const updated = await this.client.textPost.update({
      where: { id: entity.id },
      data: {
        announcement: pojo.announcement,
        text: pojo.text,
        tags: pojo.tags,
      },
    });
    return this.createEntityFromDocument(updated);
  }

  public override async deleteById(id: string): Promise<void> {
    await this.client.textPost.delete({
      where: { id },
    });
  }
}