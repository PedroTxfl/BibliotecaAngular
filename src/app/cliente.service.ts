import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  idGen = 0;

  listaClientes: Cliente[] = [];

  constructor() { }

  inserir(cliente: Cliente) {
    cliente.id = this.generateId();
    this.listaClientes.push(cliente);
  }

  listar() {
    return this.listaClientes;
  }

  editar(id: number, cliente: Cliente) {
    const indice = this.getIndice(id);
    if(indice >= 0) {
      this.listaClientes[indice] = cliente;
    }
  }

  deletar(id?: number) {
    const indice = this.getIndice(id);
    if(indice >= 0) {
      this.listaClientes.splice(indice, 1);
    }
  }


  buscarPorId(id:number): Cliente {
    const cliente = this.listaClientes.find(
      cliente => cliente.id == id
    );
    return cliente ? Object.assign({}, cliente) :new Cliente()
  }

  private generateId() {
    return this.idGen++;
  }

  private getIndice(id?:number) {
    return this.listaClientes.findIndex(
      cliente => cliente.id == id
    )
  }
}
