import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFESF', ['codemp', 'dtarq'], { unique: true })
@Entity('TGFESF', { schema: 'SANKHYA' })
export class TgfesfEntity {
  @Column('datetime', { primary: true, name: 'DTARQ' })
  dtarq: Date;

  @Column('varchar', { name: 'NOMEARQ', nullable: true, length: 80 })
  nomearq: string | null;

  @Column('text', { name: 'XML', nullable: true })
  xml: string | null;

  @Column('text', { name: 'XMLRECIBO', nullable: true })
  xmlrecibo: string | null;

  @Column('varchar', { name: 'ENVIADO', nullable: true, length: 1 })
  enviado: string | null;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { name: 'PROCESSADO', nullable: true, length: 1 })
  processado: string | null;
}
