import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXIPV', ['codemp', 'codprod', 'codimp', 'codinc'], { unique: true })
@Entity('TFXIPV', { schema: 'SANKHYA' })
export class TfxipvEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'CODIMP' })
  codimp: number;

  @Column('smallint', { primary: true, name: 'CODINC' })
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

  @Column('smallint', { name: 'CST', nullable: true })
  cst: number | null;

  @Column('char', { name: 'RETEMFIN', nullable: true, length: 1 })
  retemfin: string | null;

  @Column('char', { name: 'PERCVLR', nullable: true, length: 1 })
  percvlr: string | null;

  @Column('char', { name: 'COMIVA', length: 1, default: () => "'N'" })
  comiva: string;

  @Column('float', { name: 'IVA', nullable: true, precision: 53 })
  iva: number | null;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('char', { name: 'TIPODEDISS', nullable: true, length: 1 })
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

  @Column('smallint', { name: 'TIPCALCDIFAL', default: () => '(0)' })
  tipcalcdifal: number;

  @Column('float', { name: 'BASEDIFAL', nullable: true, precision: 53 })
  basedifal: number | null;

  @Column('float', { name: 'BASEFCP', nullable: true, precision: 53 })
  basefcp: number | null;

  @Column('float', { name: 'BASEFCPINT', nullable: true, precision: 53 })
  basefcpint: number | null;

  @Column('float', { name: 'VLRFCPINT', nullable: true, precision: 53 })
  vlrfcpint: number | null;

  @Column('float', { name: 'PERCFCPINT', nullable: true, precision: 53 })
  percfcpint: number | null;

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

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('int', { name: 'CODESPECST', nullable: true })
  codespecst: number | null;

  @Column('int', { name: 'BASICMMOD', nullable: true })
  basicmmod: number | null;

  @Column('int', { name: 'BASICMSTMOD', nullable: true })
  basicmstmod: number | null;

  @Column('float', { name: 'ALIQTRIBNACIONAL', nullable: true, precision: 53 })
  aliqtribnacional: number | null;

  @Column('float', {
    name: 'ALIQTRIBIMPORTACAO',
    nullable: true,
    precision: 53,
  })
  aliqtribimportacao: number | null;

  @Column('float', { name: 'ALIQTRIBFEDNAC', nullable: true, precision: 53 })
  aliqtribfednac: number | null;

  @Column('float', { name: 'ALIQTRIBFEDIMP', nullable: true, precision: 53 })
  aliqtribfedimp: number | null;

  @Column('float', { name: 'ALIQTRIBESTADUAL', nullable: true, precision: 53 })
  aliqtribestadual: number | null;

  @Column('float', { name: 'ALIQTRIBMUNICIPAL', nullable: true, precision: 53 })
  aliqtribmunicipal: number | null;

  @Column('int', { name: 'CSOSN', nullable: true })
  csosn: number | null;

  @Column('int', { name: 'CODTRIB', nullable: true })
  codtrib: number | null;

  @Column('int', { name: 'CODCFO', nullable: true })
  codcfo: number | null;

  @Column('float', { name: 'PERCREDBASEEFET', nullable: true, precision: 53 })
  percredbaseefet: number | null;

  @Column('float', { name: 'BASEREDEFET', nullable: true, precision: 53 })
  baseredefet: number | null;

  @Column('float', { name: 'ALIQUOTAEFET', nullable: true, precision: 53 })
  aliquotaefet: number | null;

  @Column('float', { name: 'VALOREFET', nullable: true, precision: 53 })
  valorefet: number | null;

  @Column('varchar', { name: 'PRODUTONFE', nullable: true, length: 60 })
  produtonfe: string | null;

  @Column('varchar', { name: 'GTINNFE', nullable: true, length: 14 })
  gtinnfe: string | null;

  @Column('varchar', { name: 'GTINTRIBNFE', nullable: true, length: 14 })
  gtintribnfe: string | null;

  @Column('varchar', { name: 'RECALCULAR', nullable: true, length: 1 })
  recalcular: string | null;

  @Column('varchar', { name: 'CODBENEFNAUF', nullable: true, length: 10 })
  codbenefnauf: string | null;

  @Column('char', { name: 'ATUNUVERSAO', nullable: true, length: 1 })
  atunuversao: string | null;

  @Column('int', { name: 'CODMOTDESONERACAO', nullable: true })
  codmotdesoneracao: number | null;

  @Column('char', { name: 'REDICMSBCPISCOFINS', nullable: true, length: 1 })
  redicmsbcpiscofins: string | null;
}
