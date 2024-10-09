import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RecepcaoComponent } from './recepcao/recepcao.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, RecepcaoComponent, ResultadosComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'site-dentista';
  showRecepcao: boolean = true; 
  showRecepcaoComponent(){
    this.showRecepcao = !this.showRecepcao;
  }
}

