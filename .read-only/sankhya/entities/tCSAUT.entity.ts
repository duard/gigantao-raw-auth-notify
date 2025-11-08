import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCSAUT', ['nufin', 'dhautor'], { unique: true })
@Entity('TCSAUT', { schema: 'SANKHYA' })
export class TcsautEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { primary: true, name: 'DHAUTOR' })
  dhautor: Date;

  @Column('char', { name: 'AUTORIZADO', length: 1, default: () => "'N'" })
  autorizado: string;
}
