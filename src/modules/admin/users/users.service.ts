import { BadRequestException, Injectable, NotFoundException, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User> ) {}

  async create(createUserDto: CreateUserDto) {
    const {name, email } = createUserDto;
    // verificar existencia del correo
    const existeEmail = await this.userRepository.findOne({where: {email: email}});
    if(existeEmail){
      throw new BadRequestException(`El correo ${email} ya esta en uso.`);
    }

    // encriptar con bcrypt
    const hashPassword = await bcrypt.hash(createUserDto.password, 12);
    const nuevoUsuario = await this.userRepository.create({name: name, email: email, password: hashPassword})
    const usuarioRegistrado = await this.userRepository.save(nuevoUsuario);
    const {password, ...resto } = usuarioRegistrado;
    return resto;
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

  async findOneByEmail(email: string) {
    const usuario = await this.userRepository.findOneBy({email: email})
    if(!usuario){
      throw new NotFoundException("El usuario no se encuentra en la BD");
    }
    return usuario;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: string) {
   return this.userRepository.delete(id);
  }
}
