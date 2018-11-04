'use strict';
const API_BASE = "/api";
const db = require("../db"); // llama db/index.js
const mongo = require("../db/connect");

// importo el modelo de cada json para cada uno de las monedas.. 
const Cryptomoneda = require('../models/cryptomoneda');

// tomamos valores de configuracion(.json)..
// la url que vamos a consultar y traer datos 
const { API_URL ,DB_TABLA } = require("../db/config");

// request me  posible de realizar llamadas http y obtener datos de estes url
const request = require('request');

// para hash en javascripts..
const sha512 = require('js-sha512');


// actualizo la db, si hubo alguna actualizacion en las monedas..
var obtnerCryptomoneda = async () =>{
    return request(API_URL,async (error, response, body) => {
        if (response.statusCode == 200) {
            // console.log('Devuelvo de la pagina los siguientes datos');
            var json = JSON.parse(body);
            for(var i=0;i<json.length;i++){
                const hash_cryptomoneda = sha512(JSON.stringify(json[i]));
                // pregunto si existe el hash creado con el documento..
                var existeHash = await existeJson({hash_cryptomoneda : hash_cryptomoneda});
                // console.log('ExisteHash: ',existeHash);
                if(!existeHash){             
                    // creo un modelo..
                    var cryptomonedaNuevo = new Cryptomoneda(json[i]);
                    // elimino el campo _id, porque se genero automanticamente, para que no me actualice con ese valor
                    // a la hora de hacer el updateOne..si no lo elimino me genera un error..
                    var cryptomoneda = {};
                    cryptomoneda = Object.assign(cryptomoneda, cryptomonedaNuevo._doc);
                    delete cryptomoneda._id;
                    // agrego el nuevo valor del hash 
                    cryptomoneda['hash_cryptomoneda'] = hash_cryptomoneda;
                    console.log('Criptomoneda a insertar o modificar:',cryptomoneda);
                    // guardo id para hacer el updateOne
                    const monedaId = json[i]['id'];

                    var db = await mongo.connect();
                    // para pasar por parametro el set
                    var params = {};
                    params['$set'] = cryptomoneda ;
                    // hago la conexion y hago el updateOne, upsert:true me permite guardar la moneda si no existe
                    db.collection(DB_TABLA)
                    .updateOne({id :monedaId},params,{  upsert :  true  } )
                    .catch((err) => {
                        console.log('Error: ' + err);
                    });
                }
                
            }
           return (body);
        } else {
            console.log('error:', error); // Print the error if one occurred
        } 
        
    });
  }
  
  // funcion que consulta si Moneda(json) existe en la bd, consulta por su hash
  var existeJson = async (buscarHash)=>{
    // console.log('Busco el hash: ',buscarHash);
    var db = await mongo.connect();
    try {
        const res = await db.collection(DB_TABLA).findOne(buscarHash);
        if(res == null){
            console.log('no existe el hash');
            return false;
        }else{
            console.log('el hash existe');
            return true;
        }
     }
     finally {
        mongo.disconnect();
     }
  }

module.exports = function(app){
    app.get(`${API_BASE}/`, async (req, res)=>{
        // actualizo la base de datos con las actualizacion de las monedas..
        await obtnerCryptomoneda();
        const query = await db.getUsers();
        res.json(query);
    })
    
    app.get(`${API_BASE}/monedas`, async (req, res)=>{
        await obtnerCryptomoneda();
        const query = await db.getUsers();
        res.json(query);
    });
    // obtenemos json con comprendido entre los años (age)
    app.get(`${API_BASE}/monedas/rank`, async (req, res)=>{
        await obtnerCryptomoneda();
        const { l, h } =  req.query;
        const query = await db.getUserByRankRange(l, h);
        res.json(query);
    });
    /**
     * Especialmente con aquellas que pasen parametros
     * Cuidado con el orden de resolución de rutas
     * por el URL como esta:
     */
    app.get(`${API_BASE}/monedas/:id`, async (req, res)=>{
        await obtnerCryptomoneda();
        const query = await db.getUserById(req.params.id);
        res.json(query);
    });
    /**
     * Este tipo de casos deben tender a estar de últimos
     * En las declaraciones de rutas.
     */  
};