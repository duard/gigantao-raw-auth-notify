import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TtkprocEntity } from './tTKPROC.entity';

@Index('PK__TTKPITI__6C2F93395C7E5279', ['sequencia'], { unique: true })
@Entity('TTKPITI', { schema: 'SANKHYA' })
export class TtkpitiEntity {
  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'OPERACAO', length: 10 })
  operacao: string;

  @Column('date', { name: 'DATA' })
  data: Date;

  @Column('varchar', { name: 'ESPECIE', length: 2 })
  especie: string;

  @Column('varchar', { name: 'SERIE', length: 3 })
  serie: string;

  @Column('int', { name: 'NUMERO' })
  numero: number;

  @Column('varchar', { name: 'CPFCNPJORIG', length: 14 })
  cpfcnpjorig: string;

  @Column('varchar', { name: 'TIPOORIG', length: 2 })
  tipoorig: string;

  @Column('varchar', { name: 'RAZAOSOCORIG', length: 255 })
  razaosocorig: string;

  @Column('varchar', { name: 'UFORIG', length: 2 })
  uforig: string;

  @Column('varchar', { name: 'CPFCNPJDEST', length: 14 })
  cpfcnpjdest: string;

  @Column('varchar', { name: 'TIPODEST', length: 2 })
  tipodest: string;

  @Column('varchar', { name: 'RAZAOSOCDEST', length: 255 })
  razaosocdest: string;

  @Column('varchar', { name: 'UFDEST', length: 2 })
  ufdest: string;

  @Column('varchar', { name: 'CFOP', length: 4 })
  cfop: string;

  @Column('varchar', { name: 'CODIGO', length: 100 })
  codigo: string;

  @Column('varchar', { name: 'DESCRICAO', length: 255 })
  descricao: string;

  @Column('varchar', { name: 'NCM', length: 8 })
  ncm: string;

  @Column('varchar', { name: 'CEST', nullable: true, length: 20 })
  cest: string | null;

  @Column('int', { name: 'ORIGEM' })
  origem: number;

  @Column('varchar', { name: 'UNIDADE', length: 10 })
  unidade: string;

  @Column('varchar', { name: 'CSTCSOSN', length: 4 })
  cstcsosn: string;

  @Column('float', { name: 'ALIQICMS', precision: 53 })
  aliqicms: number;

  @Column('float', { name: 'MVA', precision: 53 })
  mva: number;

  @Column('float', { name: 'ALIQICMSFCP', precision: 53 })
  aliqicmsfcp: number;

  @Column('float', { name: 'PERREDBCICMS', precision: 53 })
  perredbcicms: number;

  @Column('int', { name: 'MODBCICMSST' })
  modbcicmsst: number;

  @Column('varchar', { name: 'ASISMVA', nullable: true, length: 20 })
  asismva: string | null;

  @Column('varchar', { name: 'ASISALIQICMS', nullable: true, length: 20 })
  asisaliqicms: string | null;

  @Column('varchar', { name: 'ASISPERREDBCICMS', nullable: true, length: 20 })
  asisperredbcicms: string | null;

  @Column('varchar', { name: 'VALIDASIS', nullable: true, length: 20 })
  validasis: string | null;

  @Column('varchar', { name: 'ASISVALORMVA', nullable: true, length: 20 })
  asisvalormva: string | null;

  @Column('varchar', { name: 'ASISVALORALIQICMS', nullable: true, length: 20 })
  asisvaloraliqicms: string | null;

  @Column('varchar', {
    name: 'ASISVALORPERREDBCICMS',
    nullable: true,
    length: 20,
  })
  asisvalorperredbcicms: string | null;

  @Column('int', { name: 'CSTIPI', nullable: true })
  cstipi: number | null;

  @Column('float', { name: 'ALIQIPI', nullable: true, precision: 53 })
  aliqipi: number | null;

  @Column('int', { name: 'CSTPIS', nullable: true })
  cstpis: number | null;

  @Column('float', { name: 'ALIQPIS', nullable: true, precision: 53 })
  aliqpis: number | null;

  @Column('float', { name: 'VALIQPIS', nullable: true, precision: 53 })
  valiqpis: number | null;

  @Column('float', { name: 'ALIQPISST', nullable: true, precision: 53 })
  aliqpisst: number | null;

  @Column('float', { name: 'VALIQPISST', nullable: true, precision: 53 })
  valiqpisst: number | null;

  @Column('int', { name: 'CSTCOFINS', nullable: true })
  cstcofins: number | null;

  @Column('float', { name: 'ALIQCOFINS', nullable: true, precision: 53 })
  aliqcofins: number | null;

  @Column('float', { name: 'VALIQCOFINS', nullable: true, precision: 53 })
  valiqcofins: number | null;

  @Column('float', { name: 'ALIQCOFINSST', nullable: true, precision: 53 })
  aliqcofinsst: number | null;

  @Column('float', { name: 'VALIQCOFINSST', nullable: true, precision: 53 })
  valiqcofinsst: number | null;

  @Column('int', { name: 'IDDEST', nullable: true })
  iddest: number | null;

  @Column('int', { name: 'INDFINAL', nullable: true })
  indfinal: number | null;

  @Column('int', { name: 'FINNFE', nullable: true })
  finnfe: number | null;

  @Column('varchar', { name: 'CHAVE', nullable: true, length: 44 })
  chave: string | null;

  @ManyToOne(() => TtkprocEntity, (ttkprocEntity) => ttkprocEntity.ttkpitis, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUPROC', referencedColumnName: 'nuproc' }])
  nuproc: TtkprocEntity;
}
