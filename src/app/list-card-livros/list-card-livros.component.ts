import { Component } from '@angular/core';

@Component({
  selector: 'app-list-card-livros',
  templateUrl: './list-card-livros.component.html',
  styleUrl: './list-card-livros.component.css'
})
export class ListCardLivrosComponent {
  listaLivros: any[] = [
    {id: 1, nome:"livro 1", preco: 100},
    {id: 2, nome:"livro 2", preco: 200},
    {id: 3, nome:"livro 3", preco: 300},
    {id: 4, nome:"livro 4", preco: 400},
  ]
}
