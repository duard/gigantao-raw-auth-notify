import { Column, Entity, Index } from 'typeorm';

@Index('PK_TIMLBL', ['lblsequencia'], { unique: true })
@Entity('TIMLBL', { schema: 'SANKHYA' })
export class TimlblEntity {
  @Column('int', { primary: true, name: 'LBLSEQUENCIA' })
  lblsequencia: number;

  @Column('datetime', {
    name: 'LBLDHOCORR',
    nullable: true,
    default: () => 'getdate()',
  })
  lbldhocorr: Date | null;

  @Column('varchar', { name: 'LBLLOG', nullable: true, length: 500 })
  lbllog: string | null;

  @Column('char', { name: 'LBLLEGADO', nullable: true, length: 1 })
  lbllegado: string | null;

  @Column('char', { name: 'LBLTIPO', nullable: true, length: 2 })
  lbltipo: string | null;
}
