import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFPFR', ['codemp', 'dtref'], { unique: true })
@Entity('TGFEFDFPFR', { schema: 'SANKHYA' })
export class TgfefdfpfrEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('datetime', { name: 'DTINI' })
  dtini: Date;

  @Column('datetime', { name: 'DTFIM' })
  dtfim: Date;

  @Column('varchar', { name: 'UF', nullable: true, length: 5 })
  uf: string | null;

  @Column('varchar', { name: 'CBXFINALIDADE', nullable: true, length: 2 })
  cbxfinalidade: string | null;

  @Column('datetime', { name: 'DTINVENTARIO', nullable: true })
  dtinventario: Date | null;

  @Column('datetime', { name: 'DTK200CTE', nullable: true })
  dtk200Cte: Date | null;

  @Column('varchar', { name: 'PERFILEFD', nullable: true, length: 20 })
  perfilefd: string | null;

  @Column('int', { name: 'NROUNICO', nullable: true })
  nrounico: number | null;

  @Column('text', { name: 'CONFIGOPCOES', nullable: true })
  configopcoes: string | null;

  @Column('text', { name: 'CONFIGREST', nullable: true })
  configrest: string | null;

  @Column('datetime', { name: 'DTINVENTARIOSUBBLOK', nullable: true })
  dtinventariosubblok: Date | null;
}
