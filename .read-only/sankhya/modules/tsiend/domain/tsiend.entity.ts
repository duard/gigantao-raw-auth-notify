import { Tsiend as TsiendInterface } from 'src/sankhya/interfaces/tsiend.interface';
import { Tfplgr } from 'src/sankhya/interfaces/tfplgr.interface';

export class Tsiend implements TsiendInterface {
  codend: number;
  nomeend: string;
  tipo?: string | null;
  dtalter: Date;
  descricaocorreio?: string | null;
  nuversao?: number | null;
  atunuversao?: string | null;
  codlogradouro?: Tfplgr;
}
