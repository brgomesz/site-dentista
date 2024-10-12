import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { RecepcaoComponent } from '../recepcao/recepcao.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AppComponent, RecepcaoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


}
