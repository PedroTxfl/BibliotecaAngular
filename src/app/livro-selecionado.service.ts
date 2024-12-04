import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroSelecionadoService {
  private livroSelecionado = new BehaviorSubject<number | null>(null);

  setLivroSelecionado(id: number): void {
    this.livroSelecionado.next(id);
  }

  getLivroSelecionado() {
    return this.livroSelecionado.asObservable(); // Permite que outros componentes "ouçam" as mudanças
  }
}
