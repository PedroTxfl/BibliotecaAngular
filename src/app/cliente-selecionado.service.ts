import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteSelecionadoService {
  private idClienteSubject = new BehaviorSubject<number | null>(null);
  idCliente$ = this.idClienteSubject.asObservable();

  setIdCliente(idCliente: number): void {
    this.idClienteSubject.next(idCliente);
  }

  getIdCliente(): number | null {
    return this.idClienteSubject.value;
  }
}

