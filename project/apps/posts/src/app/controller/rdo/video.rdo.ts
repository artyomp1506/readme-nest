import { Expose } from 'class-transformer';
export class VideoPostRdo {
  @Expose()
  public name: string;

  @Expose()
  public link: string;

  @Expose()
  public tags: string[];
}