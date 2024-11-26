import { Component, EventEmitter, Output } from '@angular/core';
import { LivroService } from '../livro.service';
import { Livro } from '../livro';

@Component({
  selector: 'app-form-livros',
  templateUrl: './form-livros.component.html',
  styleUrl: './form-livros.component.css'
})
export class FormLivrosComponent {
  livro = new Livro;

  constructor(private livroService: LivroService) {
  }

  cadastrar() {
    this.livroService.inserir(this.livro)
    alert("Produto cadastrado com sucesso")
    this.livro = new Livro;
  }
}
