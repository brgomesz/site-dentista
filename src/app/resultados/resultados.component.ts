import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecepcaoComponent } from '../recepcao/recepcao.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports:[RecepcaoComponent,CommonModule ],
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent { 
  showRecepcao: boolean = true; 
}
