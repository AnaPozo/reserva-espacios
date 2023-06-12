import { registerAs } from "@nestjs/config";

export default registerAs('db',()=>({
    type:'mysql',
    entities: ['dist/**/*.entity.js'], //todas las entities se encuentran dentro de directorio con la estructura entitiy.js
    synchronize: true, //que me cree la tabla si no la encuentra
    host: 'localhost',
    port:3306,
    username: 'root',
    password:'Kumagoro1',
    database: 'espacios',

}));