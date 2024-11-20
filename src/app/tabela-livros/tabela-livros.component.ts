import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela-livros',
  templateUrl: './tabela-livros.component.html',
  styleUrl: './tabela-livros.component.css'
})
export class TabelaLivrosComponent {
  listaProdutos: any[] = [
    {id: 1, nome:"produto 1", preco: 100},
    {id: 2, nome:"produto 2", preco: 200},
    {id: 3, nome:"produto 3", preco: 300},
    {id: 4, nome:"produto 4", preco: 400},
  ]


}
