import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesModule } from './services/services.module';
import { UtilityModule } from './utility/utility.module';

@Module({
  imports: [ServicesModule, UtilityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
