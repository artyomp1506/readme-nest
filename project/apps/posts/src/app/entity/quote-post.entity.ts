import { Entity } from "@project/core";

export class QuotePostEntity extends Entity {
    public author: string;
    public tags: string[];

    constructor(author: string, tags: string[]) {
        super();
        this.author = author;
        this.tags = tags;
    }
    public toPOJO() {
        return {
          author: this.author,
          tags: this.tags
        };
      }
}