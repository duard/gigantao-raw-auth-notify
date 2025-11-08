import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfivrEntity } from './tGFIVR.entity';

@Index('PK_TLFDINVR', ['nucvr', 'seqivr', 'codimp', 'codinc'], { unique: true })
@Entity('TLFDINVR', { schema: 'SANKHYA' })
export class TlfdinvrEntity {
  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('int', { primary: true, name: 'NUCVR' })
  nucvr: number;

  @Column('smallint', { primary: true, name: 'SEQIVR' })
  seqivr: number;

  @Column('int', { primary: true, name: 'CODIMP' })
  codimp: number;

  @Column('int', { primary: true, name: 'CODINC' })
  codinc: number;

  @Column('float', { name: 'BASE', precision: 53, default: () => '(0)' })
  base: number;

  @Column('float', { name: 'BASERED', precision: 53, default: () => '(0)' })
  basered: number;

  @Column('float', { name: 'VLRREPRED', precision: 53, default: () => '(0)' })
  vlrrepred: number;

  @Column('float', { name: 'PAUTA', precision: 53, default: () => '(0)' })
  pauta: number;

  @Column('float', { name: 'ALIQUOTA', precision: 53, default: () => '(0)' })
  aliquota: number;

  @Column('float', { name: 'VALOR', precision: 53, default: () => '(0)' })
  valor: number;

  @Column('int', { name: 'TIPO', default: () => '(1)' })
  tipo: number;

  @Column('float', { name: 'VLRCRED', nullable: true, precision: 53 })
  vlrcred: number | null;

  @Column('int', { name: 'CST', nullable: true })
  cst: number | null;

  @Column('varchar', { name: 'RETEMFIN', nullable: true, length: 1 })
  retemfin: string | null;

  @Column('varchar', { name: 'PERCVLR', nullable: true, length: 1 })
  percvlr: string | null;

  @Column('varchar', { name: 'COMIVA', length: 1, default: () => "'N'" })
  comiva: string;

  @Column('float', { name: 'IVA', nullable: true, precision: 53 })
  iva: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('varchar', { name: 'TIPODEDISS', nullable: true, length: 1 })
  tipodediss: string | null;

  @Column('varchar', { name: 'CODTRIBMUNISS', nullable: true, length: 20 })
  codtribmuniss: string | null;

  @Column('float', { name: 'PERCREDBASE', nullable: true, precision: 53 })
  percredbase: number | null;

  @Column('int', { name: 'CODLST', nullable: true })
  codlst: number | null;

  @Column('float', { name: 'ALIQUOTANORMAL', nullable: true, precision: 53 })
  aliquotanormal: number | null;

  @Column('float', { name: 'ALIQINTDEST', nullable: true, precision: 53 })
  aliqintdest: number | null;

  @Column('float', { name: 'PERCPARTDIFAL', nullable: true, precision: 53 })
  percpartdifal: number | null;

  @Column('float', { name: 'VLRDIFALDEST', nullable: true, precision: 53 })
  vlrdifaldest: number | null;

  @Column('float', { name: 'VLRDIFALREM', nullable: true, precision: 53 })
  vlrdifalrem: number | null;

  @Column('float', { name: 'PERCFCP', nullable: true, precision: 53 })
  percfcp: number | null;

  @Column('float', { name: 'VLRFCP', nullable: true, precision: 53 })
  vlrfcp: number | null;

  @Column('int', { name: 'TIPCALCDIFAL', default: () => '(0)' })
  tipcalcdifal: number;

  @Column('float', { name: 'BASEDIFAL', nullable: true, precision: 53 })
  basedifal: number | null;

  @Column('float', { name: 'BASEFCP', nullable: true, precision: 53 })
  basefcp: number | null;

  @Column('float', { name: 'BASEFCPINT', nullable: true, precision: 53 })
  basefcpint: number | null;

  @Column('float', { name: 'PERCFCPINT', nullable: true, precision: 53 })
  percfcpint: number | null;

  @Column('float', { name: 'VLRFCPINT', nullable: true, precision: 53 })
  vlrfcpint: number | null;

  @Column('float', { name: 'ALIQPARADIFAL', nullable: true, precision: 53 })
  aliqparadifal: number | null;

  @Column('float', { name: 'VLRICMSPARADIFAL', nullable: true, precision: 53 })
  vlricmsparadifal: number | null;

  @Column('char', { name: 'TIPOINSSESPECIAL', nullable: true, length: 1 })
  tipoinssespecial: string | null;

  @Column('float', { name: 'PERCINSSESPECIAL', nullable: true, precision: 53 })
  percinssespecial: number | null;

  @Column('float', { name: 'VLRINSSESPECIAL', nullable: true, precision: 53 })
  vlrinssespecial: number | null;

  @Column('float', { name: 'VLRREPDIFALFCP', nullable: true, precision: 53 })
  vlrrepdifalfcp: number | null;

  @Column('float', { name: 'ALIQDIFERENCIAL', nullable: true, precision: 53 })
  aliqdiferencial: number | null;

  @Column('float', { name: 'VALORDIFERENCIAL', nullable: true, precision: 53 })
  valordiferencial: number | null;

  @Column('float', { name: 'PERCREDBASEEFET', nullable: true, precision: 53 })
  percredbaseefet: number | null;

  @Column('float', { name: 'ALIQUOTAEFET', nullable: true, precision: 53 })
  aliquotaefet: number | null;

  @Column('float', { name: 'BASEREDEFET', nullable: true, precision: 53 })
  baseredefet: number | null;

  @Column('float', { name: 'VALOREFET', nullable: true, precision: 53 })
  valorefet: number | null;

  @Column('float', { name: 'VLRREPREDSEMDESC', nullable: true, precision: 53 })
  vlrrepredsemdesc: number | null;

  @Column('float', { name: 'BASENORMDIFICMS', nullable: true, precision: 53 })
  basenormdificms: number | null;

  @Column('float', { name: 'ALIQDESPACESS', nullable: true, precision: 53 })
  aliqdespacess: number | null;

  @Column('float', { name: 'PERCREDVLRIPI', nullable: true, precision: 53 })
  percredvlripi: number | null;

  @Column('float', { name: 'ALIQUOTADESON', nullable: true, precision: 53 })
  aliquotadeson: number | null;

  @Column('float', { name: 'VALORDESON', nullable: true, precision: 53 })
  valordeson: number | null;

  @Column('int', { name: 'TIPCALCFCPESPEC', nullable: true })
  tipcalcfcpespec: number | null;

  @Column('int', { name: 'TPIRRFEXT', nullable: true })
  tpirrfext: number | null;

  @Column('int', { name: 'CODNATREND', nullable: true })
  codnatrend: number | null;

  @Column('float', { name: 'PERCALIQADREMICMS', nullable: true, precision: 53 })
  percaliqadremicms: number | null;

  @Column('float', { name: 'VLRICMSMONODIF', nullable: true, precision: 53 })
  vlricmsmonodif: number | null;

  @Column('float', { name: 'VLRICMSMONODEV', nullable: true, precision: 53 })
  vlricmsmonodev: number | null;

  @Column('int', { name: 'MOTREDADREM', nullable: true })
  motredadrem: number | null;

  @Column('int', { name: 'IDALIQ', nullable: true })
  idaliq: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tlfdinvrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfivrEntity, (tgfivrEntity) => tgfivrEntity.tlfdinvrs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUCVR', referencedColumnName: 'nucvr' },
    { name: 'SEQIVR', referencedColumnName: 'seqivr' },
  ])
  tgfivr: TgfivrEntity;
}
