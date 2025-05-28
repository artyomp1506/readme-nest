import { Entity } from '@project/core';
export class VideoPostEntity extends Entity {
    public name:String
    public link: String
    public tags:String[] 
    constructor (name:String, link:String, tags:String[]) {
        super()
        this.name = name
        this.link = link
        this.tags = tags
    }
    public toPOJO() {
        return {
          name: this.name,
          link: this.link,
          tags: this.tags
        };
}
}
