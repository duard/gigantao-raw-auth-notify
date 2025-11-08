import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSITPD', ['doctype'], { unique: true })
@Entity('TSITPD', { schema: 'SANKHYA' })
export class TsitpdEntity {
  @Column('varchar', { primary: true, name: 'DOCTYPE', length: 50 })
  doctype: string;

  @Column('varchar', { name: 'DESCRIPTION', length: 100 })
  description: string;
}
