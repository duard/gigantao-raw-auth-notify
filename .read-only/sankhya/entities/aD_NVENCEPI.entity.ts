import { Column, Entity, Index } from 'typeorm';

@Index('PK_AD_NVENCEPI', ['id'], { unique: true })
@Entity('AD_NVENCEPI', { schema: 'SANKHYA' })
export class AdNvencepiEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;
}
