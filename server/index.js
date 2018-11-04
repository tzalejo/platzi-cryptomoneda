'use strict';
const express = require("express"); // instancia de express
const app = express();
const { PORT } = require("./config");
const mongo = require("./db/connect"); // instancia de mongo..
const cors = require('cors')

// control de acceso a http(cors):permitir que un user agent obtenga permiso para acceder a recursos seleccionados desde un servidor
app.use(cors({ origin: 'http://localhost:4200' })); // es un middlewares

require("./routes/api")(app);
require("./routes/views")(app);

// initDB:es una fc asincrona, en la cual usamos una await para esperar 
// q mongo inicie la conexion..y si este devuelve una instancia 
// real de mongo entonces iniciamos initExpress()..
async function initDB(){
    const db = await mongo.connect();
    if (db) { initExpress(); }
}
// cuando mongo inicio la conexion, 
function initExpress(){
    console.log("Iniciando instancia de Express...");
    app.listen(PORT, ()=>{
        console.log("El servidor Express esta activo.");
    });
    // son dos controladores de eventos..
    // van a esperar dos señales q se disparan cuando se cierra node
    // y se dispara estos enventos(sigint,sigterm) lo que hace es
    // desconectar mongo(closeApp()) 
    process.on("SIGINT", closeApp);
    process.on("SIGTERM", closeApp);
    process.on("ERROR",closeApp);
}

function closeApp(){
    mongo.disconnect()
        // cuando desconectamos mongo, entonces procesamos la salida con un 0 q es satisfactoria.
        .then(()=>process.exit(0)); 
}

// punto de entrada de la funcion initDB.
initDB(); 