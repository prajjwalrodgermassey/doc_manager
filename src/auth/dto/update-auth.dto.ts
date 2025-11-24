import { PartialType } from '@nestjs/mapped-types';
import { LogInDto } from './login.dto';

export class UpdateAuthDto extends PartialType(LogInDto) {}
