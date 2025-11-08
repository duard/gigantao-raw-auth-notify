import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TccnegEntity } from './tCCNEG.entity';
import { TcedespEntity } from './tCEDESP.entity';
import { TcedespHisEntity } from './tCEDESP_HIS.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TfpbenEntity } from './tFPBEN.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpfinEntity } from './tFPFIN.entity';
import { TgfattEntity } from './tGFATT.entity';
import { TgfbttEntity } from './tGFBTT.entity';
import { TgfcaiEntity } from './tGFCAI.entity';
import { TgfcbsEntity } from './tGFCBS.entity';
import { TgfccaiEntity } from './tGFCCAI.entity';
import { TgfcertEntity } from './tGFCERT.entity';
import { TgfcocEntity } from './tGFCOC.entity';
import { TgfcrafEntity } from './tGFCRAF.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgffctEntity } from './tGFFCT.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { Tgflcdprrq100Entity } from './tGFLCDPRRQ100.entity';
import { TgfmbcEntity } from './tGFMBC.entity';
import { TgfmpxEntity } from './tGFMPX.entity';
import { TgfncbEntity } from './tGFNCB.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfpdvEntity } from './tGFPDV.entity';
import { TgfppgEntity } from './tGFPPG.entity';
import { TgfrcEntity } from './tGFRC.entity';
import { TgfremEntity } from './tGFREM.entity';
import { TgfsbcEntity } from './tGFSBC.entity';
import { TgftrcEntity } from './tGFTRC.entity';
import { TimcnfEntity } from './tIMCNF.entity';
import { TimlocEntity } from './tIMLOC.entity';
import { TimlotEntity } from './tIMLOT.entity';
import { TimtxcEntity } from './tIMTXC.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TsirfeEntity } from './tSIRFE.entity';
import { TsimoeEntity } from './tSIMOE.entity';
import { TsibcoEntity } from './tSIBCO.entity';
import { TsiageEntity } from './tSIAGE.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TsifatEntity } from './tSIFAT.entity';
import { TsifilEntity } from './tSIFIL.entity';
import { TsiobcEntity } from './tSIOBC.entity';
import { TsiuctEntity } from './tSIUCT.entity';

@Index('PK_TSICTA', ['codctabcoint'], { unique: true })
@Index('TSICTA_I01', ['ctaminboleta'], {})
@Entity('TSICTA', { schema: 'SANKHYA' })
export class TsictaEntity {
  @Column('smallint', { primary: true, name: 'CODCTABCOINT' })
  codctabcoint: number;

  @Column('char', { name: 'CODCTABCO', nullable: true, length: 17 })
  codctabco: string | null;

  @Column('char', { name: 'DESCRICAO', nullable: true, length: 40 })
  descricao: string | null;

  @Column('char', { name: 'CLASSE', nullable: true, length: 1 })
  classe: string | null;

  @Column('smallint', { name: 'CARTEIRA', nullable: true })
  carteira: number | null;

  @Column('int', { name: 'SEQREM', nullable: true })
  seqrem: number | null;

  @Column('int', { name: 'REMBCO', nullable: true })
  rembco: number | null;

  @Column('int', { name: 'REMFINAL', nullable: true })
  remfinal: number | null;

  @Column('float', { name: 'CONVENIO', nullable: true, precision: 53 })
  convenio: number | null;

  @Column('smallint', { name: 'INSTRUCAOI', nullable: true })
  instrucaoi: number | null;

  @Column('smallint', { name: 'INSTRUCAOII', nullable: true })
  instrucaoii: number | null;

  @Column('smallint', { name: 'DIASPROT', nullable: true })
  diasprot: number | null;

  @Column('char', { name: 'EMITEBOLETA', length: 1, default: () => "'S'" })
  emiteboleta: string;

  @Column('char', { name: 'IMPBOLETA', nullable: true, length: 32 })
  impboleta: string | null;

  @Column('smallint', { name: 'MODBOLETA', nullable: true })
  modboleta: number | null;

  @Column('char', { name: 'EXCLUSIVA', length: 1, default: () => "'S'" })
  exclusiva: string;

  @Column('char', { name: 'ATIVA', length: 1, default: () => "'S'" })
  ativa: string;

  @Column('int', { name: 'NUMCHEQ', nullable: true })
  numcheq: number | null;

  @Column('char', {
    name: 'CTADEFEMIBOL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ctadefemibol: string | null;

  @Column('money', { name: 'VLRMINBOLETA', nullable: true })
  vlrminboleta: number | null;

  @Column('smallint', { name: 'CTAMINBOLETA', nullable: true })
  ctaminboleta: number | null;

  @Column('money', { name: 'TAXA', nullable: true })
  taxa: number | null;

  @Column('char', { name: 'TIPOIMPRESSORA', length: 1, default: () => "'1'" })
  tipoimpressora: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('datetime', { name: 'DTIMPLANT', nullable: true })
  dtimplant: Date | null;

  @Column('money', { name: 'SALDOBCO', nullable: true })
  saldobco: number | null;

  @Column('money', { name: 'SALDOREAL', nullable: true })
  saldoreal: number | null;

  @Column('int', { name: 'REMBCOMAX', nullable: true })
  rembcomax: number | null;

  @Column('char', { name: 'ZERARAUT', length: 1, default: () => "'N'" })
  zeraraut: string;

  @Column('int', { name: 'CODCTABCOINTREM', nullable: true })
  codctabcointrem: number | null;

  @Column('int', { name: 'SEQREM2', nullable: true })
  seqrem2: number | null;

  @Column('int', { name: 'REMFINAL2', nullable: true })
  remfinal2: number | null;

  @Column('smallint', { name: 'CODCORRBCO', nullable: true })
  codcorrbco: number | null;

  @Column('int', { name: 'NUCONTRATO', nullable: true })
  nucontrato: number | null;

  @Column('smallint', { name: 'MODALIDADE', nullable: true })
  modalidade: number | null;

  @Column('smallint', { name: 'CATEGLANCHQ', nullable: true })
  categlanchq: number | null;

  @Column('varchar', { name: 'CAMPOLIVRE', nullable: true, length: 25 })
  campolivre: string | null;

  @Column('varchar', { name: 'NOSSONUMERO', nullable: true, length: 25 })
  nossonumero: string | null;

  @Column('varchar', { name: 'MULTIPNOSSONUM', nullable: true, length: 25 })
  multipnossonum: string | null;

  @Column('char', { name: 'TIPMULTIPSOMA', length: 1, default: () => "'T'" })
  tipmultipsoma: string;

  @Column('char', { name: 'TIPMODNOSSNUM', length: 1, default: () => "'O'" })
  tipmodnossnum: string;

  @Column('char', { name: 'SUBRESTMODULO', length: 1, default: () => "'N'" })
  subrestmodulo: string;

  @Column('smallint', { name: 'RESTOSUBST1', nullable: true })
  restosubst1: number | null;

  @Column('smallint', { name: 'RESTOSUBST2', nullable: true })
  restosubst2: number | null;

  @Column('smallint', { name: 'RESTOSUBST3', nullable: true })
  restosubst3: number | null;

  @Column('char', { name: 'DIGITOSUBST1', nullable: true, length: 1 })
  digitosubst1: string | null;

  @Column('char', { name: 'DIGITOSUBST2', nullable: true, length: 1 })
  digitosubst2: string | null;

  @Column('char', { name: 'DIGITOSUBST3', nullable: true, length: 1 })
  digitosubst3: string | null;

  @Column('char', { name: 'NOSSONUMATIVO', length: 1, default: () => "'N'" })
  nossonumativo: string;

  @Column('char', { name: 'LINHADIGATIVO', length: 1, default: () => "'N'" })
  linhadigativo: string;

  @Column('int', { name: 'NUMCLIENTE', nullable: true })
  numcliente: number | null;

  @Column('varchar', { name: 'IDCLIENTE', nullable: true, length: 30 })
  idcliente: string | null;

  @Column('smallint', { name: 'CODAGEBENEF', nullable: true })
  codagebenef: number | null;

  @Column('int', { name: 'CODCTABENEF', nullable: true })
  codctabenef: number | null;

  @Column('varchar', { name: 'PJBCRED', nullable: true, length: 80 })
  pjbcred: string | null;

  @Column('varchar', { name: 'PJBCHAVE', nullable: true, length: 80 })
  pjbchave: string | null;

  @Column('varchar', { name: 'BJBBAIBOLPAG', nullable: true, length: 1 })
  bjbbaibolpag: string | null;

  @Column('varchar', { name: 'PJBCONBAIXCRED', nullable: true, length: 1 })
  pjbconbaixcred: string | null;

  @Column('smallint', { name: 'CODLANCBAIXABOLRAP', nullable: true })
  codlancbaixabolrap: number | null;

  @Column('smallint', { name: 'CODTIPOPERBAIXABOLRAP', nullable: true })
  codtipoperbaixabolrap: number | null;

  @Column('varchar', { name: 'TIPOBOLETO', nullable: true, length: 1 })
  tipoboleto: string | null;

  @Column('varchar', { name: 'CODCONTARURAL', nullable: true, length: 3 })
  codcontarural: string | null;

  @Column('char', { name: 'DESCONSLCDPR', nullable: true, length: 1 })
  desconslcdpr: string | null;

  @Column('varchar', { name: 'NUMCONTARURAL', nullable: true, length: 3 })
  numcontarural: string | null;

  @Column('text', { name: 'LOGOURL', nullable: true })
  logourl: string | null;

  @Column('varchar', { name: 'CHAVEPIX', nullable: true, length: 77 })
  chavepix: string | null;

  @Column('varchar', { name: 'URLPIX', nullable: true, length: 300 })
  urlpix: string | null;

  @Column('int', { name: 'QTDDIASVALPIX', nullable: true })
  qtddiasvalpix: number | null;

  @Column('varchar', { name: 'CHAVEAPIPIX', nullable: true, length: 250 })
  chaveapipix: string | null;

  @Column('varchar', { name: 'TITINFADICPIX', nullable: true, length: 50 })
  titinfadicpix: string | null;

  @Column('varchar', { name: 'MENADICPIX', nullable: true, length: 300 })
  menadicpix: string | null;

  @Column('varchar', { name: 'SENCLIPIX', nullable: true, length: 1000 })
  senclipix: string | null;

  @Column('varchar', { name: 'IDCLIPIX', nullable: true, length: 250 })
  idclipix: string | null;

  @Column('varchar', { name: 'CONCAUTRECEBPIX', nullable: true, length: 1 })
  concautrecebpix: string | null;

  @Column('int', { name: 'IDAPIBANCO', nullable: true })
  idapibanco: number | null;

  @Column('varchar', { name: 'RECEBIMENTOPARCIAL', nullable: true, length: 32 })
  recebimentoparcial: string | null;

  @Column('int', { name: 'VARIACAO', nullable: true })
  variacao: number | null;

  @Column('varchar', {
    name: 'ACEITATITULOVENCIDO',
    nullable: true,
    length: 32,
  })
  aceitatitulovencido: string | null;

  @Column('varchar', { name: 'INDICADORPIX', nullable: true, length: 2 })
  indicadorpix: string | null;

  @Column('varchar', { name: 'STATUSAPI', nullable: true, length: 32 })
  statusapi: string | null;

  @Column('int', { name: 'RECEBIMENTODIAS', nullable: true })
  recebimentodias: number | null;

  @Column('char', { name: 'TIPOAPIBOLETO', nullable: true, length: 1 })
  tipoapiboleto: string | null;

  @Column('varchar', {
    name: 'APICONCILIACAOAUTOMATICA',
    nullable: true,
    length: 1,
  })
  apiconciliacaoautomatica: string | null;

  @Column('varchar', { name: 'APIBAIXAAUTOMATICA', nullable: true, length: 1 })
  apibaixaautomatica: string | null;

  @Column('datetime', { name: 'DTREGCONTA', nullable: true })
  dtregconta: Date | null;

  @Column('int', { name: 'DIASPROTESTO', nullable: true })
  diasprotesto: number | null;

  @Column('int', { name: 'DIASMULTA', nullable: true })
  diasmulta: number | null;

  @Column('int', { name: 'DIASPARANEGATIVACAO', nullable: true })
  diasparanegativacao: number | null;

  @Column('int', { name: 'ORGAONEGATIVADOR', nullable: true })
  orgaonegativador: number | null;

  @Column('varchar', { name: 'TIPOMULTA', nullable: true, length: 1 })
  tipomulta: string | null;

  @Column('decimal', {
    name: 'VALORMULTA',
    nullable: true,
    precision: 6,
    scale: 2,
  })
  valormulta: number | null;

  @Column('decimal', {
    name: 'VALORJUROS',
    nullable: true,
    precision: 6,
    scale: 2,
  })
  valorjuros: number | null;

  @Column('varchar', { name: 'TIPOJUROS', nullable: true, length: 1 })
  tipojuros: string | null;

  @Column('varchar', { name: 'DATAMULTA', nullable: true, length: 1 })
  datamulta: string | null;

  @Column('int', { name: 'INSTRUCAONEGATIVACAO', nullable: true })
  instrucaonegativacao: number | null;

  @Column('int', { name: 'INSTRUCAOPROTESTO', nullable: true })
  instrucaoprotesto: number | null;

  @Column('char', { name: 'CONTABILIZARDIAS', nullable: true, length: 1 })
  contabilizardias: string | null;

  @Column('bigint', { name: 'IDSEQBOL', nullable: true })
  idseqbol: string | null;

  @Column('datetime', { name: 'DTENVIOAPIBANCO', nullable: true })
  dtenvioapibanco: Date | null;

  @Column('datetime', { name: 'DHULTATUA', nullable: true })
  dhultatua: Date | null;

  @Column('varchar', { name: 'DATAJURO', nullable: true, length: 1 })
  datajuro: string | null;

  @Column('int', { name: 'DIASJURO', nullable: true })
  diasjuro: number | null;

  @Column('char', { name: 'UTILIZAPIXPDV', nullable: true, length: 1 })
  utilizapixpdv: string | null;

  @Column('datetime', { name: 'DTDESCREDCONTA', nullable: true })
  dtdescredconta: Date | null;

  @OneToMany(() => TccnegEntity, (tccnegEntity) => tccnegEntity.codctabcoint)
  tccnegs: TccnegEntity[];

  @OneToMany(() => TcedespEntity, (tcedespEntity) => tcedespEntity.codctabcoint)
  tcedesps: TcedespEntity[];

  @OneToMany(
    () => TcedespHisEntity,
    (tcedespHisEntity) => tcedespHisEntity.codctabcoint,
  )
  tcedespHis: TcedespHisEntity[];

  @OneToMany(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.timnmctacomp)
  tcsprjs: TcsprjEntity[];

  @OneToMany(() => TfpbenEntity, (tfpbenEntity) => tfpbenEntity.codctabcoint)
  tfpbens: TfpbenEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.codctabcoint)
  tfpemps: TfpempEntity[];

  @OneToMany(() => TfpfinEntity, (tfpfinEntity) => tfpfinEntity.codctabcoint)
  tfpfins: TfpfinEntity[];

  @OneToMany(() => TgfattEntity, (tgfattEntity) => tgfattEntity.codctabcoint)
  tgfatts: TgfattEntity[];

  @OneToMany(() => TgfbttEntity, (tgfbttEntity) => tgfbttEntity.codctabcoint)
  tgfbtts: TgfbttEntity[];

  @OneToMany(() => TgfcaiEntity, (tgfcaiEntity) => tgfcaiEntity.codctabcoint2)
  tgfcais: TgfcaiEntity[];

  @OneToMany(() => TgfcbsEntity, (tgfcbsEntity) => tgfcbsEntity.codctabcoint2)
  tgfcbs: TgfcbsEntity[];

  @OneToMany(() => TgfccaiEntity, (tgfccaiEntity) => tgfccaiEntity.codcontapdv)
  tgfccais: TgfccaiEntity[];

  @OneToMany(() => TgfccaiEntity, (tgfccaiEntity) => tgfccaiEntity.codcontates)
  tgfccais2: TgfccaiEntity[];

  @OneToMany(() => TgfcertEntity, (tgfcertEntity) => tgfcertEntity.codctabcoint)
  tgfcerts: TgfcertEntity[];

  @OneToMany(() => TgfcocEntity, (tgfcocEntity) => tgfcocEntity.codctabcoint2)
  tgfcocs: TgfcocEntity[];

  @OneToOne(() => TgfcrafEntity, (tgfcrafEntity) => tgfcrafEntity.codctabcoint2)
  tgfcraf: TgfcrafEntity;

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codctabcoipad)
  tgfemps: TgfempEntity[];

  @OneToMany(() => TgffctEntity, (tgffctEntity) => tgffctEntity.codctabcoint2)
  tgffcts: TgffctEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codctabcoint2)
  tgffins: TgffinEntity[];

  @OneToMany(
    () => Tgflcdprrq100Entity,
    (tgflcdprrq100Entity) => tgflcdprrq100Entity.codctabcoint,
  )
  tgflcdprrqs: Tgflcdprrq100Entity[];

  @OneToMany(() => TgfmbcEntity, (tgfmbcEntity) => tgfmbcEntity.codctabcoint2)
  tgfmbcs: TgfmbcEntity[];

  @OneToMany(() => TgfmpxEntity, (tgfmpxEntity) => tgfmpxEntity.codctabcoint)
  tgfmpxes: TgfmpxEntity[];

  @OneToMany(() => TgfncbEntity, (tgfncbEntity) => tgfncbEntity.codctabcoint2)
  tgfncbs: TgfncbEntity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codctabcoint)
  tgfpars: TgfparEntity[];

  @OneToMany(() => TgfpdvEntity, (tgfpdvEntity) => tgfpdvEntity.codcontapdv)
  tgfpdvs: TgfpdvEntity[];

  @OneToMany(() => TgfpdvEntity, (tgfpdvEntity) => tgfpdvEntity.codcontates)
  tgfpdvs2: TgfpdvEntity[];

  @OneToMany(() => TgfppgEntity, (tgfppgEntity) => tgfppgEntity.codctabcoint)
  tgfppgs: TgfppgEntity[];

  @OneToMany(() => TgfrcEntity, (tgfrcEntity) => tgfrcEntity.codctabcoint)
  tgfrcs: TgfrcEntity[];

  @OneToMany(() => TgfremEntity, (tgfremEntity) => tgfremEntity.codctabcoint)
  tgfrems: TgfremEntity[];

  @OneToMany(() => TgfsbcEntity, (tgfsbcEntity) => tgfsbcEntity.codctabcoint2)
  tgfsbcs: TgfsbcEntity[];

  @OneToMany(
    () => TgftrcEntity,
    (tgftrcEntity) => tgftrcEntity.codctabcointdest,
  )
  tgftrcs: TgftrcEntity[];

  @OneToMany(
    () => TgftrcEntity,
    (tgftrcEntity) => tgftrcEntity.codctabcointorig,
  )
  tgftrcs2: TgftrcEntity[];

  @OneToMany(() => TimcnfEntity, (timcnfEntity) => timcnfEntity.cnfcodctabcoint)
  timcnfs: TimcnfEntity[];

  @OneToMany(
    () => TimlocEntity,
    (timlocEntity) => timlocEntity.loccontacorrente,
  )
  timlocs: TimlocEntity[];

  @OneToMany(
    () => TimlotEntity,
    (timlotEntity) => timlotEntity.lotcontacorrente,
  )
  timlots: TimlotEntity[];

  @OneToMany(() => TimlotEntity, (timlotEntity) => timlotEntity.lotccentrada)
  timlots2: TimlotEntity[];

  @OneToMany(() => TimtxcEntity, (timtxcEntity) => timtxcEntity.txccodctabcoint)
  timtxcs: TimtxcEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsictas)
  @JoinColumn([{ name: 'CODOPEREXCL', referencedColumnName: 'codusu' }])
  codoperexcl: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsictas2)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tsictas)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb: TcbplaEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tsictas)
  @JoinColumn([{ name: 'CODCTABAIXA', referencedColumnName: 'codctabcoint' }])
  codctabaixa: TsictaEntity;

  @OneToMany(() => TsictaEntity, (tsictaEntity) => tsictaEntity.codctabaixa)
  tsictas: TsictaEntity[];

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tsictas2)
  @JoinColumn([{ name: 'CTAMINBOLETA', referencedColumnName: 'codctabcoint' }])
  ctaminboleta2: TsictaEntity;

  @OneToMany(() => TsictaEntity, (tsictaEntity) => tsictaEntity.ctaminboleta2)
  tsictas2: TsictaEntity[];

  @ManyToOne(() => TsirfeEntity, (tsirfeEntity) => tsirfeEntity.tsictas)
  @JoinColumn([{ name: 'NURFEMODCHEQG', referencedColumnName: 'nurfe' }])
  nurfemodcheqg: TsirfeEntity;

  @ManyToOne(() => TsirfeEntity, (tsirfeEntity) => tsirfeEntity.tsictas2)
  @JoinColumn([{ name: 'NURFEMODBOLETO', referencedColumnName: 'nurfe' }])
  nurfemodboleto: TsirfeEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.tsictas)
  @JoinColumn([{ name: 'CODMOEDA', referencedColumnName: 'codmoeda' }])
  codmoeda: TsimoeEntity;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.tsictas)
  @JoinColumn([{ name: 'CODBCO', referencedColumnName: 'codbco' }])
  codbco: TsibcoEntity;

  @ManyToOne(() => TsiageEntity, (tsiageEntity) => tsiageEntity.tsictas)
  @JoinColumn([
    { name: 'CODAGE', referencedColumnName: 'codage' },
    { name: 'CODBCO', referencedColumnName: 'codbco' },
  ])
  tsiage: TsiageEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tsictas)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tsictas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @OneToMany(() => TsifatEntity, (tsifatEntity) => tsifatEntity.codctabcointrec)
  tsifats: TsifatEntity[];

  @OneToMany(
    () => TsifatEntity,
    (tsifatEntity) => tsifatEntity.codctabcointdesp,
  )
  tsifats2: TsifatEntity[];

  @OneToMany(() => TsifilEntity, (tsifilEntity) => tsifilEntity.codctabcoint)
  tsifils: TsifilEntity[];

  @OneToMany(() => TsiobcEntity, (tsiobcEntity) => tsiobcEntity.codctabcoint)
  tsiobcs: TsiobcEntity[];

  @OneToMany(() => TsiuctEntity, (tsiuctEntity) => tsiuctEntity.codctabcoint)
  tsiucts: TsiuctEntity[];

  @OneToMany(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.codctabcoint)
  tsiusus: TsiusuEntity[];

  @OneToMany(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.codctabcoint2)
  tsiusus2: TsiusuEntity[];
}
