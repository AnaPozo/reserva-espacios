import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() //este es el mapeo de la tabla espacio que crearemos dentro de mysql
export class Espacio{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    edificio: string;

    @Column()
    aula: string;
}

