import { Component, Input } from '@angular/core';
import { LivroService } from '../livro.service';
import { EmprestimoComponent } from '../emprestimo/emprestimo.component';

@Component({
  selector: 'app-tabela-livros',
  templateUrl: './tabela-livros.component.html',
  styleUrl: './tabela-livros.component.css'
})
export class TabelaLivrosComponent {
  // @Input("livros")
  listaLivros: any[] = [];
  nomePesquisado = "";

  constructor(private livroService: LivroService) {
    this.listaLivros = livroService.listar();
  }


  deletar(id?:number) {
    this.livroService.deletar(id);
  }

  showOnlyActive = false;

  get filteredItems() {
    return this.showOnlyActive
      ? this.listaLivros.filter(livro => livro.isActive)
      : this.listaLivros;
  };




}
