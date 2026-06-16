import {DataSource} from "typeorm";
import {config} from "dotenv";
config();
// Configurar DataSource de typeorm para migraciones.
export default new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [__dirname + "/src/**/*.entity{.js,.ts}"],
    migrations: [__dirname + "/src/database/migrations/*{.js,.ts}"],
    synchronize: false,
})