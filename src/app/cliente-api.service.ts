import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
import { Livro } from './livro';

const BASE_API = "http://localhost:3000/clientes"
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class ClienteApiService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(BASE_API);

  }

  buscarPorId(id: number): Observable<Cliente> {
    const uri = `${BASE_API}/${id}`;
    return this.http.get<Cliente>(uri);
  }

  inserir(cliente: Cliente): Observable<Cliente> {
    cliente.multa = 0
    return this.http.post(BASE_API, cliente, httpOptions);
  }

  editar(id: number, cliente:Cliente): Observable<Cliente> {
    const uri = `${BASE_API}/${id}`;
    return this.http.put<Cliente>(uri,cliente,httpOptions);
  }

  deletar(id: number): Observable<Cliente> {
    const uri = `${BASE_API}/${id}`;
    return this.http.delete<Cliente>(uri);
  }


}

