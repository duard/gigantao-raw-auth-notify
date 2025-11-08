import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TpraccqEntity } from './tPRACCQ.entity';
import { TprprcEntity } from './tPRPRC.entity';
import { TprefxEntity } from './tPREFX.entity';
import { TprmtpEntity } from './tPRMTP.entity';
import { TprccqEntity } from './tPRCCQ.entity';
import { TprrpaEntity } from './tPRRPA.entity';
import { TprdtsmpEntity } from './tPRDTSMP.entity';
import { TprecdEntity } from './tPRECD.entity';
import { TpriatvEntity } from './tPRIATV.entity';
import { TprlccqEntity } from './tPRLCCQ.entity';
import { TprlmpEntity } from './tPRLMP.entity';
import { TprlspEntity } from './tPRLSP.entity';
import { TprmpaEntity } from './tPRMPA.entity';
import { TprpiprocEntity } from './tPRPIPROC.entity';
import { TprtcaEntity } from './tPRTCA.entity';
import { TprtxpEntity } from './tPRTXP.entity';

@Index('PK_TPRATV', ['idefx'], { unique: true })
@Entity('TPRATV', { schema: 'SANKHYA' })
export class TpratvEntity {
  @Column('int', { primary: true, name: 'IDEFX' })
  idefx: number;

  @Column('int', { name: 'IDAWC', nullable: true })
  idawc: number | null;

  @Column('char', { name: 'PERMITEPARCIAL', length: 1, default: () => "'N'" })
  permiteparcial: string;

  @Column('char', { name: 'UNTEMPO', length: 1, default: () => "'M'" })
  untempo: string;

  @Column('float', {
    name: 'TEMPOATIVIDADE',
    precision: 53,
    default: () => '(0)',
  })
  tempoatividade: number;

  @Column('char', { name: 'APONTAMP', length: 1, default: () => "'A'" })
  apontamp: string;

  @Column('char', { name: 'APONTAPA', length: 1, default: () => "'N'" })
  apontapa: string;

  @Column('char', { name: 'APONTACOMP', length: 1, default: () => "'N'" })
  apontacomp: string;

  @Column('varchar', { name: 'APONTASP', length: 1, default: () => "'N'" })
  apontasp: string;

  @Column('char', { name: 'PERMITENOVOPA', length: 1, default: () => "'N'" })
  permitenovopa: string;

  @Column('char', { name: 'TIPOREPROCESSO', length: 1, default: () => "'N'" })
  tiporeprocesso: string;

  @Column('char', { name: 'ALTSTATUSPROC', length: 1, default: () => "'M'" })
  altstatusproc: string;

  @Column('varchar', { name: 'CODUSULOGON', nullable: true, length: 3 })
  codusulogon: string | null;

  @Column('char', { name: 'LISTAMPPADRAO', length: 1, default: () => "'S'" })
  listamppadrao: string;

  @Column('char', { name: 'LIBERARWCFINAL', length: 1, default: () => "'S'" })
  liberarwcfinal: string;

  @Column('char', { name: 'LIBERARWCMANUAL', length: 1, default: () => "'N'" })
  liberarwcmanual: string;

  @Column('varchar', { name: 'INICIALIZARPA', nullable: true, length: 1 })
  inicializarpa: string | null;

  @Column('char', { name: 'QTDBASEAPON', length: 1, default: () => "'A'" })
  qtdbaseapon: string;

  @Column('char', { name: 'OPERCQ', length: 1, default: () => "'N'" })
  opercq: string;

  @Column('char', { name: 'VALIDACQ', length: 1, default: () => "'N'" })
  validacq: string;

  @Column('char', { name: 'EXECTERCEIRO', length: 1, default: () => "'N'" })
  execterceiro: string;

  @Column('varchar', { name: 'CONCLUICQ', length: 1, default: () => "'N'" })
  concluicq: string;

  @Column('char', { name: 'SUBAPOPORCONF', length: 1, default: () => "'N'" })
  subapoporconf: string;

  @Column('char', { name: 'CONTCUMULATIVA', length: 1, default: () => "'S'" })
  contcumulativa: string;

  @Column('int', { name: 'QTDCONFIGUAIS', default: () => '(0)' })
  qtdconfiguais: number;

  @Column('int', { name: 'QTDRECONTAGENS', default: () => '(0)' })
  qtdrecontagens: number;

  @Column('varchar', {
    name: 'TIPOCONFERENCIA',
    length: 2,
    default: () => "'CI'",
  })
  tipoconferencia: string;

  @Column('char', { name: 'USASEQCODBAR', length: 1, default: () => "'N'" })
  usaseqcodbar: string;

  @Column('varchar', { name: 'SEPSEQCODBAR', nullable: true, length: 5 })
  sepseqcodbar: string | null;

  @Column('smallint', { name: 'SEQEXECUCAO', nullable: true })
  seqexecucao: number | null;

  @Column('char', { name: 'TIPOTEMPO', length: 1, default: () => "'Q'" })
  tipotempo: string;

  @Column('char', { name: 'APONTARECWC', length: 1, default: () => "'N'" })
  apontarecwc: string;

  @Column('char', { name: 'PROIBEAPONT', length: 1, default: () => "'N'" })
  proibeapont: string;

  @Column('varchar', { name: 'MULTITURNO', length: 1, default: () => "'N'" })
  multiturno: string;

  @Column('char', { name: 'SETUP', nullable: true, length: 1 })
  setup: string | null;

  @Column('char', { name: 'PERMITEPERDATOTAL', nullable: true, length: 1 })
  permiteperdatotal: string | null;

  @Column('char', {
    name: 'APROVARSTATUSLOTE',
    length: 1,
    default: () => "'N'",
  })
  aprovarstatuslote: string;

  @Column('char', { name: 'GERAMLAUDO', length: 1, default: () => "'N'" })
  geramlaudo: string;

  @Column('char', {
    name: 'DATAHORAAPONTAMENTO',
    length: 1,
    default: () => "'N'",
  })
  datahoraapontamento: string;

  @Column('varchar', {
    name: 'PERMITEALTLOCMP',
    length: 1,
    default: () => "'N'",
  })
  permitealtlocmp: string;

  @OneToMany(() => TpraccqEntity, (tpraccqEntity) => tpraccqEntity.idefx)
  tpraccqs: TpraccqEntity[];

  @ManyToOne(() => TprprcEntity, (tprprcEntity) => tprprcEntity.tpratvs)
  @JoinColumn([{ name: 'CODPRCSUB', referencedColumnName: 'idproc' }])
  codprcsub: TprprcEntity;

  @ManyToOne(() => TprprcEntity, (tprprcEntity) => tprprcEntity.tpratvs2)
  @JoinColumn([{ name: 'IDPROC', referencedColumnName: 'idproc' }])
  idproc: TprprcEntity;

  @OneToOne(() => TprefxEntity, (tprefxEntity) => tprefxEntity.tpratv, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx2: TprefxEntity;

  @ManyToOne(() => TprmtpEntity, (tprmtpEntity) => tprmtpEntity.tpratvs)
  @JoinColumn([{ name: 'CODMTPFINTURNO', referencedColumnName: 'codmtp' }])
  codmtpfinturno: TprmtpEntity;

  @ManyToOne(() => TprccqEntity, (tprccqEntity) => tprccqEntity.tpratvs)
  @JoinColumn([{ name: 'IDCCQ', referencedColumnName: 'idccq' }])
  idccq: TprccqEntity;

  @ManyToOne(() => TprrpaEntity, (tprrpaEntity) => tprrpaEntity.tpratvs)
  @JoinColumn([{ name: 'IDRPADEST', referencedColumnName: 'idrpa' }])
  idrpadest: TprrpaEntity;

  @ManyToOne(() => TprrpaEntity, (tprrpaEntity) => tprrpaEntity.tpratvs2)
  @JoinColumn([{ name: 'IDRPAOPER', referencedColumnName: 'idrpa' }])
  idrpaoper: TprrpaEntity;

  @OneToMany(() => TprdtsmpEntity, (tprdtsmpEntity) => tprdtsmpEntity.idefx)
  tprdtsmps: TprdtsmpEntity[];

  @OneToMany(() => TprecdEntity, (tprecdEntity) => tprecdEntity.idefx2)
  tprecds: TprecdEntity[];

  @OneToMany(() => TpriatvEntity, (tpriatvEntity) => tpriatvEntity.idefx)
  tpriatvs: TpriatvEntity[];

  @OneToMany(() => TprlccqEntity, (tprlccqEntity) => tprlccqEntity.idefx)
  tprlccqs: TprlccqEntity[];

  @OneToMany(() => TprlmpEntity, (tprlmpEntity) => tprlmpEntity.idefx2)
  tprlmps: TprlmpEntity[];

  @OneToMany(() => TprlspEntity, (tprlspEntity) => tprlspEntity.idefx2)
  tprlsps: TprlspEntity[];

  @OneToMany(() => TprmpaEntity, (tprmpaEntity) => tprmpaEntity.idefx2)
  tprmpas: TprmpaEntity[];

  @OneToMany(() => TprpiprocEntity, (tprpiprocEntity) => tprpiprocEntity.idefx2)
  tprpiprocs: TprpiprocEntity[];

  @OneToMany(() => TprtcaEntity, (tprtcaEntity) => tprtcaEntity.idefx2)
  tprtcas: TprtcaEntity[];

  @OneToMany(() => TprtxpEntity, (tprtxpEntity) => tprtxpEntity.idefx2)
  tprtxps: TprtxpEntity[];
}
