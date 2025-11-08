import { Column, Entity, Index } from 'typeorm';

@Index('TSISUEIP_PK', ['cpou'], { unique: true })
@Entity('TSISUEIP', { schema: 'SANKHYA' })
export class TsisueipEntity {
  @Column('varchar', { name: 'CPOI', length: 255 })
  cpoi: string;

  @Column('varchar', { name: 'CPOE', length: 255 })
  cpoe: string;

  @Column('varchar', { name: 'CPOP', length: 255 })
  cpop: string;

  @Column('varchar', { primary: true, name: 'CPOU', length: 255 })
  cpou: string;

  @Column('datetime', { name: 'CPOD', nullable: true })
  cpod: Date | null;
}
