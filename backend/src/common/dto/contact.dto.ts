import { IsEmail, IsString, MinLength } from 'class-validator';

export class ContactDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(2)
  subject: string;

  @IsString()
  @MinLength(5)
  message: string;
}
