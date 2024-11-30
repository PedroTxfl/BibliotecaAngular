import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaLivrosComponent } from './tabela-livros/tabela-livros.component';
import { FormLivrosComponent } from './form-livros/form-livros.component';
import { FormsModule } from '@angular/forms';
import { CardLivroComponent } from './card-livro/card-livro.component';
import { ListCardLivrosComponent } from './list-card-livros/list-card-livros.component';
import { DisponibilidadePipe } from './disponibilidade.pipe';
import { FiltroPesquisaNomePipe } from './filtro-pesquisa-nome.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClient } from '@angular/common/http';
import { EmprestimoComponent } from './emprestimo/emprestimo.component';
import { TabelaClientesComponent } from './tabela-clientes/tabela-clientes.component';
import { FiltroClienteNomePesquisaPipe } from './filtro-cliente-nome-pesquisa.pipe';
import { FormClientesComponent } from './form-clientes/form-clientes.component';
import { EmprestimoEscolhaClienteComponent } from './emprestimo-escolha-cliente/emprestimo-escolha-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaLivrosComponent,
    FormLivrosComponent,
    CardLivroComponent,
    ListCardLivrosComponent,
    DisponibilidadePipe,
    FiltroPesquisaNomePipe,
    PageNotFoundComponent,
    EmprestimoComponent,
    TabelaClientesComponent,
    FiltroClienteNomePesquisaPipe,
    FormClientesComponent,
    EmprestimoEscolhaClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
