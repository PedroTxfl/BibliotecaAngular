import { Pipe, PipeTransform } from '@angular/core';
import { Livro } from './livro';

@Pipe({
  name: 'disponibilidade'
})
export class DisponibilidadePipe implements PipeTransform {

  transform(listaLivrosDisponiveis: Livro[]): unknown {
    return null;
  }

}
