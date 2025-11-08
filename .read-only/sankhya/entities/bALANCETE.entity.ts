import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_BALANCETE',
  ['codcencus', 'codproj', 'ctared', 'ctactb', 'codemporig'],
  { unique: true },
)
@Entity('BALANCETE', { schema: 'SANKHYA' })
export class BalanceteEntity {
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

  @Column('float', { name: 'SALDO', nullable: true, precision: 53 })
  saldo: number | null;

  @Column('float', { name: 'DEBSAL', nullable: true, precision: 53 })
  debsal: number | null;

  @Column('float', { name: 'CRESAL', nullable: true, precision: 53 })
  cresal: number | null;

  @Column('float', { name: 'DEBITOS', nullable: true, precision: 53 })
  debitos: number | null;

  @Column('float', { name: 'CREDITOS', nullable: true, precision: 53 })
  creditos: number | null;

  @Column('smallint', { name: 'GRAU', nullable: true })
  grau: number | null;

  @Column('varchar', { name: 'MAE', nullable: true, length: 30 })
  mae: string | null;

  @Column('char', { name: 'ANALITICA', nullable: true, length: 1 })
  analitica: string | null;

  @Column('smallint', {
    primary: true,
    name: 'CODEMPORIG',
    default: () => '(0)',
  })
  codemporig: number;
}
