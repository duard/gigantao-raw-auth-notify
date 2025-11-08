import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFSFP', ['nunota', 'codtipvenda', 'parcela'], { unique: true })
@Entity('TGFSFP', { schema: 'SANKHYA' })
export class TgfsfpEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'CODTIPVENDA' })
  codtipvenda: number;

  @Column('smallint', { primary: true, name: 'PARCELA' })
  parcela: number;

  @Column('datetime', { name: 'DTVENC' })
  dtvenc: Date;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;

  @Column('float', { name: 'TAXAJURO', nullable: true, precision: 53 })
  taxajuro: number | null;

  @Column('float', { name: 'VALORLIQUIDO', nullable: true, precision: 53 })
  valorliquido: number | null;
}
