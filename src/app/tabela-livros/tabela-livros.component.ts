import { Component, Input, ViewChild, viewChild } from '@angular/core';
import { EmprestimoComponent } from '../emprestimo/emprestimo.component';
import { LivroSelecionadoService } from '../livro-selecionado.service';
import { Livro } from '../livro';
import { LivroApiService } from '../livro-api.service';
import { ClienteSelecionadoService } from '../cliente-selecionado.service';

@Component({
  selector: 'app-tabela-livros',
  templateUrl: './tabela-livros.component.html',
  styleUrl: './tabela-livros.component.css'
})
export class TabelaLivrosComponent {
  // @Input("livros")
  listaLivros: Livro[] = [];
  nomePesquisado = "";
  locadorPesquisado: string = '';
  clienteId: number = 123;

  constructor(
    private livroApiService: LivroApiService,
    private livroSelecionadoService: LivroSelecionadoService,
    private clienteSelecionadoService: ClienteSelecionadoService
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

  selecionarLivro(id: number): void {
    this.livroSelecionadoService.setLivroSelecionado(id); // Define o ID no serviço
  }

  selecionarCliente(locador: string): void {
    const idCliente = locador.split('-')[0];
    this.clienteSelecionadoService.setIdCliente(Number(idCliente));
  }

}
