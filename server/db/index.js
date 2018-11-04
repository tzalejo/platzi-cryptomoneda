// const users = require("../resources/users");
// requiro la informacion de la base de dato mongo.
const mongo  = require('./connect');
const { DB_NAME ,DB_TABLA}  = require('./config');

module.exports = {
    getUsers: function() {
        // creo una instancia, como esta definido en connect.js
        const db = mongo.instance().db(DB_NAME);
        const moneda = db.collection(DB_TABLA).find({}).toArray();
        return moneda;
    },
    getUserById: function(id) {
        const db = mongo.instance().db(DB_NAME);
        const moneda = db.collection(DB_TABLA).find({id: id}).toArray();
        return moneda;
    },
    getUserByRankRange: function(lower = 1, higher = 100) {
        const db = mongo.instance().db(DB_NAME);
        const moneda = db.collection(DB_TABLA).find({
            rank : {
                $gte : Number(lower), 
                $lte : Number(higher)
            }
        }).toArray();
        return moneda;
    }
}
