import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TricabEntity } from './tRICAB.entity';

@Index(
  'PK_TRIRRC',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave', 'codparc'],
  { unique: true },
)
@Entity('TRIRRC', { schema: 'SANKHYA' })
export class TrirrcEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 255 })
  chave: string;

  @Column('varchar', { name: 'STATUSREG', length: 1 })
  statusreg: string;

  @Column('smallint', { name: 'INDRETIF', nullable: true })
  indretif: number | null;

  @Column('varchar', { name: 'IDEVENTO', nullable: true, length: 36 })
  idevento: string | null;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 52 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBOANT', nullable: true, length: 52 })
  nroreciboant: string | null;

  @Column('varchar', { name: 'CONTROLE', length: 1, default: () => "'I'" })
  controle: string;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('smallint', { name: 'TPINSCESTAB', nullable: true })
  tpinscestab: number | null;

  @Column('varchar', { name: 'NRINSCESTAB', nullable: true, length: 14 })
  nrinscestab: string | null;

  @Column('int', { name: 'CODEMPESTAB', nullable: true })
  codempestab: number | null;

  @Column('varchar', { name: 'CNPJFONT', nullable: true, length: 14 })
  cnpjfont: string | null;

  @Column('text', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('text', { name: 'XMLEVENTO', nullable: true })
  xmlevento: string | null;

  @Column('text', { name: 'XMLRETORNO', nullable: true })
  xmlretorno: string | null;

  @Column('varchar', { name: 'NOMEFONT', nullable: true, length: 150 })
  nomefont: string | null;

  @Column('float', { name: 'VLRTOTALBRUTO', nullable: true, precision: 53 })
  vlrtotalbruto: number | null;

  @Column('float', { name: 'VLRTOTALBASEIR', nullable: true, precision: 53 })
  vlrtotalbaseir: number | null;

  @Column('float', { name: 'VLRTOTALIR', nullable: true, precision: 53 })
  vlrtotalir: number | null;

  @Column('float', { name: 'VLRBASECRRET', nullable: true, precision: 53 })
  vlrbasecrret: number | null;

  @Column('float', { name: 'VLRBASECRSUSPRET', nullable: true, precision: 53 })
  vlrbasecrsuspret: number | null;

  @Column('float', { name: 'VLRCRCALCRET', nullable: true, precision: 53 })
  vlrcrcalcret: number | null;

  @Column('float', { name: 'VLRCRSUSPCALCRET', nullable: true, precision: 53 })
  vlrcrsuspcalcret: number | null;

  @Column('varchar', { name: 'PERAPUR', nullable: true, length: 10 })
  perapur: string | null;

  @Column('smallint', { name: 'PROCEMI', nullable: true })
  procemi: number | null;

  @Column('varchar', { name: 'VERPROC', nullable: true, length: 20 })
  verproc: string | null;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('varchar', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @ManyToOne(() => TricabEntity, (tricabEntity) => tricabEntity.trirrcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
  ])
  tricab: TricabEntity;
}
