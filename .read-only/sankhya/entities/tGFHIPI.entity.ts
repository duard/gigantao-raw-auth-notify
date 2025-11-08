import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFHIPI', ['id'], { unique: true })
@Entity('TGFHIPI', { schema: 'SANKHYA' })
export class TgfhipiEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('varchar', { name: 'CODFISIPI', nullable: true, length: 10 })
  codfisipi: string | null;

  @Column('float', { name: 'PERCENTUAL', nullable: true, precision: 53 })
  percentual: number | null;

  @Column('float', { name: 'VLRPAUTA', nullable: true, precision: 53 })
  vlrpauta: number | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 60 })
  descricao: string | null;

  @Column('smallint', { name: 'CODEXNCM', nullable: true })
  codexncm: number | null;

  @Column('smallint', { name: 'CODEXII', nullable: true })
  codexii: number | null;

  @Column('float', { name: 'ALIQII', nullable: true, precision: 53 })
  aliqii: number | null;

  @Column('float', { name: 'PERCPIS', nullable: true, precision: 53 })
  percpis: number | null;

  @Column('float', { name: 'PERCCOFINS', nullable: true, precision: 53 })
  perccofins: number | null;

  @Column('float', { name: 'PERCCSSL', nullable: true, precision: 53 })
  perccssl: number | null;

  @Column('float', { name: 'ALIQICMS', nullable: true, precision: 53 })
  aliqicms: number | null;

  @Column('smallint', { name: 'CODEXIPI', nullable: true })
  codexipi: number | null;

  @Column('smallint', { name: 'CSTIPIENT', nullable: true })
  cstipient: number | null;

  @Column('smallint', { name: 'CSTIPISAI', nullable: true })
  cstipisai: number | null;

  @Column('varchar', { name: 'CODSTII', nullable: true, length: 1 })
  codstii: string | null;

  @Column('float', { name: 'PERCIMPORTACAO', nullable: true, precision: 53 })
  percimportacao: number | null;

  @Column('smallint', { name: 'CODENQIPIENT', nullable: true })
  codenqipient: number | null;

  @Column('smallint', { name: 'CODENQIPISAI', nullable: true })
  codenqipisai: number | null;

  @Column('float', { name: 'PERCREDVLRIPI', nullable: true, precision: 53 })
  percredvlripi: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('smallint', { name: 'CODIPI', nullable: true })
  codipi: number | null;
}
