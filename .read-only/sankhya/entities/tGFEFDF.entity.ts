import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF', ['codemp', 'dtref'], { unique: true })
@Entity('TGFEFDF', { schema: 'SANKHYA' })
export class TgfefdfEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { name: 'VERSAOLAYOUT', nullable: true })
  versaolayout: number | null;

  @Column('char', { name: 'ARQCONFIRMADO', length: 1, default: () => "'N'" })
  arqconfirmado: string;

  @Column('varchar', { name: 'NOMEARQUIVO', nullable: true, length: 100 })
  nomearquivo: string | null;
}
