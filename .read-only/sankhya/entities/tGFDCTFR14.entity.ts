import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tgfdctfr10Entity } from './tGFDCTFR10.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index(
  'PK_TGFDCTFR14',
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
@Entity('TGFDCTFR14', { schema: 'SANKHYA' })
export class Tgfdctfr14Entity {
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

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'R14'",
  })
  reg: string;

  @Column('varchar', { primary: true, name: 'CNPJCONTRIB', length: 14 })
  cnpjcontrib: string;

  @Column('varchar', { primary: true, name: 'CODRECEITA', length: 10 })
  codreceita: string;

  @Column('varchar', { name: 'ORDEMESTB', nullable: true, length: 6 })
  ordemestb: string | null;

  @Column('varchar', { name: 'CNPJCEI', nullable: true, length: 14 })
  cnpjcei: string | null;

  @Column('float', { name: 'VLRSUSPENSO', nullable: true, precision: 53 })
  vlrsuspenso: number | null;

  @Column('varchar', { name: 'MOTIVOSUSPENSAO', nullable: true, length: 2 })
  motivosuspensao: string | null;

  @Column('varchar', { name: 'DEPOSITO', nullable: true, length: 1 })
  deposito: string | null;

  @Column('varchar', { name: 'NUMPROCESSO', nullable: true, length: 24 })
  numprocesso: string | null;

  @Column('varchar', { name: 'VARA', nullable: true, length: 2 })
  vara: string | null;

  @Column('varchar', { name: 'IDENTDEPOSITO', nullable: true, length: 20 })
  identdeposito: string | null;

  @Column('varchar', { name: 'CPFCNPJ', nullable: true, length: 14 })
  cpfcnpj: string | null;

  @Column('varchar', { name: 'CODRECEITADARF', nullable: true, length: 4 })
  codreceitadarf: string | null;

  @Column('datetime', { name: 'DTVENC', nullable: true })
  dtvenc: Date | null;

  @Column('float', { name: 'VLRPRINCIPAL', nullable: true, precision: 53 })
  vlrprincipal: number | null;

  @Column('float', { name: 'VLRMULTA', nullable: true, precision: 53 })
  vlrmulta: number | null;

  @Column('float', { name: 'VLRJURO', nullable: true, precision: 53 })
  vlrjuro: number | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(
    () => Tgfdctfr10Entity,
    (tgfdctfr10Entity) => tgfdctfr10Entity.tgfdctfrs3,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'REGPAI', referencedColumnName: 'reg' },
    { name: 'CNPJCONTRIB', referencedColumnName: 'cnpjcontrib' },
    { name: 'CODRECEITA', referencedColumnName: 'codreceita' },
  ])
  tgfdctfr: Tgfdctfr10Entity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfdctfrs4)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
