import { Tsicid as TsicidInterface } from 'src/sankhya/interfaces/tsicid.interface';
import { Tsiufs } from 'src/sankhya/interfaces/tsiufs.interface';

export class Tsicid implements TsicidInterface {
  codcid: number;
  nomecid: string;
  uf?: number | null;
  ddd?: string | null;
  dtalter: Date;
  descricaocorreio?: string | null;
  uf2?: Tsiufs;
}
