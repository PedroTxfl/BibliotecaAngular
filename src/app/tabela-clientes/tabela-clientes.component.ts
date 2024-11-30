import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-tabela-clientes',
  templateUrl: './tabela-clientes.component.html',
  styleUrl: './tabela-clientes.component.css'
})
export class TabelaClientesComponent {
  listaClientes: any[] = [];
  nomePesquisado = "";

  constructor(private clienteService: ClienteService) {
    this.listaClientes = clienteService.listar();
  }


  deletar(id?:number) {
    this.clienteService.deletar(id);
  }

  
}
