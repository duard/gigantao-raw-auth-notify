import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFCAT42R1050DEL',
  ['codemp', 'dtinicial', 'dtfinal', 'reg', 'codprod'],
  {
    unique: true,
  },
)
@Entity('TGFCAT42R1050DEL', { schema: 'SANKHYA' })
export class Tgfcat42R1050DelEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', { primary: true, name: 'REG', length: 4 })
  reg: string;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'CODITEM', length: 60 })
  coditem: string;

  @Column('float', { name: 'QTDINI', nullable: true, precision: 53 })
  qtdini: number | null;

  @Column('float', { name: 'ICMSTOTINI', nullable: true, precision: 53 })
  icmstotini: number | null;

  @Column('float', { name: 'QTDFIM', nullable: true, precision: 53 })
  qtdfim: number | null;

  @Column('float', { name: 'ICMSTOTFIM', nullable: true, precision: 53 })
  icmstotfim: number | null;
}
