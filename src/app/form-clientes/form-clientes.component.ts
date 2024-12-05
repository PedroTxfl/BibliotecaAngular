import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteApiService } from '../cliente-api.service';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrl: './form-clientes.component.css'
})
export class FormClientesComponent {
  cliente = new Cliente;
  id?:number;
  botaoAcao= "Cadastrar";

  constructor(
    private clienteApiService: ClienteApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = +this.route.snapshot.params['id'];
    if(this.id || this.id == 0) {
      this.botaoAcao = "Editar"
      this.clienteApiService.buscarPorId(this.id).subscribe(
        (cliente) => this.cliente = cliente
      );

    }
  }

  salvar() {
    if(this.id) {
      this.clienteApiService.editar(this.id, this.cliente).subscribe(
        (cliente) => {
        alert(`Cliente ${this.cliente.nome} editado com sucesso`);
        this.cliente = cliente;
        this.voltar()
        }

      );


    } else {
      this.clienteApiService.inserir(this.cliente).subscribe(
        (cliente) => {
          alert(`Cliente ${this.cliente.nome} Cadastrado com sucesso`)
          this.cliente = new Cliente;
        }
      )

    }
  }

  voltar() {
    this.router.navigate(['/tabelaClientes']);
  }
}
