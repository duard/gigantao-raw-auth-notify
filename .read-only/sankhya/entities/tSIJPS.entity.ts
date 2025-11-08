import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIJPS', ['jobstatus'], { unique: true })
@Entity('TSIJPS', { schema: 'SANKHYA' })
export class TsijpsEntity {
  @Column('varchar', { primary: true, name: 'JOBSTATUS', length: 50 })
  jobstatus: string;

  @Column('varchar', { name: 'DESCRIPTION', length: 100 })
  description: string;
}
