import { Column, Entity, Index } from 'typeorm';

@Index('PK_SLI1ILCON', ['id'], { unique: true })
@Entity('SLI1ILCON', { schema: 'SANKHYA' })
export class Sli1IlconEntity {
  @Column('varchar', { primary: true, name: 'ID', length: 64 })
  id: string;

  @Column('text', { name: 'TEXT', nullable: true })
  text: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;
}
