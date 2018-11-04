'use strict';
/* *
 * 
 * Este archivo es solo para uso de prueba
 *  
 *
 * */

const mongo = require("./connect");
const argv = require('yargs').argv;
const { DB_TABLA } = require("./config");// tomamos valores de configuracion(.json)..

if (argv.fill) {
    mongo.connect()
    .then(db=>{
        
        console.log(cryptomonedaData);
        db.collection(DB_TABLA).insertMany(cryptomonedaData, (err, result)=>{
            if (err) throw err;
                console.log("Los datos han sido insertados satisfactoriamente!");
                mongo.disconnect();
            });
        })
    return;
}

if (argv.clear) {
    mongo.connect()
        .then(db=>{
            db.collection(DB_TABLA).drop((err, result)=>{
                if (err) throw err;
                console.log("La colección se ha descartado satisfactoriamente!");
                mongo.disconnect();
            });
        })
    return;
}