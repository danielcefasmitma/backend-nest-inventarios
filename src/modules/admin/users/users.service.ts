import { Injectable, NotFoundException, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User> ) {}

  create(createUserDto: CreateUserDto) {
    const nuevoUser = this.userRepository.create(createUserDto)
    return this.userRepository.save(nuevoUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: string) {
    const usuario = await this.userRepository.findOneBy({id: id})
    if(!usuario){
      throw new NotFoundException("El usuario no se encuentra en la BD");
    }
    return usuario;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
   return this.userRepository.delete(id);
  }
}
