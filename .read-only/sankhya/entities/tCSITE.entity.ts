import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TcsafoEntity } from './tCSAFO.entity';
import { TcseagEntity } from './tCSEAG.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcsepvEntity } from './tCSEPV.entity';
import { TcsoseEntity } from './tCSOSE.entity';
import { TcsoosEntity } from './tCSOOS.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TcsitsEntity } from './tCSITS.entity';
import { TcsnhcEntity } from './tCSNHC.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TcsiteDasEntity } from './tCSITE_DAS.entity';
import { TcsnfatEntity } from './tCSNFAT.entity';
import { TcssltEntity } from './tCSSLT.entity';
import { TcssnsEntity } from './tCSSNS.entity';
import { TgfoeqEntity } from './tGFOEQ.entity';
import { TgpacoEntity } from './tGPACO.entity';

@Index('PK_TCSITE', ['numos', 'numitem'], { unique: true })
@Index('TCSITE_I_FAT_OS', ['cobrar', 'retrabalho', 'inicexec', 'numos'], {})
@Index('TCSITE_I01', ['codprod'], {})
@Index('TCSITE_I02', ['codserv', 'inicexec'], {})
@Index('TCSITE_I03', ['codusu'], {})
@Index('TCSITE_I04', ['codproj'], {})
@Index('TCSITE_I05', ['inicexec'], {})
@Index('TCSITE_I06', ['dhprevista'], {})
@Entity('TCSITE', { schema: 'SANKHYA' })
export class TcsiteEntity {
  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('smallint', { primary: true, name: 'NUMITEM' })
  numitem: number;

  @Column('smallint', { name: 'HRINICIAL', nullable: true })
  hrinicial: number | null;

  @Column('smallint', { name: 'HRFINAL', nullable: true })
  hrfinal: number | null;

  @Column('int', { name: 'CODSERV' })
  codserv: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('int', { name: 'CODPROJ', nullable: true })
  codproj: number | null;

  @Column('smallint', { name: 'GRAUDIFIC', default: () => '(0)' })
  graudific: number;

  @Column('smallint', { name: 'PRIORIDADE', nullable: true })
  prioridade: number | null;

  @Column('char', { name: 'RETRABALHO', length: 1, default: () => "'N'" })
  retrabalho: string;

  @Column('datetime', { name: 'DHPREVISTA' })
  dhprevista: Date;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'INICEXEC', nullable: true })
  inicexec: Date | null;

  @Column('datetime', { name: 'TERMEXEC', nullable: true })
  termexec: Date | null;

  @Column('int', { name: 'TEMPGASTO', nullable: true })
  tempgasto: number | null;

  @Column('char', { name: 'COBRAR', length: 1, default: () => "'S'" })
  cobrar: string;

  @Column('float', { name: 'QTDSERV', nullable: true, precision: 53 })
  qtdserv: number | null;

  @Column('money', { name: 'VLRCOBRADO', nullable: true })
  vlrcobrado: number | null;

  @Column('text', { name: 'DESCSERV', nullable: true })
  descserv: string | null;

  @Column('text', { name: 'SOLUCAO', nullable: true })
  solucao: string | null;

  @Column('datetime', { name: 'TEMPPREVISTO', nullable: true })
  tempprevisto: Date | null;

  @Column('int', { name: 'INTERVALO', nullable: true, default: () => 'NULL' })
  intervalo: number | null;

  @Column('smallint', { name: 'CODUSUALTER', nullable: true })
  codusualter: number | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('char', { name: 'SERIE', nullable: true, length: 25 })
  serie: string | null;

  @Column('char', { name: 'LIBERADO', length: 1, default: () => "'N'" })
  liberado: string;

  @Column('datetime', { name: 'DHENTRADA', nullable: true })
  dhentrada: Date | null;

  @Column('int', { name: 'NUMETAPA', nullable: true })
  numetapa: number | null;

  @Column('datetime', { name: 'DHLIMITESLA', nullable: true })
  dhlimitesla: Date | null;

  @Column('smallint', { name: 'TURNO', nullable: true })
  turno: number | null;

  @Column('float', { name: 'QTDHORA', nullable: true, precision: 53 })
  qtdhora: number | null;

  @Column('float', { name: 'QTDHORAEXT', nullable: true, precision: 53 })
  qtdhoraext: number | null;

  @Column('float', { name: 'QTDHORABONIF', nullable: true, precision: 53 })
  qtdhorabonif: number | null;

  @Column('float', {
    name: 'QTDHORAEXTCOMBONIF',
    nullable: true,
    precision: 53,
  })
  qtdhoraextcombonif: number | null;

  @Column('float', { name: 'VLRHORAFAT', nullable: true, precision: 53 })
  vlrhorafat: number | null;

  @Column('float', { name: 'VLRHORAEXTFAT', nullable: true, precision: 53 })
  vlrhoraextfat: number | null;

  @Column('float', { name: 'VLRHORACOM', nullable: true, precision: 53 })
  vlrhoracom: number | null;

  @Column('float', { name: 'VLRHORAEXTCOM', nullable: true, precision: 53 })
  vlrhoraextcom: number | null;

  @Column('float', { name: 'QTDHORAEXTBONIF', nullable: true, precision: 53 })
  qtdhoraextbonif: number | null;

  @Column('int', { name: 'CORSLA', nullable: true })
  corsla: number | null;

  @Column('datetime', { name: 'DTPREVFECHAMENTO', nullable: true })
  dtprevfechamento: Date | null;

  @Column('int', { name: 'CONTADORSLA', nullable: true })
  contadorsla: number | null;

  @Column('datetime', { name: 'DHEMAILVAL', nullable: true })
  dhemailval: Date | null;

  @Column('datetime', { name: 'DHVALIDACAO', nullable: true })
  dhvalidacao: Date | null;

  @Column('float', { name: 'QTDHORACOMBONIF', nullable: true, precision: 53 })
  qtdhoracombonif: number | null;

  @Column('int', { name: 'CODSERVRAIZ', nullable: true })
  codservraiz: number | null;

  @Column('int', { name: 'TEMPOGASTOSLAPROC', nullable: true })
  tempogastoslaproc: number | null;

  @Column('int', { name: 'TEMPOGASTOSLASUB', nullable: true })
  tempogastoslasub: number | null;

  @Column('smallint', { name: 'SEQFLUXO', nullable: true })
  seqfluxo: number | null;

  @Column('smallint', { name: 'NUMFLUXO', nullable: true })
  numfluxo: number | null;

  @Column('smallint', { name: 'CONTADORFLUXO', nullable: true })
  contadorfluxo: number | null;

  @Column('int', { name: 'CODREQ', nullable: true })
  codreq: number | null;

  @Column('smallint', { name: 'COMPLETUDE', nullable: true })
  completude: number | null;

  @Column('datetime', { name: 'DHPAUSEAPP', nullable: true })
  dhpauseapp: Date | null;

  @Column('float', { name: 'AD_KMINI', nullable: true, precision: 53 })
  adKmini: number | null;

  @Column('float', { name: 'AD_KMFIM', nullable: true, precision: 53 })
  adKmfim: number | null;

  @Column('int', { name: 'AD_NUNOTA', nullable: true })
  adNunota: number | null;

  @Column('int', { name: 'AD_CODUSUAJD1', nullable: true })
  adCodusuajd1: number | null;

  @Column('int', { name: 'AD_CODUSUAJD2', nullable: true })
  adCodusuajd2: number | null;

  @Column('int', { name: 'AD_CODUSUAJD3', nullable: true })
  adCodusuajd3: number | null;

  @Column('int', { name: 'AD_CODUSUAJD4', nullable: true })
  adCodusuajd4: number | null;

  @Column('int', { name: 'AD_CODUSUAJD5', nullable: true })
  adCodusuajd5: number | null;

  @Column('int', { name: 'AD_CODUSUAJD6', nullable: true })
  adCodusuajd6: number | null;

  @Column('int', { name: 'AD_CODUSUAJD7', nullable: true })
  adCodusuajd7: number | null;

  @Column('int', { name: 'AD_CODUSUAJD8', nullable: true })
  adCodusuajd8: number | null;

  @Column('int', { name: 'AD_CODUSUAJD9', nullable: true })
  adCodusuajd9: number | null;

  @Column('int', { name: 'AD_CODUSUAJD10', nullable: true })
  adCodusuajd10: number | null;

  @Column('int', { name: 'AD_CODUSUFRO1', nullable: true })
  adCodusufro1: number | null;

  @Column('int', { name: 'AD_CODUSUFRO2', nullable: true })
  adCodusufro2: number | null;

  @Column('int', { name: 'AD_CODUSUFRO3', nullable: true })
  adCodusufro3: number | null;

  @Column('int', { name: 'AD_CODUSUFRO4', nullable: true })
  adCodusufro4: number | null;

  @Column('int', { name: 'AD_CODUSUFRO5', nullable: true })
  adCodusufro5: number | null;

  @Column('char', {
    name: 'AD_EXIBEDASH',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  adExibedash: string | null;

  @Column('text', { name: 'AD_OBS_OSITE', nullable: true })
  adObsOsite: string | null;

  @OneToOne(() => TcsafoEntity, (tcsafoEntity) => tcsafoEntity.tcsite)
  tcsafo: TcsafoEntity;

  @OneToMany(() => TcseagEntity, (tcseagEntity) => tcseagEntity.tcsite)
  tcseags: TcseagEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsites)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsites2)
  @JoinColumn([{ name: 'CODUSUREM', referencedColumnName: 'codusu' }])
  codusurem: TsiusuEntity;

  @ManyToOne(() => TcsepvEntity, (tcsepvEntity) => tcsepvEntity.tcsites)
  @JoinColumn([{ name: 'CODEPV', referencedColumnName: 'codepv' }])
  codepv: TcsepvEntity;

  @ManyToOne(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.tcsites)
  @JoinColumn([{ name: 'NUMOS', referencedColumnName: 'numos' }])
  numos2: TcsoseEntity;

  @ManyToOne(() => TcsoosEntity, (tcsoosEntity) => tcsoosEntity.tcsites)
  @JoinColumn([{ name: 'CODOCOROS', referencedColumnName: 'codocoros' }])
  codocoros: TcsoosEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcsites)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcsites2)
  @JoinColumn([{ name: 'CODSERV', referencedColumnName: 'codprod' }])
  codserv2: TgfproEntity;

  @ManyToOne(() => TcsitsEntity, (tcsitsEntity) => tcsitsEntity.tcsites)
  @JoinColumn([{ name: 'CODSIT', referencedColumnName: 'codsit' }])
  codsit: TcsitsEntity;

  @ManyToOne(() => TcsnhcEntity, (tcsnhcEntity) => tcsnhcEntity.tcsites)
  @JoinColumn([{ name: 'NUNEGOCIACAO', referencedColumnName: 'nunegociacao' }])
  nunegociacao: TcsnhcEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tcsites)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tcsites)
  @JoinColumn([{ name: 'AD_CODVEICULO', referencedColumnName: 'codveiculo' }])
  adCodveiculo: TgfveiEntity;

  @OneToOne(() => TcsiteDasEntity, (tcsiteDasEntity) => tcsiteDasEntity.tcsite)
  tcsiteDas: TcsiteDasEntity;

  @OneToOne(() => TcsnfatEntity, (tcsnfatEntity) => tcsnfatEntity.tcsite)
  tcsnfat: TcsnfatEntity;

  @OneToOne(() => TcssltEntity, (tcssltEntity) => tcssltEntity.tcsite)
  tcsslt: TcssltEntity;

  @OneToOne(() => TcssnsEntity, (tcssnsEntity) => tcssnsEntity.tcsite)
  tcssns: TcssnsEntity;

  @OneToMany(() => TgfoeqEntity, (tgfoeqEntity) => tgfoeqEntity.tcsite)
  tgfoeqs: TgfoeqEntity[];

  @OneToMany(() => TgpacoEntity, (tgpacoEntity) => tgpacoEntity.tcsite)
  tgpacos: TgpacoEntity[];
}
