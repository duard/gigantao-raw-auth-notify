import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSITAB', ['nutabsis'], { unique: true })
@Index('TSITAB_I01', ['codtabela'], { unique: true })
@Entity('TSITAB', { schema: 'SANKHYA' })
export class TsitabEntity {
  @Column('smallint', { primary: true, name: 'NUTABSIS' })
  nutabsis: number;

  @Column('char', { name: 'CODTABELA', length: 10 })
  codtabela: string;

  @Column('char', { name: 'NOMETAB', length: 40 })
  nometab: string;

  @Column('text', { name: 'DESCRTAB', nullable: true })
  descrtab: string | null;

  @Column('char', { name: 'CODCHAVE', nullable: true, length: 50 })
  codchave: string | null;

  @Column('varchar', { name: 'EXIBPESQ', nullable: true, length: 255 })
  exibpesq: string | null;
}
