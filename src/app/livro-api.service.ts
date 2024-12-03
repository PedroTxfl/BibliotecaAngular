import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from './livro';

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

  constructor(private http: HttpClient) { }

  listar(): Observable<Livro[]> {
    console.log('foiii');
    return this.http.get<Livro[]>(BASE_API);

  }

  buscarPorId(id: number): Observable<Livro> {
    const uri = `${BASE_API}/${id}`;
    return this.http.get<Livro>(uri);
  }

  inserir(livro: Livro): Observable<Livro> {
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
}
