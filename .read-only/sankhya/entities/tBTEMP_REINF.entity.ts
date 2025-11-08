import { Column, Entity, Index } from 'typeorm';

@Index('PK_TBTEMP_REINF', ['nunota'], { unique: true })
@Entity('TBTEMP_REINF', { schema: 'SANKHYA' })
export class TbtempReinfEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('datetime', { name: 'DTREF', nullable: true })
  dtref: Date | null;
}
