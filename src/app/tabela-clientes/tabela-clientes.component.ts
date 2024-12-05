import { Component } from '@angular/core';
import { ClienteApiService } from '../cliente-api.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-tabela-clientes',
  templateUrl: './tabela-clientes.component.html',
  styleUrl: './tabela-clientes.component.css'
})
export class TabelaClientesComponent {
  listaClientes: Cliente[] = [];
  nomePesquisado = "";

  constructor(private clienteApiService: ClienteApiService) {
    this.listar()
  }

  ngOnChanges() {
    this.listar()
  }

  listar() {
    this.clienteApiService.listar().subscribe(
      (clientes) => {
        this.listaClientes = clientes;
      }
    );
  }

  deletar(id?: number) {
    const cliente = this.listaClientes.find(cliente => cliente.id === id);

    if (cliente && cliente.livrosRetirados && cliente.livrosRetirados.length > 0) {
      alert('Este cliente não pode ser deletado porque possui livros retirados.');
      return;
    }

    this.clienteApiService.deletar(id!).subscribe(
      (cliente) => {
        alert(`Cliente ${cliente.nome} deletado com sucesso!`);
        this.listar();
  })
  }

  formatarLivros(livros: any[] | undefined): string {
    if (!livros || livros.length === 0) {
      return 'Nenhum livro retirado';
    }
    return livros.map(livro => livro.nome).join(', ');
  }

}


