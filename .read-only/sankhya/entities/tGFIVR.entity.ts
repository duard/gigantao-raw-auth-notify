import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcvrEntity } from './tGFCVR.entity';
import { TlfdinvrEntity } from './tLFDINVR.entity';

@Index('PK_TGFIVR', ['nucvr', 'seqivr'], { unique: true })
@Entity('TGFIVR', { schema: 'SANKHYA' })
export class TgfivrEntity {
  @Column('int', { primary: true, name: 'NUCVR' })
  nucvr: number;

  @Column('smallint', { primary: true, name: 'SEQIVR' })
  seqivr: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'USOPROD', nullable: true, length: 1 })
  usoprod: string | null;

  @Column('varchar', { name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('smallint', { name: 'CODVEND', nullable: true })
  codvend: number | null;

  @Column('int', { name: 'CODLOCALORIG', nullable: true })
  codlocalorig: number | null;

  @Column('int', { name: 'CODLOCALTERC', nullable: true })
  codlocalterc: number | null;

  @Column('varchar', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'NUTAB', nullable: true })
  nutab: number | null;

  @Column('int', { name: 'NUPROMOCAO', nullable: true })
  nupromocao: number | null;

  @Column('float', { name: 'QTDNEG', precision: 53, default: () => '(0)' })
  qtdneg: number;

  @Column('float', { name: 'PRECOBASE', precision: 53, default: () => '(0)' })
  precobase: number;

  @Column('float', { name: 'VLRUNIT', precision: 53, default: () => '(0)' })
  vlrunit: number;

  @Column('float', { name: 'PERCDESC', precision: 53, default: () => '(0)' })
  percdesc: number;

  @Column('float', { name: 'VLRDESC', precision: 53, default: () => '(0)' })
  vlrdesc: number;

  @Column('float', {
    name: 'VLRACRESDESC',
    precision: 53,
    default: () => '(0)',
  })
  vlracresdesc: number;

  @Column('float', { name: 'VLRCUS', precision: 53, default: () => '(0)' })
  vlrcus: number;

  @Column('float', { name: 'BASEIPI', precision: 53, default: () => '(0)' })
  baseipi: number;

  @Column('float', { name: 'VLRIPI', precision: 53, default: () => '(0)' })
  vlripi: number;

  @Column('float', { name: 'ALIQICMS', precision: 53, default: () => '(0)' })
  aliqicms: number;

  @Column('float', { name: 'BASEICMS', precision: 53, default: () => '(0)' })
  baseicms: number;

  @Column('float', { name: 'VLRICMS', precision: 53, default: () => '(0)' })
  vlricms: number;

  @Column('float', { name: 'BASESUBSTIT', precision: 53, default: () => '(0)' })
  basesubstit: number;

  @Column('float', { name: 'VLRSUBST', precision: 53, default: () => '(0)' })
  vlrsubst: number;

  @Column('float', { name: 'ALIQISS', precision: 53, default: () => '(0)' })
  aliqiss: number;

  @Column('float', { name: 'BASEISS', precision: 53, default: () => '(0)' })
  baseiss: number;

  @Column('float', { name: 'VLRISS', precision: 53, default: () => '(0)' })
  vlriss: number;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;

  @Column('float', {
    name: 'ALIQIPI',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  aliqipi: number | null;

  @Column('int', { name: 'CODCFO', nullable: true })
  codcfo: number | null;

  @Column('int', { name: 'IDALIQICMS', nullable: true })
  idaliqicms: number | null;

  @Column('float', { name: 'PERCDESCDIGITADO', nullable: true, precision: 53 })
  percdescdigitado: number | null;

  @Column('float', { name: 'VLRDESCDIGITADO', nullable: true, precision: 53 })
  vlrdescdigitado: number | null;

  @Column('float', { name: 'PERCDESCTGFDES', nullable: true, precision: 53 })
  percdesctgfdes: number | null;

  @Column('float', { name: 'VLRVENDAPROMO', nullable: true, precision: 53 })
  vlrvendapromo: number | null;

  @Column('char', { name: 'TIPLANCNOTA', nullable: true, length: 1 })
  tiplancnota: string | null;

  @Column('float', { name: 'VLRUNITLIQ', nullable: true, precision: 53 })
  vlrunitliq: number | null;

  @Column('char', { name: 'PAINELPERSONALIZADO', nullable: true, length: 1 })
  painelpersonalizado: string | null;

  @Column('smallint', { name: 'CODTRIB', nullable: true })
  codtrib: number | null;

  @Column('smallint', { name: 'NUFOP', nullable: true })
  nufop: number | null;

  @Column('varchar', { name: 'CODBENEFNAUF', nullable: true, length: 10 })
  codbenefnauf: string | null;

  @ManyToOne(() => TgfcvrEntity, (tgfcvrEntity) => tgfcvrEntity.tgfivrs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUCVR', referencedColumnName: 'nucvr' }])
  nucvr2: TgfcvrEntity;

  @OneToMany(() => TlfdinvrEntity, (tlfdinvrEntity) => tlfdinvrEntity.tgfivr)
  tlfdinvrs: TlfdinvrEntity[];
}
