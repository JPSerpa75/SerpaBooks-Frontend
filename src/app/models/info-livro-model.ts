import { AutorModel } from "./autor-model"
import { AvaliacaoModel } from "./avaliacao-model"
import { LivroModel } from "./livro-model"

export interface InfoLivroModel {
  id: number
  titulo: string
  notaLivro: number
  idioma: string
  resumo: string
  sinopse: string
  autor: AutorModel
  avaliacoes: AvaliacaoModel[]
  livros: LivroModel[]
}
