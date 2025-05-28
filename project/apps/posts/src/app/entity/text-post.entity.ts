import { Entity } from "@project/core";

export class TextPostEntity extends Entity {
    public announcement: string;
    public text: string;
    public tags: string[];

    constructor(announcement: string, text: string, tags: string[]) {
        super();
        this.announcement = announcement;
        this.text = text;
        this.tags = tags;
    }
    public toPOJO() {
        return {
          announcement: this.announcement,
          text: this.text,
          tags: this.tags,
        };
}
}