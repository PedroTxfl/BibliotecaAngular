import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { LivroService } from '../livro.service';
import { Modal } from 'bootstrap';
import { ClienteService } from '../cliente.service';


@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrl: './emprestimo.component.css'
})
export class EmprestimoComponent {

  listaLivros: any[] = [];
  listaClientes: any[] = []
  nomePesquisado = "";

  constructor(
    private livroService: LivroService,
    private clienteService: ClienteService
  ) {
    this.listaLivros = livroService.listar();
    this.listaClientes = clienteService.listar()
  }

  @Input() botaoDinamicoAcao: string = "Dinamico";
  @Input() livroId?: number; // Recebe o ID do livro
  @Output() acaoRealizada = new EventEmitter<number>();

  emitirAcao() {
    this.acaoRealizada.emit(this.livroId);
  }

}
