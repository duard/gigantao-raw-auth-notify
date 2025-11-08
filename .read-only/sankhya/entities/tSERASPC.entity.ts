import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERASPC', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERASPC', { schema: 'SANKHYA' })
export class TseraspcEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('datetime', { name: 'DATINC', nullable: true })
  datinc: Date | null;

  @Column('datetime', { name: 'DATVEN', nullable: true })
  datven: Date | null;

  @Column('varchar', { name: 'TPOPER', nullable: true, length: 1 })
  tpoper: string | null;

  @Column('varchar', { name: 'NUMCON', nullable: true, length: 30 })
  numcon: string | null;

  @Column('float', { name: 'VLRDEB', nullable: true, precision: 53 })
  vlrdeb: number | null;

  @Column('varchar', { name: 'NOMASS', nullable: true, length: 60 })
  nomass: string | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CIDADE', nullable: true, length: 30 })
  cidade: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('varchar', { name: 'NOMCON', nullable: true, length: 60 })
  nomcon: string | null;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 30 })
  origem: string | null;

  @Column('int', { name: 'QTDOCOR', nullable: true })
  qtdocor: number | null;

  @Column('int', { name: 'TOTDEB', nullable: true })
  totdeb: number | null;

  @Column('varchar', { name: 'MENSAGEM', nullable: true, length: 80 })
  mensagem: string | null;
}
