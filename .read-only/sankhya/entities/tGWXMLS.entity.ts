import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWXMLS', ['nunota', 'serie'], { unique: true })
@Index('TGWXMLS_I01', ['lote'], {})
@Entity('TGWXMLS', { schema: 'SANKHYA' })
export class TgwxmlsEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'GTIN', nullable: true, length: 15 })
  gtin: string | null;

  @Column('varchar', { name: 'SERIEPAI', nullable: true, length: 100 })
  seriepai: string | null;

  @Column('varchar', { primary: true, name: 'SERIE', length: 100 })
  serie: string;

  @Column('datetime', { name: 'VALIDADE', nullable: true })
  validade: Date | null;

  @Column('varchar', { name: 'LOTE', nullable: true, length: 100 })
  lote: string | null;

  @Column('datetime', { name: 'DTIMPORTACAO', nullable: true })
  dtimportacao: Date | null;
}
