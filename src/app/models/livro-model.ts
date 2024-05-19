import { CapaModel } from "./capa-model"
import { EditoraModel } from "./editora-model"

export interface LivroModel {
  id: number
  urlImagem: string
  numeroPaginas: number
  isbn10: string
  isbn13: string
  dataPublicacao: Date
  dataCadastro: Date
  editora: EditoraModel
  capa: CapaModel
}
