import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-livros',
  templateUrl: './form-livros.component.html',
  styleUrl: './form-livros.component.css'
})
export class FormLivrosComponent {
  livro: any = {id:0, nome:"", preco:0};
  @Output() onSalvar = new EventEmitter<any>()

  cadastrar() {
    alert("Produto cadastrado com sucesso")
    this.onSalvar.emit(this.livro)
    this.livro = {id:0, nome:"", preco:0};
  }
}
