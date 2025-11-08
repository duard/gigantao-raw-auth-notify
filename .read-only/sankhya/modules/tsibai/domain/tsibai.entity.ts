import { Tsibai as TsibaiInterface } from 'src/sankhya/interfaces/tsibai.interface';
import { Tsireg } from 'src/sankhya/interfaces/tsireg.interface';

export class Tsibai implements TsibaiInterface {
  codbai: number;
  nomebai: string;
  dtalter: Date;
  descricaocorreio?: string | null;
  nuversao?: number | null;
  atunuversao?: string | null;
  codreg?: Tsireg;
}
