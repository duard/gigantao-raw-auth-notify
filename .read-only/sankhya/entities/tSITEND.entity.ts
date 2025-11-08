import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSITEND', ['tipo'], { unique: true })
@Entity('TSITEND', { schema: 'SANKHYA' })
export class TsitendEntity {
  @Column('varchar', { primary: true, name: 'TIPO', length: 8 })
  tipo: string;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;
}
