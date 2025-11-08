import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tgfcat42Entity } from './tGFCAT42.entity';

@Index(
  'PK_TGFCAT42R1050',
  ['codemp', 'dtinicial', 'dtfinal', 'reg', 'codprod'],
  { unique: true },
)
@Entity('TGFCAT42R1050', { schema: 'SANKHYA' })
export class Tgfcat42R1050Entity {
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

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'NUNOTAENTREC', nullable: true })
  nunotaentrec: number | null;

  @Column('datetime', { name: 'DTENTREC', nullable: true })
  dtentrec: Date | null;

  @Column('float', { name: 'VLRUNITENTREC', nullable: true, precision: 53 })
  vlrunitentrec: number | null;

  @Column('char', { name: 'TIPODIVERGENCIA', nullable: true, length: 1 })
  tipodivergencia: string | null;

  @ManyToOne(
    () => Tgfcat42Entity,
    (tgfcat42Entity) => tgfcat42Entity.tgfcat42R1s,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTINICIAL', referencedColumnName: 'dtinicial' },
    { name: 'DTFINAL', referencedColumnName: 'dtfinal' },
  ])
  tgfcat: Tgfcat42Entity;
}
