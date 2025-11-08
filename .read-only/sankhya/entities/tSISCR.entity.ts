import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSISCR', ['nmeScript'], { unique: true })
@Entity('TSISCR', { schema: 'SANKHYA' })
export class TsiscrEntity {
  @Column('varchar', { primary: true, name: 'NME_SCRIPT', length: 50 })
  nmeScript: string;

  @Column('varchar', { name: 'OBS_SCRIPT', nullable: true, length: 100 })
  obsScript: string | null;
}
