// db.js
import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config({ path: "src/.env" });

const dbConnection1 = new Sequelize(
    process.env.DB_NAME_1,
    process.env.DB_USER_1,
    process.env.DB_PASSWORD_1,

    {
        host: process.env.DB_HOST_1,
        port: process.env.DB_PORT_1,
        dialect:"mysql"
    }
)

export default dbConnection1;
