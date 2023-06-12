import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //http://localhost:3000/api/v1/ --> hacemos que nuestra ruta raiz sea un poco + larga
  app.setGlobalPrefix('api/v1'); //configuracion global
  app.enableCors(); //habilitamos el tema de cors a nivel global de nuestra api, esto es un middleware, habilita el tema de permitir llamadas desde URLS que no son directas desde el navegador
  await app.listen(3000);
}
bootstrap();
