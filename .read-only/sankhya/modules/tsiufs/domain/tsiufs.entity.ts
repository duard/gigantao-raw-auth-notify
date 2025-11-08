import { Tsiufs as TsiufsInterface } from 'src/sankhya/interfaces/tsiufs.interface';
import { Tsipai } from 'src/sankhya/interfaces/tsipai.interface';

import { Tgftit } from 'src/sankhya/interfaces/tgftit.interface';
import { Tgfpar } from 'src/sankhya/interfaces/tgfpar.interface';

export class Tsiufs implements TsiufsInterface {
  coduf: number;
  uf: string;
  descricao: string | null;
  codibge: number | null;
  codstgnre: string | null;
  coddetgnre: number | null;
  codprodgnre: number | null;
  protocoloconvenio: string | null;
  valsitcadsefaz: string;
  estornonfe: string;
  gerinfcampadicgnre: string | null;
  codcampoextragnre: number | null;
  valorcampoextra: string | null;
  versaognre: string | null;
  codfcpstgnre: number | null;
  usawebservicegnre: string | null;
  tipoinfo: string | null;
  tipodoc: number | null;
  codcampoextragnre2: number | null;
  codrecdime: string | null;
  codclsvencdime: string | null;
  codrecdimefcpst: string | null;
  codclsvencdimefcpst: string | null;
  vlrpersgnre: string | null;
  tabprecpmc: number | null;
  tabprecopf: number | null;
  codpais: Tsipai;
  tiptitgnrefcpst: Tgftit;
  codparcsecrecest: Tgfpar;
}
