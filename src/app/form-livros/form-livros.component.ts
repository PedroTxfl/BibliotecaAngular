import { Component, EventEmitter, Output } from '@angular/core';
import { LivroService } from '../livro.service';
import { Livro } from '../livro';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-livros',
  templateUrl: './form-livros.component.html',
  styleUrl: './form-livros.component.css'
})
export class FormLivrosComponent {
  livro = new Livro;
  id?:number;
  botaoAcao= "CADASTRAR";

  constructor(
    private livroService: LivroService,
    private route: ActivatedRoute
  ) {
    this.id = +this.route.snapshot.params['id'];
    if(this.id) {
      this.botaoAcao = "EDITAR"
      this.livro = this.livroService.buscarPorId(this.id);
    }
  }

  salvar() {
    if(this.id) {
      this.livroService.editar(this.id, this.livro);
      alert("Produto cadastrado com sucesso")

    } else {
      this.livroService.inserir(this.livro)
      alert("Produto cadastrado com sucesso")
      this.livro = new Livro;
    }

  }
}
