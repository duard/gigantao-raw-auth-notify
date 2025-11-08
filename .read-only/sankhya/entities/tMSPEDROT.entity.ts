import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfrotEntity } from './tGFROT.entity';
import { TmspedEntity } from './tMSPED.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TMSPEDROT', ['nuped', 'sequencia'], { unique: true })
@Entity('TMSPEDROT', { schema: 'SANKHYA' })
export class TmspedrotEntity {
  @Column('int', { primary: true, name: 'NUPED' })
  nuped: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('varchar', { name: 'CALCULARPOR', nullable: true, length: 10 })
  calcularpor: string | null;

  @Column('varchar', { name: 'ICMSINCLUSO', nullable: true, length: 10 })
  icmsincluso: string | null;

  @Column('varchar', { name: 'PEDAGIOINCLUSO', nullable: true, length: 10 })
  pedagioincluso: string | null;

  @Column('varchar', { name: 'CALCULOPEDAGIO', nullable: true, length: 10 })
  calculopedagio: string | null;

  @Column('varchar', { name: 'PEDAGIOBASEICMS', nullable: true, length: 10 })
  pedagiobaseicms: string | null;

  @Column('float', { name: 'TAXASEGURO', nullable: true, precision: 53 })
  taxaseguro: number | null;

  @Column('float', {
    name: 'PERADICMERCSEGURADA',
    nullable: true,
    precision: 53,
  })
  peradicmercsegurada: number | null;

  @Column('float', {
    name: 'FRETEMOTPROPRIOMAX',
    nullable: true,
    precision: 53,
  })
  fretemotpropriomax: number | null;

  @Column('float', { name: 'FRETEMOTPJMAX', nullable: true, precision: 53 })
  fretemotpjmax: number | null;

  @Column('float', { name: 'FRETEMOTPFMAX', nullable: true, precision: 53 })
  fretemotpfmax: number | null;

  @Column('float', { name: 'FRETEMOTAGREMAX', nullable: true, precision: 53 })
  fretemotagremax: number | null;

  @Column('float', { name: 'VALORPEDAGIO', nullable: true, precision: 53 })
  valorpedagio: number | null;

  @Column('float', { name: 'VLRFRETEEMPRESA', nullable: true, precision: 53 })
  vlrfreteempresa: number | null;

  @Column('int', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('varchar', { name: 'ATUALIZASALDO', nullable: true, length: 10 })
  atualizasaldo: string | null;

  @Column('float', { name: 'PERCADIANTAMENTO', nullable: true, precision: 53 })
  percadiantamento: number | null;

  @Column('varchar', { name: 'SERIE', nullable: true, length: 100 })
  serie: string | null;

  @Column('datetime', { name: 'DHINC', nullable: true })
  dhinc: Date | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('float', { name: 'VLRPAUTA', nullable: true, precision: 53 })
  vlrpauta: number | null;

  @Column('float', { name: 'VLRTAXASEGUROMOT', nullable: true, precision: 53 })
  vlrtaxaseguromot: number | null;

  @Column('float', {
    name: 'VLRMAXTAXASEGUROMOT',
    nullable: true,
    precision: 53,
  })
  vlrmaxtaxaseguromot: number | null;

  @Column('varchar', { name: 'PEDAGIOINCLUSOMOT', nullable: true, length: 1 })
  pedagioinclusomot: string | null;

  @Column('varchar', {
    name: 'CALCULARFRETEMOTPOR',
    nullable: true,
    length: 10,
  })
  calcularfretemotpor: string | null;

  @Column('float', { name: 'TAXASEGUROEMP', nullable: true, precision: 53 })
  taxaseguroemp: number | null;

  @Column('float', {
    name: 'VLRMINFRETEEMPRESA',
    nullable: true,
    precision: 53,
  })
  vlrminfreteempresa: number | null;

  @Column('varchar', { name: 'CTEGLOBAL', nullable: true, length: 10 })
  cteglobal: string | null;

  @Column('float', { name: 'TAXATDE', nullable: true, precision: 53 })
  taxatde: number | null;

  @Column('float', { name: 'VLRMINTAXATDE', nullable: true, precision: 53 })
  vlrmintaxatde: number | null;

  @Column('float', { name: 'VLRTAXACTE', nullable: true, precision: 53 })
  vlrtaxacte: number | null;

  @Column('varchar', { name: 'TIPRATFRETE', nullable: true, length: 10 })
  tipratfrete: string | null;

  @Column('varchar', { name: 'TIPRATPEDAG', nullable: true, length: 10 })
  tipratpedag: string | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 255 })
  descricao: string | null;

  @Column('int', { name: 'CODTAB', nullable: true })
  codtab: number | null;

  @Column('int', { name: 'CODNAT', nullable: true })
  codnat: number | null;

  @Column('int', { name: 'CODCENCUS', nullable: true })
  codcencus: number | null;

  @Column('varchar', { name: 'SERIENFSE', nullable: true, length: 100 })
  serienfse: string | null;

  @Column('int', { name: 'CODTIPOPERNFSE', nullable: true })
  codtipopernfse: number | null;

  @Column('float', { name: 'PERCADVALOREM', nullable: true, precision: 53 })
  percadvalorem: number | null;

  @Column('varchar', { name: 'UMCTEPORNOTA', nullable: true, length: 10 })
  umctepornota: string | null;

  @Column('varchar', { name: 'USAPESONOTA', nullable: true, length: 10 })
  usapesonota: string | null;

  @Column('float', { name: 'VLRADICENT', nullable: true, precision: 53 })
  vlradicent: number | null;

  @Column('int', { name: 'ADICENTAPOSENTR', nullable: true })
  adicentaposentr: number | null;

  @Column('varchar', { name: 'TIPRATADICENT', nullable: true, length: 10 })
  tipratadicent: string | null;

  @Column('varchar', { name: 'USALIBTIPVEI', nullable: true, length: 10 })
  usalibtipvei: string | null;

  @Column('varchar', { name: 'ISSINCLUSO', nullable: true, length: 10 })
  issincluso: string | null;

  @Column('varchar', { name: 'USAPAGADORNOTAS', nullable: true, length: 10 })
  usapagadornotas: string | null;

  @Column('float', { name: 'PERCVLRFRETESUB', nullable: true, precision: 53 })
  percvlrfretesub: number | null;

  @Column('float', { name: 'VLRMINSEGUROEMP', nullable: true, precision: 53 })
  vlrminseguroemp: number | null;

  @Column('float', { name: 'PERCTAXACTE', nullable: true, precision: 53 })
  perctaxacte: number | null;

  @Column('int', { name: 'CODTIPVENDA', nullable: true })
  codtipvenda: number | null;

  @Column('varchar', { name: 'USAREMDESTROT', nullable: true, length: 10 })
  usaremdestrot: string | null;

  @Column('varchar', { name: 'AGRUPANOTASCTE', nullable: true, length: 10 })
  agrupanotascte: string | null;

  @Column('int', { name: 'CODTABFRETEDIST', nullable: true })
  codtabfretedist: number | null;

  @Column('int', { name: 'CODTABFRETEMOTDIST', nullable: true })
  codtabfretemotdist: number | null;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tmspedrots)
  @JoinColumn([{ name: 'CODCIDDESTINO', referencedColumnName: 'codcid' }])
  codciddestino: TsicidEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tmspedrots2)
  @JoinColumn([{ name: 'CODCIDORIGEM', referencedColumnName: 'codcid' }])
  codcidorigem: TsicidEntity;

  @ManyToOne(() => TgfrotEntity, (tgfrotEntity) => tgfrotEntity.tmspedrots)
  @JoinColumn([{ name: 'CODROTA', referencedColumnName: 'codrota' }])
  codrota: TgfrotEntity;

  @ManyToOne(() => TmspedEntity, (tmspedEntity) => tmspedEntity.tmspedrots)
  @JoinColumn([{ name: 'NUPED', referencedColumnName: 'nuped' }])
  nuped2: TmspedEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmspedrots)
  @JoinColumn([{ name: 'CODPARCENT', referencedColumnName: 'codparc' }])
  codparcent: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmspedrots2)
  @JoinColumn([{ name: 'CODPARCCLI', referencedColumnName: 'codparc' }])
  codparccli: TgfparEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmspedrots)
  @JoinColumn([{ name: 'CODUSUINC', referencedColumnName: 'codusu' }])
  codusuinc: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmspedrots2)
  @JoinColumn([{ name: 'CODUSUALTER', referencedColumnName: 'codusu' }])
  codusualter: TsiusuEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tmspedrots)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmspedrots3)
  @JoinColumn([{ name: 'CODPARCREM', referencedColumnName: 'codparc' }])
  codparcrem: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmspedrots4)
  @JoinColumn([{ name: 'CODPARCCOL', referencedColumnName: 'codparc' }])
  codparccol: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmspedrots5)
  @JoinColumn([{ name: 'CODPARCDEST', referencedColumnName: 'codparc' }])
  codparcdest: TgfparEntity;
}
