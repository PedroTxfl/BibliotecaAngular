import { Livro } from "./livro";

export class Cliente {
  id?: number;
  nome?: string;
  telefone?: string;
  livrosRetirados?: Livro[];
  multa?: number;
}
