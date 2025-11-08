import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TgfdepEntity } from './tGFDEP.entity';
import { TgfntaEntity } from './tGFNTA.entity';
import { TgflocEntity } from './tGFLOC.entity';

@Index('PK_TGFDES', ['nupromocao'], { unique: true })
@Index('TGFDES_I01', ['tippromocao', 'nupromocao'], {})
@Index(
  'TGFDES_I02',
  [
    'dtinicial',
    'dtfinal',
    'grupodescparc',
    'codparc',
    'grupodescprod',
    'codprod',
    'codemp',
    'codlocal',
    'tippromocao',
    'grupodescvend',
    'codvend',
    'codtab',
    'codvol',
    'controle',
  ],
  { unique: true },
)
@Index('TGFDES_U01', ['nupromocao'], { unique: true })
@Entity('TGFDES', { schema: 'SANKHYA' })
export class TgfdesEntity {
  @Column('datetime', { name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { name: 'DTFINAL' })
  dtfinal: Date;

  @Column('char', { name: 'GRUPODESCPARC', length: 15 })
  grupodescparc: string;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('char', { name: 'GRUPODESCPROD', length: 15 })
  grupodescprod: string;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('float', { name: 'PERCENTUAL', nullable: true, precision: 53 })
  percentual: number | null;

  @Column('money', { name: 'VLRDESC', default: () => '(0)' })
  vlrdesc: number;

  @Column('float', { name: 'PERCDESCBONIF', nullable: true, precision: 53 })
  percdescbonif: number | null;

  @Column('smallint', { name: 'CODEMP', default: () => '(0)' })
  codemp: number;

  @Column('int', { name: 'CODLOCAL', default: () => '(0)' })
  codlocal: number;

  @Column('char', { name: 'AVISARVCT', length: 1, default: () => "'S'" })
  avisarvct: string;

  @Column('varchar', { name: 'TIPPROMOCAO', length: 1, default: () => "'P'" })
  tippromocao: string;

  @Column('varchar', { name: 'DESCRPROMOCAO', nullable: true, length: 60 })
  descrpromocao: string | null;

  @Column('varchar', {
    name: 'GRUPODESCVEND',
    length: 15,
    default: () => "'***************'",
  })
  grupodescvend: string;

  @Column('int', { primary: true, name: 'NUPROMOCAO', default: () => '(0)' })
  nupromocao: number;

  @Column('smallint', { name: 'CODVEND', default: () => '(0)' })
  codvend: number;

  @Column('varchar', {
    name: 'USADESCQTD',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  usadescqtd: string | null;

  @Column('smallint', { name: 'CODTAB', nullable: true })
  codtab: number | null;

  @Column('float', { name: 'VLRVENDA', nullable: true, precision: 53 })
  vlrvenda: number | null;

  @Column('char', { name: 'LIQUIDACAO', length: 1, default: () => "'N'" })
  liquidacao: string;

  @Column('char', { name: 'APLICDESCPORLOCAL', nullable: true, length: 1 })
  aplicdescporlocal: string | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('char', { name: 'ATUNUVERSAO', nullable: true, length: 1 })
  atunuversao: string | null;

  @Column('char', { name: 'CODVOL', nullable: true, length: 2 })
  codvol: string | null;

  @Column('varchar', { name: 'CONTROLE', nullable: true, length: 11 })
  controle: string | null;

  @Column('varchar', { name: 'USADESCCTRL', nullable: true, length: 1 })
  usadescctrl: string | null;

  @Column('char', { name: 'USADESCESP', nullable: true, length: 1 })
  usadescesp: string | null;

  @OneToOne(() => TgfdepEntity, (tgfdepEntity) => tgfdepEntity.nupromocao2)
  tgfdep: TgfdepEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgfdes)
  @JoinColumn([{ name: 'CODTAB', referencedColumnName: 'codtab' }])
  codtab2: TgfntaEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfdes)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;
}
