import { Injectable } from '@nestjs/common';
import { CreateEspacioDTO } from './dtos/create-espacio.dto';

@Injectable()
export class EspacioService {
    async findAll(): Promise<any> {
        return 'soy espacio service';
    }

    create(_cresteEspacioDro: CreateEspacioDTO) {
        return 'post del espacio';
    }
}
