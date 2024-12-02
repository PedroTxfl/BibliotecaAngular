import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroSelecionadoService {
  private livroIdSource = new BehaviorSubject<number | null>(null);
  livroId$ = this.livroIdSource.asObservable();

  setLivroId(id: number) {
    this.livroIdSource.next(id);
  }
}
