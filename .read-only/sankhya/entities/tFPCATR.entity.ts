import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsiendEntity } from './tSIEND.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpambEntity } from './tFPAMB.entity';

@Index('PK_TFPCATR', ['nucat'], { unique: true })
@Entity('TFPCATR', { schema: 'SANKHYA' })
export class TfpcatrEntity {
  @Column('int', { primary: true, name: 'NUCAT' })
  nucat: number;

  @Column('datetime', { name: 'DTCAT' })
  dtcat: Date;

  @Column('smallint', { name: 'EMITENTE', nullable: true })
  emitente: number | null;

  @Column('varchar', { name: 'NUMEROCAT', nullable: true, length: 23 })
  numerocat: string | null;

  @Column('datetime', { name: 'DTACIDENTE' })
  dtacidente: Date;

  @Column('smallint', { name: 'HRACIDENTE', nullable: true })
  hracidente: number | null;

  @Column('smallint', { name: 'HORASTRAB', nullable: true })
  horastrab: number | null;

  @Column('smallint', { name: 'TIPACIDENTE' })
  tipacidente: number;

  @Column('smallint', { name: 'TIPCAT' })
  tipcat: number;

  @Column('char', { name: 'INDCATPARCIAL', length: 1, default: () => "'N'" })
  indcatparcial: string;

  @Column('char', { name: 'INDCATOBITO', length: 1, default: () => "'N'" })
  indcatobito: string;

  @Column('char', { name: 'COMUNPOLICIAL', length: 1, default: () => "'N'" })
  comunpolicial: string;

  @Column('varchar', { name: 'CODSITGERADORA', length: 9 })
  codsitgeradora: string;

  @Column('smallint', { name: 'TIPLOCALCAT' })
  tiplocalcat: number;

  @Column('varchar', { name: 'DESCRLOCALCAT', nullable: true, length: 80 })
  descrlocalcat: string | null;

  @Column('varchar', { name: 'NUMENDLOCALCAT', length: 10 })
  numendlocalcat: string;

  @Column('varchar', { name: 'CNPJTOMADOR', nullable: true, length: 14 })
  cnpjtomador: string | null;

  @Column('int', { name: 'CODCNES', nullable: true })
  codcnes: number | null;

  @Column('datetime', { name: 'DTATENDIMENTO' })
  dtatendimento: Date;

  @Column('smallint', { name: 'HRATENDIMENTO' })
  hratendimento: number;

  @Column('char', { name: 'INDINTERNACAO', length: 1, default: () => "'N'" })
  indinternacao: string;

  @Column('smallint', { name: 'DURTRATAMENTO' })
  durtratamento: number;

  @Column('char', { name: 'INDAFASTAMENTO', length: 1, default: () => "'N'" })
  indafastamento: string;

  @Column('varchar', { name: 'DESCLESAO', length: 200 })
  desclesao: string;

  @Column('varchar', { name: 'DESCLESAOCOMP', length: 200 })
  desclesaocomp: string;

  @Column('varchar', { name: 'DIAGPROVAVEL', nullable: true, length: 100 })
  diagprovavel: string | null;

  @Column('varchar', { name: 'CODCIDATESTADO', length: 5 })
  codcidatestado: string;

  @Column('varchar', { name: 'OBSERVACOES', nullable: true, length: 250 })
  observacoes: string | null;

  @Column('varchar', { name: 'NOMEEMITENTE', nullable: true, length: 70 })
  nomeemitente: string | null;

  @Column('varchar', { name: 'NROC', length: 14 })
  nroc: string;

  @Column('varchar', { name: 'UFOC', length: 2 })
  ufoc: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('smallint', { name: 'INICIATCAT', nullable: true })
  iniciatcat: number | null;

  @Column('varchar', { name: 'OBSERVACAOCAT', nullable: true, length: 200 })
  observacaocat: string | null;

  @Column('smallint', { name: 'IDEOC', nullable: true })
  ideoc: number | null;

  @Column('varchar', { name: 'CODNATLESAO', nullable: true, length: 9 })
  codnatlesao: string | null;

  @Column('varchar', { name: 'TPACID', nullable: true, length: 6 })
  tpacid: string | null;

  @Column('varchar', { name: 'COMPLEMENTO', nullable: true, length: 30 })
  complemento: string | null;

  @Column('smallint', { name: 'CODBAI', nullable: true })
  codbai: number | null;

  @Column('varchar', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('varchar', { name: 'CODPOSTAL', nullable: true, length: 12 })
  codpostal: string | null;

  @Column('datetime', { name: 'DTOBITO', nullable: true })
  dtobito: Date | null;

  @Column('varchar', { name: 'CPFEMITENTE', nullable: true, length: 11 })
  cpfemitente: string | null;

  @Column('datetime', { name: 'DTULTDIATRAB', nullable: true })
  dtultdiatrab: Date | null;

  @Column('char', { name: 'HOUVEAFAST', nullable: true, length: 1 })
  houveafast: string | null;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 23 })
  nrorecibo: string | null;

  @Column('int', { name: 'CODPAIS', nullable: true })
  codpais: number | null;

  @Column('varchar', { name: 'CODAGENTECAUSADOR', nullable: true, length: 9 })
  codagentecausador: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpcatrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tfpcatrs)
  @JoinColumn([{ name: 'CODCIDLOCALCAT', referencedColumnName: 'codcid' }])
  codcidlocalcat: TsicidEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.tfpcatrs)
  @JoinColumn([{ name: 'CODENDLOCALCAT', referencedColumnName: 'codend' }])
  codendlocalcat: TsiendEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpcatrs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpambEntity, (tfpambEntity) => tfpambEntity.tfpcatrs)
  @JoinColumn([{ name: 'CODAMB', referencedColumnName: 'codamb' }])
  codamb: TfpambEntity;

  @ManyToOne(() => TfpcatrEntity, (tfpcatrEntity) => tfpcatrEntity.tfpcatrs)
  @JoinColumn([{ name: 'NUCATORIG', referencedColumnName: 'nucat' }])
  nucatorig: TfpcatrEntity;

  @OneToMany(() => TfpcatrEntity, (tfpcatrEntity) => tfpcatrEntity.nucatorig)
  tfpcatrs: TfpcatrEntity[];
}
