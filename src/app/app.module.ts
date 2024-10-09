import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ResultadosComponent } from './resultados/resultados.component';
import { AppRoutesModule } from './app.routes';

@NgModule({
  imports: [HeaderComponent, BrowserModule, AppRoutesModule,ResultadosComponent],
  declarations: [],
  bootstrap: [],
})
export class AppModule {}
