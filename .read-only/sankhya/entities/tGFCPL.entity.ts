import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TsicidEntity } from './tSICID.entity';
import { TsipaiEntity } from './tSIPAI.entity';
import { TgfntaEntity } from './tGFNTA.entity';
import { TsimoeEntity } from './tSIMOE.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TgccredEntity } from './tGCCRED.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsiendEntity } from './tSIEND.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFCPL', ['codparc'], { unique: true })
@Index('TGFCPL_I01', ['codtabcot'], {})
@Index('TGFCPL_I02', ['grupodescparc'], {})
@Entity('TGFCPL', { schema: 'SANKHYA' })
export class TgfcplEntity {
  @Column('int', { name: 'CODCID', nullable: true })
  codcid: number | null;

  @Column('smallint', { name: 'CODPAIS', nullable: true })
  codpais: number | null;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('char', { name: 'IDENTIFICACAO', nullable: true, length: 15 })
  identificacao: string | null;

  @Column('char', { name: 'NUMENTREGA', nullable: true, length: 6 })
  numentrega: string | null;

  @Column('char', { name: 'COMPLENTREGA', nullable: true, length: 30 })
  complentrega: string | null;

  @Column('char', { name: 'CEPENTREGA', nullable: true, length: 8 })
  cepentrega: string | null;

  @Column('char', { name: 'NUMRECEB', nullable: true, length: 6 })
  numreceb: string | null;

  @Column('char', { name: 'COMPLRECEB', nullable: true, length: 30 })
  complreceb: string | null;

  @Column('char', { name: 'CEPRECEB', nullable: true, length: 8 })
  cepreceb: string | null;

  @Column('char', { name: 'LOCALTRAB', nullable: true, length: 36 })
  localtrab: string | null;

  @Column('char', { name: 'NUMTRAB', nullable: true, length: 6 })
  numtrab: string | null;

  @Column('char', { name: 'COMPLTRAB', nullable: true, length: 30 })
  compltrab: string | null;

  @Column('char', { name: 'CEPTRAB', nullable: true, length: 8 })
  ceptrab: string | null;

  @Column('varchar', { name: 'TELTRAB', nullable: true, length: 13 })
  teltrab: string | null;

  @Column('smallint', { name: 'RAMAL', nullable: true })
  ramal: number | null;

  @Column('datetime', { name: 'DTADM', nullable: true })
  dtadm: Date | null;

  @Column('char', { name: 'PAI', nullable: true, length: 36 })
  pai: string | null;

  @Column('char', { name: 'MAE', nullable: true, length: 36 })
  mae: string | null;

  @Column('char', { name: 'CONJUGE', nullable: true, length: 36 })
  conjuge: string | null;

  @Column('char', { name: 'TIPMORADIA', nullable: true, length: 1 })
  tipmoradia: string | null;

  @Column('datetime', { name: 'TEMPORESID', nullable: true })
  temporesid: Date | null;

  @Column('money', { name: 'RENDAMENSAL', nullable: true })
  rendamensal: number | null;

  @Column('smallint', { name: 'CODMOEDARENDA', nullable: true })
  codmoedarenda: number | null;

  @Column('smallint', { name: 'DIAPAG', nullable: true })
  diapag: number | null;

  @Column('char', { name: 'CODSUFRAMA', nullable: true, length: 11 })
  codsuframa: string | null;

  @Column('char', { name: 'VIATRANSP', nullable: true, length: 2 })
  viatransp: string | null;

  @Column('char', { name: 'PLACAVEICULO', nullable: true, length: 8 })
  placaveiculo: string | null;

  @Column('image', { name: 'IMAGEM', nullable: true })
  imagem: Buffer | null;

  @Column('smallint', { name: 'SUGTIPNEGSAID', default: () => '(0)' })
  sugtipnegsaid: number;

  @Column('smallint', { name: 'SUGTIPNEGENTR', default: () => '(0)' })
  sugtipnegentr: number;

  @Column('smallint', { name: 'SEQENTREGA', default: () => '(0)' })
  seqentrega: number;

  @Column('int', { name: 'SEQVISITA', default: () => '(0)' })
  seqvisita: number;

  @Column('char', { name: 'GRUPODESCPARC', nullable: true, length: 15 })
  grupodescparc: string | null;

  @Column('char', { name: 'EXIGEPEDIDO', length: 1, default: () => "'N'" })
  exigepedido: string;

  @Column('char', {
    name: 'ISENTOTAXAMINBOLETA',
    length: 1,
    default: () => "'N'",
  })
  isentotaxaminboleta: string;

  @Column('char', { name: 'NROCNH', nullable: true, length: 20 })
  nrocnh: string | null;

  @Column('datetime', { name: 'VENCIMENTOCNH', nullable: true })
  vencimentocnh: Date | null;

  @Column('char', { name: 'CATEGORIACNH', nullable: true, length: 4 })
  categoriacnh: string | null;

  @Column('smallint', { name: 'CODTABCOT', nullable: true })
  codtabcot: number | null;

  @Column('char', { name: 'USASAIDAFATPER', length: 1, default: () => "'N'" })
  usasaidafatper: string;

  @Column('datetime', {
    name: 'DTALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dtalter: Date | null;

  @Column('char', { name: 'GERARFRETE', length: 1, default: () => "'N'" })
  gerarfrete: string;

  @Column('char', { name: 'LIMCREDAUTOM', length: 1, default: () => "'N'" })
  limcredautom: string;

  @Column('money', { name: 'FATMIN', nullable: true })
  fatmin: number | null;

  @Column('float', { name: 'MULTHORAEXTRA', nullable: true, precision: 53 })
  multhoraextra: number | null;

  @Column('varchar', { name: 'CREA', nullable: true, length: 12 })
  crea: string | null;

  @Column('datetime', { name: 'DTCREA', nullable: true })
  dtcrea: Date | null;

  @Column('char', { name: 'UFCREA', nullable: true, length: 2 })
  ufcrea: string | null;

  @Column('varchar', { name: 'LOGISTICA', nullable: true, length: 250 })
  logistica: string | null;

  @Column('varchar', { name: 'CODVOLFAT', nullable: true, length: 2 })
  codvolfat: string | null;

  @Column('varchar', { name: 'LATITUDEENTREGA', nullable: true, length: 255 })
  latitudeentrega: string | null;

  @Column('varchar', { name: 'LONGITUDEENTREGA', nullable: true, length: 255 })
  longitudeentrega: string | null;

  @Column('smallint', { name: 'DIASEMANAPAG', nullable: true })
  diasemanapag: number | null;

  @Column('smallint', { name: 'DIAPAG2', nullable: true })
  diapag2: number | null;

  @Column('smallint', { name: 'DIAPAG3', nullable: true })
  diapag3: number | null;

  @Column('smallint', { name: 'DIAPAG4', nullable: true })
  diapag4: number | null;

  @Column('smallint', { name: 'DIAPAG5', nullable: true })
  diapag5: number | null;

  @Column('smallint', { name: 'DIAPAG6', nullable: true })
  diapag6: number | null;

  @Column('char', { name: 'SITCADSUFRAMA', length: 1, default: () => "'0'" })
  sitcadsuframa: string;

  @Column('datetime', { name: 'DHCADSUFRAMA', nullable: true })
  dhcadsuframa: Date | null;

  @Column('varchar', { name: 'SEMREPREDAGRO', nullable: true, length: 1 })
  semrepredagro: string | null;

  @Column('char', { name: 'TEMSUFRAMAPISCOF', nullable: true, length: 1 })
  temsuframapiscof: string | null;

  @Column('datetime', { name: 'DTEMISAOCNHATUAL', nullable: true })
  dtemisaocnhatual: Date | null;

  @Column('datetime', { name: 'DTPRIMEIRACNH', nullable: true })
  dtprimeiracnh: Date | null;

  @Column('varchar', { name: 'NROREGISTROCNH', nullable: true, length: 100 })
  nroregistrocnh: string | null;

  @Column('varchar', { name: 'NROSEGURANCACNH', nullable: true, length: 100 })
  nrosegurancacnh: string | null;

  @Column('smallint', { name: 'INFOISENIMUNI', nullable: true })
  infoisenimuni: number | null;

  @Column('smallint', { name: 'TPFONTEPAG', nullable: true })
  tpfontepag: number | null;

  @Column('smallint', { name: 'CODINDNIF', nullable: true })
  codindnif: number | null;

  @Column('smallint', { name: 'TPIRRFEXT', nullable: true })
  tpirrfext: number | null;

  @Column('varchar', { name: 'NUMINDNIF', nullable: true, length: 30 })
  numindnif: string | null;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgfcpls)
  @JoinColumn([{ name: 'CODCIDTRAB', referencedColumnName: 'codcid' }])
  codcidtrab: TsicidEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgfcpls2)
  @JoinColumn([{ name: 'NATURALIDADE', referencedColumnName: 'codcid' }])
  naturalidade: TsicidEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgfcpls3)
  @JoinColumn([{ name: 'CODCIDENTREGA', referencedColumnName: 'codcid' }])
  codcidentrega: TsicidEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgfcpls4)
  @JoinColumn([{ name: 'CODCIDRECEB', referencedColumnName: 'codcid' }])
  codcidreceb: TsicidEntity;

  @ManyToOne(() => TsipaiEntity, (tsipaiEntity) => tsipaiEntity.tgfcpls)
  @JoinColumn([{ name: 'NACIONALIDADE', referencedColumnName: 'codpais' }])
  nacionalidade: TsipaiEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgfcpls)
  @JoinColumn([{ name: 'CODTABCOT', referencedColumnName: 'codtab' }])
  codtabcot2: TgfntaEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.tgfcpls)
  @JoinColumn([{ name: 'CODMOEDALIM', referencedColumnName: 'codmoeda' }])
  codmoedalim: TsimoeEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.tgfcpls)
  @JoinColumn([{ name: 'CODBAITRAB', referencedColumnName: 'codbai' }])
  codbaitrab: TsibaiEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.tgfcpls2)
  @JoinColumn([{ name: 'CODBAIRECEB', referencedColumnName: 'codbai' }])
  codbaireceb: TsibaiEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.tgfcpls3)
  @JoinColumn([{ name: 'CODBAIENTREGA', referencedColumnName: 'codbai' }])
  codbaientrega: TsibaiEntity;

  @ManyToOne(() => TgccredEntity, (tgccredEntity) => tgccredEntity.tgfcpls)
  @JoinColumn([{ name: 'CODCRED', referencedColumnName: 'codcred' }])
  codcred: TgccredEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcpls)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.tgfcpls)
  @JoinColumn([{ name: 'CODENDRECEB', referencedColumnName: 'codend' }])
  codendreceb: TsiendEntity;

  @OneToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcpl, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcpls)
  @JoinColumn([{ name: 'CODPARCTRANSP', referencedColumnName: 'codparc' }])
  codparctransp: TgfparEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.tgfcpls2)
  @JoinColumn([{ name: 'CODENDENTREGA', referencedColumnName: 'codend' }])
  codendentrega: TsiendEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.tgfcpls3)
  @JoinColumn([{ name: 'CODENDTRAB', referencedColumnName: 'codend' }])
  codendtrab: TsiendEntity;
}
