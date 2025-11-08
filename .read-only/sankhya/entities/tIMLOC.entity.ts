import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimaclEntity } from './tIMACL.entity';
import { TimchkEntity } from './tIMCHK.entity';
import { TimctrEntity } from './tIMCTR.entity';
import { TimfaiEntity } from './tIMFAI.entity';
import { TimfeiEntity } from './tIMFEI.entity';
import { TimfpcEntity } from './tIMFPC.entity';
import { TimlcfEntity } from './tIMLCF.entity';
import { TimlclEntity } from './tIMLCL.entity';
import { TimlcrEntity } from './tIMLCR.entity';
import { TimlgpEntity } from './tIMLGP.entity';
import { TimlgsEntity } from './tIMLGS.entity';
import { TimlicEntity } from './tIMLIC.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TimimvEntity } from './tIMIMV.entity';
import { TimadmEntity } from './tIMADM.entity';
import { TimimbEntity } from './tIMIMB.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TimcorEntity } from './tIMCOR.entity';
import { TsimoeEntity } from './tSIMOE.entity';
import { TimltcEntity } from './tIMLTC.entity';
import { TimmfdEntity } from './tIMMFD.entity';
import { TimrecEntity } from './tIMREC.entity';
import { TimrlcEntity } from './tIMRLC.entity';
import { TimsacEntity } from './tIMSAC.entity';
import { TimsgiEntity } from './tIMSGI.entity';
import { TimvdoEntity } from './tIMVDO.entity';

@Index('PK_TIMLOC', ['loccodigo'], { unique: true })
@Index('TIMLOC_I01', ['loccontratoadm'], {})
@Entity('TIMLOC', { schema: 'SANKHYA' })
export class TimlocEntity {
  @Column('int', { primary: true, name: 'LOCCODIGO' })
  loccodigo: number;

  @Column('smallint', { name: 'LOCPRAZODELOCACAO', nullable: true })
  locprazodelocacao: number | null;

  @Column('int', { name: 'LOCRENEGOCIACONTRATO', nullable: true })
  locrenegociacontrato: number | null;

  @Column('varchar', { name: 'LOCREAJUSTE', length: 2, default: () => "'AN'" })
  locreajuste: string;

  @Column('datetime', { name: 'LOCDATABASE', nullable: true })
  locdatabase: Date | null;

  @Column('char', { name: 'LOCDESTINACAO', length: 1, default: () => "'0'" })
  locdestinacao: string;

  @Column('varchar', { name: 'LOCESTAGIO', length: 2, default: () => "'EF'" })
  locestagio: string;

  @Column('float', { name: 'LOCPERCENTUALADM', nullable: true, precision: 53 })
  locpercentualadm: number | null;

  @Column('float', {
    name: 'LOCPERCENTUALCORRETOR',
    nullable: true,
    precision: 53,
  })
  locpercentualcorretor: number | null;

  @Column('float', { name: 'LOCVALORMERCADO', nullable: true, precision: 53 })
  locvalormercado: number | null;

  @Column('datetime', { name: 'LOCDATAENCERRAMENTO', nullable: true })
  locdataencerramento: Date | null;

  @Column('varchar', { name: 'LOCATIVIDADE', nullable: true, length: 120 })
  locatividade: string | null;

  @Column('int', { name: 'LOCCONTRATO', nullable: true })
  loccontrato: number | null;

  @Column('int', { name: 'LOCPASTA', nullable: true })
  locpasta: number | null;

  @Column('char', { name: 'LOCAVENCER', length: 1, default: () => "'N'" })
  locavencer: string;

  @Column('char', { name: 'LOCGARANTIDO', length: 1, default: () => "'N'" })
  locgarantido: string;

  @Column('char', { name: 'LOCSEMBOLETO', length: 1, default: () => "'N'" })
  locsemboleto: string;

  @Column('varchar', { name: 'LOCMOTIVOBLOQUEIO', nullable: true, length: 200 })
  locmotivobloqueio: string | null;

  @Column('datetime', { name: 'LOCULTIMOREAJUSTE', nullable: true })
  locultimoreajuste: Date | null;

  @Column('smallint', { name: 'LOCCONTASAP', nullable: true })
  loccontasap: number | null;

  @Column('datetime', { name: 'LOCULTIMAAPRES', nullable: true })
  locultimaapres: Date | null;

  @Column('int', { name: 'LOCRENEGOCIACAO', nullable: true })
  locrenegociacao: number | null;

  @Column('char', { name: 'LOCCPMF', length: 1, default: () => "'N'" })
  loccpmf: string;

  @Column('char', { name: 'LOCPRIMEIRO', length: 1, default: () => "'N'" })
  locprimeiro: string;

  @Column('int', { name: 'LOCCODASSAMIS', nullable: true })
  loccodassamis: number | null;

  @Column('smallint', { name: 'LOCDIAS' })
  locdias: number;

  @Column('char', { name: 'LOCTIPOIRRF', length: 1, default: () => "'0'" })
  loctipoirrf: string;

  @Column('char', { name: 'LOCTRANSFERENCIA', length: 1, default: () => "'N'" })
  loctransferencia: string;

  @Column('float', {
    name: 'LOCPAPERCENTUAL',
    precision: 53,
    default: () => '(0)',
  })
  locpapercentual: number;

  @Column('smallint', { name: 'LOCPAQTDPARC', nullable: true })
  locpaqtdparc: number | null;

  @Column('smallint', { name: 'LOCPAPRIPARC', nullable: true })
  locpapriparc: number | null;

  @Column('smallint', { name: 'LOCCONTRATOADM' })
  loccontratoadm: number;

  @Column('varchar', { name: 'LOCGARANTIA', length: 2 })
  locgarantia: string;

  @Column('text', { name: 'LOCGARJUSTIFICATIVA', nullable: true })
  locgarjustificativa: string | null;

  @Column('smallint', { name: 'LOCDIAVENCCC', nullable: true })
  locdiavenccc: number | null;

  @Column('smallint', { name: 'LOCDIAVENCCE', nullable: true })
  locdiavencce: number | null;

  @Column('smallint', { name: 'LOCDIAVENCFPP', nullable: true })
  locdiavencfpp: number | null;

  @Column('smallint', { name: 'LOCDIAVENCAP', nullable: true })
  locdiavencap: number | null;

  @Column('char', { name: 'LOCLEGADO', nullable: true, length: 1 })
  loclegado: string | null;

  @Column('char', { name: 'LOCENVIAJUR', nullable: true, length: 2 })
  locenviajur: string | null;

  @Column('datetime', { name: 'LOCDTINICPRIREAJUSTE', nullable: true })
  locdtinicprireajuste: Date | null;

  @Column('float', { name: 'LOCPERCFPP', precision: 53, default: () => '(0)' })
  locpercfpp: number;

  @Column('float', { name: 'LOCVLRFPP', precision: 53, default: () => '(0)' })
  locvlrfpp: number;

  @Column('char', { name: 'LOCTIPOFPP', length: 1, default: () => "'F'" })
  loctipofpp: string;

  @Column('float', { name: 'LOCVLRCDU', nullable: true, precision: 53 })
  locvlrcdu: number | null;

  @Column('smallint', { name: 'LOCQTDPARCCDU', nullable: true })
  locqtdparccdu: number | null;

  @Column('char', { name: 'LOCGEROUCDU', length: 1, default: () => "'N'" })
  locgeroucdu: string;

  @Column('datetime', { name: 'LOCDTVENCINICDU', nullable: true })
  locdtvencinicdu: Date | null;

  @Column('datetime', { name: 'LOCDTREAJUSTECDU', nullable: true })
  locdtreajustecdu: Date | null;

  @Column('float', {
    name: 'LOCCRDVITRINE',
    precision: 53,
    default: () => '(1)',
  })
  loccrdvitrine: number;

  @Column('float', {
    name: 'LOCCRDATIVIDADE',
    precision: 53,
    default: () => '(1)',
  })
  loccrdatividade: number;

  @Column('float', {
    name: 'LOCCRDFORMATO',
    precision: 53,
    default: () => '(1)',
  })
  loccrdformato: number;

  @Column('float', { name: 'LOCCRDLOCAL', precision: 53, default: () => '(1)' })
  loccrdlocal: number;

  @Column('float', { name: 'LOCCRDAREA', precision: 53, default: () => '(1)' })
  loccrdarea: number;

  @Column('smallint', { name: 'LOCPARCINIADM', default: () => '(1)' })
  locparciniadm: number;

  @Column('datetime', { name: 'LOCDHALTER', nullable: true })
  locdhalter: Date | null;

  @Column('datetime', { name: 'LOCDHINC', nullable: true })
  locdhinc: Date | null;

  @Column('varchar', {
    name: 'LOCTIPOTXADM',
    nullable: true,
    length: 2,
    default: () => "'PC'",
  })
  loctipotxadm: string | null;

  @Column('float', { name: 'LOCTXADMVLR', nullable: true, precision: 53 })
  loctxadmvlr: number | null;

  @Column('varchar', {
    name: 'LOCQTDEGARANTIDA',
    length: 2,
    default: () => "'S'",
  })
  locqtdegarantida: string;

  @Column('int', { name: 'LOCGARANTIDOPOR', nullable: true })
  locgarantidopor: number | null;

  @Column('int', {
    name: 'LOCMESESMULTA',
    nullable: true,
    default: () => '(0)',
  })
  locmesesmulta: number | null;

  @Column('int', {
    name: 'LOCMESESISENTA',
    nullable: true,
    default: () => '(0)',
  })
  locmesesisenta: number | null;

  @Column('float', {
    name: 'LOCDESCPONTUAL',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  locdescpontual: number | null;

  @Column('smallint', { name: 'LOCCARENCIA', nullable: true })
  loccarencia: number | null;

  @Column('int', { name: 'LOCCARCORMONE', default: () => "'30'" })
  loccarcormone: number;

  @OneToMany(() => TimaclEntity, (timaclEntity) => timaclEntity.aclcontrato)
  timacls: TimaclEntity[];

  @OneToMany(() => TimchkEntity, (timchkEntity) => timchkEntity.chkcontratoloc)
  timchks: TimchkEntity[];

  @OneToMany(() => TimctrEntity, (timctrEntity) => timctrEntity.ctrcontrato2)
  timctrs: TimctrEntity[];

  @OneToMany(() => TimfaiEntity, (timfaiEntity) => timfaiEntity.faicontratoloc2)
  timfais: TimfaiEntity[];

  @OneToMany(() => TimfeiEntity, (timfeiEntity) => timfeiEntity.feicontratoloc2)
  timfeis: TimfeiEntity[];

  @OneToMany(() => TimfpcEntity, (timfpcEntity) => timfpcEntity.fpccontratoloc2)
  timfpcs: TimfpcEntity[];

  @OneToMany(() => TimlcfEntity, (timlcfEntity) => timlcfEntity.lcflocacao2)
  timlcfs: TimlcfEntity[];

  @OneToMany(() => TimlclEntity, (timlclEntity) => timlclEntity.lcllocacao2)
  timlcls: TimlclEntity[];

  @OneToMany(() => TimlcrEntity, (timlcrEntity) => timlcrEntity.lcrcontrato2)
  timlcrs: TimlcrEntity[];

  @OneToMany(() => TimlgpEntity, (timlgpEntity) => timlgpEntity.lgpcontrato2)
  timlgps: TimlgpEntity[];

  @OneToMany(() => TimlgsEntity, (timlgsEntity) => timlgsEntity.lgscontrato2)
  timlgs: TimlgsEntity[];

  @OneToMany(() => TimlicEntity, (timlicEntity) => timlicEntity.liclocacao2)
  timlics: TimlicEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timlocs)
  @JoinColumn([{ name: 'LOCUSUARIO', referencedColumnName: 'codusu' }])
  locusuario: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timlocs2)
  @JoinColumn([{ name: 'LOCCODUSUINC', referencedColumnName: 'codusu' }])
  loccodusuinc: TsiusuEntity;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timlocs)
  @JoinColumn([{ name: 'LOCIMOVEL', referencedColumnName: 'imvcodigo' }])
  locimovel: TimimvEntity;

  @ManyToOne(() => TimchkEntity, (timchkEntity) => timchkEntity.timlocs)
  @JoinColumn([{ name: 'LOCNUCHECKLIST', referencedColumnName: 'chknucheck' }])
  locnuchecklist: TimchkEntity;

  @ManyToOne(() => TimadmEntity, (timadmEntity) => timadmEntity.timlocs)
  @JoinColumn([
    { name: 'LOCCONTRATOADM', referencedColumnName: 'admnucontrato' },
  ])
  loccontratoadm2: TimadmEntity;

  @ManyToOne(() => TimimbEntity, (timimbEntity) => timimbEntity.timlocs)
  @JoinColumn([{ name: 'LOCIMOBILIARIA', referencedColumnName: 'imbcodigo' }])
  locimobiliaria: TimimbEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.timlocs)
  @JoinColumn([
    { name: 'LOCCONTACORRENTE', referencedColumnName: 'codctabcoint' },
  ])
  loccontacorrente: TsictaEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timlocs)
  @JoinColumn([{ name: 'LOCCORRETOR', referencedColumnName: 'corcodigo' }])
  loccorretor: TimcorEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timlocs2)
  @JoinColumn([{ name: 'LOCATENDENTE', referencedColumnName: 'corcodigo' }])
  locatendente: TimcorEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.timlocs)
  @JoinColumn([{ name: 'LOCINDICETXADM', referencedColumnName: 'codmoeda' }])
  locindicetxadm: TsimoeEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.timlocs2)
  @JoinColumn([{ name: 'LOCINDEXADOR', referencedColumnName: 'codmoeda' }])
  locindexador: TsimoeEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.timlocs3)
  @JoinColumn([{ name: 'LOCCODMOEDACDU', referencedColumnName: 'codmoeda' }])
  loccodmoedacdu: TsimoeEntity;

  @OneToMany(() => TimltcEntity, (timltcEntity) => timltcEntity.ltccontrato2)
  timltcs: TimltcEntity[];

  @OneToMany(() => TimmfdEntity, (timmfdEntity) => timmfdEntity.mfdcontratoloc)
  timmfds: TimmfdEntity[];

  @OneToMany(() => TimrecEntity, (timrecEntity) => timrecEntity.reccontratoloc)
  timrecs: TimrecEntity[];

  @OneToMany(() => TimrlcEntity, (timrlcEntity) => timrlcEntity.rlccontrato2)
  timrlcs: TimrlcEntity[];

  @OneToMany(() => TimsacEntity, (timsacEntity) => timsacEntity.saclocacao)
  timsacs: TimsacEntity[];

  @OneToMany(() => TimsgiEntity, (timsgiEntity) => timsgiEntity.sgicontratoloc2)
  timsgis: TimsgiEntity[];

  @OneToMany(() => TimvdoEntity, (timvdoEntity) => timvdoEntity.vdocontratoloc)
  timvdos: TimvdoEntity[];
}
