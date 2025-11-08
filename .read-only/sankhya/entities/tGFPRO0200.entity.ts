import { Column, Entity, Index } from 'typeorm';

@Index('TGFPRO0200_PK', ['codprod', 'dtref', 'aliqicms'], { unique: true })
@Entity('TGFPRO0200', { schema: 'SANKHYA' })
export class Tgfpro0200Entity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('float', { primary: true, name: 'ALIQICMS', precision: 53 })
  aliqicms: number;
}
