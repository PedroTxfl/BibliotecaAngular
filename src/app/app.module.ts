import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaLivrosComponent } from './tabela-livros/tabela-livros.component';
import { FormLivrosComponent } from './form-livros/form-livros.component';
import { FormsModule } from '@angular/forms';
import { CardLivroComponent } from './card-livro/card-livro.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaLivrosComponent,
    FormLivrosComponent,
    CardLivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
