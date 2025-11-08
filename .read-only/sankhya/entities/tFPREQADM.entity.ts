import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpbenEntity } from './tFPBEN.entity';
import { TfprdefEntity } from './tFPRDEF.entity';
import { TfpctgEntity } from './tFPCTG.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TsipaiEntity } from './tSIPAI.entity';
import { TfpfcoEntity } from './tFPFCO.entity';
import { TfpcatEntity } from './tFPCAT.entity';
import { TfpcghEntity } from './tFPCGH.entity';
import { TfpsinEntity } from './tFPSIN.entity';
import { TfpdepEntity } from './tFPDEP.entity';
import { TsiufsEntity } from './tSIUFS.entity';
import { TfpcarEntity } from './tFPCAR.entity';
import { TsiendEntity } from './tSIEND.entity';

@Index('PK_TFPREQADM', ['id'], { unique: true })
@Entity('TFPREQADM', { schema: 'SANKHYA' })
export class TfpreqadmEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('varchar', { name: 'NOMEFUNC', nullable: true, length: 100 })
  nomefunc: string | null;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('varchar', { name: 'PIS', nullable: true, length: 11 })
  pis: string | null;

  @Column('datetime', { name: 'DTCADPIS', nullable: true })
  dtcadpis: Date | null;

  @Column('varchar', { name: 'SEXO', nullable: true, length: 1 })
  sexo: string | null;

  @Column('smallint', { name: 'ESTADOCIVIL', nullable: true })
  estadocivil: number | null;

  @Column('smallint', { name: 'NIVESC', nullable: true })
  nivesc: number | null;

  @Column('smallint', { name: 'RACAFUNCIONARIO', nullable: true })
  racafuncionario: number | null;

  @Column('smallint', { name: 'NACIONALIDADE', nullable: true })
  nacionalidade: number | null;

  @Column('int', { name: 'CIDNASC', nullable: true })
  cidnasc: number | null;

  @Column('datetime', { name: 'DTNASC', nullable: true })
  dtnasc: Date | null;

  @Column('varchar', { name: 'NUMEND', nullable: true, length: 6 })
  numend: string | null;

  @Column('varchar', { name: 'COMPLEMENTO', nullable: true, length: 30 })
  complemento: string | null;

  @Column('varchar', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 13 })
  telefone: string | null;

  @Column('varchar', { name: 'CELULAR', nullable: true, length: 13 })
  celular: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 80 })
  email: string | null;

  @Column('int', { name: 'NUMCPS', nullable: true })
  numcps: number | null;

  @Column('datetime', { name: 'DTCPS', nullable: true })
  dtcps: Date | null;

  @Column('varchar', { name: 'SERIECPS', nullable: true, length: 6 })
  seriecps: string | null;

  @Column('varchar', { name: 'IDENTIDADE', nullable: true, length: 15 })
  identidade: string | null;

  @Column('datetime', { name: 'DTRG', nullable: true })
  dtrg: Date | null;

  @Column('varchar', { name: 'ORGAORG', nullable: true, length: 6 })
  orgaorg: string | null;

  @Column('varchar', { name: 'COMPLEMENTORG', nullable: true, length: 20 })
  complementorg: string | null;

  @Column('varchar', { name: 'NROCNH', nullable: true, length: 20 })
  nrocnh: string | null;

  @Column('datetime', { name: 'PRIMEIRACNH', nullable: true })
  primeiracnh: Date | null;

  @Column('datetime', { name: 'VENCIMENTOCNH', nullable: true })
  vencimentocnh: Date | null;

  @Column('varchar', { name: 'CATEGORIACNH', nullable: true, length: 4 })
  categoriacnh: string | null;

  @Column('varchar', { name: 'ORGAOCNH', nullable: true, length: 20 })
  orgaocnh: string | null;

  @Column('datetime', { name: 'DTEXPCNH', nullable: true })
  dtexpcnh: Date | null;

  @Column('varchar', { name: 'RNE', nullable: true, length: 20 })
  rne: string | null;

  @Column('varchar', { name: 'ORGAORNE', nullable: true, length: 20 })
  orgaorne: string | null;

  @Column('datetime', { name: 'DTEXPRNE', nullable: true })
  dtexprne: Date | null;

  @Column('varchar', { name: 'TITELEITORAL', nullable: true, length: 12 })
  titeleitoral: string | null;

  @Column('smallint', { name: 'ZONAELEITORAL', nullable: true })
  zonaeleitoral: number | null;

  @Column('smallint', { name: 'SECAOELEITORAL', nullable: true })
  secaoeleitoral: number | null;

  @Column('varchar', { name: 'NRORESERVISTA', nullable: true, length: 15 })
  nroreservista: string | null;

  @Column('varchar', { name: 'NROPASSAPORTE', nullable: true, length: 12 })
  nropassaporte: string | null;

  @Column('varchar', { name: 'EMISSORPPORTE', nullable: true, length: 12 })
  emissorpporte: string | null;

  @Column('datetime', { name: 'DTEMIPPORTE', nullable: true })
  dtemipporte: Date | null;

  @Column('datetime', { name: 'DTVALPPORTE', nullable: true })
  dtvalpporte: Date | null;

  @Column('varchar', { name: 'DEFICIENTEFISICO', nullable: true, length: 1 })
  deficientefisico: string | null;

  @Column('smallint', { name: 'TIPDEFICIENCIA', nullable: true })
  tipdeficiencia: number | null;

  @Column('varchar', { name: 'OBSDEFICIENCIA', nullable: true, length: 250 })
  obsdeficiencia: string | null;

  @Column('char', {
    name: 'INFOCOTA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  infocota: string | null;

  @Column('datetime', { name: 'DTCHEGPAIS', nullable: true })
  dtchegpais: Date | null;

  @Column('char', { name: 'CASADOBR', nullable: true, length: 1 })
  casadobr: string | null;

  @Column('char', { name: 'FILHOSBR', nullable: true, length: 1 })
  filhosbr: string | null;

  @Column('smallint', { name: 'CLASSTRABESTRANG', nullable: true })
  classtrabestrang: number | null;

  @Column('smallint', { name: 'VINCULO', nullable: true })
  vinculo: number | null;

  @Column('datetime', { name: 'DTADM', nullable: true })
  dtadm: Date | null;

  @Column('smallint', { name: 'INDADMISSAO', nullable: true })
  indadmissao: number | null;

  @Column('smallint', { name: 'REGIME', nullable: true })
  regime: number | null;

  @Column('smallint', { name: 'REGIMETRAB', nullable: true })
  regimetrab: number | null;

  @Column('smallint', { name: 'REGIMEJOR', nullable: true })
  regimejor: number | null;

  @Column('varchar', { name: 'PRIMEMPREGO', nullable: true, length: 1 })
  primemprego: string | null;

  @Column('datetime', { name: 'DTOPTFGTS', nullable: true })
  dtoptfgts: Date | null;

  @Column('smallint', { name: 'OPTFGTS', nullable: true })
  optfgts: number | null;

  @Column('char', { name: 'NOVOEMPREGO', nullable: true, length: 1 })
  novoemprego: string | null;

  @Column('char', { name: 'CADINI', nullable: true, length: 1 })
  cadini: string | null;

  @Column('varchar', { name: 'TIPSAL', nullable: true, length: 1 })
  tipsal: string | null;

  @Column('float', { name: 'HORASSEM', nullable: true, precision: 53 })
  horassem: number | null;

  @Column('char', {
    name: 'MEI',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  mei: string | null;

  @Column('datetime', { name: 'DTTERMINO', nullable: true })
  dttermino: Date | null;

  @Column('varchar', { name: 'NOMEMAE', nullable: true, length: 100 })
  nomemae: string | null;

  @Column('varchar', { name: 'NOMEPAI', nullable: true, length: 100 })
  nomepai: string | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('smallint', { name: 'IMPACTO', nullable: true })
  impacto: number | null;

  @Column('char', { name: 'NOVATOFINALIZOU', nullable: true, length: 1 })
  novatofinalizou: string | null;

  @Column('float', { name: 'REMUNBASE', nullable: true, precision: 53 })
  remunbase: number | null;

  @Column('datetime', { name: 'DTVENCEXP1', nullable: true })
  dtvencexp1: Date | null;

  @Column('datetime', { name: 'DTVENCEXP2', nullable: true })
  dtvencexp2: Date | null;

  @Column('char', {
    name: 'DISPPEREXP',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  dispperexp: string | null;

  @Column('float', { name: 'PERCPERIC', nullable: true, precision: 53 })
  percperic: number | null;

  @Column('float', { name: 'PERCADIANTAMENTO', nullable: true, precision: 53 })
  percadiantamento: number | null;

  @Column('float', { name: 'PERCINSAL', nullable: true, precision: 53 })
  percinsal: number | null;

  @Column('smallint', { name: 'CODGRUPOCTBZ', nullable: true })
  codgrupoctbz: number | null;

  @Column('varchar', { name: 'CODADMFGTS', nullable: true, length: 2 })
  codadmfgts: string | null;

  @Column('varchar', { name: 'CODADMFGTSII', nullable: true, length: 2 })
  codadmfgtsii: string | null;

  @Column('char', {
    name: 'TRABOUTRAEMP',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  traboutraemp: string | null;

  @Column('varchar', { name: 'TIPTAB', nullable: true, length: 2 })
  tiptab: string | null;

  @Column('float', { name: 'SALBASE', nullable: true, precision: 53 })
  salbase: number | null;

  @Column('text', { name: 'OPCIONAIS', nullable: true })
  opcionais: string | null;

  @Column('int', { name: 'CODVAGA', nullable: true })
  codvaga: number | null;

  @Column('varchar', {
    name: 'EINTEGRACAO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  eintegracao: string | null;

  @Column('text', { name: 'ADICIONAIS', nullable: true })
  adicionais: string | null;

  @Column('varchar', { name: 'CTPSDIGITAL', length: 1, default: () => "'N'" })
  ctpsdigital: string;

  @Column('varchar', { name: 'POSSUIFILHOS', nullable: true, length: 1 })
  possuifilhos: string | null;

  @Column('varchar', { name: 'ORIENTACAOSEXUAL', nullable: true, length: 1 })
  orientacaosexual: string | null;

  @Column('varchar', { name: 'IDENTIDADEGENERO', nullable: true, length: 1 })
  identidadegenero: string | null;

  @Column('varchar', { name: 'POSSUITRANS', nullable: true, length: 1 })
  possuitrans: string | null;

  @Column('varchar', { name: 'POSSUISEGVIDA', nullable: true, length: 1 })
  possuisegvida: string | null;

  @Column('varchar', { name: 'SINDICALIZADO', nullable: true, length: 1 })
  sindicalizado: string | null;

  @Column('smallint', { name: 'CODBCO', nullable: true })
  codbco: number | null;

  @Column('varchar', { name: 'NOMESOCIAL', nullable: true, length: 70 })
  nomesocial: string | null;

  @Column('varchar', { name: 'CODCTABCO', nullable: true, length: 14 })
  codctabco: string | null;

  @Column('varchar', { name: 'POSSUICONVODO', nullable: true, length: 1 })
  possuiconvodo: string | null;

  @Column('varchar', { name: 'POSSUIVAVR', nullable: true, length: 1 })
  possuivavr: string | null;

  @Column('varchar', { name: 'CODAGE', nullable: true, length: 5 })
  codage: string | null;

  @Column('smallint', { name: 'NUPADRAO', nullable: true })
  nupadrao: number | null;

  @Column('varchar', { name: 'TIPOREMUNERACAO', nullable: true, length: 1 })
  tiporemuneracao: string | null;

  @Column('image', { name: 'IMAGEM', nullable: true })
  imagem: Buffer | null;

  @Column('varchar', { name: 'POSSUICONVMED', nullable: true, length: 1 })
  possuiconvmed: string | null;

  @Column('varchar', { name: 'TIPCONTA', nullable: true, length: 8 })
  tipconta: string | null;

  @Column('int', { name: 'CODIGOFILA', nullable: true })
  codigofila: number | null;

  @Column('varchar', { name: 'TMPRESIDTRABESTRANG', nullable: true, length: 1 })
  tmpresidtrabestrang: string | null;

  @Column('int', { name: 'CODLOCALPONTO', nullable: true })
  codlocalponto: number | null;

  @ManyToMany(() => TfpbenEntity, (tfpbenEntity) => tfpbenEntity.tfpreqadms)
  @JoinTable({
    name: 'TFPBENREQADM',
    joinColumns: [{ name: 'IDREQADM', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'CODBEN', referencedColumnName: 'codben' }],
    schema: 'SANKHYA',
  })
  tfpbens: TfpbenEntity[];

  @OneToMany(() => TfprdefEntity, (tfprdefEntity) => tfprdefEntity.idreqadm2)
  tfprdefs: TfprdefEntity[];

  @ManyToOne(() => TfpctgEntity, (tfpctgEntity) => tfpctgEntity.tfpreqadms)
  @JoinColumn([
    { name: 'CODCATEGESOCIAL', referencedColumnName: 'codcategesocial' },
  ])
  codcategesocial: TfpctgEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tfpreqadms)
  @JoinColumn([{ name: 'CODCIDTRAB', referencedColumnName: 'codcid' }])
  codcidtrab: TsicidEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tfpreqadms2)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tfpreqadms)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.tfpreqadms)
  @JoinColumn([{ name: 'CODBAI', referencedColumnName: 'codbai' }])
  codbai: TsibaiEntity;

  @ManyToOne(() => TsipaiEntity, (tsipaiEntity) => tsipaiEntity.tfpreqadms)
  @JoinColumn([{ name: 'CODPAIS', referencedColumnName: 'codpais' }])
  codpais: TsipaiEntity;

  @ManyToOne(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.tfpreqadms)
  @JoinColumn([{ name: 'CODFUNCAO', referencedColumnName: 'codfuncao' }])
  codfuncao: TfpfcoEntity;

  @ManyToOne(() => TfpcatEntity, (tfpcatEntity) => tfpcatEntity.tfpreqadms)
  @JoinColumn([{ name: 'CODCATEG', referencedColumnName: 'codcateg' }])
  codcateg: TfpcatEntity;

  @ManyToOne(() => TfpcghEntity, (tfpcghEntity) => tfpcghEntity.tfpreqadms)
  @JoinColumn([{ name: 'CODCARGAHOR', referencedColumnName: 'codcargahor' }])
  codcargahor: TfpcghEntity;

  @ManyToOne(() => TfpsinEntity, (tfpsinEntity) => tfpsinEntity.tfpreqadms)
  @JoinColumn([{ name: 'CODSIND', referencedColumnName: 'codsind' }])
  codsind: TfpsinEntity;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.tfpreqadms)
  @JoinColumn([{ name: 'CODDEP', referencedColumnName: 'coddep' }])
  coddep: TfpdepEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tfpreqadms)
  @JoinColumn([{ name: 'UFPPORTE', referencedColumnName: 'coduf' }])
  ufpporte: TsiufsEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tfpreqadms2)
  @JoinColumn([{ name: 'UFNASC', referencedColumnName: 'coduf' }])
  ufnasc: TsiufsEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tfpreqadms3)
  @JoinColumn([{ name: 'UFENDERECO', referencedColumnName: 'coduf' }])
  ufendereco: TsiufsEntity;

  @ManyToOne(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.tfpreqadms)
  @JoinColumn([{ name: 'CODCARGO', referencedColumnName: 'codcargo' }])
  codcargo: TfpcarEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.tfpreqadms)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend: TsiendEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tfpreqadms4)
  @JoinColumn([{ name: 'UFCPS', referencedColumnName: 'coduf' }])
  ufcps: TsiufsEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tfpreqadms5)
  @JoinColumn([{ name: 'UFRG', referencedColumnName: 'coduf' }])
  ufrg: TsiufsEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tfpreqadms6)
  @JoinColumn([{ name: 'UFCNH', referencedColumnName: 'coduf' }])
  ufcnh: TsiufsEntity;
}
