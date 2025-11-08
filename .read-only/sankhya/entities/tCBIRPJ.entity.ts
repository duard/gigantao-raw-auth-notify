import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcbempEntity } from './tCBEMP.entity';
import { TcbirpjadEntity } from './tCBIRPJAD.entity';
import { TcbirpjdarfEntity } from './tCBIRPJDARF.entity';
import { TcbirpjexEntity } from './tCBIRPJEX.entity';
import { TcbirpjnfretEntity } from './tCBIRPJNFRET.entity';
import { TcbirpjpcompEntity } from './tCBIRPJPCOMP.entity';
import { TcbirpjrecEntity } from './tCBIRPJREC.entity';

@Index('PK_TCBIRPJ', ['codemp', 'referencia'], { unique: true })
@Entity('TCBIRPJ', { schema: 'SANKHYA' })
export class TcbirpjEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('float', { name: 'LUCROANTESIR', nullable: true, precision: 53 })
  lucroantesir: number | null;

  @Column('float', { name: 'TOTALADICOES', nullable: true, precision: 53 })
  totaladicoes: number | null;

  @Column('float', { name: 'TOTALEXCLUSOES', nullable: true, precision: 53 })
  totalexclusoes: number | null;

  @Column('float', { name: 'BASEAJUSTADA', nullable: true, precision: 53 })
  baseajustada: number | null;

  @Column('float', { name: 'IRPJ15', nullable: true, precision: 53 })
  irpj15: number | null;

  @Column('float', { name: 'IRPJ10', nullable: true, precision: 53 })
  irpj10: number | null;

  @Column('float', { name: 'IMPOSTODEVIDO', nullable: true, precision: 53 })
  impostodevido: number | null;

  @Column('float', { name: 'VALORPAT', nullable: true, precision: 53 })
  valorpat: number | null;

  @Column('float', { name: 'DEDUCAOPAT', nullable: true, precision: 53 })
  deducaopat: number | null;

  @Column('float', { name: 'IMPOSTODEVIDOLIQ', nullable: true, precision: 53 })
  impostodevidoliq: number | null;

  @Column('float', { name: 'TOTALRECOLHIDO', nullable: true, precision: 53 })
  totalrecolhido: number | null;

  @Column('float', { name: 'SALDOARECOLHER', nullable: true, precision: 53 })
  saldoarecolher: number | null;

  @Column('float', { name: 'COMPENSACOES', nullable: true, precision: 53 })
  compensacoes: number | null;

  @Column('float', { name: 'IRPJRETIDO', nullable: true, precision: 53 })
  irpjretido: number | null;

  @Column('float', {
    name: 'IMPOSTOARECOLHERFINAL',
    nullable: true,
    precision: 53,
  })
  impostoarecolherfinal: number | null;

  @Column('float', {
    name: 'RECOLHIMENTOAVULSO',
    nullable: true,
    precision: 53,
  })
  recolhimentoavulso: number | null;

  @Column('float', { name: 'LUCROANTESIR_CSLL', nullable: true, precision: 53 })
  lucroantesirCsll: number | null;

  @Column('float', { name: 'TOTALADICOES_CSLL', nullable: true, precision: 53 })
  totaladicoesCsll: number | null;

  @Column('float', {
    name: 'TOTALEXCLUSOES_CSLL',
    nullable: true,
    precision: 53,
  })
  totalexclusoesCsll: number | null;

  @Column('float', { name: 'BASEAJUSTADA_CSLL', nullable: true, precision: 53 })
  baseajustadaCsll: number | null;

  @Column('float', { name: 'CSLL9', nullable: true, precision: 53 })
  csll9: number | null;

  @Column('float', {
    name: 'TOTALRECOLHIDO_CSLL',
    nullable: true,
    precision: 53,
  })
  totalrecolhidoCsll: number | null;

  @Column('float', {
    name: 'SALDOARECOLHER_CSLL',
    nullable: true,
    precision: 53,
  })
  saldoarecolherCsll: number | null;

  @Column('float', { name: 'COMPENSACOES_CSLL', nullable: true, precision: 53 })
  compensacoesCsll: number | null;

  @Column('float', { name: 'CSLLRETIDO', nullable: true, precision: 53 })
  csllretido: number | null;

  @Column('float', {
    name: 'IMPOSTOARECOLHERFINAL_CSLL',
    nullable: true,
    precision: 53,
  })
  impostoarecolherfinalCsll: number | null;

  @Column('float', {
    name: 'RECOLHIMENTOAVULSO_CSLL',
    nullable: true,
    precision: 53,
  })
  recolhimentoavulsoCsll: number | null;

  @Column('float', { name: 'VLRIRPJRETCOMP', nullable: true, precision: 53 })
  vlrirpjretcomp: number | null;

  @Column('float', { name: 'VLRCSLLRETCOMP', nullable: true, precision: 53 })
  vlrcsllretcomp: number | null;

  @Column('float', { name: 'RESLIQAJUS', nullable: true, precision: 53 })
  resliqajus: number | null;

  @Column('float', { name: 'COMPPREJUFIS', nullable: true, precision: 53 })
  compprejufis: number | null;

  @Column('float', { name: 'RESLIQAJUS_CSLL', nullable: true, precision: 53 })
  resliqajusCsll: number | null;

  @Column('float', { name: 'COMPBCNEG_CSLL', nullable: true, precision: 53 })
  compbcnegCsll: number | null;

  @Column('float', { name: 'DEDUOUTINC', nullable: true, precision: 53 })
  deduoutinc: number | null;

  @Column('char', { name: 'CONSCRESPECPARTEA', nullable: true, length: 1 })
  conscrespecpartea: string | null;

  @Column('char', {
    name: 'DEDUZPAT10',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  deduzpat10: string | null;

  @Column('float', { name: 'VLRIRPJCOMPPREJ', nullable: true, precision: 53 })
  vlrirpjcompprej: number | null;

  @Column('char', { name: 'FORMAAPUR', nullable: true, length: 1 })
  formaapur: string | null;

  @Column('float', {
    name: 'VLRIRPJCOMPPREJ_CSLL',
    nullable: true,
    precision: 53,
  })
  vlrirpjcompprejCsll: number | null;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbirpjs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @OneToMany(
    () => TcbirpjadEntity,
    (tcbirpjadEntity) => tcbirpjadEntity.tcbirpj,
  )
  tcbirpjads: TcbirpjadEntity[];

  @OneToMany(
    () => TcbirpjdarfEntity,
    (tcbirpjdarfEntity) => tcbirpjdarfEntity.tcbirpj,
  )
  tcbirpjdarves: TcbirpjdarfEntity[];

  @OneToMany(
    () => TcbirpjexEntity,
    (tcbirpjexEntity) => tcbirpjexEntity.tcbirpj,
  )
  tcbirpjexes: TcbirpjexEntity[];

  @OneToMany(
    () => TcbirpjnfretEntity,
    (tcbirpjnfretEntity) => tcbirpjnfretEntity.tcbirpj,
  )
  tcbirpjnfrets: TcbirpjnfretEntity[];

  @OneToMany(
    () => TcbirpjpcompEntity,
    (tcbirpjpcompEntity) => tcbirpjpcompEntity.tcbirpj,
  )
  tcbirpjpcomps: TcbirpjpcompEntity[];

  @OneToMany(
    () => TcbirpjrecEntity,
    (tcbirpjrecEntity) => tcbirpjrecEntity.tcbirpj,
  )
  tcbirpjrecs: TcbirpjrecEntity[];
}
