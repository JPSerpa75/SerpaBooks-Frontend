import { Nullable } from '../core/utils/types'

export interface FilterOptionsModel {
  textoChave: string | null,
  idsEditoras?: number[],
  idsAutores?: number[],
  pageNumber?: number | null,
  pageSize?: number | null,
}

export interface filterOptions extends Nullable<FilterOptionsModel> { }

export function filterOptionsBuilder(): FilterOptionsModel {
  return {
    textoChave: null,
    idsEditoras: [],
    idsAutores: [],
    pageNumber: null,
    pageSize: null,
  }
}
