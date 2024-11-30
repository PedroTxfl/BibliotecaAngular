import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrl: './form-clientes.component.css'
})
export class FormClientesComponent {
  cliente = new Cliente;
  id?:number;
  botaoAcao= "CADASTRAR";

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = +this.route.snapshot.params['id'];
    if(this.id || this.id == 0) {
      this.botaoAcao = "EDITAR"
      this.cliente = this.clienteService.buscarPorId(this.id);
    }
  }

  salvar() {
    if(this.id) {
      this.clienteService.editar(this.id, this.cliente);
      alert("Produto cadastrado com sucesso")

    } else {
      this.clienteService.inserir(this.cliente)
      alert("Produto cadastrado com sucesso")
      this.cliente = new Cliente;
    }
  }

  voltar() {
    this.router.navigate(['/tabelaClientes']);
  }
}
