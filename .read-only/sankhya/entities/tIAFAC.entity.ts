import { Column, Entity, Index } from 'typeorm';

@Index('PK_TIAFAC', ['id'], { unique: true })
@Entity('TIAFAC', { schema: 'SANKHYA' })
export class TiafacEntity {
  @Column('varchar', { primary: true, name: 'ID', length: 64 })
  id: string;

  @Column('varchar', { name: 'NAME', length: 256 })
  name: string;

  @Column('varchar', { name: 'PROPAGADO', nullable: true, length: 1 })
  propagado: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('datetime', { name: 'DHINC', default: () => 'getdate()' })
  dhinc: Date;
}
