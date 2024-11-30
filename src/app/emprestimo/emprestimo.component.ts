import { Component, ElementRef, Input, ViewChild } from '@angular/core';
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



  devolver(idLivro?:number) {
    this.livroService.realizarDevolucao(idLivro)
  }
}
