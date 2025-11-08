import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFPMBSS', ['nuimp'], { unique: true })
@Index('TGFPMBSS_I01', ['cnpj', 'numnota'], {})
@Index('TGFPMBSS_I02', ['campanha', 'semana', 'mes', 'diavenda', 'cnpj'], {})
@Entity('TGFPMBSS', { schema: 'SANKHYA' })
export class TgfpmbssEntity {
  @Column('varchar', { name: 'CAMPANHA', length: 15 })
  campanha: string;

  @Column('varchar', { name: 'SEMANA', length: 9 })
  semana: string;

  @Column('varchar', { name: 'PERIODO', length: 13 })
  periodo: string;

  @Column('varchar', { name: 'MES', length: 9 })
  mes: string;

  @Column('varchar', { name: 'DISTRIBUIDOR', length: 40 })
  distribuidor: string;

  @Column('int', { name: 'CODIGO' })
  codigo: number;

  @Column('varchar', { name: 'PDV', length: 60 })
  pdv: string;

  @Column('varchar', { name: 'CNPJ', length: 14 })
  cnpj: string;

  @Column('smallint', { name: 'SSCOMCREDITO' })
  sscomcredito: number;

  @Column('varchar', { name: 'ZONAVENDA', length: 10 })
  zonavenda: string;

  @Column('varchar', { name: 'TERRITORIO', length: 10 })
  territorio: string;

  @Column('smallint', { name: 'DIAVENDA' })
  diavenda: number;

  @Column('varchar', { name: 'MARCA', length: 30 })
  marca: string;

  @Column('smallint', { name: 'SDIP' })
  sdip: number;

  @Column('varchar', { name: 'FA', length: 12 })
  fa: string;

  @Column('float', { name: 'VALORVAREJO', precision: 53 })
  valorvarejo: number;

  @Column('float', { name: 'OFERTAESPECIAL', precision: 53 })
  ofertaespecial: number;

  @Column('float', { name: 'MARGEMVAREJISTA', precision: 53 })
  margemvarejista: number;

  @Column('float', { name: 'VALORFINALCRED', precision: 53 })
  valorfinalcred: number;

  @Column('datetime', { name: 'DATAPAGAMENTO', nullable: true })
  datapagamento: Date | null;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('datetime', { name: 'DHINCLUSAO', default: () => 'getdate()' })
  dhinclusao: Date;

  @Column('varchar', { name: 'TIPOLANC', length: 1, default: () => "'I'" })
  tipolanc: string;

  @Column('int', { primary: true, name: 'NUIMP' })
  nuimp: number;

  @Column('varchar', { name: 'NOMEARQUIVO', nullable: true, length: 255 })
  nomearquivo: string | null;
}
