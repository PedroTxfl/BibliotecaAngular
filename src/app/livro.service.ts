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

  private generateId() {
    return this.idGen++;
  }

  inserir(livro: Livro) {
    livro.id = this.generateId();
    this.listaLivros.push(livro);
  }

}
