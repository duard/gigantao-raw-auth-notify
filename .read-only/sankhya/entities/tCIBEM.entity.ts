import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TapepjEntity } from './tAPEPJ.entity';
import { TapeqtEntity } from './tAPEQT.entity';
import { TcfoscabEntity } from './tCFOSCAB.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TcicexEntity } from './tCICEX.entity';
import { TcictaEntity } from './tCICTA.entity';
import { TcidemEntity } from './tCIDEM.entity';
import { TcidibiEntity } from './tCIDIBI.entity';
import { TcimovEntity } from './tCIMOV.entity';
import { TcimovajEntity } from './tCIMOVAJ.entity';
import { TcisalEntity } from './tCISAL.entity';
import { TcisalajEntity } from './tCISALAJ.entity';
import { TcitaxEntity } from './tCITAX.entity';
import { TcitaxajEntity } from './tCITAXAJ.entity';
import { TgfmeqEntity } from './tGFMEQ.entity';

@Index('PK_TCIBEM', ['codbem', 'codprod'], { unique: true })
@Index('TCIBEM_I01', ['nunota', 'codprod'], {})
@Index('TCIBEM_I03', ['nunotadev'], {})
@Index('TCIBEM_I04', ['nunotadevvenda'], {})
@Index('TCIBEM_I05', ['nunotasaida'], {})
@Index('TCIBEM_I06', ['codbematual'], {})
@Index('TCIBEM_IFK', ['nunotabaixa'], {})
@Entity('TCIBEM', { schema: 'SANKHYA' })
export class TcibemEntity {
  @Column('char', { primary: true, name: 'CODBEM', length: 30 })
  codbem: string;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('float', {
    name: 'VLRDEP',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrdep: number | null;

  @Column('money', { name: 'VLRSALDO', default: () => '(0)' })
  vlrsaldo: number;

  @Column('text', { name: 'DESCRBEM', nullable: true })
  descrbem: string | null;

  @Column('datetime', { name: 'DTCOMPRA', nullable: true })
  dtcompra: Date | null;

  @Column('datetime', { name: 'DTBAIXA', nullable: true })
  dtbaixa: Date | null;

  @Column('datetime', { name: 'DTINICIODEP', nullable: true })
  dtiniciodep: Date | null;

  @Column('datetime', { name: 'DTFIMDEP', nullable: true })
  dtfimdep: Date | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'NUNOTABAIXA', nullable: true })
  nunotabaixa: number | null;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('int', { name: 'NUMNOTABAIXA', nullable: true })
  numnotabaixa: number | null;

  @Column('char', { name: 'CODBEMORIG', nullable: true, length: 30 })
  codbemorig: string | null;

  @Column('money', { name: 'VLRAQUISICAO', nullable: true })
  vlraquisicao: number | null;

  @Column('char', { name: 'CODBEMATUAL', nullable: true, length: 30 })
  codbematual: string | null;

  @Column('int', { name: 'NUNOTADEV', nullable: true })
  nunotadev: number | null;

  @Column('int', { name: 'NUNOTASAIDA', nullable: true, default: () => '(0)' })
  nunotasaida: number | null;

  @Column('int', { name: 'NUMCONTRATO', nullable: true, default: () => '(0)' })
  numcontrato: number | null;

  @Column('datetime', { name: 'DTINIREFCIAP', nullable: true })
  dtinirefciap: Date | null;

  @Column('datetime', { name: 'DTFIMREFCIAP', nullable: true })
  dtfimrefciap: Date | null;

  @Column('money', { name: 'VLRICMSCIAP', nullable: true })
  vlricmsciap: number | null;

  @Column('int', { name: 'QTDMESESCIAP', nullable: true })
  qtdmesesciap: number | null;

  @Column('int', { name: 'NUNOTADEVVENDA', nullable: true })
  nunotadevvenda: number | null;

  @Column('char', { name: 'TEMDEPRECIACAO', length: 1, default: () => "'S'" })
  temdepreciacao: string;

  @Column('char', { name: 'DESCRABREV', nullable: true, length: 100 })
  descrabrev: string | null;

  @Column('float', { name: 'VLRICMSSTCIAP', nullable: true, precision: 53 })
  vlricmsstciap: number | null;

  @Column('float', { name: 'VLRICMSFRTCIAP', nullable: true, precision: 53 })
  vlricmsfrtciap: number | null;

  @Column('float', { name: 'VLRICMSDIFCIAP', nullable: true, precision: 53 })
  vlricmsdifciap: number | null;

  @Column('text', { name: 'DESCRUTILBEM', nullable: true })
  descrutilbem: string | null;

  @Column('smallint', { name: 'VIDAUTIL', nullable: true })
  vidautil: number | null;

  @Column('smallint', { name: 'UTILIMOB', nullable: true })
  utilimob: number | null;

  @Column('char', {
    name: 'TEMCREDPISCOFINSDEPR',
    length: 1,
    default: () => "'N'",
  })
  temcredpiscofinsdepr: string;

  @Column('smallint', { name: 'CSTPIS', nullable: true })
  cstpis: number | null;

  @Column('smallint', { name: 'CSTCOFINS', nullable: true })
  cstcofins: number | null;

  @Column('datetime', { name: 'DTINICIOAJ', nullable: true })
  dtinicioaj: Date | null;

  @Column('datetime', { name: 'DTFIMAJ', nullable: true })
  dtfimaj: Date | null;

  @Column('char', {
    name: 'TEMAJ',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  temaj: string | null;

  @Column('float', { name: 'VLRDEPAJ', nullable: true, precision: 53 })
  vlrdepaj: number | null;

  @Column('float', { name: 'VLRSALDOAJ', nullable: true, precision: 53 })
  vlrsaldoaj: number | null;

  @Column('float', { name: 'ALIQPIS', nullable: true, precision: 53 })
  aliqpis: number | null;

  @Column('float', { name: 'ALIQCOFINS', nullable: true, precision: 53 })
  aliqcofins: number | null;

  @Column('varchar', { name: 'TIPOENTCIAP', length: 2, default: () => "'IM'" })
  tipoentciap: string;

  @Column('float', { name: 'VALORPRESENTE', nullable: true, precision: 53 })
  valorpresente: number | null;

  @Column('float', { name: 'VLRDEPORIG', nullable: true, precision: 53 })
  vlrdeporig: number | null;

  @Column('smallint', { name: 'NPARCPISCOF', default: () => '(0)' })
  nparcpiscof: number;

  @Column('char', { name: 'PISCOFMP540', length: 1, default: () => "'N'" })
  piscofmp540: string;

  @Column('float', { name: 'VLRTOTDESPESABEM', nullable: true, precision: 53 })
  vlrtotdespesabem: number | null;

  @Column('float', {
    name: 'VLRCOMPRAAQUISICAO',
    nullable: true,
    precision: 53,
  })
  vlrcompraaquisicao: number | null;

  @Column('datetime', { name: 'DHDESMEMBRAMENTO', nullable: true })
  dhdesmembramento: Date | null;

  @Column('float', { name: 'VLRPISCOMPRA', nullable: true, precision: 53 })
  vlrpiscompra: number | null;

  @Column('float', { name: 'VLRCOFINSCOMPRA', nullable: true, precision: 53 })
  vlrcofinscompra: number | null;

  @Column('char', { name: 'DIGITADOCOMPRA', nullable: true, length: 1 })
  digitadocompra: string | null;

  @Column('datetime', { name: 'DHALTERCOMPRA', nullable: true })
  dhaltercompra: Date | null;

  @Column('float', { name: 'VLREXCBASECRED', nullable: true, precision: 53 })
  vlrexcbasecred: number | null;

  @OneToMany(() => TapepjEntity, (tapepjEntity) => tapepjEntity.tcibem)
  tapepjs: TapepjEntity[];

  @OneToMany(() => TapeqtEntity, (tapeqtEntity) => tapeqtEntity.tcibem)
  tapeqts: TapeqtEntity[];

  @OneToMany(() => TcfoscabEntity, (tcfoscabEntity) => tcfoscabEntity.tcibem)
  tcfoscabs: TcfoscabEntity[];

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tcibems)
  @JoinColumn([{ name: 'NUNOTAORIGDESMEMB', referencedColumnName: 'nunota' }])
  nunotaorigdesmemb: TgfcabEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcibems)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcibems2)
  @JoinColumn([{ name: 'CODPRODORIG', referencedColumnName: 'codprod' }])
  codprodorig: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcibems)
  @JoinColumn([{ name: 'CODUSUCOMPRA', referencedColumnName: 'codusu' }])
  codusucompra: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcibems2)
  @JoinColumn([
    { name: 'CODUSUDESMEMBRAMENTO', referencedColumnName: 'codusu' },
  ])
  codusudesmembramento: TsiusuEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcibems)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @OneToMany(() => TcicexEntity, (tcicexEntity) => tcicexEntity.tcibem)
  tcicexes: TcicexEntity[];

  @OneToMany(() => TcictaEntity, (tcictaEntity) => tcictaEntity.tcibem)
  tcictas: TcictaEntity[];

  @OneToMany(() => TcidemEntity, (tcidemEntity) => tcidemEntity.tcibem)
  tcidems: TcidemEntity[];

  @OneToMany(() => TcidibiEntity, (tcidibiEntity) => tcidibiEntity.tcibem)
  tcidibis: TcidibiEntity[];

  @OneToMany(() => TcimovEntity, (tcimovEntity) => tcimovEntity.tcibem)
  tcimovs: TcimovEntity[];

  @OneToMany(() => TcimovajEntity, (tcimovajEntity) => tcimovajEntity.tcibem)
  tcimovajs: TcimovajEntity[];

  @OneToMany(() => TcisalEntity, (tcisalEntity) => tcisalEntity.tcibem)
  tcisals: TcisalEntity[];

  @OneToMany(() => TcisalajEntity, (tcisalajEntity) => tcisalajEntity.tcibem)
  tcisalajs: TcisalajEntity[];

  @OneToMany(() => TcitaxEntity, (tcitaxEntity) => tcitaxEntity.tcibem)
  tcitaxes: TcitaxEntity[];

  @OneToMany(() => TcitaxajEntity, (tcitaxajEntity) => tcitaxajEntity.tcibem)
  tcitaxajs: TcitaxajEntity[];

  @OneToMany(() => TgfmeqEntity, (tgfmeqEntity) => tgfmeqEntity.tcibem)
  tgfmeqs: TgfmeqEntity[];
}
