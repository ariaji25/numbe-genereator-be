import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NumberService } from './number-services/number.service';
import { NumberController } from './number-services/number.controller';

@Module({
  imports: [],
  controllers: [AppController, NumberController],
  providers: [AppService, NumberService],
})
export class AppModule {}
