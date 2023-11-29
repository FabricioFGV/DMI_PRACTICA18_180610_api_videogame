import Player from "./player.js";
import Game  from "./game.js";

Game.belongsTo(Player);
Player.hasMany(Game);

export {Game, Player};