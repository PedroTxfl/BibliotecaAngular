import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-livros',
  templateUrl: './tabela-livros.component.html',
  styleUrl: './tabela-livros.component.css'
})
export class TabelaLivrosComponent {
  @Input("livros") listaLivros: any[] = [];

}
