import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDVMRSTDIA',
  ['codemp', 'dtref', 'codprod', 'tipimposto', 'tipmedia', 'dtmov'],
  {
    unique: true,
  },
)
@Entity('TGFEFDVMRSTDIA', { schema: 'SANKHYA' })
export class TgfefdvmrstdiaEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'TIPIMPOSTO', length: 1 })
  tipimposto: string;

  @Column('char', { primary: true, name: 'TIPMEDIA', length: 1 })
  tipmedia: string;

  @Column('datetime', { primary: true, name: 'DTMOV' })
  dtmov: Date;

  @Column('datetime', { name: 'DTCALCULO' })
  dtcalculo: Date;

  @Column('float', { name: 'QTDTOT', nullable: true, precision: 53 })
  qtdtot: number | null;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;

  @Column('float', { name: 'VLRUNITMED', nullable: true, precision: 53 })
  vlrunitmed: number | null;

  @Column('float', { name: 'QTDFIM', nullable: true, precision: 53 })
  qtdfim: number | null;

  @Column('float', { name: 'VLRFIM', nullable: true, precision: 53 })
  vlrfim: number | null;

  @Column('float', { name: 'QTDTOTSAI', nullable: true, precision: 53 })
  qtdtotsai: number | null;

  @Column('float', { name: 'QTDTOTENT', nullable: true, precision: 53 })
  qtdtotent: number | null;
}
