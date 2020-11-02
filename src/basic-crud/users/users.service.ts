import { CreateUserDto } from '../dtos/createUser.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  // async createUser(user: CreateUserDto): Promise<User> {
  //   return await this.usersRepository.save(user);
  // }
  async createUser(user: CreateUserDto): Promise<User> {
    const newUser = await this.usersRepository.create(user);
    return await this.usersRepository.save(newUser);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  /*   async getUser(_id: number): Promise<User[]> {
    return await this.usersRepository.find({
      select: [
        'id',
        'firstName',
        'lastName',
        'email',
        'createdAt',
        'birthdate',
        'isActive',
      ],
      where: [{ id: _id }],
    });
  }
 */

  async getUser(_id: number): Promise<User[]> {
    const user = await this.usersRepository.find({
      select: [
        'id',
        'firstName',
        'lastName',
        'email',
        'createdAt',
        'birthdate',
        'isActive',
      ],
      where: [{ id: _id }],
    });

    if (!user) throw new NotFoundException("user don't exist");
    return user;
  }

  async updateUser(user: User) {
    this.usersRepository.save(user);
  }

  async deleteUser(user: User) {
    this.usersRepository.delete(user);
  }
}
