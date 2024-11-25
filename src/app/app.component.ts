import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CadastroLivros';
  listaLivros: any[] = [
    {id: 1, nome:"livro 1", preco: 100},
    {id: 2, nome:"livro 2", preco: 200},
    {id: 3, nome:"livro 3", preco: 300},
    {id: 4, nome:"livro 4", preco: 400},
  ];

  inserir(livro: any) {
    this.listaLivros.push(livro);
  }
}
