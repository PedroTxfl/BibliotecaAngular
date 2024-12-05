import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Livro } from './livro';
import { Cliente } from './cliente';
import { ClienteApiService } from './cliente-api.service';

const BASE_API = "http://localhost:3000/api/livros"
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
    this.updateToken();
    return this.http.get<Livro[]>(BASE_API);

  }



  buscarPorId(id: number): Observable<Livro> {
    const uri = `${BASE_API}/${id}`;
    this.updateToken();
    return this.http.get<Livro>(uri);
  }

  inserir(livro: Livro): Observable<Livro> {
    livro.disponivel = true;
    this.updateToken();
    return this.http.post(BASE_API, livro, httpOptions);
  }

  editar(id: number, livro:Livro): Observable<Livro> {
    const uri = `${BASE_API}/${id}`;
    this.updateToken();
    return this.http.put<Livro>(uri,livro,httpOptions);
  }

  deletar(id: number): Observable<Livro> {
    const uri = `${BASE_API}/${id}`;
    this.updateToken();
    return this.http.delete<Livro>(uri);
  }



  realizarRetirada(livro: Livro, cliente: Cliente): Observable<void> {
    this.updateToken();
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

        // Fazer as duas requisições HTTP
        const livroUpdate$ = this.editar(id!, livro);
        const clienteUpdate$ = this.clienteApiService.editar(cliente.id!, cliente);


        // Usar forkJoin para esperar ambas as requisições
        forkJoin([livroUpdate$, clienteUpdate$]).subscribe(
          () => {
            console.log('Livro e Cliente atualizados com sucesso');
            observer.next(); // Sucesso
            observer.complete(); // Conclui a execução
          },
          (erro) => {
            console.error('Erro ao atualizar livro ou cliente:', erro);
            observer.error(erro); // Emite erro se qualquer uma das requisições falhar
          }
        );
      } else {
        alert(`O livro ${livro.nome} já está locado`);
        observer.error("Livro não disponível"); // Emite erro se livro não estiver disponível
      }
    })
  }

  realizarDevolucao(livro: Livro, cliente: Cliente): Observable<void> {
    this.updateToken();

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

        // Fazer as duas requisições HTTP
        const livroUpdate$ = this.editar(id!, livro);
        const clienteUpdate$ = this.clienteApiService.editar(cliente.id!, cliente);

        console.log(cliente.livrosRetirados);
        console.log(livro,'beludo');
        console.log(cliente, 'bct');

        // Usar forkJoin para esperar ambas as requisições
        forkJoin([livroUpdate$, clienteUpdate$]).subscribe(
          () => {
            console.log('Livro e Cliente atualizados com sucesso');
            observer.next(); // Sucesso
            observer.complete(); // Conclui a execução
          },
          (erro) => {
            console.error('Erro ao atualizar livro ou cliente:', erro);
            observer.error(erro); // Emite erro se qualquer uma das requisições falhar
          }
        );
      } else {
        console.log("Não foi locado.");
        observer.error("Livro não foi locado."); // Emite erro se livro não estiver disponível
      }
    })
}
updateToken() {
  let token = sessionStorage.getItem("token");
  if(!token){
    token = "";
  }
  console.log("token",token);
  httpOptions.headers =  new HttpHeaders({
    "Content-Type": "application/json",
    "token": token
  })
}
}
