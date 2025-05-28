import { EntityFactory } from "@project/core"
import { VideoPostEntity } from "./entity/video-post.entity";
export class VideoFactory implements EntityFactory<VideoPostEntity> {
    create(entityPlainData: { id: string; name: String; link: String; tags: String[]; }): VideoPostEntity {
        return new VideoPostEntity(entityPlainData.name, entityPlainData.link, entityPlainData.tags)
    }

}