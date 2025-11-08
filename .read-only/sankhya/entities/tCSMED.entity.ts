import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCSMED', ['nufin', 'dhautor'], { unique: true })
@Entity('TCSMED', { schema: 'SANKHYA' })
export class TcsmedEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { primary: true, name: 'DHAUTOR' })
  dhautor: Date;

  @Column('money', { name: 'VLRMED', nullable: true })
  vlrmed: number | null;
}
