import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: '', // default value in input field
    description: 'Full name of the user',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    default: '', // default value in input field
    description: 'User email address',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    default: '', // default value in input field
    description: 'Password',
  })
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
