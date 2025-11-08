import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFPDF', ['nunota', 'tipo'], { unique: true })
@Entity('TGFPDF', { schema: 'SANKHYA' })
export class TgfpdfEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('image', { name: 'PDFDANFE', nullable: true })
  pdfdanfe: Buffer | null;

  @Column('char', {
    primary: true,
    name: 'TIPO',
    length: 1,
    default: () => "'N'",
  })
  tipo: string;

  @Column('image', { name: 'PDFDANFESIMPLIF', nullable: true })
  pdfdanfesimplif: Buffer | null;
}
