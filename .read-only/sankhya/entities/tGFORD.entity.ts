import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TgfcaiEntity } from './tGFCAI.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfpliEntity } from './tGFPLI.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfromEntity } from './tGFROM.entity';
import { TgfrotEntity } from './tGFROT.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TgfviagEntity } from './tGFVIAG.entity';
import { TgwdcaEntity } from './tGWDCA.entity';
import { TgwtarEntity } from './tGWTAR.entity';
import { TmsordaftEntity } from './tMSORDAFT.entity';
import { TmspedEntity } from './tMSPED.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TsiregEntity } from './tSIREG.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFORD', ['codemp', 'ordemcarga'], { unique: true })
@Index('TGFORD_I03', ['nufinacerto'], {})
@Index('TGFORD_I04', ['ordemcargapai'], {})
@Index('TGFORD_I05', ['nuviag'], {})
@Index('TGFORD_IPER', ['nunota'], {})
@Entity('TGFORD', { schema: 'SANKHYA' })
export class TgfordEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'ORDEMCARGA', default: () => '(0)' })
  ordemcarga: number;

  @Column('datetime', { name: 'DTINIC', nullable: true })
  dtinic: Date | null;

  @Column('datetime', { name: 'DTPREVSAIDA', nullable: true })
  dtprevsaida: Date | null;

  @Column('text', { name: 'ROTEIRO', nullable: true })
  roteiro: string | null;

  @Column('char', { name: 'SITUACAO', length: 1, default: () => "'A'" })
  situacao: string;

  @Column('char', { name: 'TIPCARGA', length: 1, default: () => "'R'" })
  tipcarga: string;

  @Column('float', { name: 'KMINIC', nullable: true, precision: 53 })
  kminic: number | null;

  @Column('float', { name: 'KMFIN', nullable: true, precision: 53 })
  kmfin: number | null;

  @Column('datetime', { name: 'HORASAIDA', nullable: true })
  horasaida: Date | null;

  @Column('float', { name: 'PESOMAX', precision: 53, default: () => '(0)' })
  pesomax: number;

  @Column('smallint', { name: 'TIPCALCFRETE', default: () => '(0)' })
  tipcalcfrete: number;

  @Column('float', { name: 'M3MAX', nullable: true, precision: 53 })
  m3Max: number | null;

  @Column('int', { name: 'ORDEMCARGAPAI', nullable: true })
  ordemcargapai: number | null;

  @Column('smallint', { name: 'SEQCARGA', nullable: true })
  seqcarga: number | null;

  @Column('char', { name: 'TEMTRANSBORDO', length: 1, default: () => "'N'" })
  temtransbordo: string;

  @Column('float', { name: 'VLRFRETE', nullable: true, precision: 53 })
  vlrfrete: number | null;

  @Column('smallint', { name: 'CODTIPOPERTRANSB', default: () => '(0)' })
  codtipopertransb: number;

  @Column('datetime', { name: 'DHINICIALPESAGEM', nullable: true })
  dhinicialpesagem: Date | null;

  @Column('datetime', { name: 'DHFINALPESAGEM', nullable: true })
  dhfinalpesagem: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'ENTSAI', length: 1, default: () => "'A'" })
  entsai: string;

  @Column('char', { name: 'TIPDIST', length: 1, default: () => "'A'" })
  tipdist: string;

  @Column('datetime', { name: 'DTALTERROTCAT', nullable: true })
  dtalterrotcat: Date | null;

  @Column('int', { name: 'NUFINACERTO', nullable: true })
  nufinacerto: number | null;

  @Column('float', { name: 'VLRDIFACERTO', nullable: true, precision: 53 })
  vlrdifacerto: number | null;

  @Column('datetime', { name: 'DTRETORNO', nullable: true })
  dtretorno: Date | null;

  @Column('char', { name: 'FRETECALC', length: 1, default: () => "'N'" })
  fretecalc: string;

  @Column('char', { name: 'TIPEMBALAGEM', length: 1, default: () => "'G'" })
  tipembalagem: string;

  @Column('smallint', { name: 'QTDENTREGA', nullable: true })
  qtdentrega: number | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('varchar', {
    name: 'VINCROT',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  vincrot: string | null;

  @Column('varchar', { name: 'STATUSAVAL', nullable: true, length: 1 })
  statusaval: string | null;

  @Column('text', { name: 'OBSMOTORISTA', nullable: true })
  obsmotorista: string | null;

  @Column('float', { name: 'VLRFRETETAB', nullable: true, precision: 53 })
  vlrfretetab: number | null;

  @Column('float', { name: 'PERCCORRET', nullable: true, precision: 53 })
  perccorret: number | null;

  @Column('float', { name: 'VLRCORRET', nullable: true, precision: 53 })
  vlrcorret: number | null;

  @Column('int', { name: 'CODPARCCORRET', nullable: true })
  codparccorret: number | null;

  @Column('float', { name: 'VLRFRETENOTAS', nullable: true, precision: 53 })
  vlrfretenotas: number | null;

  @Column('varchar', { name: 'JUSTIFICATIVA', nullable: true, length: 100 })
  justificativa: string | null;

  @Column('char', { name: 'PARTNFTRB', length: 1, default: () => "'S'" })
  partnftrb: string;

  @Column('varchar', { name: 'ENVIOWMS', length: 1, default: () => "'N'" })
  enviowms: string;

  @Column('char', { name: 'RATABSPESOVLR', length: 1, default: () => "'N'" })
  ratabspesovlr: string;

  @Column('char', { name: 'FRETERATEADO', length: 1, default: () => "'N'" })
  freterateado: string;

  @Column('varchar', { name: 'IDORDEMCARGA', nullable: true, length: 30 })
  idordemcarga: string | null;

  @Column('int', { name: 'NROFROTA', nullable: true })
  nrofrota: number | null;

  @Column('char', { name: 'ORDIMPETQVOL', length: 1, default: () => "'C'" })
  ordimpetqvol: string;

  @Column('smallint', { name: 'PRIORIDADE', nullable: true })
  prioridade: number | null;

  @Column('int', { name: 'NUVIAG', nullable: true })
  nuviag: number | null;

  @Column('varchar', { name: 'OCPROC', nullable: true, length: 1 })
  ocproc: string | null;

  @Column('int', { name: 'NUORDEM', nullable: true })
  nuordem: number | null;

  @Column('int', { name: 'SEQROTEIRO', nullable: true })
  seqroteiro: number | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('int', { name: 'CODGERRIS', nullable: true })
  codgerris: number | null;

  @Column('int', { name: 'NRLIBGERRIS', nullable: true })
  nrlibgerris: number | null;

  @Column('datetime', { name: 'DTINCLUSAO', nullable: true })
  dtinclusao: Date | null;

  @Column('datetime', { name: 'DHSAIDA', nullable: true })
  dhsaida: Date | null;

  @Column('datetime', { name: 'DHPREVCGD', nullable: true })
  dhprevcgd: Date | null;

  @Column('datetime', { name: 'DHCHEGADA', nullable: true })
  dhchegada: Date | null;

  @Column('datetime', { name: 'DTFINALIZACAO', nullable: true })
  dtfinalizacao: Date | null;

  @Column('int', { name: 'QTDTOT', nullable: true })
  qtdtot: number | null;

  @Column('float', { name: 'PESOTOTAL', nullable: true, precision: 53 })
  pesototal: number | null;

  @Column('float', { name: 'VLRFRETEEMPRESA', nullable: true, precision: 53 })
  vlrfreteempresa: number | null;

  @Column('float', {
    name: 'VLRMERCADABERBACAO',
    nullable: true,
    precision: 53,
  })
  vlrmercadaberbacao: number | null;

  @Column('int', { name: 'CODPARCSEG', nullable: true })
  codparcseg: number | null;

  @Column('varchar', { name: 'RESPONSAVELSEGURO', nullable: true, length: 100 })
  responsavelseguro: string | null;

  @Column('varchar', { name: 'APOLICE', nullable: true, length: 100 })
  apolice: string | null;

  @Column('varchar', { name: 'AVERBACAO', nullable: true, length: 100 })
  averbacao: string | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('float', { name: 'VALORPEDAGIO', nullable: true, precision: 53 })
  valorpedagio: number | null;

  @Column('float', { name: 'VLRPEDAGIOTOT', nullable: true, precision: 53 })
  vlrpedagiotot: number | null;

  @Column('varchar', { name: 'DISPPEDAG', nullable: true, length: 10 })
  disppedag: string | null;

  @Column('varchar', { name: 'NRORECIBOPEDAG', nullable: true, length: 100 })
  nrorecibopedag: string | null;

  @Column('smallint', { name: 'CODUSUINC', nullable: true })
  codusuinc: number | null;

  @Column('datetime', { name: 'DHINCLUSAO', nullable: true })
  dhinclusao: Date | null;

  @Column('float', { name: 'VLRMERCADORIA', nullable: true, precision: 53 })
  vlrmercadoria: number | null;

  @Column('smallint', { name: 'CODEMPPAI', nullable: true })
  codemppai: number | null;

  @Column('int', { name: 'CODCENCUS', nullable: true })
  codcencus: number | null;

  @Column('varchar', { name: 'OBSCANCEL', nullable: true, length: 3103 })
  obscancel: string | null;

  @Column('datetime', { name: 'DHCANCEL', nullable: true })
  dhcancel: Date | null;

  @Column('smallint', { name: 'CODUSUANCEL', nullable: true })
  codusuancel: number | null;

  @Column('int', { name: 'CODPARCPROPANTT', nullable: true })
  codparcpropantt: number | null;

  @Column('varchar', { name: 'TIPOTRANSPORTADOR', nullable: true, length: 10 })
  tipotransportador: string | null;

  @Column('float', { name: 'VLRSEGURO', nullable: true, precision: 53 })
  vlrseguro: number | null;

  @Column('varchar', { name: 'TIPOVIAGEM', nullable: true, length: 10 })
  tipoviagem: string | null;

  @Column('varchar', { name: 'PEDAGIOINCLUSOMOT', nullable: true, length: 10 })
  pedagioinclusomot: string | null;

  @Column('int', { name: 'NUVIAGFILHO', nullable: true })
  nuviagfilho: number | null;

  @Column('int', { name: 'CODPROJ', nullable: true })
  codproj: number | null;

  @Column('int', { name: 'DISTANCIA', nullable: true })
  distancia: number | null;

  @Column('int', { name: 'CODNAT', nullable: true })
  codnat: number | null;

  @Column('int', { name: 'NUMCONTRATO', nullable: true })
  numcontrato: number | null;

  @Column('int', { name: 'CODTIPVEI', nullable: true })
  codtipvei: number | null;

  @Column('float', { name: 'PESONOTAS', nullable: true, precision: 53 })
  pesonotas: number | null;

  @Column('varchar', { name: 'CHAVECTEORIGEM', nullable: true, length: 100 })
  chavecteorigem: string | null;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfords)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal: TgflocEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfords)
  @JoinColumn([{ name: 'CODUSURETORNO', referencedColumnName: 'codusu' }])
  codusuretorno: TsiusuEntity;

  @ManyToOne(() => TgfviagEntity, (tgfviagEntity) => tgfviagEntity.tgfords)
  @JoinColumn([{ name: 'NUVIAG', referencedColumnName: 'nuviag' }])
  nuviag2: TgfviagEntity;

  @ManyToOne(() => TgfrotEntity, (tgfrotEntity) => tgfrotEntity.tgfords)
  @JoinColumn([{ name: 'CODROTA', referencedColumnName: 'codrota' }])
  codrota: TgfrotEntity;

  @ManyToOne(() => TgwdcaEntity, (tgwdcaEntity) => tgwdcaEntity.tgfords)
  @JoinColumn([{ name: 'CODDOCA', referencedColumnName: 'coddoca' }])
  coddoca: TgwdcaEntity;

  @ManyToOne(() => TmspedEntity, (tmspedEntity) => tmspedEntity.tgfords)
  @JoinColumn([{ name: 'NUPED', referencedColumnName: 'nuped' }])
  nuped: TmspedEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfords)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfords)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TsiregEntity, (tsiregEntity) => tsiregEntity.tgfords)
  @JoinColumn([{ name: 'CODREG', referencedColumnName: 'codreg' }])
  codreg: TsiregEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgfords)
  @JoinColumn([{ name: 'CODCIDDESTINO', referencedColumnName: 'codcid' }])
  codciddestino: TsicidEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgfords2)
  @JoinColumn([{ name: 'CODCIDORIGEM', referencedColumnName: 'codcid' }])
  codcidorigem: TsicidEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfords)
  @JoinColumn([{ name: 'CODPARCMOTORISTA', referencedColumnName: 'codparc' }])
  codparcmotorista: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfords2)
  @JoinColumn([{ name: 'CODPARCTRANSP', referencedColumnName: 'codparc' }])
  codparctransp: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfords3)
  @JoinColumn([{ name: 'CODPARCCLI', referencedColumnName: 'codparc' }])
  codparccli: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfords4)
  @JoinColumn([{ name: 'CODPARCCOL', referencedColumnName: 'codparc' }])
  codparccol: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfords5)
  @JoinColumn([{ name: 'CODPARCPEDAG', referencedColumnName: 'codparc' }])
  codparcpedag: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfords6)
  @JoinColumn([{ name: 'CODPARCENT', referencedColumnName: 'codparc' }])
  codparcent: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfords7)
  @JoinColumn([{ name: 'CODPARCREM', referencedColumnName: 'codparc' }])
  codparcrem: TgfparEntity;

  @ManyToOne(() => TgfcaiEntity, (tgfcaiEntity) => tgfcaiEntity.tgfords)
  @JoinColumn([{ name: 'NUCAIXA', referencedColumnName: 'nucaixa' }])
  nucaixa: TgfcaiEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfords)
  @JoinColumn([{ name: 'CODEMPNEGOC', referencedColumnName: 'codemp' }])
  codempnegoc: TsiempEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgfords)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo: TgfveiEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgfords2)
  @JoinColumn([{ name: 'CODVEI1', referencedColumnName: 'codveiculo' }])
  codvei: TgfveiEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgfords3)
  @JoinColumn([{ name: 'CODVEI2', referencedColumnName: 'codveiculo' }])
  codvei2: TgfveiEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgfords4)
  @JoinColumn([{ name: 'CODVEI3', referencedColumnName: 'codveiculo' }])
  codvei3: TgfveiEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfords8)
  @JoinColumn([{ name: 'CODPARCDEST', referencedColumnName: 'codparc' }])
  codparcdest: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfords9)
  @JoinColumn([{ name: 'CODPARCORIG', referencedColumnName: 'codparc' }])
  codparcorig: TgfparEntity;

  @OneToMany(() => TgfpliEntity, (tgfpliEntity) => tgfpliEntity.tgford)
  tgfplis: TgfpliEntity[];

  @OneToMany(() => TgfromEntity, (tgfromEntity) => tgfromEntity.tgford)
  tgfroms: TgfromEntity[];

  @OneToMany(() => TgwtarEntity, (tgwtarEntity) => tgwtarEntity.tgford)
  tgwtars: TgwtarEntity[];

  @OneToMany(() => TmsordaftEntity, (tmsordaftEntity) => tmsordaftEntity.tgford)
  tmsordafts: TmsordaftEntity[];
}
