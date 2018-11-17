import { Component, OnInit } from '@angular/core';
import { CryptomonedaService } from '../../services/cryptomoneda.service';
import { NgForm } from '@angular/forms';
import { Cryptomoneda } from '../../models/cryptomoneda' ; 
import { async } from '@angular/core/testing';

interface miInterface {
  
}
@Component({
  selector: 'app-cryptomoneda',
  templateUrl: './cryptomoneda.component.html',
  styleUrls: ['./cryptomoneda.component.css']
})
export class CryptomonedaComponent implements OnInit {
  // cryptomoneda : Cryptomoneda[]
  constructor( private cryptomonedaService: CryptomonedaService) { }

  ngOnInit() {
    this.getCryptomoneda();
  }

  getCryptomonedaId(form:  NgForm){
    this.cryptomonedaService.getCryptomonedaId(form.value);
  }

  // obtengo toas las cryptomonedas
  getCryptomoneda(){
    this.cryptomonedaService.getCryptomoneda()
    .subscribe(
      res =>{
        
        this.cryptomonedaService.cryptomoneda   =  res as Cryptomoneda[];
    },
      error =>{
        console.error(error);
    });

  }
 
}
