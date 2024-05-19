import { UsuarioModel } from './usuario-model';

export interface AvaliacaoModel {
  id: number | null;
  descricaoAvaliacao: string;
  dataAvaliacao: Date;
  valorAvaliacao: number;
  usuario: UsuarioModel;
  idInfoLivro: number;
}
