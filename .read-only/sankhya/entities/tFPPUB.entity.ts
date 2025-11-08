import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TfpafgEntity } from './tFPAFG.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpgraEntity } from './tFPGRA.entity';
import { TfpdepEntity } from './tFPDEP.entity';
import { TfpdivEntity } from './tFPDIV.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpsitEntity } from './tFPSIT.entity';
import { TfpnivEntity } from './tFPNIV.entity';
import { TfporgEntity } from './tFPORG.entity';
import { TfppssEntity } from './tFPPSS.entity';
import { TfpsubEntity } from './tFPSUB.entity';

@Index('PK_TFPPUB', ['codemp', 'codfunc'], { unique: true })
@Entity('TFPPUB', { schema: 'SANKHYA' })
export class TfppubEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('smallint', { name: 'DEPENDACIMA65A', nullable: true })
  dependacima65A: number | null;

  @Column('smallint', { name: 'DEPENDACIMA65B', nullable: true })
  dependacima65B: number | null;

  @Column('smallint', { name: 'AGREGPLANOA', nullable: true })
  agregplanoa: number | null;

  @Column('smallint', { name: 'AGREGACIMA65A', nullable: true })
  agregacima65A: number | null;

  @Column('smallint', { name: 'AGREGPLANOB', nullable: true })
  agregplanob: number | null;

  @Column('smallint', { name: 'AGREGACIMA65B', nullable: true })
  agregacima65B: number | null;

  @Column('smallint', { name: 'ANUENIO', nullable: true })
  anuenio: number | null;

  @Column('char', { name: 'OPCAOGRAT', length: 1, default: () => "'S'" })
  opcaograt: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', {
    name: 'CEDIDOREQ',
    nullable: true,
    length: 1,
    default: () => "'L'",
  })
  cedidoreq: string | null;

  @Column('char', {
    name: 'CLT_ESTAT',
    nullable: true,
    length: 1,
    default: () => "'C'",
  })
  cltEstat: string | null;

  @Column('char', {
    name: 'CATEGORIA',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  categoria: string | null;

  @Column('char', { name: 'CARTEIRAFUNC', nullable: true, length: 10 })
  carteirafunc: string | null;

  @Column('smallint', { name: 'CODDEC_1', nullable: true })
  coddec_1: number | null;

  @Column('smallint', { name: 'CODDEC_2', nullable: true })
  coddec_2: number | null;

  @Column('smallint', { name: 'CODDEC_3', nullable: true })
  coddec_3: number | null;

  @Column('smallint', { name: 'CODDEC_4', nullable: true })
  coddec_4: number | null;

  @Column('smallint', { name: 'CODDEC_5', nullable: true })
  coddec_5: number | null;

  @Column('smallint', { name: 'CODDEC_6', nullable: true })
  coddec_6: number | null;

  @Column('smallint', { name: 'CODDEC_7', nullable: true })
  coddec_7: number | null;

  @Column('smallint', { name: 'CODDEC_8', nullable: true })
  coddec_8: number | null;

  @Column('smallint', { name: 'CODDEC_9', nullable: true })
  coddec_9: number | null;

  @Column('smallint', { name: 'CODDEC_10', nullable: true })
  coddec_10: number | null;

  @Column('datetime', { name: 'DTDESIGNACAO', nullable: true })
  dtdesignacao: Date | null;

  @Column('datetime', { name: 'DTPOSSE', nullable: true })
  dtposse: Date | null;

  @Column('datetime', { name: 'DTEXERC', nullable: true })
  dtexerc: Date | null;

  @Column('datetime', { name: 'DTVACANCIA', nullable: true })
  dtvacancia: Date | null;

  @Column('datetime', { name: 'DTAPOSENTADORIA', nullable: true })
  dtaposentadoria: Date | null;

  @Column('datetime', { name: 'DTREDIST', nullable: true })
  dtredist: Date | null;

  @Column('datetime', { name: 'DTINICREQ', nullable: true })
  dtinicreq: Date | null;

  @Column('datetime', { name: 'DTTERMREQ', nullable: true })
  dttermreq: Date | null;

  @Column('char', { name: 'FIMREQ', length: 1, default: () => "'N'" })
  fimreq: string;

  @Column('char', { name: 'SITUACAO', length: 1, default: () => "'A'" })
  situacao: string;

  @Column('float', { name: 'INDDEC_1', nullable: true, precision: 53 })
  inddec_1: number | null;

  @Column('float', { name: 'INDDEC_2', nullable: true, precision: 53 })
  inddec_2: number | null;

  @Column('float', { name: 'INDDEC_3', nullable: true, precision: 53 })
  inddec_3: number | null;

  @Column('float', { name: 'INDDEC_4', nullable: true, precision: 53 })
  inddec_4: number | null;

  @Column('float', { name: 'INDDEC_5', nullable: true, precision: 53 })
  inddec_5: number | null;

  @Column('float', { name: 'INDDEC_6', nullable: true, precision: 53 })
  inddec_6: number | null;

  @Column('float', { name: 'INDDEC_7', nullable: true, precision: 53 })
  inddec_7: number | null;

  @Column('float', { name: 'INDDEC_8', nullable: true, precision: 53 })
  inddec_8: number | null;

  @Column('float', { name: 'INDDEC_9', nullable: true, precision: 53 })
  inddec_9: number | null;

  @Column('float', { name: 'INDDEC_10', nullable: true, precision: 53 })
  inddec_10: number | null;

  @Column('char', { name: 'ISENTOIR', length: 1, default: () => "'N'" })
  isentoir: string;

  @Column('datetime', { name: 'DTINGRCARR', nullable: true })
  dtingrcarr: Date | null;

  @Column('datetime', { name: 'DTCARGOANT', nullable: true })
  dtcargoant: Date | null;

  @Column('varchar', { name: 'INGRESSO', length: 1, default: () => "'N'" })
  ingresso: string;

  @Column('datetime', { name: 'DTINGRESSO', nullable: true })
  dtingresso: Date | null;

  @Column('int', { name: 'CODCARGOANT', nullable: true })
  codcargoant: number | null;

  @Column('float', { name: 'FRACAOAPOPC1', nullable: true, precision: 53 })
  fracaoapopc1: number | null;

  @Column('float', { name: 'FRACAOAPOPC2', nullable: true, precision: 53 })
  fracaoapopc2: number | null;

  @Column('varchar', { name: 'TEMCARGOANT', length: 1, default: () => "'N'" })
  temcargoant: string;

  @Column('varchar', { name: 'APOSENTAOPC', length: 1, default: () => "'N'" })
  aposentaopc: string;

  @Column('varchar', { name: 'APOSENTAMEDIA', length: 1, default: () => "'N'" })
  aposentamedia: string;

  @Column('float', { name: 'VLRAPOMEDIA', nullable: true, precision: 53 })
  vlrapomedia: number | null;

  @Column('smallint', { name: 'SITUACAOSERVIDOR', default: () => '(1)' })
  situacaoservidor: number;

  @Column('datetime', { name: 'DTFIMCONTRATO', nullable: true })
  dtfimcontrato: Date | null;

  @Column('char', { name: 'FUNPRESP', length: 1, default: () => "'N'" })
  funpresp: string;

  @Column('smallint', { name: 'INDPROVIM', nullable: true })
  indprovim: number | null;

  @Column('smallint', { name: 'TPPROV', nullable: true })
  tpprov: number | null;

  @Column('datetime', { name: 'DTNOMEACAO', nullable: true })
  dtnomeacao: Date | null;

  @Column('smallint', { name: 'TPPLANRP', nullable: true })
  tpplanrp: number | null;

  @Column('smallint', { name: 'MTVALTER', nullable: true })
  mtvalter: number | null;

  @OneToMany(() => TfpafgEntity, (tfpafgEntity) => tfpafgEntity.tfppub)
  tfpafgs: TfpafgEntity[];

  @OneToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfppub)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpgraEntity, (tfpgraEntity) => tfpgraEntity.tfppubs)
  @JoinColumn([{ name: 'CODGRAT', referencedColumnName: 'codgrat' }])
  codgrat: TfpgraEntity;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.tfppubs)
  @JoinColumn([{ name: 'CODDEP', referencedColumnName: 'coddep' }])
  coddep: TfpdepEntity;

  @ManyToOne(() => TfpdivEntity, (tfpdivEntity) => tfpdivEntity.tfppubs)
  @JoinColumn([{ name: 'CODDIV', referencedColumnName: 'coddiv' }])
  coddiv: TfpdivEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfppubs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TfpsitEntity, (tfpsitEntity) => tfpsitEntity.tfppubs)
  @JoinColumn([{ name: 'CODSITESTAT', referencedColumnName: 'codsitestat' }])
  codsitestat: TfpsitEntity;

  @ManyToOne(() => TfpnivEntity, (tfpnivEntity) => tfpnivEntity.tfppubs)
  @JoinColumn([{ name: 'CODNIVELREF', referencedColumnName: 'codnivelref' }])
  codnivelref: TfpnivEntity;

  @ManyToOne(() => TfporgEntity, (tfporgEntity) => tfporgEntity.tfppubs)
  @JoinColumn([{ name: 'CODORGAO', referencedColumnName: 'codorgao' }])
  codorgao: TfporgEntity;

  @ManyToOne(() => TfporgEntity, (tfporgEntity) => tfporgEntity.tfppubs2)
  @JoinColumn([{ name: 'CODORGORIGGRAT', referencedColumnName: 'codorgao' }])
  codorgoriggrat: TfporgEntity;

  @ManyToOne(() => TfppssEntity, (tfppssEntity) => tfppssEntity.tfppubs)
  @JoinColumn([{ name: 'NUPROCESSOJUD', referencedColumnName: 'nuprocesso' }])
  nuprocessojud: TfppssEntity;

  @OneToMany(() => TfpsubEntity, (tfpsubEntity) => tfpsubEntity.tfppub)
  tfpsubs: TfpsubEntity[];

  @OneToMany(() => TfpsubEntity, (tfpsubEntity) => tfpsubEntity.tfppub2)
  tfpsubs2: TfpsubEntity[];
}
