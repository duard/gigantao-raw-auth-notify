import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERDAJ', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERDAJ', { schema: 'SANKHYA' })
export class TserdajEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('datetime', { name: 'DTOCORR', nullable: true })
  dtocorr: Date | null;

  @Column('varchar', { name: 'NATUREZA', nullable: true, length: 20 })
  natureza: string | null;

  @Column('varchar', { name: 'PRINCIPAL', nullable: true, length: 1 })
  principal: string | null;

  @Column('varchar', { name: 'TIPOMOEDA', nullable: true, length: 3 })
  tipomoeda: string | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('smallint', { name: 'DISTRIBUID', nullable: true })
  distribuid: number | null;

  @Column('smallint', { name: 'VARA', nullable: true })
  vara: number | null;

  @Column('varchar', { name: 'CIDADE', nullable: true, length: 25 })
  cidade: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('smallint', { name: 'QTDEOCORR', nullable: true })
  qtdeocorr: number | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
