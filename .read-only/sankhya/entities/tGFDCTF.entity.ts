import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfdctfparEntity } from './tGFDCTFPAR.entity';
import { Tgfdctfr10Entity } from './tGFDCTFR10.entity';
import { TgfdctfrecEntity } from './tGFDCTFREC.entity';
import { Tgfdctft9Entity } from './tGFDCTFT9.entity';

@Index('PK_TGFDCTF', ['codemp', 'dtref'], { unique: true })
@Entity('TGFDCTF', { schema: 'SANKHYA' })
export class TgfdctfEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    name: 'RETIFICADORA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  retificadora: string | null;

  @Column('varchar', { name: 'NUMRECIBO', nullable: true, length: 12 })
  numrecibo: string | null;

  @Column('varchar', { name: 'REPRESENTANTEPJ', length: 1 })
  representantepj: string;

  @Column('int', { name: 'CODSIGREPRESENTANTE', nullable: true })
  codsigrepresentante: number | null;

  @Column('varchar', { name: 'RESPONSAVELPR', length: 1 })
  responsavelpr: string;

  @Column('int', { name: 'CODSIGPREENCHIMENTO', nullable: true })
  codsigpreenchimento: number | null;

  @Column('varchar', { name: 'SITUACAO', length: 2 })
  situacao: string;

  @Column('datetime', { name: 'DTEVENTO', nullable: true })
  dtevento: Date | null;

  @Column('varchar', { name: 'FORMATRIB', length: 1 })
  formatrib: string;

  @Column('varchar', { name: 'QUALIFICACAOPJ', length: 2 })
  qualificacaopj: string;

  @Column('varchar', {
    name: 'PJBALANCO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  pjbalanco: string | null;

  @Column('varchar', {
    name: 'PJDEBITOS',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  pjdebitos: string | null;

  @Column('varchar', {
    name: 'PJOPTANTESN',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  pjoptantesn: string | null;

  @Column('varchar', {
    name: 'PJINATIVA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  pjinativa: string | null;

  @Column('varchar', { name: 'TIPOREGIME', nullable: true, length: 1 })
  tiporegime: string | null;

  @Column('varchar', { name: 'REGIMEAPURACAO', nullable: true, length: 1 })
  regimeapuracao: string | null;

  @Column('varchar', { name: 'SITUACAOPJMES', nullable: true, length: 1 })
  situacaopjmes: string | null;

  @Column('varchar', {
    name: 'BALANCORED',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  balancored: string | null;

  @Column('varchar', {
    name: 'TIPODIVSALDO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  tipodivsaldo: string | null;

  @Column('varchar', { name: 'DEBITOSCPINC', nullable: true, length: 1 })
  debitoscpinc: string | null;

  @Column('varchar', {
    name: 'ENVIARCPRB',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  enviarcprb: string | null;

  @Column('varchar', {
    name: 'PJCPRB',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  pjcprb: string | null;

  @Column('varchar', { name: 'REPROCESSATOT', nullable: true, length: 1 })
  reprocessatot: string | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfdctfs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @OneToMany(
    () => TgfdctfparEntity,
    (tgfdctfparEntity) => tgfdctfparEntity.tgfdctf,
  )
  tgfdctfpars: TgfdctfparEntity[];

  @OneToMany(
    () => Tgfdctfr10Entity,
    (tgfdctfr10Entity) => tgfdctfr10Entity.tgfdctf,
  )
  tgfdctfrs: Tgfdctfr10Entity[];

  @OneToMany(
    () => TgfdctfrecEntity,
    (tgfdctfrecEntity) => tgfdctfrecEntity.tgfdctf,
  )
  tgfdctfrecs: TgfdctfrecEntity[];

  @OneToMany(
    () => Tgfdctft9Entity,
    (tgfdctft9Entity) => tgfdctft9Entity.tgfdctf,
  )
  tgfdctfts: Tgfdctft9Entity[];
}
