// db.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({ path: "src/.env" });

const dbConfig1 = {
    host: process.env.DB_HOST_1,
    port: process.env.DB_PORT_1,
    dialect: 'mysql',
    username: process.env.DB_USER_1,
    password: process.env.DB_PASSWORD_1,
    database: process.env.DB_NAME_1,
};

const dbConnection1 = new Sequelize(dbConfig1);

export { dbConnection1 };
