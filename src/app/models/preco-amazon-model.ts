import { CapaModel } from './capa-model';

export interface PrecoAmazonModel {
  id: number;
  preco: number;
  img: string;
  link: string;
  dataCadastro: Date;
  capa: CapaModel;
  store: string;
}
