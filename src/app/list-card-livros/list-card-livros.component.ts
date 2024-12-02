import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-card-livros',
  templateUrl: './list-card-livros.component.html',
  styleUrl: './list-card-livros.component.css'
})
export class ListCardLivrosComponent {
  @Input('livros') listaLivros: any[] = [
    
  ]
}
