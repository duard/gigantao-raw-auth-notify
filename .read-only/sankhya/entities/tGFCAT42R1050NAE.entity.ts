import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFCAT42R1050NAE',
  ['codemp', 'dtinicial', 'dtfinal', 'reg', 'codprod', 'nunota', 'sequencia'],
  { unique: true },
)
@Entity('TGFCAT42R1050NAE', { schema: 'SANKHYA' })
export class Tgfcat42R1050NaeEntity {
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

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'QTDNEG', precision: 53 })
  qtdneg: number;

  @Column('smallint', { name: 'CODTRIB', nullable: true })
  codtrib: number | null;

  @Column('float', { name: 'BASESUBSTIT', nullable: true, precision: 53 })
  basesubstit: number | null;

  @Column('float', { name: 'VLRSUBST', nullable: true, precision: 53 })
  vlrsubst: number | null;

  @Column('float', { name: 'BASESUBSTITUNIT', nullable: true, precision: 53 })
  basesubstitunit: number | null;

  @Column('float', { name: 'VLRSUBSTUNIT', nullable: true, precision: 53 })
  vlrsubstunit: number | null;

  @Column('char', { name: 'TIPONOTA', length: 1, default: () => "'I'" })
  tiponota: string;

  @Column('char', { name: 'TIPMOV', length: 1 })
  tipmov: string;

  @Column('float', { name: 'VLRUNIT', nullable: true, precision: 53 })
  vlrunit: number | null;

  @Column('datetime', { name: 'DTENT', nullable: true })
  dtent: Date | null;

  @Column('float', { name: 'VLRICMS', nullable: true, precision: 53 })
  vlricms: number | null;

  @Column('float', { name: 'VLRICMSUNIT', nullable: true, precision: 53 })
  vlricmsunit: number | null;
}
