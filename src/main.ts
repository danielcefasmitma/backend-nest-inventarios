import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('CRUD Inventarios')
    .setDescription('Crud nest-inventarios-cv')
    .setVersion('1.0')
    .addTag('inventarios')
    .addBearerAuth() // Agrega soporte para autenticación Bearer (JWT) en Swagger
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);
  // end swagger

  // validacion (class validator)
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }))
  // end validacion

  // Habilitamos cors
  app.enableCors();
  // end enable cors
  await app.listen(process.env.PORT ?? 3000);
} 
bootstrap();
