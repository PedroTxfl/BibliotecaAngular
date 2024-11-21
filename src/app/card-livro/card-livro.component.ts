import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-card-livro',
  templateUrl: './card-livro.component.html',
  styleUrl: './card-livro.component.css'
})
export class CardLivroComponent {
  @Input() livro: any;
}
