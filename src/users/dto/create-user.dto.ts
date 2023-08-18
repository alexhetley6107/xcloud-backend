import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ default: 'rest@email.com' })
  email: string;

  @ApiProperty({ default: 'Din James' })
  fullName: string;

  @ApiProperty({ default: 'Password!' })
  password: string;
}
