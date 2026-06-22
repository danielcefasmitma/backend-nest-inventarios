import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateCategoriaDto {
  @ApiProperty({
    description: 'El nombre de la categoría',
    example: 'Electrónica',
    maxLength: 255,
  })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  @MaxLength(255, { message: 'El nombre no puede exceder los 255 caracteres' })
  nombre!: string;

  @ApiPropertyOptional({
    description: 'Descripción detallada de los productos que pertenecen a esta categoría',
    example: 'Incluye televisores, computadoras, celulares y otros gadgets',
  })
  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  @IsOptional()
  descripcion?: string;
}
