import { Pipe, PipeTransform } from '@angular/core';
import { Livro } from './livro';
@Pipe({
  name: 'filtroPesquisa'
})
export class FiltroPesquisaNomePipe implements PipeTransform {
  transform(listaLivros: Livro[], nomePesquisado: string, locadorPesquisado: string): Livro[] {
    // Se o nome ou o locador tiverem menos de 3 caracteres, não filtra nada
    if (nomePesquisado.length < 3 && locadorPesquisado.length < 3) {
      return listaLivros;
    }

    // Filtra por nome e locador
    return listaLivros.filter((livro: Livro) => {
      const nomeMatch = livro.nome?.toLowerCase().includes(nomePesquisado.toLowerCase());
      const locadorMatch = livro.locador?.toLowerCase().includes(locadorPesquisado.toLowerCase());

      // Retorna o livro se ele atender ambos os critérios
      return nomeMatch && locadorMatch;
    });
  }
}
