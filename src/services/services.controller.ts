import { Controller, Get, Param, Query } from '@nestjs/common';
import { ServicesService } from './services.service';


@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  findAll(@Query() query: any) {
    return this.servicesService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicesService.findOne(id);
  }

  @Get('search')
  search(@Query() query: any) {
    return this.servicesService.search(query);
  }
}