// controllers/gameController.js
import AbyssalDungeon from "../models/abyssaldungeon.js";
import dbConnection1 from "../config/db.js";
import { where } from "sequelize";

const createGame = async (req, res) => {
    try {
        console.log("Se ha solicitado la creación de un nuevo juego");
        const { title, startAt, endsAt, score, duration } = req.body;
        console.log(req.body);
        const newGame = await AbyssalDungeon.create({
            title,
            startAt,
            endsAt,
            score,
            duration,
        });

        res.status(200).json(`Se ha creado un nuevo juego con el título: ${title}, Puntaje: ${score}, Duración: ${duration}`);
    } catch (error) {
        console.error("Error al intentar crear un nuevo juego", error);
        res.status(400).json({
            messageStatus: "Hubo un error al intentar crear un nuevo juego, verificar los datos ingresados de nuevo",
        });
    }
};

const findAllGames = async (req, res) => {
    try {
        console.log("Se ha solicitado la consulta de todos los juegos");
        const allGames = await AbyssalDungeon.findAll();

        if (!allGames.length) {
            res.json({
                messageStatus: "No hay juegos registrados",
            });
        } else {
            res.status(200).json(allGames);
        }
    } catch (error) {
        console.error("Error al intentar consultar todos los juegos", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

const findGameByID = async (req, res) => {
    try {
        const gameID = req.params.gameID;
        console.log(`Se ha solicitado buscar el juego con el ID: ${gameID}`);

        const gameFound = await AbyssalDungeon.findByPk(gameID);

        if (!gameFound) {
            res.status(404).json({ messageStatus: `No se encontró el juego con ID: ${gameID}` });
        } else {
            res.status(200).json(gameFound);
        }
    } catch (error) {
        console.error("Error al intentar buscar el juego por ID", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

const updateGameFinish = async (req, res) => {
    try {
        const gameID = req.params.gameID;
        console.log(`Se ha solicitado la actualización del juego con ID: ${gameID}`);

        const { endsAt, score } = req.body;

        const game = await AbyssalDungeon.findByPk(gameID);

        if (!game) {
            return res.status(404).json({ messageStatus: `No se encontró el juego con ID: ${gameID}` });
        }

        await game.update({
            endsAt,
            score,
        });

        res.status(200).json(game);
    } catch (error) {
        console.error("Error durante la actualización del juego:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

const deleteGame = async (req, res) => {
    try {
        const gameID = req.params.gameID;
        console.log(`Se ha solicitado la eliminación del juego con ID: ${gameID}`);

        const gameToDelete = await AbyssalDungeon.findByPk(gameID);

        if (!gameToDelete) {
            return res.status(404).json({ messageStatus: `No se encontró el juego con ID: ${gameID}` });
        }

        await gameToDelete.destroy();

        res.status(200).json({ messageStatus: `Se eliminó exitosamente el juego con ID: ${gameID}` });
    } catch (error) {
        console.error("Error durante la eliminación del juego:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

export { createGame, findAllGames, findGameByID, updateGameFinish, deleteGame };
