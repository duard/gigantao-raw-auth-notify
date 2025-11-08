import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { Tgfdctfr10Entity } from './tGFDCTFR10.entity';

@Index(
  'PK_TGFDCTFR11',
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
@Entity('TGFDCTFR11', { schema: 'SANKHYA' })
export class Tgfdctfr11Entity {
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
    default: () => "'R11'",
  })
  reg: string;

  @Column('varchar', { primary: true, name: 'CODRECEITA', length: 10 })
  codreceita: string;

  @Column('varchar', { name: 'ORDEMESTB', nullable: true, length: 6 })
  ordemestb: string | null;

  @Column('varchar', { name: 'CNPJCEI', nullable: true, length: 14 })
  cnpjcei: string | null;

  @Column('varchar', { name: 'CNPJDARF', nullable: true, length: 14 })
  cnpjdarf: string | null;

  @Column('varchar', { name: 'CODRECEITADARF', nullable: true, length: 4 })
  codreceitadarf: string | null;

  @Column('datetime', { name: 'DTVENC', nullable: true })
  dtvenc: Date | null;

  @Column('varchar', { name: 'NUMREFERENCIA', nullable: true, length: 17 })
  numreferencia: string | null;

  @Column('float', { name: 'VLRPRINCIPAL', nullable: true, precision: 53 })
  vlrprincipal: number | null;

  @Column('float', { name: 'VLRMULTA', nullable: true, precision: 53 })
  vlrmulta: number | null;

  @Column('float', { name: 'VLRJURO', nullable: true, precision: 53 })
  vlrjuro: number | null;

  @Column('float', { name: 'VLRPAGO', nullable: true, precision: 53 })
  vlrpago: number | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('datetime', { name: 'PERAPUR', nullable: true })
  perapur: Date | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfdctfrs2)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(
    () => Tgfdctfr10Entity,
    (tgfdctfr10Entity) => tgfdctfr10Entity.tgfdctfrs,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'REGPAI', referencedColumnName: 'reg' },
    { name: 'CNPJCONTRIB', referencedColumnName: 'cnpjcontrib' },
    { name: 'CODRECEITA', referencedColumnName: 'codreceita' },
  ])
  tgfdctfr: Tgfdctfr10Entity;
}
