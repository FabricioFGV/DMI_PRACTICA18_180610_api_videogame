import {exit} from 'node:process';
import players from './players.js';
import games from './games.js';
import {Player, Game} from '../models/relationships.js'
import db from '../config/db.js'

const importarDATOS = async () => {
    try{
        await db.authenticate()

        await db.sync()

        await Promise.all([
            Player.bulkCreate(players),
            Game.bulkCreate(games),
        ])
        console.log('Datos importados correctamente')
        exit()
    } catch (error){
        console.log(error)
        exit(1)
    }
}

const eliminarDatos = async () => {
    try {
        await db.sync({force:true})
        console.log('Datos eliminados correctamente')
        exit()
    } catch (error) {
        console.log(error)
        exit(1)
    }
}

if(process.argv[2] === "-i"){
    importarDATOS();
}
if (process.argv[2] === "-e"){
    eliminarDatos();
}