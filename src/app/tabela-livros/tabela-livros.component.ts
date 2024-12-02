import { Component, Input } from '@angular/core';
import { LivroService } from '../livro.service';
import { EmprestimoComponent } from '../emprestimo/emprestimo.component';
import { LivroSelecionadoService } from '../livro-selecionado.service';

@Component({
  selector: 'app-tabela-livros',
  templateUrl: './tabela-livros.component.html',
  styleUrl: './tabela-livros.component.css'
})
export class TabelaLivrosComponent {
  // @Input("livros")
  listaLivros: any[] = [];
  nomePesquisado = "";

  constructor(
    private livroService: LivroService,
    private livroSelecionadoService: LivroSelecionadoService
  ) {
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

  armazenarId(id: number) {
    const livro = this.livroSelecionadoService.setLivroId(id);
    return livro;
  }


}
