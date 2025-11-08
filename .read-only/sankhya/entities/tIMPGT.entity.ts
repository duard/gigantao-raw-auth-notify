import { Column, Entity, Index } from 'typeorm';

@Index('PK_TIMPGT', ['pgtcodigo'], { unique: true })
@Entity('TIMPGT', { schema: 'SANKHYA' })
export class TimpgtEntity {
  @Column('int', { primary: true, name: 'PGTCODIGO' })
  pgtcodigo: number;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('float', { name: 'VLRDESDOB', precision: 53 })
  vlrdesdob: number;

  @Column('datetime', { name: 'DTVENC' })
  dtvenc: Date;

  @Column('datetime', { name: 'dtcad', default: () => 'getdate()' })
  dtcad: Date;

  @Column('char', { name: 'PGTLEGADO', nullable: true, length: 1 })
  pgtlegado: string | null;
}
