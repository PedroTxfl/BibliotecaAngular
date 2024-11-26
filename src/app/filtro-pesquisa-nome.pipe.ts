import { Pipe, PipeTransform } from '@angular/core';
import { Livro } from './livro';
@Pipe({
  name: 'filtroPesquisa'
})
export class FiltroPesquisaNomePipe implements PipeTransform {
  transform(listaLivros: Livro[], nomePesquisado: string): Livro[] {
    if(nomePesquisado.length < 3) {
      return listaLivros;
    }
    return listaLivros.filter( (livro: Livro) => {
      return livro.nome?.toLowerCase().includes(nomePesquisado.toLowerCase());
    })
  }
}
