import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from './cliente';

@Pipe({
  name: 'filtroClienteNomePesquisa'
})
export class FiltroClienteNomePesquisaPipe implements PipeTransform {

  transform(listaClientes: Cliente[], nomePesquisado: string): Cliente[] {
    if(nomePesquisado.length < 3) {
      return listaClientes;
    }
    return listaClientes.filter( (cliente: Cliente) => {
      return cliente.nome?.toLowerCase().includes(nomePesquisado.toLowerCase());
    })
  }


}
