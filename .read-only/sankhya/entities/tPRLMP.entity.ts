import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpratvEntity } from './tPRATV.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TPRLMP', ['idefx', 'seqmp'], { unique: true })
@Index('TPRLMP_I_EXT_MAT', ['codprodpa', 'controlepa', 'idefx'], {})
@Index(
  'TPRLMP_IDEFX_IDX',
  ['idefx', 'codprodpa', 'controlepa', 'codprodmp', 'controlemp', 'tipousomp'],
  {},
)
@Entity('TPRLMP', { schema: 'SANKHYA' })
export class TprlmpEntity {
  @Column('int', { primary: true, name: 'IDEFX' })
  idefx: number;

  @Column('int', { primary: true, name: 'SEQMP' })
  seqmp: number;

  @Column('char', {
    name: 'TIPOUSOMP',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  tipousomp: string | null;

  @Column('int', { name: 'CODPRODPA', nullable: true })
  codprodpa: number | null;

  @Column('varchar', { name: 'CONTROLEPA', nullable: true, length: 11 })
  controlepa: string | null;

  @Column('char', {
    name: 'TIPOCONTROLEMP',
    nullable: true,
    length: 1,
    default: () => "'L'",
  })
  tipocontrolemp: string | null;

  @Column('int', { name: 'CODPRODMP', nullable: true })
  codprodmp: number | null;

  @Column('varchar', {
    name: 'CONTROLEMP',
    nullable: true,
    length: 11,
    default: () => 'NULL',
  })
  controlemp: string | null;

  @Column('char', {
    name: 'TIPOQTD',
    nullable: true,
    length: 1,
    default: () => "'V'",
  })
  tipoqtd: string | null;

  @Column('float', {
    name: 'QTDMISTURA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  qtdmistura: number | null;

  @Column('varchar', { name: 'CODVOL', nullable: true, length: 2 })
  codvol: string | null;

  @Column('char', {
    name: 'VERIFICAEST',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  verificaest: string | null;

  @Column('char', {
    name: 'GERAREQUISICAO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  gerarequisicao: string | null;

  @Column('int', { name: 'CODLOCALORIG', nullable: true, default: () => '(0)' })
  codlocalorig: number | null;

  @Column('float', { name: 'PERCDESVIOINF', nullable: true, precision: 53 })
  percdesvioinf: number | null;

  @Column('float', { name: 'PERCDESVIOSUP', nullable: true, precision: 53 })
  percdesviosup: number | null;

  @Column('int', {
    name: 'CODLOCALBAIXA',
    nullable: true,
    default: () => '(0)',
  })
  codlocalbaixa: number | null;

  @Column('char', {
    name: 'FIXAQTDAPO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  fixaqtdapo: string | null;

  @Column('varchar', {
    name: 'CONSUREFUGO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  consurefugo: string | null;

  @Column('char', { name: 'VINCULOSERIEPA', nullable: true, length: 1 })
  vinculoseriepa: string | null;

  @Column('char', {
    name: 'ESTOQUETERCEIRO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  estoqueterceiro: string | null;

  @Column('char', {
    name: 'LIBERADESVIO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  liberadesvio: string | null;

  @Column('char', { name: 'PROPMPFIXA', nullable: true, length: 1 })
  propmpfixa: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('datetime', { name: 'DHCAD', nullable: true })
  dhcad: Date | null;

  @Column('smallint', { name: 'CODUSUCAD', nullable: true })
  codusucad: number | null;

  @Column('smallint', { name: 'CODUSUALT', nullable: true })
  codusualt: number | null;

  @ManyToOne(() => TpratvEntity, (tpratvEntity) => tpratvEntity.tprlmps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx2: TpratvEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprlmps)
  @JoinColumn([{ name: 'CODPRODPA', referencedColumnName: 'codprod' }])
  codprodpa2: TgfproEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprlmps2)
  @JoinColumn([{ name: 'CODPRODMP', referencedColumnName: 'codprod' }])
  codprodmp2: TgfproEntity;
}
