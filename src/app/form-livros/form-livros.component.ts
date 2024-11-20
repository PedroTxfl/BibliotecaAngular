import { Component } from '@angular/core';

@Component({
  selector: 'app-form-livros',
  templateUrl: './form-livros.component.html',
  styleUrl: './form-livros.component.css'
})
export class FormLivrosComponent {
  livro: any = {id:0, nome:"", preco:0};
  listLivros: any[] = [];

  cadastrar() {
    this.listLivros.push(this.livro);
    this.livro = {id:0, nome:"", preco:0};
    alert("Produto cadastrado com sucesso")
  }
}
