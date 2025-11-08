import { Tfplgr } from './tfplgr.interface';

export interface Tsiend {
  codend: number;
  nomeend?: string | null;
  tipo?: string | null;
  descricaocorreio?: string | null;
  codlogradouro?: Tfplgr;
}
