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
import { TcseagEntity } from './tCSEAG.entity';
import { TfcavcEntity } from './tFCAVC.entity';
import { TgftppEntity } from './tGFTPP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsiufsEntity } from './tSIUFS.entity';
import { TfccarEntity } from './tFCCAR.entity';
import { TfccurEntity } from './tFCCUR.entity';
import { TfcdepEntity } from './tFCDEP.entity';
import { TfcexpEntity } from './tFCEXP.entity';
import { TfpfcoEntity } from './tFPFCO.entity';
import { TfpperEntity } from './tFPPER.entity';
import { TfctelEntity } from './tFCTEL.entity';
import { TrscanEntity } from './tRSCAN.entity';
import { TrsponEntity } from './tRSPON.entity';

@Index('PK_TFCBCO', ['nucurriculo'], { unique: true })
@Index('TFCBCO_I01', ['nucurriculobt'], {})
@Entity('TFCBCO', { schema: 'SANKHYA' })
export class TfcbcoEntity {
  @Column('int', { primary: true, name: 'NUCURRICULO' })
  nucurriculo: number;

  @Column('char', { name: 'NOMECANDIDATO', length: 40 })
  nomecandidato: string;

  @Column('float', { name: 'PRETSALARIAL', nullable: true, precision: 53 })
  pretsalarial: number | null;

  @Column('char', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('int', { name: 'NUMCPS', nullable: true })
  numcps: number | null;

  @Column('char', { name: 'SERIECPS', nullable: true, length: 5 })
  seriecps: string | null;

  @Column('char', { name: 'PIS', nullable: true, length: 11 })
  pis: string | null;

  @Column('char', { name: 'IDENTIDADE', nullable: true, length: 15 })
  identidade: string | null;

  @Column('char', { name: 'ORGAORG', nullable: true, length: 6 })
  orgaorg: string | null;

  @Column('char', { name: 'SEXO', length: 1, default: () => "'M'" })
  sexo: string;

  @Column('datetime', { name: 'DTNASC' })
  dtnasc: Date;

  @Column('smallint', { name: 'ESTADOCIVIL' })
  estadocivil: number;

  @Column('char', { name: 'NATURALIDADE', nullable: true, length: 45 })
  naturalidade: string | null;

  @Column('char', { name: 'DEFICIENTE', length: 1, default: () => "'N'" })
  deficiente: string;

  @Column('char', { name: 'DESCRDEFICIENCIA', nullable: true, length: 30 })
  descrdeficiencia: string | null;

  @Column('char', { name: 'TIPOEND', nullable: true, length: 3 })
  tipoend: string | null;

  @Column('char', { name: 'NOMEEND', nullable: true, length: 80 })
  nomeend: string | null;

  @Column('char', { name: 'NUMEND', nullable: true, length: 6 })
  numend: string | null;

  @Column('char', { name: 'COMPLEND', nullable: true, length: 30 })
  complend: string | null;

  @Column('char', { name: 'BAIRRO', nullable: true, length: 45 })
  bairro: string | null;

  @Column('char', { name: 'CIDADE', length: 45 })
  cidade: string;

  @Column('char', { name: 'UF', length: 2 })
  uf: string;

  @Column('char', { name: 'PAIS', length: 45 })
  pais: string;

  @Column('char', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 80 })
  email: string | null;

  @Column('smallint', { name: 'GRAUINSTR' })
  grauinstr: number;

  @Column('char', { name: 'CATEGORIACNH', nullable: true, length: 4 })
  categoriacnh: string | null;

  @Column('char', { name: 'DISPVIAGEM', length: 1, default: () => "'N'" })
  dispviagem: string;

  @Column('char', { name: 'DISPMUDANCA', length: 1, default: () => "'N'" })
  dispmudanca: string;

  @Column('char', { name: 'ESTRANGEIRO', length: 1, default: () => "'N'" })
  estrangeiro: string;

  @Column('smallint', { name: 'ANOCHEGPAIS', nullable: true })
  anochegpais: number | null;

  @Column('char', { name: 'RNE', nullable: true, length: 20 })
  rne: string | null;

  @Column('char', { name: 'SITPAIS', nullable: true, length: 1 })
  sitpais: string | null;

  @Column('datetime', { name: 'DTVALPAIS', nullable: true })
  dtvalpais: Date | null;

  @Column('char', { name: 'INDICACAO', nullable: true, length: 200 })
  indicacao: string | null;

  @Column('datetime', {
    name: 'DTINCLUSAO',
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dtinclusao: Date;

  @Column('smallint', { name: 'STATUS', default: () => '(0)' })
  status: number;

  @Column('datetime', {
    name: 'DTALTER',
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dtalter: Date;

  @Column('text', { name: 'CONSIDERACOES', nullable: true })
  consideracoes: string | null;

  @Column('image', { name: 'FOTO', nullable: true })
  foto: Buffer | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'N'" })
  ativo: string;

  @Column('money', { name: 'PRETSALARIALINICIAL', nullable: true })
  pretsalarialinicial: number | null;

  @Column('money', { name: 'PRETSALARIALFINAL', nullable: true })
  pretsalarialfinal: number | null;

  @Column('char', { name: 'INCLUSAOMGE', length: 1, default: () => "'N'" })
  inclusaomge: string;

  @Column('int', { name: 'NUCURRICULOBT', nullable: true })
  nucurriculobt: number | null;

  @Column('smallint', { name: 'TIPDEFICIENCIA', default: () => '(0)' })
  tipdeficiencia: number;

  @Column('varchar', { name: 'CNH', nullable: true, length: 15 })
  cnh: string | null;

  @Column('datetime', { name: 'DTVALCNH', nullable: true })
  dtvalcnh: Date | null;

  @Column('char', { name: 'VEICPROPRIO', length: 1, default: () => "'N'" })
  veicproprio: string;

  @Column('varchar', { name: 'TELPREF', nullable: true, length: 13 })
  telpref: string | null;

  @Column('varchar', { name: 'TELCEL', nullable: true, length: 13 })
  telcel: string | null;

  @Column('varchar', { name: 'TELRES', nullable: true, length: 13 })
  telres: string | null;

  @Column('varchar', { name: 'TELCOM', nullable: true, length: 13 })
  telcom: string | null;

  @Column('varchar', { name: 'RAMAL', nullable: true, length: 5 })
  ramal: string | null;

  @Column('varchar', { name: 'SKYPE', nullable: true, length: 100 })
  skype: string | null;

  @Column('varchar', { name: 'GOOGLEPLUS', nullable: true, length: 255 })
  googleplus: string | null;

  @Column('varchar', { name: 'FACEBOOK', nullable: true, length: 255 })
  facebook: string | null;

  @Column('varchar', { name: 'TWITTER', nullable: true, length: 255 })
  twitter: string | null;

  @Column('varchar', { name: 'LINKEDIN', nullable: true, length: 255 })
  linkedin: string | null;

  @Column('char', { name: 'DEFINDEPENDENTE', length: 1, default: () => "'S'" })
  defindependente: string;

  @Column('char', { name: 'DEFAUDITIVO', length: 1, default: () => "'N'" })
  defauditivo: string;

  @Column('char', { name: 'USOAPAUDITIVO', length: 1, default: () => "'N'" })
  usoapauditivo: string;

  @Column('char', { name: 'DEFINTELECTUAL', length: 1, default: () => "'N'" })
  defintelectual: string;

  @Column('char', { name: 'DEFVISUAL', length: 1, default: () => "'N'" })
  defvisual: string;

  @Column('char', { name: 'DEFFALA', length: 1, default: () => "'N'" })
  deffala: string;

  @Column('varchar', { name: 'DEFOUTRAS', nullable: true, length: 100 })
  defoutras: string | null;

  @Column('smallint', { name: 'DEFRECURSOS', nullable: true })
  defrecursos: number | null;

  @Column('varchar', { name: 'DEFOUTROSRECURSOS', nullable: true, length: 100 })
  defoutrosrecursos: string | null;

  @Column('smallint', { name: 'DEFRECURSOSIMPRES', nullable: true })
  defrecursosimpres: number | null;

  @Column('varchar', { name: 'INAPROPRIADO', nullable: true, length: 1 })
  inapropriado: string | null;

  @Column('varchar', { name: 'DEFICIENTEF', nullable: true, length: 50 })
  deficientef: string | null;

  @Column('smallint', { name: 'TIPOCURRICULO', nullable: true })
  tipocurriculo: number | null;

  @Column('smallint', { name: 'AD_CODEMP', nullable: true })
  adCodemp: number | null;

  @Column('varchar', { name: 'AD_CONTREXP', nullable: true, length: 10 })
  adContrexp: string | null;

  @Column('varchar', { name: 'AD_PLANSAUDE', nullable: true, length: 10 })
  adPlansaude: string | null;

  @Column('varchar', { name: 'AD_CIENREGEMP', nullable: true, length: 10 })
  adCienregemp: string | null;

  @OneToMany(() => TcseagEntity, (tcseagEntity) => tcseagEntity.nucurriculo)
  tcseags: TcseagEntity[];

  @OneToMany(() => TfcavcEntity, (tfcavcEntity) => tfcavcEntity.nucurriculo2)
  tfcavcs: TfcavcEntity[];

  @ManyToOne(() => TgftppEntity, (tgftppEntity) => tgftppEntity.tfcbcos)
  @JoinColumn([{ name: 'CODTIPPARC', referencedColumnName: 'codtipparc' }])
  codtipparc: TgftppEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfcbcos)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tfcbcos)
  @JoinColumn([{ name: 'UFCPS', referencedColumnName: 'coduf' }])
  ufcps: TsiufsEntity;

  @OneToMany(() => TfccarEntity, (tfccarEntity) => tfccarEntity.nucurriculo2)
  tfccars: TfccarEntity[];

  @OneToMany(() => TfccurEntity, (tfccurEntity) => tfccurEntity.nucurriculo2)
  tfccurs: TfccurEntity[];

  @OneToMany(() => TfcdepEntity, (tfcdepEntity) => tfcdepEntity.nucurriculo2)
  tfcdeps: TfcdepEntity[];

  @OneToMany(() => TfcexpEntity, (tfcexpEntity) => tfcexpEntity.nucurriculo2)
  tfcexps: TfcexpEntity[];

  @ManyToMany(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.tfcbcos)
  @JoinTable({
    name: 'TFCFCO',
    joinColumns: [{ name: 'NUCURRICULO', referencedColumnName: 'nucurriculo' }],
    inverseJoinColumns: [
      { name: 'CODFUNCAO', referencedColumnName: 'codfuncao' },
    ],
    schema: 'SANKHYA',
  })
  tfpfcos: TfpfcoEntity[];

  @ManyToMany(() => TfpperEntity, (tfpperEntity) => tfpperEntity.tfcbcos)
  @JoinTable({
    name: 'TFCPER',
    joinColumns: [{ name: 'NUCURRICULO', referencedColumnName: 'nucurriculo' }],
    inverseJoinColumns: [
      { name: 'CODPERFIL', referencedColumnName: 'codperfil' },
    ],
    schema: 'SANKHYA',
  })
  tfppers: TfpperEntity[];

  @OneToMany(() => TfctelEntity, (tfctelEntity) => tfctelEntity.nucurriculo2)
  tfctels: TfctelEntity[];

  @OneToMany(() => TrscanEntity, (trscanEntity) => trscanEntity.nucurriculo2)
  trscans: TrscanEntity[];

  @OneToMany(() => TrsponEntity, (trsponEntity) => trsponEntity.nucurriculo2)
  trspons: TrsponEntity[];
}
