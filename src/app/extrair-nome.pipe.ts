import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extrairNome'
})
export class ExtrairNomePipe implements PipeTransform {
  transform(livros: any[] | undefined): string {
    if (!livros || livros.length === 0) {
      return 'Nenhum livro retirado';
    }
    return livros.map(livro => livro.nome).join(', ');
  }
}
