import { Injectable } from '@angular/core';
import { Livro } from './livro';

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

  buscarPorId(id:number): Livro {
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
