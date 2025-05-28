import { Expose } from 'class-transformer';

export class TextPostRdo{
  @Expose()
  public announcement: string;

  @Expose()
  public text: string;

  @Expose()
  public tags: string[];
}