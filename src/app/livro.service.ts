import { Injectable } from '@angular/core';
import { Livro } from './livro';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  idGen = 0;

  listaLivros: Livro[] = [];

  constructor() { }

  listar() {
    return this.listaLivros;
  }

  listarLocados() {
    return this.listaLivros.filter((livro) => livro.disponivel)
  }

  private generateId() {
    return this.idGen++;
  }

  inserir(livro: Livro) {
    livro.id = this.generateId();
    this.listaLivros.push(livro);
  }

  buscarPorId(id:number | null): Livro {
    const livro = this.listaLivros.find(
      livro => livro.id == id
    );
    return livro ? Object.assign({}, livro) :new Livro()
  }

  editar(id: number, livro: Livro) {
    const indice = this.getIndice(id);
    if(indice >= 0) {
      this.listaLivros[indice] = livro;
    }

  }

  deletar(id?: number) {
    const indice = this.getIndice(id);
    if(indice >= 0) {
      this.listaLivros.splice(indice, 1);
    }
  }

  realizarRetirada(livro: Livro, cliente: Cliente) {
    console.log(livro.disponivel);
    if (livro.disponivel == true) {
      cliente?.livrosRetirados?.push(livro);

      livro.dataRetirada = new Date;
      livro.dataDevolucao = new Date(livro.dataRetirada.getTime() + 7 * 24 * 60 * 60 * 1000);
      //livro.locador = cliente;
      livro.disponivel = false;
      console.log('locou')

    } else {
      console.log('ta locado ja')
    }
  }

  realizarDevolucao(id?: number) {
    const indice = this.getIndice(id);
    if(indice >= 0) {
      this.listaLivros[indice].disponivel = true;
      this.listaLivros[indice].locador = undefined;
    }
  }

  private getIndice(id?:number) {
    return this.listaLivros.findIndex(
      livro => livro.id == id
    )
  }
}
