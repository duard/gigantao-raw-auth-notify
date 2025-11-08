import { Column, Entity, Index } from 'typeorm';

@Index('PK_TRDEAC', ['nueac'], { unique: true })
@Index('TRDEAC_I01', ['resourceid', 'codusu', 'dtiniperiodo'], {})
@Entity('TRDEAC', { schema: 'SANKHYA' })
export class TrdeacEntity {
  @Column('int', { primary: true, name: 'NUEAC' })
  nueac: number;

  @Column('varchar', { name: 'RESOURCEID', nullable: true, length: 256 })
  resourceid: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHULTACESSO', nullable: true })
  dhultacesso: Date | null;

  @Column('datetime', { name: 'DTINIPERIODO', nullable: true })
  dtiniperiodo: Date | null;

  @Column('int', { name: 'QTDGERAL', nullable: true })
  qtdgeral: number | null;

  @Column('smallint', { name: 'QTDPERIODO', nullable: true })
  qtdperiodo: number | null;
}
