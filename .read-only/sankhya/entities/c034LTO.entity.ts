import { Column, Entity, Index } from 'typeorm';

@Index('PK_C034LTO', ['id'], { unique: true })
@Entity('C034LTO', { schema: 'SANKHYA' })
export class C034LtoEntity {
  @Column('varchar', { primary: true, name: 'ID', length: 64 })
  id: string;

  @Column('text', { name: 'CONTENT', nullable: true })
  content: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('datetime', { name: 'DHINC', default: () => 'getdate()' })
  dhinc: Date;
}
