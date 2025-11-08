import { Tfplgr as TfplgrInterface } from 'src/sankhya/interfaces/tfplgr.interface';
import { Tsiusu } from 'src/sankhya/interfaces/tsiusu.interface';

export class Tfplgr implements TfplgrInterface {
  codlogradouro: string;
  descrlogradouro: string;
  dhalter: Date;
  codusu?: Tsiusu;
}
