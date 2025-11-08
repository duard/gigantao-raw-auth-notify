import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TsimoeEntity } from './tSIMOE.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgflocEntity } from './tGFLOC.entity';

@Index('PK_TCEITE_HIS', ['nuimp', 'sequencia', 'seqhist'], { unique: true })
@Entity('TCEITE_HIS', { schema: 'SANKHYA' })
export class TceiteHisEntity {
  @Column('smallint', { primary: true, name: 'SEQHIST' })
  seqhist: number;

  @Column('int', { primary: true, name: 'NUIMP' })
  nuimp: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REFFORN', nullable: true, length: 50 })
  refforn: string | null;

  @Column('varchar', { name: 'DESCRIMPORT', nullable: true, length: 250 })
  descrimport: string | null;

  @Column('float', { name: 'QTDNEG', nullable: true, precision: 53 })
  qtdneg: number | null;

  @Column('float', { name: 'VLRUNITEMMOEDA', nullable: true, precision: 53 })
  vlrunitemmoeda: number | null;

  @Column('float', { name: 'VLRTOTALEMMOEDA', nullable: true, precision: 53 })
  vlrtotalemmoeda: number | null;

  @Column('float', { name: 'VLRMOEDA', nullable: true, precision: 53 })
  vlrmoeda: number | null;

  @Column('float', { name: 'VLRUNIT', nullable: true, precision: 53 })
  vlrunit: number | null;

  @Column('float', { name: 'VLRTOTAL', nullable: true, precision: 53 })
  vlrtotal: number | null;

  @Column('float', { name: 'ALIQII', nullable: true, precision: 53 })
  aliqii: number | null;

  @Column('float', { name: 'BASEII', nullable: true, precision: 53 })
  baseii: number | null;

  @Column('float', { name: 'VLRII', nullable: true, precision: 53 })
  vlrii: number | null;

  @Column('float', { name: 'ALIQIPI', nullable: true, precision: 53 })
  aliqipi: number | null;

  @Column('float', { name: 'BASEIPI', nullable: true, precision: 53 })
  baseipi: number | null;

  @Column('float', { name: 'VLRIPI', nullable: true, precision: 53 })
  vlripi: number | null;

  @Column('float', { name: 'ALIQPIS', nullable: true, precision: 53 })
  aliqpis: number | null;

  @Column('float', { name: 'BASEPIS', nullable: true, precision: 53 })
  basepis: number | null;

  @Column('float', { name: 'VLRPIS', nullable: true, precision: 53 })
  vlrpis: number | null;

  @Column('float', { name: 'ALIQCOFINS', nullable: true, precision: 53 })
  aliqcofins: number | null;

  @Column('float', { name: 'BASECOFINS', nullable: true, precision: 53 })
  basecofins: number | null;

  @Column('float', { name: 'VLRCOFINS', nullable: true, precision: 53 })
  vlrcofins: number | null;

  @Column('float', { name: 'ALIQICM', nullable: true, precision: 53 })
  aliqicm: number | null;

  @Column('float', { name: 'BASEICM', nullable: true, precision: 53 })
  baseicm: number | null;

  @Column('float', { name: 'VLRICMS', nullable: true, precision: 53 })
  vlricms: number | null;

  @Column('float', { name: 'ALIQISS', nullable: true, precision: 53 })
  aliqiss: number | null;

  @Column('float', { name: 'BASEISS', nullable: true, precision: 53 })
  baseiss: number | null;

  @Column('float', { name: 'VLRISS', nullable: true, precision: 53 })
  vlriss: number | null;

  @Column('float', { name: 'ALIQIPIIMPORT', nullable: true, precision: 53 })
  aliqipiimport: number | null;

  @Column('float', { name: 'VLRIPIIMPORT', nullable: true, precision: 53 })
  vlripiimport: number | null;

  @Column('varchar', { name: 'CODFISIPI', nullable: true, length: 13 })
  codfisipi: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('varchar', { name: 'NROADICAO', nullable: true, length: 3 })
  nroadicao: string | null;

  @Column('varchar', { name: 'CODNCM', nullable: true, length: 10 })
  codncm: string | null;

  @Column('float', { name: 'PESOLIQUIDO', nullable: true, precision: 53 })
  pesoliquido: number | null;

  @Column('float', { name: 'VLRDESC', precision: 53, default: () => '(0)' })
  vlrdesc: number;

  @Column('varchar', { name: 'NUMACDRAW', nullable: true, length: 11 })
  numacdraw: string | null;

  @Column('int', { name: 'NROSEQDETALHE', nullable: true })
  nroseqdetalhe: number | null;

  @Column('float', { name: 'ALIQICMSVENDA', nullable: true, precision: 53 })
  aliqicmsvenda: number | null;

  @Column('varchar', { name: 'CONTROLE', nullable: true, length: 11 })
  controle: string | null;

  @Column('float', { name: 'VLRPROEMP', precision: 53, default: () => '(0)' })
  vlrproemp: number;

  @Column('float', { name: 'BASEPROEMP', precision: 53, default: () => '(0)' })
  baseproemp: number;

  @Column('float', { name: 'VLRFUNEDU', precision: 53, default: () => '(0)' })
  vlrfunedu: number;

  @Column('float', { name: 'BASEFUNEDU', precision: 53, default: () => '(0)' })
  basefunedu: number;

  @Column('float', { name: 'VLRFRETE', nullable: true, precision: 53 })
  vlrfrete: number | null;

  @Column('float', { name: 'VLRSEG', nullable: true, precision: 53 })
  vlrseg: number | null;

  @Column('float', { name: 'VLRTHC', nullable: true, precision: 53 })
  vlrthc: number | null;

  @Column('smallint', { name: 'CODTRIB', default: () => '(0)' })
  codtrib: number;

  @Column('float', { name: 'BASEPISREAL', nullable: true, precision: 53 })
  basepisreal: number | null;

  @Column('smallint', { name: 'CODEXNCM', default: () => '(0)' })
  codexncm: number;

  @Column('float', { name: 'ALIQCOFINSCRED', nullable: true, precision: 53 })
  aliqcofinscred: number | null;

  @Column('float', { name: 'VLRCOFINSCRED', nullable: true, precision: 53 })
  vlrcofinscred: number | null;

  @Column('float', { name: 'VLRICMSDIF', nullable: true, precision: 53 })
  vlricmsdif: number | null;

  @Column('float', { name: 'ALIQFCPINT', nullable: true, precision: 53 })
  aliqfcpint: number | null;

  @Column('float', { name: 'VLRFCPINT', nullable: true, precision: 53 })
  vlrfcpint: number | null;

  @Column('float', { name: 'ALIQFCPVENDA', nullable: true, precision: 53 })
  aliqfcpvenda: number | null;

  @Column('float', { name: 'ALIQPISCRED', nullable: true, precision: 53 })
  aliqpiscred: number | null;

  @Column('float', { name: 'VLRPISCRED', nullable: true, precision: 53 })
  vlrpiscred: number | null;

  @Column('float', { name: 'VLRAFRMM', nullable: true, precision: 53 })
  vlrafrmm: number | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tceiteHis)
  @JoinColumn([{ name: 'CODPARCFAB', referencedColumnName: 'codparc' }])
  codparcfab: TgfparEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.tceiteHis)
  @JoinColumn([{ name: 'CODMOEDA', referencedColumnName: 'codmoeda' }])
  codmoeda: TsimoeEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tceiteHis)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tceiteHis)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tceiteHis)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tceiteHis)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal: TgflocEntity;
}
