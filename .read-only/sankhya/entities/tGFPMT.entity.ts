import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfnpmtEntity } from './tGFNPMT.entity';
import { TgfmtpEntity } from './tGFMTP.entity';

@Index('PK_TGFPMT', ['codemp', 'dtmtp', 'codprod'], { unique: true })
@Entity('TGFPMT', { schema: 'SANKHYA' })
export class TgfpmtEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTMTP' })
  dtmtp: Date;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { name: 'NUNOTACOMPRA', nullable: true })
  nunotacompra: number | null;

  @Column('int', { name: 'CODPARCCOMPRA', nullable: true })
  codparccompra: number | null;

  @Column('float', { name: 'QTDEST', precision: 53, default: () => '(0)' })
  qtdest: number;

  @Column('smallint', { name: 'CST', default: () => '(0)' })
  cst: number;

  @Column('float', {
    name: 'VLRUNITCUSTO',
    precision: 53,
    default: () => '(0)',
  })
  vlrunitcusto: number;

  @Column('float', { name: 'MVA', precision: 53, default: () => '(0)' })
  mva: number;

  @Column('float', { name: 'ALIQST', precision: 53, default: () => '(0)' })
  aliqst: number;

  @Column('float', { name: 'ALIQICMS', precision: 53, default: () => '(0)' })
  aliqicms: number;

  @Column('float', { name: 'BASEICMS', precision: 53, default: () => '(0)' })
  baseicms: number;

  @Column('float', { name: 'VLRICMS', precision: 53, default: () => '(0)' })
  vlricms: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('varchar', {
    name: 'DIGITADO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  digitado: string | null;

  @Column('int', { name: 'IDALIQ', nullable: true })
  idaliq: number | null;

  @Column('varchar', { name: 'NCM', nullable: true, length: 10 })
  ncm: string | null;

  @Column('varchar', { name: 'USOPROD', nullable: true, length: 1 })
  usoprod: string | null;

  @Column('int', { name: 'CODGRUPOPROD', nullable: true })
  codgrupoprod: number | null;

  @Column('float', {
    name: 'VLRICMSCOMPRA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlricmscompra: number | null;

  @Column('varchar', { name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('float', { name: 'BASESUBSTITCOMPRA', nullable: true, precision: 53 })
  basesubstitcompra: number | null;

  @Column('float', { name: 'BASESUBSTIT', nullable: true, precision: 53 })
  basesubstit: number | null;

  @Column('float', { name: 'VLRICMSUNIT', nullable: true, precision: 53 })
  vlricmsunit: number | null;

  @Column('float', { name: 'BASESTESTOQUE', nullable: true, precision: 53 })
  basestestoque: number | null;

  @Column('char', { name: 'VLRCUSUTIL', nullable: true, length: 1 })
  vlrcusutil: string | null;

  @Column('float', { name: 'VLRICMSST', nullable: true, precision: 53 })
  vlricmsst: number | null;

  @Column('float', { name: 'BASEICMSST', nullable: true, precision: 53 })
  baseicmsst: number | null;

  @Column('varchar', { name: 'CSTANTERIOR', nullable: true, length: 3 })
  cstanterior: string | null;

  @Column('int', { name: 'IDALIQANTERIOR', nullable: true })
  idaliqanterior: number | null;

  @OneToMany(() => TgfnpmtEntity, (tgfnpmtEntity) => tgfnpmtEntity.tgfpmt)
  tgfnpmts: TgfnpmtEntity[];

  @ManyToOne(() => TgfmtpEntity, (tgfmtpEntity) => tgfmtpEntity.tgfpmts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTMTP', referencedColumnName: 'dtmtp' },
  ])
  tgfmtp: TgfmtpEntity;
}
