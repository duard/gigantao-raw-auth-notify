import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFENFE', ['nunota', 'codevento', 'seqevento'], { unique: true })
@Index('TGFENFE_I01', ['nunota'], {})
@Entity('TGFENFE', { schema: 'SANKHYA' })
export class TgfenfeEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('int', { primary: true, name: 'SEQEVENTO' })
  seqevento: number;

  @Column('int', { name: 'NULOTE', nullable: true })
  nulote: number | null;

  @Column('varchar', { name: 'PROCESSADO', length: 1, default: () => "'N'" })
  processado: string;

  @Column('text', { name: 'TEXTOCORRECAO', nullable: true })
  textocorrecao: string | null;
}
