import { Test, TestingModule } from '@nestjs/testing';
import { EspacioController } from './espacio.controller';
import { EspacioService } from './espacio.service';
import { CreateEspacioDTO } from './dtos/create-espacio.dto';

const espacios: any = [
  {
    id:1,
    edificio: 'A',
    aula: '2C',
  },
];

describe('EspacioController', async () => {
  let controller: EspacioController;
  const mockEspacioService = {
    findAll: jest.fn().mockImplementation(()=>Promise.resolve({espacios})), //creo un metodo findAll dentro del objeto de muestra y le decimos que cuando se llame al metodo findall se ejecute y devuelva una promesa de ese objeto, el test lo devuelvo contra esto
    create: jest.fn().mockImplementation((CreateEspacioDTO: CreateEspacioDTO)=>{
      const newSpace = {
        id: 2,
      ...CreateEspacioDTO,
      }
      espacios.push(newSpace);
      return Promise.resolve(newSpace);
    }
)}; //creo el service con el que quiero hacer el test. el mock substituye a nuestro service
//ARRANGE
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspacioController],
      providers:[EspacioService],
    })
    .overrideProvider(EspacioService) //le decimos que en vez de usar EspacioService
    .useValue(mockEspacioService) //utilice el modulo de prueba mockEspacioService, lo cambio en tiempo de ejecución
    .compile();
  
//creamos la instancia del controller
   
    controller = module.get<EspacioController>(EspacioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should return a spaces list', async () => {
    expect(await controller.findAll()).toMatchObject({espacios});    
  })//queremos que en el teste se dependa del metodo findall que hemos creado aqui, creamos un mock
  //que tenga dentro un metodo que devuelva una lista de lo que yo quiera, el test es independiente del modulo real

  it('should create an space and return the new space "{id:2, edificio: "B", aula:"A"}"',() => {
    const newSpace = {
      id:2, 
      edificio: "B",
      aula:"A"};
  })
expect (await controller.create(newSpace)).toMatchObject({

id:expect.any(Number),

});

});


