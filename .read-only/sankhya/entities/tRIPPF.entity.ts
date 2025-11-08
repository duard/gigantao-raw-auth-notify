import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TricabEntity } from './tRICAB.entity';

@Index('PK_TRIPPF', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Entity('TRIPPF', { schema: 'SANKHYA' })
export class TrippfEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

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

  @Column('varchar', { name: 'PERAPUR', nullable: true, length: 10 })
  perapur: string | null;

  @Column('smallint', { name: 'PROCEMI', nullable: true })
  procemi: number | null;

  @Column('varchar', { name: 'VERPROC', nullable: true, length: 20 })
  verproc: string | null;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('varchar', { name: 'NATJUR', nullable: true, length: 4 })
  natjur: string | null;

  @Column('smallint', { name: 'TPINSCESTAB', nullable: true })
  tpinscestab: number | null;

  @Column('varchar', { name: 'NRINSCESTAB', nullable: true, length: 14 })
  nrinscestab: string | null;

  @Column('varchar', { name: 'CONTROLE', length: 1, default: () => "'I'" })
  controle: string;

  @Column('int', { name: 'CODEMPESTAB', nullable: true })
  codempestab: number | null;

  @Column('varchar', { name: 'CPFBENEF', nullable: true, length: 11 })
  cpfbenef: string | null;

  @Column('varchar', { name: 'NMBENEF', nullable: true, length: 70 })
  nmbenef: string | null;

  @Column('float', { name: 'VLRTOTALBRUTO', nullable: true, precision: 53 })
  vlrtotalbruto: number | null;

  @Column('float', { name: 'VLRTOTALIR', nullable: true, precision: 53 })
  vlrtotalir: number | null;

  @Column('float', { name: 'VLRTOTALADV', nullable: true, precision: 53 })
  vlrtotaladv: number | null;

  @Column('float', { name: 'VLRTOTALISENTO', nullable: true, precision: 53 })
  vlrtotalisento: number | null;

  @Column('float', { name: 'VLRTOTALRENDSUSP', nullable: true, precision: 53 })
  vlrtotalrendsusp: number | null;

  @Column('float', { name: 'VLRTOTALDEDUCAO', nullable: true, precision: 53 })
  vlrtotaldeducao: number | null;

  @Column('float', { name: 'VLRBASECRRET', nullable: true, precision: 53 })
  vlrbasecrret: number | null;

  @Column('float', { name: 'VLRBASECRSUSPRET', nullable: true, precision: 53 })
  vlrbasecrsuspret: number | null;

  @Column('float', { name: 'VLRCRCALCRET', nullable: true, precision: 53 })
  vlrcrcalcret: number | null;

  @Column('float', { name: 'VLRCRSUSPCALCRET', nullable: true, precision: 53 })
  vlrcrsuspcalcret: number | null;

  @Column('varchar', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('varchar', { name: 'XMLEVENTO', nullable: true })
  xmlevento: string | null;

  @Column('varchar', { name: 'XMLRETORNO', nullable: true })
  xmlretorno: string | null;

  @Column('varchar', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('float', {
    name: 'VLRTOTALREEMBANOANTBENEF',
    nullable: true,
    precision: 53,
  })
  vlrtotalreembanoantbenef: number | null;

  @Column('float', {
    name: 'VLRTOTALSAUDEBENEF',
    nullable: true,
    precision: 53,
  })
  vlrtotalsaudebenef: number | null;

  @Column('float', {
    name: 'VLRTOTALREEMBBENEF',
    nullable: true,
    precision: 53,
  })
  vlrtotalreembbenef: number | null;

  @Column('float', { name: 'VLRTOTALREEMBDEP', nullable: true, precision: 53 })
  vlrtotalreembdep: number | null;

  @Column('float', { name: 'VLRTOTALSAUDEDEP', nullable: true, precision: 53 })
  vlrtotalsaudedep: number | null;

  @Column('float', {
    name: 'VLRTOTALREEMBANOANTDEP',
    nullable: true,
    precision: 53,
  })
  vlrtotalreembanoantdep: number | null;

  @ManyToOne(() => TricabEntity, (tricabEntity) => tricabEntity.trippfs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
  ])
  tricab: TricabEntity;
}
