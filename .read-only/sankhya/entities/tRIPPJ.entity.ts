import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TricabEntity } from './tRICAB.entity';

@Index('PK_TRIPPJ', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Entity('TRIPPJ', { schema: 'SANKHYA' })
export class TrippjEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 255 })
  chave: string;

  @Column('varchar', { name: 'STATUSREG', length: 1 })
  statusreg: string;

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

  @Column('smallint', { name: 'TPINSCESTAB', nullable: true })
  tpinscestab: number | null;

  @Column('varchar', { name: 'NRINSCESTAB', nullable: true, length: 14 })
  nrinscestab: string | null;

  @Column('int', { name: 'CODEMPESTAB', nullable: true })
  codempestab: number | null;

  @Column('varchar', { name: 'CNPJBENEF', nullable: true, length: 14 })
  cnpjbenef: string | null;

  @Column('varchar', { name: 'NMBENEF', nullable: true, length: 70 })
  nmbenef: string | null;

  @Column('float', { name: 'VLRTOTALBRUTO', nullable: true, precision: 53 })
  vlrtotalbruto: number | null;

  @Column('float', { name: 'VLRTOTALBASEIR', nullable: true, precision: 53 })
  vlrtotalbaseir: number | null;

  @Column('float', { name: 'VLRTOTALIR', nullable: true, precision: 53 })
  vlrtotalir: number | null;

  @Column('float', { name: 'VLRTOTALBASEAGREG', nullable: true, precision: 53 })
  vlrtotalbaseagreg: number | null;

  @Column('float', { name: 'VLRTOTALAGREG', nullable: true, precision: 53 })
  vlrtotalagreg: number | null;

  @Column('float', { name: 'VLRTOTALBASECSLL', nullable: true, precision: 53 })
  vlrtotalbasecsll: number | null;

  @Column('float', { name: 'VLRTOTALCSLL', nullable: true, precision: 53 })
  vlrtotalcsll: number | null;

  @Column('float', {
    name: 'VLRTOTALBASECOFINS',
    nullable: true,
    precision: 53,
  })
  vlrtotalbasecofins: number | null;

  @Column('float', { name: 'VLRTOTALCOFINS', nullable: true, precision: 53 })
  vlrtotalcofins: number | null;

  @Column('float', { name: 'VLRTOTALBASEPP', nullable: true, precision: 53 })
  vlrtotalbasepp: number | null;

  @Column('float', { name: 'VLRTOTALPP', nullable: true, precision: 53 })
  vlrtotalpp: number | null;

  @Column('float', { name: 'VLRBASECRRET', nullable: true, precision: 53 })
  vlrbasecrret: number | null;

  @Column('float', { name: 'VLRBASECRSUSPRET', nullable: true, precision: 53 })
  vlrbasecrsuspret: number | null;

  @Column('float', { name: 'VLRCRCALCRET', nullable: true, precision: 53 })
  vlrcrcalcret: number | null;

  @Column('float', { name: 'VLRCRSUSPCALCRET', nullable: true, precision: 53 })
  vlrcrsuspcalcret: number | null;

  @Column('text', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('text', { name: 'XMLEVENTO', nullable: true })
  xmlevento: string | null;

  @Column('text', { name: 'XMLRETORNO', nullable: true })
  xmlretorno: string | null;

  @Column('smallint', { name: 'INDRETIF', nullable: true })
  indretif: number | null;

  @Column('varchar', { name: 'PERAPUR', nullable: true, length: 10 })
  perapur: string | null;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { name: 'PROCEMI', nullable: true })
  procemi: number | null;

  @Column('varchar', { name: 'VERPROC', nullable: true, length: 20 })
  verproc: string | null;

  @Column('varchar', { name: 'NATJUR', nullable: true, length: 4 })
  natjur: string | null;

  @Column('smallint', { name: 'ISENIMUN', nullable: true })
  isenimun: number | null;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('varchar', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @ManyToOne(() => TricabEntity, (tricabEntity) => tricabEntity.trippjs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
  ])
  tricab: TricabEntity;
}
