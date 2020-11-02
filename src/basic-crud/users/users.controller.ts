import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../entities/user.entity';
import { ApiBody, ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { CreateUserDto } from '../dtos';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  @ApiOkResponse({ description: 'successfully return all users' })
  getAllUsers() {
    return this.service.getAllUsers();
  }

  @Get(':id')
  @ApiParam({name: 'id', type: Number ,allowEmptyValue:false,enum: [0,1,2,3,4,5]},)
  get(@Param() params) {
    return this.service.getUser(params.id);
  }

  @Post()
  @ApiBody({ type: CreateUserDto })
  create(@Body() user: CreateUserDto) {
    return this.service.createUser(user);
  }

  @Put()
  update(@Body() user: User) {
    return this.service.updateUser(user);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.service.deleteUser(params.id);
  }
}
