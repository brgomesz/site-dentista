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
  showRecepcao: string = '3';
  showDentista: number | null = null;
  idDentista: string = '0';
  dentistaSelecionado: any = 0;

  //Show recepção:
  // 0 = Nada
  // 1 = Recepção
  // 2 = Tela de resultados da pesquisa
  // 3 = Tela de cadastro dos dentistas
  // 4 = Tela de agendamento de consulta

  //idDentista = ID que vem do banco de dados (atribuido automaticamente ao fazer o cadastro)
  //dentistaSelecionado = atribuido ao clicar no dentista depois da pesquisa, assume o ID do dentista
  
  checaVariavel() {
    console.log(this.showDentista);
  }

  //setShowDentista faz a variável "dentistaSelecionado" assumir o valor do ID do dentista
  setShowDentista(dentistaId: number) {
    this.showDentista = dentistaId;
    console.log('Id do show dentista agora é: ', this.showDentista);
    this.dentistaSelecionado = this.dentistas.find(
      (dentista) => dentista.id === dentistaId
    );
    console.log('Dentista selecionado:', this.dentistaSelecionado);
  }

  exibirId(showDentista: number) {
    console.log('ID do dentista clicado:', showDentista);
  }

  dentistas = [
    {
      id: 1,
      nomeClinica: 'Clinica Dentes Brancos',
      nomeDentista: 'Dentista Rodrigo Schultz',
      especialidade: 'Especialista em implantes dentários',
      descricaoCompleta:
        'Esse dentista é especializado em tal coisa e tem um consultorio completo que recebe pácientes de tos os lugares da cidade e possui estacionamentto gratis com ar condicionado e espaço kids',
      avaliacao: '4/5',
    },
    {
      id: 2,
      nomeClinica: 'Clinica Vasconcelos',
      nomeDentista: 'Dentista Adriana Manaus',
      especialidade: 'Especialista em Aparelhos Ortodônticos',
      descricaoCompleta:
        'Esse dentista é especializado em tal coisa e tem um consultorio completo que recebe pácientes de tos os lugares da cidade e possui estacionamentto gratis com ar condicionado e espaço kids',
      avaliacao: '3/5',
    },
    {
      id: 3,
      nomeClinica: 'Clinica Sorriso',
      nomeDentista: 'Dentista Elenir da Rocha',
      especialidade: 'Especialista em Dentes Quebrados',
      descricaoCompleta:
        'Esse dentista é especializado em tal coisa e tem um consultorio completo que recebe pácientes de tos os lugares da cidade e possui estacionamentto gratis com ar condicionado e espaço kids',
      avaliacao: '5/5',
    },
    {
      id: 4,
      nomeClinica: 'Clinica Tristeza',
      nomeDentista: 'Dentista Joana da Silva',
      especialidade: 'Especialista em Limpeza Dental',
      descricaoCompleta:
        'Esse dentista é especializado em tal coisa e tem um consultorio completo que recebe pácientes de tos os lugares da cidade e possui estacionamentto gratis com ar condicionado e espaço kids',
      avaliacao: '1/5',
    },
  ];
}
