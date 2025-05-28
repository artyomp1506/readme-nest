import { EntityFactory } from "@project/core"
import { QuotePostEntity } from "./entity/quote-post.entity";
export class QuoteFactory implements EntityFactory<QuotePostEntity> {
    create(entityPlainData: { id: string; author: string; tags: string[]; }): QuotePostEntity {
        return new QuotePostEntity(entityPlainData.author, entityPlainData.tags)
    }
    
   

}