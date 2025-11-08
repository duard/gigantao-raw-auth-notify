import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'username' })
  @IsString()
  @MinLength(3)
  username: string;

  @ApiProperty({ example: 'password' })
  @IsString()
  @MinLength(3)
  password: string;
}
