import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { LivroService } from '../livro.service';
import { Livro } from '../livro';
import { Cliente } from '../cliente';
import { LivroSelecionadoService } from '../livro-selecionado.service';

@Component({
  selector: 'app-emprestimo-escolha-cliente',
  templateUrl: './emprestimo-escolha-cliente.component.html',
  styleUrl: './emprestimo-escolha-cliente.component.css'
})
export class EmprestimoEscolhaClienteComponent {
  listaClientes: any[] = [];
  listaLivros: any[] = [];
  livroId: number | null = null;
  clienteSelecionadoId: number | null | undefined = null;


  nomePesquisado = "";

  constructor(
    private clienteService: ClienteService,
    private livroService: LivroService,
    private livroSelecionadoService: LivroSelecionadoService
  ) {
    this.listaClientes = clienteService.listar();
    this.listaLivros = livroService.listar()
  }

  ngOnInit() {
    this.livroSelecionadoService.livroId$.subscribe(id => {
      this.livroId = id;
    });
  }

  selecionaIdLivroParaRealizarRetirada(){
    const livro = this.livroService.buscarPorId(this.livroId);
    return livro;
  }

  selecionaIdClienteParaRealizarRetiradaEFinalizaRetirada(idCliente?: number){
    const cliente = this.clienteService.buscarPorId(idCliente)
    const livro = this.selecionaIdLivroParaRealizarRetirada()
    this.livroService.realizarRetirada(livro , cliente)
    console.log('funfou?')
  }


}
