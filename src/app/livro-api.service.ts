import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Livro } from './livro';
import { Cliente } from './cliente';
import { ClienteApiService } from './cliente-api.service';

const BASE_API = "http://localhost:3000/livros"
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class LivroApiService {

  constructor(
    private http: HttpClient,
    private clienteApiService: ClienteApiService
  ) { }

  listar(): Observable<Livro[]> {
    return this.http.get<Livro[]>(BASE_API);

  }

  buscarPorId(id: number): Observable<Livro> {
    const uri = `${BASE_API}/${id}`;
    return this.http.get<Livro>(uri);
  }

  inserir(livro: Livro): Observable<Livro> {
    livro.disponivel = true;
    return this.http.post(BASE_API, livro, httpOptions);
  }

  editar(id: number, livro:Livro): Observable<Livro> {
    const uri = `${BASE_API}/${id}`;
    return this.http.put<Livro>(uri,livro,httpOptions);
  }

  deletar(id: number): Observable<Livro> {
    const uri = `${BASE_API}/${id}`;
    return this.http.delete<Livro>(uri);
  }



  realizarRetirada(livro: Livro, cliente: Cliente): Observable<void> {
    return new Observable((observer) => {
      if (livro.disponivel) {
        if (!cliente.livrosRetirados) {
          cliente.livrosRetirados = [];
        }
        const clienteSelecionado = cliente.id + '-' + cliente.nome;
        cliente.livrosRetirados?.push(livro);

        livro.dataRetirada = new Date();
        livro.dataDevolucao = new Date(livro.dataRetirada.getTime() + 7 * 24 * 60 * 60 * 1000);
        livro.locador = clienteSelecionado;
        livro.disponivel = false;
        const id = livro.id;

        const livroUpdate$ = this.editar(id!, livro);
        const clienteUpdate$ = this.clienteApiService.editar(cliente.id!, cliente);


        forkJoin([livroUpdate$, clienteUpdate$]).subscribe(
          () => {
            console.log('Livro e Cliente atualizados com sucesso');
            observer.next();
            observer.complete();
          },
          (erro) => {
            console.error('Erro ao atualizar livro ou cliente:', erro);
            observer.error(erro);
          }
        );
      } else {
        alert(`O livro ${livro.nome} já está locado`);
        observer.error("Livro não disponível");
      }
    })
  }

  realizarDevolucao(livro: Livro, cliente: Cliente): Observable<void> {

    return new Observable((observer) => {
      if (!livro.disponivel) {

        console.log('cliente DO LIVRO API', cliente)
        const index = cliente.livrosRetirados?.findIndex(
          (l) => l.id === livro.id
        );
        console.log(index, 'index')
        if (index! > -1) {
          cliente.livrosRetirados!.splice(index!, 1);

        }

        livro.locador = undefined;
        livro.dataRetirada = undefined;
        livro.dataDevolucao = new Date;
        livro.disponivel = true;
        const id = livro.id;

        const livroUpdate$ = this.editar(id!, livro);
        const clienteUpdate$ = this.clienteApiService.editar(cliente.id!, cliente);

        console.log(cliente.livrosRetirados);
        console.log(livro,'beludo');
        console.log(cliente, 'bct');


        forkJoin([livroUpdate$, clienteUpdate$]).subscribe(
          () => {
            console.log('Livro e Cliente atualizados com sucesso');
            observer.next();
            observer.complete();
          },
          (erro) => {
            console.error('Erro ao atualizar livro ou cliente:', erro);
            observer.error(erro);
          }
        );
      } else {
        console.log("Não foi locado.");
        observer.error("Livro não foi locado.");
      }
    })
}

}
