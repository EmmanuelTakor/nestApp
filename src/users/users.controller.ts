import { createUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './entities/user.entities';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
ApiTags('Users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get()
  getUsers(): User[] {
    return this.UsersService.findAll();
  }
  @Get(':id')
  getUsersById(@Param('id') id: string): User {
    return this.UsersService.findByid(Number(id));
  }
  @Post()
  createUser(@Body() body: createUserDto): User {
    return this.UsersService.createUser(body);
  }
}
