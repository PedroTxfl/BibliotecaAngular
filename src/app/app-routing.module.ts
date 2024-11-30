import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaLivrosComponent } from './tabela-livros/tabela-livros.component';
import { FormLivrosComponent } from './form-livros/form-livros.component';
import { CardLivroComponent } from './card-livro/card-livro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmprestimoComponent } from './emprestimo/emprestimo.component';

const routes: Routes = [
  { path: 'tabelaLivros', component: TabelaLivrosComponent },
  { path: 'novo', component: FormLivrosComponent },
  { path: 'edit/:id', component: FormLivrosComponent },
  { path: 'cardsLivros', component: CardLivroComponent },
  { path: 'emprestimo', component: EmprestimoComponent },
  { path: '', redirectTo:'/tabela', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
