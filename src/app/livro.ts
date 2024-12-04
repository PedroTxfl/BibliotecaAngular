import { Cliente } from "./cliente";

export class Livro {
  id?: number;
  nome?: string;
  autor?: string;
  editora?: string;
  disponivel?: boolean;
  locador?: string;
  dataRetirada?: Date;
  dataDevolucao?: Date;
}
