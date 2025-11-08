import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicidEntity } from './tSICID.entity';
import { TsipaiEntity } from './tSIPAI.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TCECAB_HIS', ['nuimp', 'seqhist'], { unique: true })
@Entity('TCECAB_HIS', { schema: 'SANKHYA' })
export class TcecabHisEntity {
  @Column('smallint', { primary: true, name: 'SEQHIST' })
  seqhist: number;

  @Column('datetime', { name: 'DHHIST' })
  dhhist: Date;

  @Column('int', { primary: true, name: 'NUIMP' })
  nuimp: number;

  @Column('varchar', { name: 'ORCAMENTO', length: 1 })
  orcamento: string;

  @Column('varchar', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('datetime', { name: 'DTABERT' })
  dtabert: Date;

  @Column('varchar', { name: 'SIGLAICT', length: 3 })
  siglaict: string;

  @Column('varchar', { name: 'VIATRANSP', length: 2 })
  viatransp: string;

  @Column('int', { name: 'CODCARG' })
  codcarg: number;

  @Column('float', { name: 'QTDCARG', precision: 53 })
  qtdcarg: number;

  @Column('float', { name: 'COMISSAO', precision: 53 })
  comissao: number;

  @Column('varchar', { name: 'TIPOCOMISSAO', length: 1 })
  tipocomissao: string;

  @Column('smallint', { name: 'CODMOEDAPROD' })
  codmoedaprod: number;

  @Column('float', { name: 'VLRMOEDAPROD', precision: 53 })
  vlrmoedaprod: number;

  @Column('datetime', { name: 'DTMOEDAPROD', nullable: true })
  dtmoedaprod: Date | null;

  @Column('smallint', { name: 'CODMOEDAIMPOST', nullable: true })
  codmoedaimpost: number | null;

  @Column('float', { name: 'VLRMOEDAIMPOST', precision: 53 })
  vlrmoedaimpost: number;

  @Column('datetime', { name: 'DTMOEDAIMPOST', nullable: true })
  dtmoedaimpost: Date | null;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('datetime', { name: 'DTAPROVACAO', nullable: true })
  dtaprovacao: Date | null;

  @Column('datetime', { name: 'DTREGDI', nullable: true })
  dtregdi: Date | null;

  @Column('datetime', { name: 'DTDESEMBARACO', nullable: true })
  dtdesembaraco: Date | null;

  @Column('varchar', { name: 'NUMDI', nullable: true, length: 10 })
  numdi: string | null;

  @Column('varchar', { name: 'DOCIMP', length: 1 })
  docimp: string;

  @Column('varchar', { name: 'NOMEEMBARC', nullable: true, length: 50 })
  nomeembarc: string | null;

  @Column('varchar', { name: 'LOCALEMBARC', nullable: true, length: 50 })
  localembarc: string | null;

  @Column('varchar', { name: 'INVOICE', nullable: true, length: 50 })
  invoice: string | null;

  @Column('float', { name: 'DESCICMS', nullable: true, precision: 53 })
  descicms: number | null;

  @Column('float', { name: 'TAXASERV', nullable: true, precision: 53 })
  taxaserv: number | null;

  @Column('float', { name: 'COMPTRIB', nullable: true, precision: 53 })
  comptrib: number | null;

  @Column('float', { name: 'VLRDESCICMS', nullable: true, precision: 53 })
  vlrdescicms: number | null;

  @Column('float', { name: 'VLRPRODEMB', nullable: true, precision: 53 })
  vlrprodemb: number | null;

  @Column('float', { name: 'VLRFRETE', nullable: true, precision: 53 })
  vlrfrete: number | null;

  @Column('float', { name: 'VLRSEG', nullable: true, precision: 53 })
  vlrseg: number | null;

  @Column('float', { name: 'VLRTHC', nullable: true, precision: 53 })
  vlrthc: number | null;

  @Column('float', { name: 'VLRADUANEIRO', nullable: true, precision: 53 })
  vlraduaneiro: number | null;

  @Column('float', { name: 'VLRII', nullable: true, precision: 53 })
  vlrii: number | null;

  @Column('float', { name: 'PERCII', nullable: true, precision: 53 })
  percii: number | null;

  @Column('float', { name: 'VLRIPI', nullable: true, precision: 53 })
  vlripi: number | null;

  @Column('float', { name: 'PERCIPI', nullable: true, precision: 53 })
  percipi: number | null;

  @Column('float', { name: 'VLRPIS', nullable: true, precision: 53 })
  vlrpis: number | null;

  @Column('float', { name: 'PERCPIS', nullable: true, precision: 53 })
  percpis: number | null;

  @Column('float', { name: 'PERCPISPRAT', nullable: true, precision: 53 })
  percpisprat: number | null;

  @Column('float', { name: 'VLRCOFINS', nullable: true, precision: 53 })
  vlrcofins: number | null;

  @Column('float', { name: 'PERCCOFINS', nullable: true, precision: 53 })
  perccofins: number | null;

  @Column('float', { name: 'PERCCOFINSPRAT', nullable: true, precision: 53 })
  perccofinsprat: number | null;

  @Column('float', { name: 'VLRICMS', nullable: true, precision: 53 })
  vlricms: number | null;

  @Column('float', { name: 'PERCICMS', nullable: true, precision: 53 })
  percicms: number | null;

  @Column('float', { name: 'VLRSISCOMEX', nullable: true, precision: 53 })
  vlrsiscomex: number | null;

  @Column('float', { name: 'VLRTOTIMPALFAND', nullable: true, precision: 53 })
  vlrtotimpalfand: number | null;

  @Column('float', { name: 'VLRTOTDESPALFAND', nullable: true, precision: 53 })
  vlrtotdespalfand: number | null;

  @Column('varchar', { name: 'URFLIBERACAO', nullable: true, length: 50 })
  urfliberacao: string | null;

  @Column('varchar', { name: 'RECADUANEIRO', nullable: true, length: 1 })
  recaduaneiro: string | null;

  @Column('varchar', { name: 'CANALPAR', nullable: true, length: 2 })
  canalpar: string | null;

  @Column('int', { name: 'CODCENCUS', nullable: true })
  codcencus: number | null;

  @Column('char', { name: 'FINALIZADO', length: 1, default: () => "'N'" })
  finalizado: string;

  @Column('float', { name: 'PERCFCPINT', nullable: true, precision: 53 })
  percfcpint: number | null;

  @Column('float', { name: 'VLRFCPINT', nullable: true, precision: 53 })
  vlrfcpint: number | null;

  @Column('float', { name: 'VLRAFRMM', nullable: true, precision: 53 })
  vlrafrmm: number | null;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tcecabHis)
  @JoinColumn([{ name: 'CODCIDDESEMB', referencedColumnName: 'codcid' }])
  codciddesemb: TsicidEntity;

  @ManyToOne(() => TsipaiEntity, (tsipaiEntity) => tsipaiEntity.tcecabHis)
  @JoinColumn([{ name: 'CODPAISORIG', referencedColumnName: 'codpais' }])
  codpaisorig: TsipaiEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcecabHis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcecabHis2)
  @JoinColumn([{ name: 'USUAPROVACAO', referencedColumnName: 'codusu' }])
  usuaprovacao: TsiusuEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tcecabHis)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tcecabHis)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo: TgfveiEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tcecabHis)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcecabHis)
  @JoinColumn([{ name: 'CODPARCAGENTE', referencedColumnName: 'codparc' }])
  codparcagente: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcecabHis2)
  @JoinColumn([{ name: 'CODPARCEXP', referencedColumnName: 'codparc' }])
  codparcexp: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcecabHis3)
  @JoinColumn([{ name: 'CODPARCIMP', referencedColumnName: 'codparc' }])
  codparcimp: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcecabHis4)
  @JoinColumn([{ name: 'CODPARCNAC', referencedColumnName: 'codparc' }])
  codparcnac: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcecabHis5)
  @JoinColumn([{ name: 'CODPARCTRANSP', referencedColumnName: 'codparc' }])
  codparctransp: TgfparEntity;
}
