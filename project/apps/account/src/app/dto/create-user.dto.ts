import { ApiProperty } from '@nestjs/swagger';
import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  IsDateString,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';
export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  @IsEmail()
  public email: string;

  @ApiProperty({
    description: 'User birth date',
    example: '1981-03-12',
  })
  @IsDateString()
  public dateBirth: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Keks',
  })
  @IsString()
  public firstname: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Ivanov'
  })
  @MinLength(3)
  @MaxLength(50)
  public lastname: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Ivanov'
  })
  @MinLength(6)
  @MaxLength(12)
  public password: string;
}