import { Injectable, ForbiddenException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);

    if (user && user.password === password) {
      const { password, ...results } = user;
      return results;
    }

    return null;
  }

  async register(dto: CreateUserDto) {
    try {
      const userData = await this.userService.create(dto);

      return userData;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Registration error!');
    }
  }
}
