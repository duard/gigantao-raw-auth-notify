import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIEXT', ['codextracao'], { unique: true })
@Entity('TSIEXT', { schema: 'SANKHYA' })
export class TsiextEntity {
  @Column('int', { primary: true, name: 'CODEXTRACAO' })
  codextracao: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('varchar', { name: 'CATEGORIA', nullable: true, length: 50 })
  categoria: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', { name: 'FORMATO', length: 5 })
  formato: string;

  @Column('varchar', { name: 'DESTINOARQUIVO', length: 10 })
  destinoarquivo: string;

  @Column('varchar', { name: 'NOMEARQUIVO', nullable: true, length: 20 })
  nomearquivo: string | null;

  @Column('varchar', { name: 'INCLUIRDATA', nullable: true, length: 1 })
  incluirdata: string | null;

  @Column('varchar', { name: 'INCLUIRHORA', nullable: true, length: 1 })
  incluirhora: string | null;

  @Column('varchar', { name: 'COMPACTAR', nullable: true, length: 10 })
  compactar: string | null;

  @Column('varchar', { name: 'CODIFICACAO', nullable: true, length: 10 })
  codificacao: string | null;

  @Column('varchar', { name: 'ATIVO', nullable: true, length: 1 })
  ativo: string | null;

  @Column('varchar', { name: 'FONTEDADOS', length: 50 })
  fontedados: string;

  @Column('text', { name: 'CONSULTA' })
  consulta: string;

  @Column('varchar', { name: 'TIPGATILHO', nullable: true, length: 1 })
  tipgatilho: string | null;

  @Column('varchar', { name: 'EXPGATILHO', nullable: true, length: 100 })
  expgatilho: string | null;

  @Column('varchar', { name: 'TIPINTERVALO', nullable: true, length: 1 })
  tipintervalo: string | null;

  @Column('int', { name: 'VLRINTERVALO', nullable: true })
  vlrintervalo: number | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('datetime', { name: 'DHULTEXEC', nullable: true })
  dhultexec: Date | null;

  @Column('int', { name: 'TEMPOPROCESSAMENTO', nullable: true })
  tempoprocessamento: number | null;

  @Column('text', { name: 'LOGERRO', nullable: true })
  logerro: string | null;
}
