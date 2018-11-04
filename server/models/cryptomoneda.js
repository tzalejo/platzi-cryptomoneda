'use strict';
const mongoose = require('mongoose');
const Squema   = mongoose.Schema;

const cryptomoneda = new Squema({
  id: { type: String, required: false},
  name: { type: String, required: false },
  symbol: { type: String, required: false },
  rank: { type: Number, required: false },
  price_usd: { type: String, required: false },
  price_btc: { type: String, required: false },
  // 24h_volume_usd: { type: String, required: false },
  market_cap_usd: { type: String, required: false },
  available_supply: { type: String, required: false },
  total_supply: { type: String, required: false},
  max_supply: { type: String, required: false},
  percent_change_1h: { type: String, required: false },
  percent_change_24h: { type: String, required: false},
  percent_change_7d: { type: String, required: false},
  last_updated: { type: String, required: false},
  hash_cryptomoneda:{ type: String, required: false} // este campo lo genero a partir de los otros campos.
},{
  versionKey: false // quita el campo __v que se crea automaticamente por mongo
})

module.exports = mongoose.model('Cryptomoneda',cryptomoneda);