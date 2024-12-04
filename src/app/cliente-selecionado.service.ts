import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteSelecionadoService {
  private idClienteSubject = new BehaviorSubject<number | null>(null); // Inicializa com null ou qualquer valor padrão
  idCliente$ = this.idClienteSubject.asObservable();

  // Método para definir o idCliente
  setIdCliente(idCliente: number): void {
    this.idClienteSubject.next(idCliente);
  }

  // Método para obter o idCliente
  getIdCliente(): number | null {
    return this.idClienteSubject.value;
  }
}

