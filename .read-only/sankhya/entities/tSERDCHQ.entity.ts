import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERDCHQ', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERDCHQ', { schema: 'SANKHYA' })
export class TserdchqEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('datetime', { name: 'DTOCORR', nullable: true })
  dtocorr: Date | null;

  @Column('varchar', { name: 'NUMCHEQUE', nullable: true, length: 6 })
  numcheque: string | null;

  @Column('smallint', { name: 'ALINEA', nullable: true })
  alinea: number | null;

  @Column('smallint', { name: 'QTDE', nullable: true })
  qtde: number | null;

  @Column('varchar', { name: 'TIPOMOEDA', nullable: true, length: 3 })
  tipomoeda: string | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('varchar', { name: 'BANCO', nullable: true, length: 30 })
  banco: string | null;

  @Column('varchar', { name: 'AGENCIA', nullable: true, length: 4 })
  agencia: string | null;

  @Column('varchar', { name: 'CIDADE', nullable: true, length: 25 })
  cidade: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('smallint', { name: 'QTDEOCORR', nullable: true })
  qtdeocorr: number | null;

  @Column('varchar', { name: 'TIPOCONTA', nullable: true, length: 1 })
  tipoconta: string | null;

  @Column('smallint', { name: 'CONTA', nullable: true })
  conta: number | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
