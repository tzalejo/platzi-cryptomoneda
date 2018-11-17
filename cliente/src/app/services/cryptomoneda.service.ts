import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Cryptomoneda } from '../models/cryptomoneda';

@Injectable({
  providedIn: 'root'
})
export class CryptomonedaService {

  // selectedCryptomoneda: Cryptomoneda; // guardo mi modelo..
  readonly URL_API = 'http://localhost:3000/api/monedas';


  cryptomoneda: Cryptomoneda[]; //creo un arreglo de cryptomoneda, para almacenar lo q devuelve el servidor..
  
  constructor( private http: HttpClient) { 
  }

  getCryptomoneda(){
    return this.http.get(this.URL_API) ;  //this.cryptomoneda;
  }
  // por el id 
  getCryptomonedaId(cryptomoneda: Cryptomoneda){
    return this.http.get(this.URL_API+`/${cryptomoneda.id}`);
  }
  // rango de 
  getCryptomonedaRange(){
    
  }
}
