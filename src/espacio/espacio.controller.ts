import { Body, Controller, Get, Post } from '@nestjs/common';
import { EspacioService } from './espacio.service';
import { CreateEspacioDTO } from './dtos/create-espacio.dto';

@Controller('espacio')
export class EspacioController {
  createSpace(newSpace: any): any {
    throw new Error('Method not implemented.');
  }
    constructor(private espacioService: EspacioService){};

    //GET para obtener todos los espacios que existen 
    @Get()
    findAll(){
        return this.espacioService.findAll();
    }
    @Post()
    create(@Body()//obtenemos la info que viene en el body
    espacio: CreateEspacioDTO){
        return this.espacioService.create(espacio);
    }
}

   