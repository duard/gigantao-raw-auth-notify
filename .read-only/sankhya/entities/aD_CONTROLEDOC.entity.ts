import { Column, Entity, Index } from 'typeorm';

@Index('PK_AD_CONTROLEDOC', ['descr'], { unique: true })
@Entity('AD_CONTROLEDOC', { schema: 'SANKHYA' })
export class AdControledocEntity {
  @Column('int', { name: 'ID', nullable: true })
  id: number | null;

  @Column('varchar', { primary: true, name: 'DESCR', length: 20 })
  descr: string;

  @Column('datetime', { name: 'DTLIM', nullable: true })
  dtlim: Date | null;
}
