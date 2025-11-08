import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSITPA', ['doctaste'], { unique: true })
@Entity('TSITPA', { schema: 'SANKHYA' })
export class TsitpaEntity {
  @Column('varchar', { primary: true, name: 'DOCTASTE', length: 50 })
  doctaste: string;

  @Column('varchar', { name: 'DESCRIPTION', length: 100 })
  description: string;
}
