import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFMDV', ['dtref', 'recdesp'], { unique: true })
@Entity('TGFMDV', { schema: 'SANKHYA' })
export class TgfmdvEntity {
  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'RECDESP', default: () => '(0)' })
  recdesp: number;

  @Column('float', { name: 'PERCENTUAL', nullable: true, precision: 53 })
  percentual: number | null;
}
