import { Column, Entity, Index } from 'typeorm';

@Index('PK_TIMARL', ['nufin', 'dherro'], { unique: true })
@Entity('TIMARL', { schema: 'SANKHYA' })
export class TimarlEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('datetime', { primary: true, name: 'DHERRO' })
  dherro: Date;

  @Column('text', { name: 'MESSAGE', nullable: true })
  message: string | null;

  @Column('text', { name: 'STACKTRACE', nullable: true })
  stacktrace: string | null;

  @Column('char', { name: 'ARLLEGADO', nullable: true, length: 1 })
  arllegado: string | null;
}
