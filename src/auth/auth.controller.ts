import { Controller, UseGuards, Post, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiBody({ type: CreateUserDto })
  async login(@Request() req) {
    return req.user;
  }

  @Post('/register')
  async register(@Body() dto: CreateUserDto) {
    return this.authService.register(dto);
  }
}
