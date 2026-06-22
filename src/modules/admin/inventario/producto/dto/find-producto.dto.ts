import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsInt, IsOptional, IsString, Min } from "class-validator";

export class FindProductoDto {
  @ApiProperty({ description: 'Número de página', required: false, default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number = 1;

  @ApiProperty({ description: 'Cantidad de productos por página', required: false, default: 10 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit: number = 10;

  @ApiProperty({ description: 'Filtrar por almacen', required: false })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  almacen?: number;

  @ApiProperty({ description: 'Texto para filtrar', required: false })
  @IsOptional()
  @IsString()
  search: string = '';

  @ApiProperty({ description: 'Filtrar por estado', required: false })
  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  estado: boolean = true;
}