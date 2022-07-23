import { createUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entities';

@Injectable()
export class UsersService {
  private users: User[] = [{ id: 0, name: 'Marius' }];
  findAll(): User[] {
    return this.users;
  }
  findByid(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }
  createUser(createUserDto: createUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
