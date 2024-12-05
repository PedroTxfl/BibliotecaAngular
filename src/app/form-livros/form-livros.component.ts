import { Component, EventEmitter, Output } from '@angular/core';
import { Livro } from '../livro';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroApiService } from '../livro-api.service';

@Component({
  selector: 'app-form-livros',
  templateUrl: './form-livros.component.html',
  styleUrl: './form-livros.component.css'
})
export class FormLivrosComponent {
  livro = new Livro;
  id?:number;
  botaoAcao= "Adicionar";

  constructor(
    private livroApiService: LivroApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = +this.route.snapshot.params['id'];
    if(this.id) {
      this.botaoAcao = "Editar";
      this.livroApiService.buscarPorId(this.id).subscribe(
        (livro) => this.livro = livro
      );
    }
}

  salvar() {
    if(this.id) {
      this.livroApiService.editar(this.id, this.livro).subscribe(
        (livro) => {
          alert(`Livro ${this.livro.nome} editado com sucesso`);
          this.livro = livro;
          this.voltar()
        }
      );


    } else {
      this.livroApiService.inserir(this.livro).subscribe(
        (livro) => {
          alert(`Livro ${this.livro.nome} adicionado com sucesso`)
          this.livro = new Livro;
        }
      )
    }
  }

  voltar() {
    this.router.navigate(['/tabelaLivros']);
  }
}
