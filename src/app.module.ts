import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EspacioModule } from './espacio/espacio.module';
import databaseConfig from './config/database.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    load:[databaseConfig]}),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject:[ConfigService],
      useFactory: (configService: ConfigService)=> configService.get('db')
    }),
    
    EspacioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
