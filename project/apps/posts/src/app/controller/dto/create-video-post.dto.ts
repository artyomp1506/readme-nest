import {ArrayMaxSize, ArrayMinSize, Contains,  MaxLength, MinLength} from 'class-validator'

export class CreateVideoPostDto  {
  @MinLength(20)
  @MaxLength(50)
  public name: string;

 @Contains('youtube')
  public link: string;
  @ArrayMinSize(0)
  @ArrayMaxSize(6)
   public tags: any[];
}