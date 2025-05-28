import { EntityFactory } from "@project/core"
import { VideoPostEntity } from "./entity/video-post.entity";
import { TextPostEntity } from "./entity/text-post.entity";
export class TextFactory implements EntityFactory<TextPostEntity> {
    create(entityPlainData: { id: string; announcement: string; text: string; tags: string[]; }): TextPostEntity {
       return new TextPostEntity(entityPlainData.announcement, entityPlainData.text, entityPlainData.tags)
    }
    

}