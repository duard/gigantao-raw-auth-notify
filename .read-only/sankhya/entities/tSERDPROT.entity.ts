import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERDPROT', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERDPROT', { schema: 'SANKHYA' })
export class TserdprotEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('datetime', { name: 'DTOCORR', nullable: true })
  dtocorr: Date | null;

  @Column('varchar', { name: 'TIPOMOEDA', nullable: true, length: 3 })
  tipomoeda: string | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('smallint', { name: 'CARTORIO', nullable: true })
  cartorio: number | null;

  @Column('varchar', { name: 'CIDADE', nullable: true, length: 25 })
  cidade: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('smallint', { name: 'QTDEOCORR', nullable: true })
  qtdeocorr: number | null;

  @Column('datetime', { name: 'DTPROT', nullable: true })
  dtprot: Date | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
