import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-recepcao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recepcao.component.html',
  styleUrl: './recepcao.component.scss',
})
export class RecepcaoComponent {
   showRecepcao: string = '1';

  toggleRecepcao() {
    this.showRecepcao = '1';
  }
}
