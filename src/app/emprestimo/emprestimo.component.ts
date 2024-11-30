import { Component } from '@angular/core';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrl: './emprestimo.component.css'
})
export class EmprestimoComponent {

  listaLivros: any[] = [];
  nomePesquisado = "";

  constructor(private livroService: LivroService) {
    this.listaLivros = livroService.listarLocados();
  }

  devolver(id?:number) {
    this.livroService.realizarDevolucao(id)
  }
}
