export class Cryptomoneda {
  constructor(
    id='',
    name='',
    symbol='',
    rank=0,
    price_usd='',
    price_btc='',
    market_cap_usd='',
    available_supply='',
    total_supply='',
    max_supply='',
    percent_change_1h='',
    percent_change_24h='',
    percent_change_7d='',
    last_updated='',
    hash_cryptomoneda='',
  ){  
    this.id = id;
    this.name = name;
    this.symbol = symbol;
    this.rank = rank;
    this.price_usd = price_usd;
    this.price_btc = price_btc;
    this.market_cap_usd = market_cap_usd;
    this.available_supply = available_supply;
    this.total_supply = total_supply;
    this.max_supply = max_supply;
    this.percent_change_1h = percent_change_1h;
    this.percent_change_24h = percent_change_24h;
    this.percent_change_7d = percent_change_7d;
    this.last_updated = last_updated;
    this.hash_cryptomoneda = hash_cryptomoneda;

  }
  id: String;
  name: String;
  symbol: String;
  rank: Number;
  price_usd: String;
  price_btc: String;
  market_cap_usd: String;
  available_supply: String;
  total_supply: String;
  max_supply: String;
  percent_change_1h: String;
  percent_change_24h: String;
  percent_change_7d: String;
  last_updated: String;
  hash_cryptomoneda: String;
}
