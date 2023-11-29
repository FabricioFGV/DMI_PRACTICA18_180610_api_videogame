// routes.js

import Express from "express";
import { createGame, FindGameByID, deleteGame, findAllGames, updateGameFinish } from "../controllers/playerController.js";

const router = Express.Router();

router.post("/create/newGame", createGame);
router.get("/read/FindOne/:gameID", FindGameByID);
router.patch("/update/finishgame/:gameID", updateGameFinish);
router.delete("/deleteGame/:gameID", deleteGame);
router.get("/findAll", findAllGames);

export { router };
