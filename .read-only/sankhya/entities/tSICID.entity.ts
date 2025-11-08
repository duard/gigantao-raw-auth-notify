import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AdAcertoviagemEntity } from './aD_ACERTOVIAGEM.entity';
import { TccempEntity } from './tCCEMP.entity';
import { TcecabEntity } from './tCECAB.entity';
import { TcecabHisEntity } from './tCECAB_HIS.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TcspapEntity } from './tCSPAP.entity';
import { TfpcatrEntity } from './tFPCATR.entity';
import { TfpdpdEntity } from './tFPDPD.entity';
import { TfpestEntity } from './tFPEST.entity';
import { TfpfdpEntity } from './tFPFDP.entity';
import { TfpfdsEntity } from './tFPFDS.entity';
import { TfpfisEntity } from './tFPFIS.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfphfuEntity } from './tFPHFU.entity';
import { TfppcaEntity } from './tFPPCA.entity';
import { TfppssEntity } from './tFPPSS.entity';
import { TfpreqadmEntity } from './tFPREQADM.entity';
import { TfptatEntity } from './tFPTAT.entity';
import { TgaentEntity } from './tGAENT.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfcfcEntity } from './tGFCFC.entity';
import { TgfcplEntity } from './tGFCPL.entity';
import { TgfcredcliEntity } from './tGFCREDCLI.entity';
import { TgfcttEntity } from './tGFCTT.entity';
import { TgfemdfEntity } from './tGFEMDF.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfissEntity } from './tGFISS.entity';
import { TgflisEntity } from './tGFLIS.entity';
import { TgflivEntity } from './tGFLIV.entity';
import { TgfordEntity } from './tGFORD.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfrcdEntity } from './tGFRCD.entity';
import { TgfrcfEntity } from './tGFRCF.entity';
import { TgfsitEntity } from './tGFSIT.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TimcarEntity } from './tIMCAR.entity';
import { TimedgEntity } from './tIMEDG.entity';
import { TimeprEntity } from './tIMEPR.entity';
import { TimimvEntity } from './tIMIMV.entity';
import { TimlotEntity } from './tIMLOT.entity';
import { TimpprEntity } from './tIMPPR.entity';
import { TimppvEntity } from './tIMPPV.entity';
import { TmsordcarregEntity } from './tMSORDCARREG.entity';
import { TmspedrotEntity } from './tMSPEDROT.entity';
import { TripajEntity } from './tRIPAJ.entity';
import { TsiageEntity } from './tSIAGE.entity';
import { TsicanEntity } from './tSICAN.entity';
import { TsicciEntity } from './tSICCI.entity';
import { TsicepEntity } from './tSICEP.entity';
import { TsiufsEntity } from './tSIUFS.entity';
import { TsiregEntity } from './tSIREG.entity';
import { TsidisEntity } from './tSIDIS.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TsiferEntity } from './tSIFER.entity';

@Index('AK_NOMECID_TSICID', ['nomecid', 'uf', 'codmunfis'], {})
@Index('PK_TSICID', ['codcid'], { unique: true })
@Entity('TSICID', { schema: 'SANKHYA' })
export class TsicidEntity {
  @Column('int', { primary: true, name: 'CODCID' })
  codcid: number;

  @Column('smallint', { name: 'UF', nullable: true })
  uf: number | null;

  @Column('varchar', { name: 'NOMECID', length: 50 })
  nomecid: string;

  @Column('char', { name: 'DDD', nullable: true, length: 4 })
  ddd: string | null;

  @Column('smallint', { name: 'DISTANCIA', nullable: true })
  distancia: number | null;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('char', { name: 'DESCRICAOCORREIO', nullable: true, length: 60 })
  descricaocorreio: string | null;

  @Column('int', { name: 'SEQENTREGA', nullable: true })
  seqentrega: number | null;

  @Column('int', { name: 'POPULACAO', nullable: true })
  populacao: number | null;

  @Column('int', { name: 'CODMUNFIS', nullable: true })
  codmunfis: number | null;

  @Column('float', { name: 'VLRFRETEMIN', nullable: true, precision: 53 })
  vlrfretemin: number | null;

  @Column('float', { name: 'VLRFRETETON', nullable: true, precision: 53 })
  vlrfreteton: number | null;

  @Column('char', { name: 'TIPOFRETE', length: 1, default: () => "'C'" })
  tipofrete: string;

  @Column('float', { name: 'VLRFRETEKM', nullable: true, precision: 53 })
  vlrfretekm: number | null;

  @Column('float', { name: 'VLRTAXAENT', nullable: true, precision: 53 })
  vlrtaxaent: number | null;

  @Column('int', { name: 'CODMUNSIAFI', nullable: true })
  codmunsiafi: number | null;

  @Column('int', { name: 'CODMUNDMS', nullable: true })
  codmundms: number | null;

  @Column('float', { name: 'VENDAMIN', nullable: true, precision: 53 })
  vendamin: number | null;

  @Column('varchar', { name: 'LATITUDE', nullable: true, length: 255 })
  latitude: string | null;

  @Column('varchar', { name: 'LONGITUDE', nullable: true, length: 255 })
  longitude: string | null;

  @Column('int', { name: 'CODMUNDIEF', nullable: true })
  codmundief: number | null;

  @Column('smallint', { name: 'QTDDIASSUB', default: () => '(0)' })
  qtddiassub: number;

  @Column('smallint', { name: 'QTDSUB', default: () => '(0)' })
  qtdsub: number;

  @Column('char', { name: 'TEMSUBSTITNFSE', length: 1, default: () => "'N'" })
  temsubstitnfse: string;

  @Column('char', { name: 'TIPCANCNFSE', length: 1, default: () => "'1'" })
  tipcancnfse: string;

  @Column('float', { name: 'VLRLIMCANCNFSE', nullable: true, precision: 53 })
  vlrlimcancnfse: number | null;

  @Column('varchar', { name: 'MOTCANCSUBNFSE', nullable: true, length: 50 })
  motcancsubnfse: string | null;

  @Column('varchar', { name: 'METARREDVLRISS', nullable: true, length: 1 })
  metarredvlriss: string | null;

  @Column('smallint', { name: 'MAXNOTALOTENFSE', nullable: true })
  maxnotalotenfse: number | null;

  @Column('char', {
    name: 'NFSETEMPLATESUBST',
    length: 1,
    default: () => "'N'",
  })
  nfsetemplatesubst: string;

  @Column('smallint', { name: 'TIPOCNAE', nullable: true })
  tipocnae: number | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('varchar', { name: 'LINKAGUA', nullable: true, length: 100 })
  linkagua: string | null;

  @Column('varchar', { name: 'LINKENERGIA', nullable: true, length: 100 })
  linkenergia: string | null;

  @Column('varchar', { name: 'LINKIPTU', nullable: true, length: 100 })
  linkiptu: string | null;

  @Column('char', { name: 'NOFORMATLC116', nullable: true, length: 1 })
  noformatlc116: string | null;

  @Column('char', { name: 'CNAEFULLNFSE', nullable: true, length: 1 })
  cnaefullnfse: string | null;

  @Column('char', { name: 'NOINSCMUNPAR', nullable: true, length: 1 })
  noinscmunpar: string | null;

  @Column('char', { name: 'GERCODNATISSJSON', nullable: true, length: 1 })
  gercodnatissjson: string | null;

  @Column('char', { name: 'ENVITENSSEPJSON', nullable: true, length: 1 })
  envitenssepjson: string | null;

  @Column('smallint', { name: 'QTDMAXENVITENSJSON', nullable: true })
  qtdmaxenvitensjson: number | null;

  @Column('char', { name: 'OBSJSONENOTAS', nullable: true, length: 1 })
  obsjsonenotas: string | null;

  @Column('char', { name: 'PERMCANCNFSESUBSTIT', nullable: true, length: 1 })
  permcancnfsesubstit: string | null;

  @Column('char', { name: 'JSONSEMALIDENMUN', nullable: true, length: 1 })
  jsonsemalidenmun: string | null;

  @Column('float', { name: 'VMINRETENCAOISS', nullable: true, precision: 53 })
  vminretencaoiss: number | null;

  @Column('char', { name: 'ACTCANEXNT', nullable: true, length: 1 })
  actcanexnt: string | null;

  @Column('char', { name: 'REMZEROESQUERDLC116', nullable: true, length: 1 })
  remzeroesquerdlc116: string | null;

  @Column('varchar', { name: 'ENVFPJSON', nullable: true, length: 1 })
  envfpjson: string | null;

  @Column('char', { name: 'INFQTDVLRUNIJSON', nullable: true, length: 1 })
  infqtdvlrunijson: string | null;

  @Column('char', { name: 'ENVMULEMAILJSON', nullable: true, length: 1 })
  envmulemailjson: string | null;

  @Column('char', { name: 'ATUNUVERSAO', nullable: true, length: 1 })
  atunuversao: string | null;

  @Column('char', { name: 'ENVTAGDESCONJSON', nullable: true, length: 1 })
  envtagdesconjson: string | null;

  @Column('char', { name: 'GERNUNFSEINFCPM', nullable: true, length: 1 })
  gernunfseinfcpm: string | null;

  @Column('varchar', { name: 'MASCARALC116', nullable: true, length: 10 })
  mascaralc116: string | null;

  @Column('char', { name: 'GERCNAEMULTJSON', nullable: true, length: 1 })
  gercnaemultjson: string | null;

  @Column('char', { name: 'REGESPTRIB', nullable: true, length: 1 })
  regesptrib: string | null;

  @Column('char', { name: 'ENVCODIGONBSJSON', nullable: true, length: 1 })
  envcodigonbsjson: string | null;

  @OneToMany(
    () => AdAcertoviagemEntity,
    (adAcertoviagemEntity) => adAcertoviagemEntity.codc,
  )
  adAcertoviagems: AdAcertoviagemEntity[];

  @OneToMany(() => TccempEntity, (tccempEntity) => tccempEntity.codc)
  tccemps: TccempEntity[];

  @OneToMany(() => TcecabEntity, (tcecabEntity) => tcecabEntity.codciddesemb)
  tcecabs: TcecabEntity[];

  @OneToMany(
    () => TcecabHisEntity,
    (tcecabHisEntity) => tcecabHisEntity.codciddesemb,
  )
  tcecabHis: TcecabHisEntity[];

  @OneToMany(() => TcsconEntity, (tcsconEntity) => tcsconEntity.codc)
  tcscons: TcsconEntity[];

  @OneToMany(() => TcspapEntity, (tcspapEntity) => tcspapEntity.naturalidade)
  tcspaps: TcspapEntity[];

  @OneToMany(
    () => TfpcatrEntity,
    (tfpcatrEntity) => tfpcatrEntity.codcidlocalcat,
  )
  tfpcatrs: TfpcatrEntity[];

  @OneToMany(() => TfpdpdEntity, (tfpdpdEntity) => tfpdpdEntity.codc)
  tfpdpds: TfpdpdEntity[];

  @OneToMany(() => TfpestEntity, (tfpestEntity) => tfpestEntity.codcidinstens)
  tfpests: TfpestEntity[];

  @OneToMany(() => TfpestEntity, (tfpestEntity) => tfpestEntity.codcidagtinteg)
  tfpests2: TfpestEntity[];

  @OneToMany(() => TfpfdpEntity, (tfpfdpEntity) => tfpfdpEntity.codc)
  tfpfdps: TfpfdpEntity[];

  @OneToMany(() => TfpfdsEntity, (tfpfdsEntity) => tfpfdsEntity.codc)
  tfpfds: TfpfdsEntity[];

  @OneToMany(() => TfpfisEntity, (tfpfisEntity) => tfpfisEntity.codc)
  tfpfis: TfpfisEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codcidtrab)
  tfpfuns: TfpfunEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codcidcertcivil)
  tfpfuns2: TfpfunEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codcidric)
  tfpfuns3: TfpfunEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.nacionalpais)
  tfpfuns4: TfpfunEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codc)
  tfpfuns5: TfpfunEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.cidnasc)
  tfpfuns6: TfpfunEntity[];

  @OneToMany(() => TfphfuEntity, (tfphfuEntity) => tfphfuEntity.codcidtrab)
  tfphfus: TfphfuEntity[];

  @OneToMany(() => TfppcaEntity, (tfppcaEntity) => tfppcaEntity.codc)
  tfppcas: TfppcaEntity[];

  @OneToMany(() => TfppssEntity, (tfppssEntity) => tfppssEntity.codcidsecaojud)
  tfppsses: TfppssEntity[];

  @OneToMany(
    () => TfpreqadmEntity,
    (tfpreqadmEntity) => tfpreqadmEntity.codcidtrab,
  )
  tfpreqadms: TfpreqadmEntity[];

  @OneToMany(() => TfpreqadmEntity, (tfpreqadmEntity) => tfpreqadmEntity.codc)
  tfpreqadms2: TfpreqadmEntity[];

  @OneToMany(() => TfptatEntity, (tfptatEntity) => tfptatEntity.codc)
  tfptats: TfptatEntity[];

  @OneToMany(() => TgaentEntity, (tgaentEntity) => tgaentEntity.codc)
  tgaents: TgaentEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codcidinicte)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codcidfimcte)
  tgfcabs2: TgfcabEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codc)
  tgfcabs3: TgfcabEntity[];

  @OneToMany(() => TgfcfcEntity, (tgfcfcEntity) => tgfcfcEntity.codc)
  tgfcfcs: TgfcfcEntity[];

  @OneToMany(() => TgfcplEntity, (tgfcplEntity) => tgfcplEntity.codcidtrab)
  tgfcpls: TgfcplEntity[];

  @OneToMany(() => TgfcplEntity, (tgfcplEntity) => tgfcplEntity.naturalidade)
  tgfcpls2: TgfcplEntity[];

  @OneToMany(() => TgfcplEntity, (tgfcplEntity) => tgfcplEntity.codcidentrega)
  tgfcpls3: TgfcplEntity[];

  @OneToMany(() => TgfcplEntity, (tgfcplEntity) => tgfcplEntity.codcidreceb)
  tgfcpls4: TgfcplEntity[];

  @OneToMany(
    () => TgfcredcliEntity,
    (tgfcredcliEntity) => tgfcredcliEntity.naturalidade,
  )
  tgfcredclis: TgfcredcliEntity[];

  @OneToMany(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.codc)
  tgfctts: TgfcttEntity[];

  @OneToMany(() => TgfemdfEntity, (tgfemdfEntity) => tgfemdfEntity.codcideve)
  tgfemdfs: TgfemdfEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codcidinicte)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codcidfimcte)
  tgffins2: TgffinEntity[];

  @OneToMany(() => TgfissEntity, (tgfissEntity) => tgfissEntity.codc)
  tgfisses: TgfissEntity[];

  @OneToMany(() => TgflisEntity, (tgflisEntity) => tgflisEntity.codciddestino)
  tgflis: TgflisEntity[];

  @OneToMany(() => TgflisEntity, (tgflisEntity) => tgflisEntity.codcidexecserv)
  tgflis2: TgflisEntity[];

  @OneToMany(() => TgflisEntity, (tgflisEntity) => tgflisEntity.codcidorigem)
  tgflis3: TgflisEntity[];

  @OneToMany(() => TgflivEntity, (tgflivEntity) => tgflivEntity.codcidinicte)
  tgflivs: TgflivEntity[];

  @OneToMany(() => TgflivEntity, (tgflivEntity) => tgflivEntity.codcidfimcte)
  tgflivs2: TgflivEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codciddestino)
  tgfords: TgfordEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codcidorigem)
  tgfords2: TgfordEntity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codc)
  tgfpars: TgfparEntity[];

  @OneToMany(() => TgfrcdEntity, (tgfrcdEntity) => tgfrcdEntity.codc)
  tgfrcds: TgfrcdEntity[];

  @OneToMany(() => TgfrcfEntity, (tgfrcfEntity) => tgfrcfEntity.codciddest2)
  tgfrcfs: TgfrcfEntity[];

  @OneToMany(() => TgfrcfEntity, (tgfrcfEntity) => tgfrcfEntity.codcidorig2)
  tgfrcfs2: TgfrcfEntity[];

  @OneToMany(() => TgfsitEntity, (tgfsitEntity) => tgfsitEntity.codc)
  tgfsits: TgfsitEntity[];

  @OneToMany(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.codc)
  tgfveis: TgfveiEntity[];

  @OneToMany(() => TimcarEntity, (timcarEntity) => timcarEntity.carcidade)
  timcars: TimcarEntity[];

  @OneToMany(() => TimedgEntity, (timedgEntity) => timedgEntity.edgcidade)
  timedgs: TimedgEntity[];

  @OneToMany(() => TimeprEntity, (timeprEntity) => timeprEntity.eprcidade)
  timeprs: TimeprEntity[];

  @OneToMany(() => TimimvEntity, (timimvEntity) => timimvEntity.imvcidade2)
  timimvs: TimimvEntity[];

  @OneToMany(() => TimlotEntity, (timlotEntity) => timlotEntity.lotcidade)
  timlots: TimlotEntity[];

  @OneToMany(() => TimpprEntity, (timpprEntity) => timpprEntity.pprcidade)
  timpprs: TimpprEntity[];

  @OneToMany(() => TimppvEntity, (timppvEntity) => timppvEntity.ppvcidade)
  timppvs: TimppvEntity[];

  @OneToMany(
    () => TmsordcarregEntity,
    (tmsordcarregEntity) => tmsordcarregEntity.codcidorigem,
  )
  tmsordcarregs: TmsordcarregEntity[];

  @OneToMany(
    () => TmsordcarregEntity,
    (tmsordcarregEntity) => tmsordcarregEntity.codciddestino,
  )
  tmsordcarregs2: TmsordcarregEntity[];

  @OneToMany(
    () => TmspedrotEntity,
    (tmspedrotEntity) => tmspedrotEntity.codciddestino,
  )
  tmspedrots: TmspedrotEntity[];

  @OneToMany(
    () => TmspedrotEntity,
    (tmspedrotEntity) => tmspedrotEntity.codcidorigem,
  )
  tmspedrots2: TmspedrotEntity[];

  @OneToMany(() => TripajEntity, (tripajEntity) => tripajEntity.codc)
  tripajs: TripajEntity[];

  @OneToMany(() => TsiageEntity, (tsiageEntity) => tsiageEntity.codc)
  tsiages: TsiageEntity[];

  @OneToMany(() => TsicanEntity, (tsicanEntity) => tsicanEntity.codc)
  tsicans: TsicanEntity[];

  @OneToMany(() => TsicciEntity, (tsicciEntity) => tsicciEntity.codc)
  tsiccis: TsicciEntity[];

  @OneToMany(() => TsicepEntity, (tsicepEntity) => tsicepEntity.codc)
  tsiceps: TsicepEntity[];

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tsics)
  @JoinColumn([{ name: 'UF', referencedColumnName: 'coduf' }])
  uf2: TsiufsEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tsics)
  @JoinColumn([{ name: 'CODPARCNFSE', referencedColumnName: 'codparc' }])
  codparcnfse: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tsics2)
  @JoinColumn([{ name: 'TIMPARCPREFEITURA', referencedColumnName: 'codparc' }])
  timparcprefeitura: TgfparEntity;

  @ManyToOne(() => TsiregEntity, (tsiregEntity) => tsiregEntity.tsics)
  @JoinColumn([{ name: 'CODREG', referencedColumnName: 'codreg' }])
  codreg: TsiregEntity;

  @OneToMany(() => TsidisEntity, (tsidisEntity) => tsidisEntity.codcidorig2)
  tsidis: TsidisEntity[];

  @OneToMany(() => TsidisEntity, (tsidisEntity) => tsidisEntity.codciddest2)
  tsidis2: TsidisEntity[];

  @OneToMany(() => TsiempEntity, (tsiempEntity) => tsiempEntity.codc)
  tsiemps: TsiempEntity[];

  @OneToMany(() => TsiferEntity, (tsiferEntity) => tsiferEntity.codc)
  tsifers: TsiferEntity[];
}
