import { Component, Input } from '@angular/core';
import { Livro } from '../livro';
import { LivroApiService } from '../livro-api.service';

@Component({
  selector: 'app-list-card-livros',
  templateUrl: './list-card-livros.component.html',
  styleUrl: './list-card-livros.component.css'
})
export class ListCardLivrosComponent {
  listaLivros: Livro[] = [];

  constructor(private livroApiService: LivroApiService) {
    this.livroApiService.listar().subscribe(
      (livros) => {
        this.listaLivros = livros
      }
    )
  }
}
