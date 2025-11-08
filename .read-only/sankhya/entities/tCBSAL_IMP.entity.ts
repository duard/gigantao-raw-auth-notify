import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbplaImpEntity } from './tCBPLA_IMP.entity';

@Index('PK_TCBSAL_IMP', ['codemp', 'ctactb', 'referencia', 'codcencus'], {
  unique: true,
})
@Entity('TCBSAL_IMP', { schema: 'SANKHYA' })
export class TcbsalImpEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'CTACTB', length: 30 })
  ctactb: string;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('float', {
    name: 'SALDOINICMES',
    precision: 53,
    default: () => '(0)',
  })
  saldoinicmes: number;

  @Column('varchar', { name: 'INDSTINI', length: 1 })
  indstini: string;

  @Column('float', { name: 'DEBMES', precision: 53, default: () => '(0)' })
  debmes: number;

  @Column('float', { name: 'CREDMES', precision: 53, default: () => '(0)' })
  credmes: number;

  @Column('float', { name: 'SALDOFINMES', precision: 53, default: () => '(0)' })
  saldofinmes: number;

  @Column('varchar', { name: 'INDSTFIN', length: 1 })
  indstfin: string;

  @Column('varchar', { primary: true, name: 'CODCENCUS', length: 15 })
  codcencus: string;

  @ManyToOne(
    () => TcbplaImpEntity,
    (tcbplaImpEntity) => tcbplaImpEntity.tcbsalImps,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CTACTB', referencedColumnName: 'ctactb' },
  ])
  tcbplaImp: TcbplaImpEntity;
}
