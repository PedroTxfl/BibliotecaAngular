import { Component, Input } from '@angular/core';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-tabela-livros',
  templateUrl: './tabela-livros.component.html',
  styleUrl: './tabela-livros.component.css'
})
export class TabelaLivrosComponent {
  // @Input("livros")
  listaLivros: any[] = [];

  constructor(private livroService: LivroService) {
    this.listaLivros = livroService.listar();
  }
}
