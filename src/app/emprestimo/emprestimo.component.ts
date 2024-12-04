import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { LivroApiService } from '../livro-api.service';
import { ClienteApiService } from '../cliente-api.service';
import { Livro } from '../livro';
import { Cliente } from '../cliente';
import { combineLatest, map, Observable } from 'rxjs';
import { LivroSelecionadoService } from '../livro-selecionado.service';
import { ClienteSelecionadoService } from '../cliente-selecionado.service';


@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrl: './emprestimo.component.css'
})
export class EmprestimoComponent {

  listaLivros: Livro[] = [];
  listaClientes: Cliente[] = []
  nomePesquisado = "";
  @Input() botaoDinamicoAcao: string = "Dinamico";
  @Input() livroId?: number; // Recebe o ID do livro
  @Output() acaoRealizada = new EventEmitter<number>();
  livroSelecionado?: Livro;
  @Input() clienteId!: number;

  setLivroSelecionado(livro: Livro) {
    return this.livroSelecionado = livro
  }

  livroIdSelecionado: number | null = null;
  clienteSelecionadoId: number |null = null

  constructor(
    private livroApiService: LivroApiService,
    private clienteApiService: ClienteApiService,
    private livroSelecionadoService: LivroSelecionadoService,
    private clienteSelecionadoService: ClienteSelecionadoService
  ) {
    this.listarClientes();
    this.listarLivros()
  }

  ngOnInit() {
    this.livroSelecionadoService.getLivroSelecionado().subscribe(id => {
      this.livroIdSelecionado = id;
    });
    this.clienteSelecionadoService.idCliente$.subscribe(id => {
      this.clienteSelecionadoId = id;
    });
  }

  listarClientes() {
    this.clienteApiService.listar().subscribe(
      (clientes) => {
        this.listaClientes = clientes;
      }
    );
  }

  listarLivros() {
    this.livroApiService.listar().subscribe(
      (livros) => {
        this.listaLivros = livros;
      }
    );
  }

  emitirAcao() {
    this.acaoRealizada.emit(this.livroId);
  }

  selecionaIdLivroParaRealizarDevolucao(){
    const livro = this.livroApiService.buscarPorId(this.livroIdSelecionado!);
    return livro; //observable
  }

  selecionaIdClienteParaRealizarDevolucaoEFinalizaDevolucao(){
    const idCliente = this.clienteSelecionadoService.getIdCliente();

    const livro = this.selecionaIdLivroParaRealizarDevolucao()
    const cliente = this.clienteApiService.buscarPorId(idCliente!)

    combineLatest([livro, cliente]).subscribe(
      ([livro, cliente]) => {
        this.livroApiService.realizarDevolucao(livro, cliente).subscribe(() => {
          alert('Devolucao realizada com sucesso!');
        })

  })
  }
}



