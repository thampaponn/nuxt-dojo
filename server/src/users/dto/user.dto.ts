import { MaxLength, IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  @MaxLength(30)
  name: string;

  @IsString()
  @MaxLength(40)
  username: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(60)
  password: string;
}
