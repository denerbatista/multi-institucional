import { Injectable } from '@nestjs/common';
import { CreateUtilityDto } from './dto/create-utility.dto';
import { UpdateUtilityDto } from './dto/update-utility.dto';

@Injectable()
export class UtilityService {
  create(createUtilityDto: CreateUtilityDto) {
    return 'This action adds a new utility';
  }

  findAll() {
    return `This action returns all utility`;
  }

  findOne(id: number) {
    return `This action returns a #${id} utility`;
  }

  update(id: number, updateUtilityDto: UpdateUtilityDto) {
    return `This action updates a #${id} utility`;
  }

  remove(id: number) {
    return `This action removes a #${id} utility`;
  }
}
