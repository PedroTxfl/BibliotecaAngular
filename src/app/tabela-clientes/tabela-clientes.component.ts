import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
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

  listar() {
    this.clienteApiService.listar().subscribe(
      (clientes) => {
        this.listaClientes = clientes;
      }
    );
  }

  deletar(id?:number) {
    this.clienteApiService.deletar(id!).subscribe(
      (livro) => {
        alert(`Livro deletado com sucesso!`);
        this.listar();
      }
    );
  }


}
