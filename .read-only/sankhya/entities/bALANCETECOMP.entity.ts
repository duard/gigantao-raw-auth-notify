import { Column, Entity, Index } from 'typeorm';

@Index('PK_BALANCETECOMP', ['codcencus', 'codproj', 'ctared', 'ctactb'], {
  unique: true,
})
@Entity('BALANCETECOMP', { schema: 'SANKHYA' })
export class BalancetecompEntity {
  @Column('int', { primary: true, name: 'CODCENCUS' })
  codcencus: number;

  @Column('int', { primary: true, name: 'CODPROJ' })
  codproj: number;

  @Column('int', { primary: true, name: 'CTARED' })
  ctared: number;

  @Column('varchar', { primary: true, name: 'CTACTB', length: 30 })
  ctactb: string;

  @Column('varchar', { name: 'DESCR', nullable: true, length: 40 })
  descr: string | null;

  @Column('smallint', { name: 'GRAU', nullable: true })
  grau: number | null;

  @Column('varchar', { name: 'MAE', nullable: true, length: 30 })
  mae: string | null;

  @Column('char', { name: 'ANALITICA', nullable: true, length: 1 })
  analitica: string | null;

  @Column('float', { name: 'SALDOREF1', nullable: true, precision: 53 })
  saldoref1: number | null;

  @Column('float', { name: 'SALDOREF2', nullable: true, precision: 53 })
  saldoref2: number | null;

  @Column('float', { name: 'SALDOREF3', nullable: true, precision: 53 })
  saldoref3: number | null;

  @Column('float', { name: 'SALDOREF4', nullable: true, precision: 53 })
  saldoref4: number | null;

  @Column('float', { name: 'SALDOREF5', nullable: true, precision: 53 })
  saldoref5: number | null;

  @Column('float', { name: 'SALDOREF6', nullable: true, precision: 53 })
  saldoref6: number | null;

  @Column('float', { name: 'SALDOREF7', nullable: true, precision: 53 })
  saldoref7: number | null;

  @Column('float', { name: 'SALDOREF8', nullable: true, precision: 53 })
  saldoref8: number | null;

  @Column('float', { name: 'SALDOREF9', nullable: true, precision: 53 })
  saldoref9: number | null;

  @Column('float', { name: 'SALDOREF10', nullable: true, precision: 53 })
  saldoref10: number | null;

  @Column('float', { name: 'SALDOREF11', nullable: true, precision: 53 })
  saldoref11: number | null;

  @Column('float', { name: 'SALDOREF12', nullable: true, precision: 53 })
  saldoref12: number | null;
}
