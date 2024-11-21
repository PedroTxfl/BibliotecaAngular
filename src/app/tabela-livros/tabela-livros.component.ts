import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela-livros',
  templateUrl: './tabela-livros.component.html',
  styleUrl: './tabela-livros.component.css'
})
export class TabelaLivrosComponent {
  listaLivros: any[] = [
    {id: 1, nome:"livro 1", preco: 100},
    {id: 2, nome:"livro 2", preco: 200},
    {id: 3, nome:"livro 3", preco: 300},
    {id: 4, nome:"livro 4", preco: 400},
  ]

  

}
