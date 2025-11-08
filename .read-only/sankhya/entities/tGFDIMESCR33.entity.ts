import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdimescEntity } from './tGFDIMESC.entity';

@Index(
  'PK_TGFDIMESCR33',
  ['codemp', 'dtref', 'reg', 'tporigemrecol', 'codreceita', 'dtvencimento'],
  { unique: true },
)
@Entity('TGFDIMESCR33', { schema: 'SANKHYA' })
export class Tgfdimescr33Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 2,
    default: () => "'33'",
  })
  reg: string;

  @Column('smallint', { primary: true, name: 'TPORIGEMRECOL' })
  tporigemrecol: number;

  @Column('smallint', { primary: true, name: 'CODRECEITA' })
  codreceita: number;

  @Column('datetime', { primary: true, name: 'DTVENCIMENTO' })
  dtvencimento: Date;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('float', { name: 'VLRRECOLHIDO', nullable: true, precision: 53 })
  vlrrecolhido: number | null;

  @Column('smallint', { name: 'CODCLASSEVENC', nullable: true })
  codclassevenc: number | null;

  @Column('varchar', { name: 'NROACORDOTTD', nullable: true, length: 15 })
  nroacordottd: string | null;

  @ManyToOne(
    () => TgfdimescEntity,
    (tgfdimescEntity) => tgfdimescEntity.tgfdimescrs9,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdimesc: TgfdimescEntity;
}
