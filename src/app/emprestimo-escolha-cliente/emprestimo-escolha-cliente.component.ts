import { Component } from '@angular/core';
import { Livro } from '../livro';
import { Cliente } from '../cliente';
import { LivroSelecionadoService } from '../livro-selecionado.service';
import { ClienteApiService } from '../cliente-api.service';
import { LivroApiService } from '../livro-api.service';
import { combineLatest } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emprestimo-escolha-cliente',
  templateUrl: './emprestimo-escolha-cliente.component.html',
  styleUrl: './emprestimo-escolha-cliente.component.css'
})
export class EmprestimoEscolhaClienteComponent {
  listaClientes: Cliente[] = [];
  listaLivros: Livro[] = [];
  livroId: number | null = null;
  clienteSelecionadoId: number | null | undefined = null;


  nomePesquisado = "";

  constructor(
    private clienteApiService: ClienteApiService,
    private livroApiService: LivroApiService,
    private router: Router,
    private livroSelecionadoService: LivroSelecionadoService
  ) {
    this.listarClientes();
  }

  ngOnInit() {
    this.livroSelecionadoService.getLivroSelecionado().subscribe(id => {
      this.livroId = id;
      console.log(this.livroId)
    });

  }

  listarClientes() {
    this.clienteApiService.listar().subscribe(
      (clientes) => {
        this.listaClientes = clientes;
      }
    );
  }


  selecionaIdLivroParaRealizarRetirada(){
    const livro = this.livroApiService.buscarPorId(this.livroId!);
    return livro;
  }

  selecionaIdClienteParaRealizarRetiradaEFinalizaRetirada(idCliente?: number){
    const cliente = this.clienteApiService.buscarPorId(idCliente!)
    const livro = this.selecionaIdLivroParaRealizarRetirada()
    combineLatest([livro, cliente]).subscribe(
      ([livro, cliente]) => {
        this.livroApiService.realizarRetirada(livro, cliente).subscribe(() => {
          alert(`Retirada do livro ${livro.nome} realizada com sucesso!`);
          this.router.navigate(['/tabelaLivros']);
        })
  })
  }
}
