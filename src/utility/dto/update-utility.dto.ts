import { PartialType } from '@nestjs/mapped-types';
import { CreateUtilityDto } from './create-utility.dto';

export class UpdateUtilityDto extends PartialType(CreateUtilityDto) {}
