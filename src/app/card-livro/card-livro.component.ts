import { Component } from '@angular/core';

@Component({
  selector: 'app-card-livro',
  templateUrl: './card-livro.component.html',
  styleUrl: './card-livro.component.css'
})
export class CardLivroComponent {
  livro: any = {id:0, nome: "", preco: 0};
}
