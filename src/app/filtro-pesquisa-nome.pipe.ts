import { Pipe, PipeTransform } from '@angular/core';
import { Livro } from './livro';
@Pipe({
  name: 'filtroPesquisa'
})
export class FiltroPesquisaNomePipe implements PipeTransform {
  transform(listaLivros: Livro[], pesquisa: string): Livro[] {
    if (!pesquisa || pesquisa.trim().length < 3) {
      return listaLivros;
    }

    const pesquisaLower = pesquisa.toLowerCase();

    return listaLivros.filter(livro => {
      const nomeMatch = livro.nome?.toLowerCase().includes(pesquisaLower);
      const locadorMatch = livro.locador?.toLowerCase().includes(pesquisaLower);

      return nomeMatch || locadorMatch;
    });
  }
}
