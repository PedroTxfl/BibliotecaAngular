import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaLivrosComponent } from './tabela-livros/tabela-livros.component';
import { FormLivrosComponent } from './form-livros/form-livros.component';
import { CardLivroComponent } from './card-livro/card-livro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmprestimoComponent } from './emprestimo/emprestimo.component';
import { TabelaClientesComponent } from './tabela-clientes/tabela-clientes.component';
import { FormClientesComponent } from './form-clientes/form-clientes.component';
import { EmprestimoEscolhaClienteComponent } from './emprestimo-escolha-cliente/emprestimo-escolha-cliente.component';

const routes: Routes = [
  { path: 'tabelaLivros', component: TabelaLivrosComponent },
  { path: 'tabelaClientes', component: TabelaClientesComponent },
  { path: 'novoLivro', component: FormLivrosComponent },
  { path: 'novoCliente', component: FormClientesComponent },
  { path: 'edit/:id', component: FormLivrosComponent },
  { path: 'cardsLivros', component: CardLivroComponent },
  { path: 'emprestimo', component: EmprestimoComponent },
  { path: 'emprestimoEscolhaLivro', component: EmprestimoEscolhaClienteComponent },
  { path: '', redirectTo:'/tabela', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
