import { Tsiend } from './tsiend.interface';
import { Tsicid } from './tsicid.interface';
import { Tsibai } from './tsibai.interface';

export interface Tgfpar {
  codparc: number;
  nomeparc?: string | null;
  razaosocial?: string | null;
  tippessoa?: string | null;
  codparcmatriz?: number | null;
  numend?: string | null;
  complemento?: string | null;
  telefone?: string | null;
  email?: string | null;
  cgcCpf?: string | null;
  cep?: string | null;
  codend?: Tsiend;
  codc?: Tsicid;
  codbai?: Tsibai;
}
