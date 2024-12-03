import { Component, Input } from '@angular/core';
import { LivroService } from '../livro.service';
import { EmprestimoComponent } from '../emprestimo/emprestimo.component';
import { LivroSelecionadoService } from '../livro-selecionado.service';
import { Livro } from '../livro';
import { LivroApiService } from '../livro-api.service';

@Component({
  selector: 'app-tabela-livros',
  templateUrl: './tabela-livros.component.html',
  styleUrl: './tabela-livros.component.css'
})
export class TabelaLivrosComponent {
  // @Input("livros")
  listaLivros: Livro[] = [];
  nomePesquisado = "";

  constructor(
    private livroApiService: LivroApiService,
    private livroSelecionadoService: LivroSelecionadoService
  ) {
    this.listar();
  }

  listar() {
    this.livroApiService.listar().subscribe(
      (livros) => {
        this.listaLivros = livros;
      }
    );
  }

  deletar(id?:number) {
    this.livroApiService.deletar(id!).subscribe(
      (livro) => {
        alert(`livro deletado com sucesso!`);
        this.listar();
      }
    )
  }

  armazenarId(id: number) {
    const livro = this.livroSelecionadoService.setLivroId(id);
    return livro;
  }


}
