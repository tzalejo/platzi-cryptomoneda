import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CryptomonedaComponent } from './components/cryptomoneda/cryptomoneda.component';
import { CryptomonedaService } from './services/cryptomoneda.service';

@NgModule({
  declarations: [
    AppComponent,
    CryptomonedaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CryptomonedaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
