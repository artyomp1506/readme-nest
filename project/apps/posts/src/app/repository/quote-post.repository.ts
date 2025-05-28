import { PrismaClientService } from '@project/blog-models';
import * as core from '@project/core';
import { QuotePostEntity } from '../entity/quote-post.entity';
import { BasePostgresRepository } from '@project/data-access';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class QuotePostRepository extends BasePostgresRepository<QuotePostEntity> {
  constructor(
    @Inject('EntityFactory<QuotePostEntity>') 
    entityFactory: core.EntityFactory<QuotePostEntity>,
    client: PrismaClientService,
  ) {
    super(entityFactory, client);
  }

  public override async findById(id: string): Promise<QuotePostEntity> {
    const document = await this.client.quotePost.findFirst({
      where: { id },
    });
    return this.createEntityFromDocument(document);
  }

  public override async save(entity: QuotePostEntity): Promise<void> {
    const pojo = entity.toPOJO();
    await this.client.quotePost.create({
      data: {
        ...pojo,
        tags: pojo.tags,
      },
    });
  }

  public override async update(entity: QuotePostEntity): Promise<QuotePostEntity> {
    const pojo = entity.toPOJO();
    const updated = await this.client.quotePost.update({
      where: { id: entity.id },
      data: {
        author: pojo.author,
        tags: pojo.tags,
      },
    });
    return this.createEntityFromDocument(updated);
  }

  public override async deleteById(id: string): Promise<void> {
    await this.client.quotePost.delete({
      where: { id },
    });
  }
}