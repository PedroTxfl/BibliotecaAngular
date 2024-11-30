import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-emprestimo-escolha-cliente',
  templateUrl: './emprestimo-escolha-cliente.component.html',
  styleUrl: './emprestimo-escolha-cliente.component.css'
})
export class EmprestimoEscolhaClienteComponent {
  listaClientes: any[] = [];
  nomePesquisado = "";

  constructor(private clienteService: ClienteService) {
    this.listaClientes = clienteService.listar();
  }

  realizarRetirada(idCliente: number) {
    return 'a'
  }
}
