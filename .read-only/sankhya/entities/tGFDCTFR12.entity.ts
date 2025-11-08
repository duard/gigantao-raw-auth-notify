import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tgfdctfr10Entity } from './tGFDCTFR10.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index(
  'PK_TGFDCTFR12',
  [
    'codemp',
    'dtref',
    'regpai',
    'cnpjcontrib',
    'codreceita',
    'reg',
    'sequencia',
  ],
  { unique: true },
)
@Entity('TGFDCTFR12', { schema: 'SANKHYA' })
export class Tgfdctfr12Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI',
    length: 4,
    default: () => "'R10'",
  })
  regpai: string;

  @Column('varchar', { primary: true, name: 'CNPJCONTRIB', length: 14 })
  cnpjcontrib: string;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'R12'",
  })
  reg: string;

  @Column('varchar', { primary: true, name: 'CODRECEITA', length: 10 })
  codreceita: string;

  @Column('varchar', { name: 'ORDEMESTB', nullable: true, length: 6 })
  ordemestb: string | null;

  @Column('varchar', { name: 'CNPJCEI', nullable: true, length: 14 })
  cnpjcei: string | null;

  @Column('float', { name: 'VLRCOMPENSADO', nullable: true, precision: 53 })
  vlrcompensado: number | null;

  @Column('varchar', { name: 'FORMAPEDIDO', nullable: true, length: 1 })
  formapedido: string | null;

  @Column('varchar', { name: 'NUMPROCESSO', nullable: true, length: 24 })
  numprocesso: string | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(
    () => Tgfdctfr10Entity,
    (tgfdctfr10Entity) => tgfdctfr10Entity.tgfdctfrs2,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'REGPAI', referencedColumnName: 'reg' },
    { name: 'CNPJCONTRIB', referencedColumnName: 'cnpjcontrib' },
    { name: 'CODRECEITA', referencedColumnName: 'codreceita' },
  ])
  tgfdctfr: Tgfdctfr10Entity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfdctfrs3)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
