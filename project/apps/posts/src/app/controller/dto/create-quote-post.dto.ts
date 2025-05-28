import { Expose } from 'class-transformer';


export class CreateQuotePostDto  {
  @Expose()
  public author: string;

  @Expose()
  public tags: string[];
}