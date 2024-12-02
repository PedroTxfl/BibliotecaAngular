import { Cliente } from "./cliente";

export class Livro {
  id?: number;
  nome?: string;
  autor?: string;
  editora?: string;
  disponivel: boolean = true;
  locador?: Cliente;
  dataRetirada?: Date;
  dataDevolucao?: Date;
}
