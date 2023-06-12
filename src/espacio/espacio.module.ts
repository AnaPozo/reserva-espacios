import { Module } from '@nestjs/common';
import { EspacioController } from './espacio.controller';
import { EspacioService } from './espacio.service';
import { Espacio } from './entities/espacio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Espacio])],
  controllers: [EspacioController],
  providers: [EspacioService]
})
export class EspacioModule {}
