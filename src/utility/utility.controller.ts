import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UtilityService } from './utility.service';
import { CreateUtilityDto } from './dto/create-utility.dto';
import { UpdateUtilityDto } from './dto/update-utility.dto';

@Controller('utility')
export class UtilityController {
  constructor(private readonly utilityService: UtilityService) {}

  @Post()
  create(@Body() createUtilityDto: CreateUtilityDto) {
    return this.utilityService.create(createUtilityDto);
  }

  @Get()
  findAll() {
    return this.utilityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.utilityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUtilityDto: UpdateUtilityDto) {
    return this.utilityService.update(+id, updateUtilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.utilityService.remove(+id);
  }
}
