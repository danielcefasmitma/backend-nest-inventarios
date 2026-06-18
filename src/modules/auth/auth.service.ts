import { HttpException, Injectable } from '@nestjs/common';
import { UsersService } from '../admin/users/users.service';
import bcrypt from "bcrypt";

@Injectable()
export class AuthService {

  constructor(private readonly usersService: UsersService) {}
  async funLogin(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email);
    if(!user){
      return new HttpException("Usuario no encontrado", 404);
    }
    const verificarPassword = await bcrypt.compare(password, user.password);
    if (!verificarPassword) {
      throw new HttpException('Contraseña incorrecta', 401);
    }
    
    // Generar JWT and return it here
    return user;
   
  }
}

