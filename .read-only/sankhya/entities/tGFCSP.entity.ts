import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFCSP', ['codmeta', 'codigo'], { unique: true })
@Entity('TGFCSP', { schema: 'SANKHYA' })
export class TgfcspEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('smallint', { primary: true, name: 'CODMETA' })
  codmeta: number;

  @Column('varchar', { name: 'DESCRCSP', length: 50 })
  descrcsp: string;

  @Column('varchar', { name: 'TIPOESTRUTURA', length: 1 })
  tipoestrutura: string;

  @Column('varchar', { name: 'RECDESP', nullable: true, length: 1 })
  recdesp: string | null;

  @Column('text', { name: 'ESTRUTURA', nullable: true })
  estrutura: string | null;

  @Column('text', { name: 'DETALHE', nullable: true })
  detalhe: string | null;
}
