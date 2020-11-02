import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsString } from 'class-validator';

export class CreateUserDto {

  @IsString()
  @ApiProperty({ type: String, description: 'First Name' })
  readonly firstName: string;
 
  @IsString()
  @ApiProperty({ type: String, description: 'Last Name' })
  readonly lastName: string;
  
  @IsString()
  @ApiProperty({ type: String, description: 'email' })
  readonly email: string;
 
  @IsString()
  @ApiProperty({ type: String, description: 'password' })
  readonly password: string;

  @IsDateString()
  @ApiProperty({ type: String, description: 'birthdate' })
  readonly birthdate: string;
 
  @IsDateString()
  @ApiProperty({ type: String, description: 'created at' })
  readonly createdAt: string;

  @IsBoolean()
  @ApiProperty({  type: Boolean, description: 'is active?' })
  readonly isActive: boolean;


}
