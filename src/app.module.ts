import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/admin/users/users.module';


@Module({
  // Habilitamos variables de entorno globalmente.
  imports: [
    ConfigModule.forRoot(), // Variables de entorno
    TypeOrmModule.forRoot({ // Conexion a la base de datos
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}'
      ],
      synchronize: false,
    }),
    UsersModule // modulo de usuario
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
