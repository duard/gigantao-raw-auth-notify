import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERSCRS', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERSCRS', { schema: 'SANKHYA' })
export class TserscrsEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'DOC', nullable: true })
  doc: number | null;

  @Column('int', { name: 'FILIAL', nullable: true })
  filial: number | null;

  @Column('int', { name: 'DIGITO', nullable: true })
  digito: number | null;

  @Column('int', { name: 'SEQ', nullable: true })
  seq: number | null;

  @Column('varchar', { name: 'VINCULO', nullable: true, length: 50 })
  vinculo: string | null;

  @Column('varchar', { name: 'NOME', nullable: true, length: 50 })
  nome: string | null;

  @Column('int', { name: 'RCSFATOR', nullable: true })
  rcsfator: number | null;

  @Column('varchar', { name: 'FAIXA', nullable: true, length: 50 })
  faixa: string | null;

  @Column('float', { name: 'TAXA', nullable: true, precision: 53 })
  taxa: number | null;

  @Column('varchar', { name: 'CGC', nullable: true, length: 20 })
  cgc: string | null;
}
