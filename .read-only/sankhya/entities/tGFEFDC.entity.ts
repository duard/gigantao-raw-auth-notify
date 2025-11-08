import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDC', ['codemp', 'dtref'], { unique: true })
@Entity('TGFEFDC', { schema: 'SANKHYA' })
export class TgfefdcEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { name: 'VERSAOLAYOUT', nullable: true })
  versaolayout: number | null;

  @Column('char', { name: 'ARQCONFIRMADO', length: 1, default: () => "'N'" })
  arqconfirmado: string;

  @Column('text', { name: 'CONFIG', nullable: true })
  config: string | null;

  @Column('varchar', { name: 'NOMEARQUIVO', nullable: true, length: 100 })
  nomearquivo: string | null;
}
