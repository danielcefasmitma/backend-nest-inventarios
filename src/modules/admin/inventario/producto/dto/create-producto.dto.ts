import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength } from "class-validator";

export class CreateProductoDto {
    @ApiProperty({
    description: 'El nombre del producto',
    example: 'Laptop Dell XPS 15',
  })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  nombre!: string;

  @ApiPropertyOptional({
    description: 'Descripción detallada del producto',
    example: 'Laptop con procesador Intel Core i7, 16GB RAM y 512GB SSD',
  })
  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  @IsOptional()
  descripcion?: string;

  @ApiPropertyOptional({
    description: 'La marca del producto',
    example: 'Dell',
    maxLength: 255,
  })
  @IsString({ message: 'La marca debe ser una cadena de texto' })
  @MaxLength(255, { message: 'La marca no puede exceder los 255 caracteres' })
  @IsOptional()
  marca?: string;

  @ApiPropertyOptional({
    description: 'Precio de venta actual (se recomienda formato numérico o string con decimales)',
    example: 1499.99,
  })
  @IsNumber(
    { maxDecimalPlaces: 2 }, 
    { message: 'El precio debe ser un número con un máximo de 2 decimales' }
  )
  @IsOptional()
  precio_venta_actual?: number;

  @ApiPropertyOptional({
    description: 'URL o ruta de la imagen representativa del producto',
    example: 'https://mi-bucket.s3.amazonaws.com/productos/dell-xps.jpg',
    maxLength: 255,
  })
  @IsString({ message: 'La imagen debe ser una cadena de texto (URL/Path)' })
  @MaxLength(255, { message: 'La URL de la imagen no puede exceder los 255 caracteres' })
  @IsOptional()
  imagen?: string;

  @ApiProperty({
    description: 'Indica si el producto está disponible para la venta',
    example: true,
  })
  @IsBoolean({ message: 'El estado debe ser un valor booleano (true o false)' })
  @IsNotEmpty({ message: 'El estado no puede estar vacío' })
  estado!: boolean;

  @ApiProperty({
    description: 'El ID de la categoría a la que pertenece el producto',
    example: 1,
  })
  @IsInt({ message: 'El ID de la categoría debe ser un número entero' })
  @IsPositive({ message: 'El ID de la categoría debe ser mayor a 0' })
  @IsNotEmpty({ message: 'El ID de la categoría es obligatorio' })
  categoriaId!: number;

}
