import {DataSource} from "typeorm";
import {config} from "dotenv";
config();
// Configurar DataSource de typeorm para migraciones.
export default new DataSource({
    type: "postgres",
    host: process.env.BD_HOST,
    port: Number(process.env.BD_PORT) || 5432,
    username: process.env.BD_USERNAME,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_DATABASE,
    entities: [__dirname + "/src/**/*.entity{.js,.ts}"],
    migrations: [__dirname + "src/database/migrations/*{.js,.ts}"],
    synchronize: false,
})