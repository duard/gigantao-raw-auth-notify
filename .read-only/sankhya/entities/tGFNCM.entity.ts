import { Column, Entity, Index } from 'typeorm';

@Index('PK__TGFNCM__B1AEFCC33FEB252C', ['codncm'], { unique: true })
@Entity('TGFNCM', { schema: 'SANKHYA' })
export class TgfncmEntity {
  @Column('varchar', { primary: true, name: 'CODNCM', length: 10 })
  codncm: string;

  @Column('varchar', { name: 'CATEGORIA', length: 300 })
  categoria: string;

  @Column('varchar', { name: 'DSNCM', length: 300 })
  dsncm: string;

  @Column('varchar', { name: 'IPI', nullable: true, length: 5 })
  ipi: string | null;

  @Column('datetime', { name: 'DINIVIGENCIA' })
  dinivigencia: Date;

  @Column('datetime', { name: 'DFIMVIGENCIA', nullable: true })
  dfimvigencia: Date | null;

  @Column('varchar', { name: 'UNITRIBUTACAO', nullable: true, length: 30 })
  unitributacao: string | null;

  @Column('varchar', { name: 'DSUNITRIBUTACAO', nullable: true, length: 30 })
  dsunitributacao: string | null;
}
