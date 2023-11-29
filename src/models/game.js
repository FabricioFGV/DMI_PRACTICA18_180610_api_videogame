import { DataTypes } from "sequelize";
import {dbConnection1} from "../config/db.js";

const Game = dbConnection1.define("game", {
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    startAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, // Establece el valor predeterminado como la fecha y hora actual
    },
    endsAt: DataTypes.DATE,

    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default Game;