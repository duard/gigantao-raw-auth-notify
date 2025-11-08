import { TfpfunEntity } from 'src/sankhya/entities/tFPFUN.entity';
import { TsiusuEntity } from 'src/sankhya/entities/tSIUSU.entity';

export class Tfpreq {
  id: number;
  dtcriacao: Date | null;
  codfunc: number | null;
  codemp: number | null;
  status: number | null;
  prioridade: number | null;
  dtlimite: Date | null;
  observacao: string | null;
  origemtipo: string | null;
  origemid: number | null;
  dhalter: Date | null;
  impacto: number;
  eintegracao: string | null;
  codusu: number | null;
  usuario: TsiusuEntity | null;
  tfpfun: TfpfunEntity;
}
