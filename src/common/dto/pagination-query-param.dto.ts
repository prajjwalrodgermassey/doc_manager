import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

enum ORDER_BY_ENUM {
  ASC = 'asc',
  DESC = 'desc',
}

export class PaginationQueryParam {
  @IsOptional()
  @IsString()
  q: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  per_page: number;

  @IsOptional()
  @IsString()
  order_by: string;

  @IsOptional()
  @IsEnum(ORDER_BY_ENUM)
  order: string;
}
