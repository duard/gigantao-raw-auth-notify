import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimadmEntity } from './tIMADM.entity';
import { TimcfiEntity } from './tIMCFI.entity';
import { TimchvEntity } from './tIMCHV.entity';
import { TimclaEntity } from './tIMCLA.entity';
import { TimimbEntity } from './tIMIMB.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TimfacEntity } from './tIMFAC.entity';
import { TimlocEntity } from './tIMLOC.entity';
import { TimlotEntity } from './tIMLOT.entity';
import { TimltvEntity } from './tIMLTV.entity';
import { TimppvEntity } from './tIMPPV.entity';
import { TimrclEntity } from './tIMRCL.entity';
import { TimsacEntity } from './tIMSAC.entity';
import { TimvdoEntity } from './tIMVDO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TIMCOR', ['corcodigo'], { unique: true })
@Entity('TIMCOR', { schema: 'SANKHYA' })
export class TimcorEntity {
  @Column('int', { primary: true, name: 'CORCODIGO' })
  corcodigo: number;

  @Column('varchar', { name: 'CORNOME', nullable: true, length: 50 })
  cornome: string | null;

  @Column('varchar', { name: 'CORAPELIDO', nullable: true, length: 20 })
  corapelido: string | null;

  @Column('varchar', { name: 'COREGERENTE', length: 1, default: () => "'N'" })
  coregerente: string;

  @Column('varchar', { name: 'CORESTAGIO', nullable: true, length: 1 })
  corestagio: string | null;

  @Column('datetime', { name: 'CORDATAADMISSAO', nullable: true })
  cordataadmissao: Date | null;

  @Column('datetime', { name: 'CORDATADESLIGAMENTO', nullable: true })
  cordatadesligamento: Date | null;

  @Column('int', { name: 'CORREGIAO', nullable: true })
  corregiao: number | null;

  @Column('int', { name: 'CORPASTA', nullable: true })
  corpasta: number | null;

  @Column('int', { name: 'CORPROCESSO', nullable: true })
  corprocesso: number | null;

  @Column('varchar', {
    name: 'CORLOCACAO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  corlocacao: string | null;

  @Column('varchar', {
    name: 'CORVENDA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  corvenda: string | null;

  @Column('varchar', {
    name: 'CORCAPTADOR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  corcaptador: string | null;

  @Column('varchar', {
    name: 'CORCORRETOR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  corcorretor: string | null;

  @Column('varchar', {
    name: 'CORSUPERVISOR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  corsupervisor: string | null;

  @Column('varchar', {
    name: 'COREXTERNO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  corexterno: string | null;

  @Column('varchar', {
    name: 'CORADMINISTRATIVO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  coradministrativo: string | null;

  @Column('varchar', {
    name: 'CORESTAGIARIO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  corestagiario: string | null;

  @Column('int', { name: 'CORUSUARIO', nullable: true })
  corusuario: number | null;

  @Column('varchar', {
    name: 'CORECOLABORADOR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  corecolaborador: string | null;

  @Column('varchar', { name: 'CORPERIODO', length: 1, default: () => "'N'" })
  corperiodo: string;

  @Column('datetime', { name: 'CORFIMCONTRATO', nullable: true })
  corfimcontrato: Date | null;

  @Column('datetime', { name: 'CORDTINICIOCONT', nullable: true })
  cordtiniciocont: Date | null;

  @Column('int', { name: 'CORPRODUTO', nullable: true })
  corproduto: number | null;

  @Column('int', { name: 'CORUSUARIOALT', nullable: true })
  corusuarioalt: number | null;

  @Column('datetime', {
    name: 'CORDTINCLUSAO',
    default: () => 'CONVERT([datetime],getdate(),0)',
  })
  cordtinclusao: Date;

  @Column('int', { name: 'COREPAUNIDGER', nullable: true })
  corepaunidger: number | null;

  @Column('varchar', { name: 'COREPAINDICVENDA', nullable: true, length: 50 })
  corepaindicvenda: string | null;

  @Column('int', { name: 'CORCENTROCUSTO', nullable: true })
  corcentrocusto: number | null;

  @Column('varchar', {
    name: 'CORNOMECARTAOVISITA',
    nullable: true,
    length: 100,
  })
  cornomecartaovisita: string | null;

  @Column('varchar', {
    name: 'COREMAILCARTAOVISITA',
    nullable: true,
    length: 100,
  })
  coremailcartaovisita: string | null;

  @Column('datetime', { name: 'COREXPIRACRECI', nullable: true })
  corexpiracreci: Date | null;

  @Column('int', { name: 'CORCRECI', nullable: true })
  corcreci: number | null;

  @Column('varchar', { name: 'CORINDICADOR', nullable: true, length: 40 })
  corindicador: string | null;

  @Column('varchar', {
    name: 'COREPAVLRMETAGERENTE',
    nullable: true,
    length: 40,
  })
  corepavlrmetagerente: string | null;

  @Column('varchar', { name: 'COREPAVLRMETAIND', nullable: true, length: 40 })
  corepavlrmetaind: string | null;

  @Column('char', { name: 'CORLEGADO', nullable: true, length: 1 })
  corlegado: string | null;

  @OneToMany(() => TimadmEntity, (timadmEntity) => timadmEntity.admcaptador)
  timadms: TimadmEntity[];

  @OneToMany(() => TimcfiEntity, (timcfiEntity) => timcfiEntity.clagerentecor)
  timcfis: TimcfiEntity[];

  @OneToMany(() => TimchvEntity, (timchvEntity) => timchvEntity.corcodigo)
  timchvs: TimchvEntity[];

  @OneToMany(() => TimclaEntity, (timclaEntity) => timclaEntity.clacorretor)
  timclas: TimclaEntity[];

  @OneToMany(() => TimclaEntity, (timclaEntity) => timclaEntity.clagerentecor)
  timclas2: TimclaEntity[];

  @OneToMany(() => TimclaEntity, (timclaEntity) => timclaEntity.clagergercor)
  timclas3: TimclaEntity[];

  @ManyToOne(() => TimimbEntity, (timimbEntity) => timimbEntity.timcors)
  @JoinColumn([{ name: 'CORIMOBILIARIA', referencedColumnName: 'imbcodigo' }])
  corimobiliaria: TimimbEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timcors)
  @JoinColumn([{ name: 'CORPARCEIRO', referencedColumnName: 'codparc' }])
  corparceiro: TgfparEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timcors)
  @JoinColumn([{ name: 'CORGERENTE', referencedColumnName: 'corcodigo' }])
  corgerente: TimcorEntity;

  @OneToMany(() => TimcorEntity, (timcorEntity) => timcorEntity.corgerente)
  timcors: TimcorEntity[];

  @OneToMany(() => TimfacEntity, (timfacEntity) => timfacEntity.faccorretor)
  timfacs: TimfacEntity[];

  @OneToMany(() => TimimbEntity, (timimbEntity) => timimbEntity.imbgerente)
  timimbs: TimimbEntity[];

  @OneToMany(() => TimlocEntity, (timlocEntity) => timlocEntity.loccorretor)
  timlocs: TimlocEntity[];

  @OneToMany(() => TimlocEntity, (timlocEntity) => timlocEntity.locatendente)
  timlocs2: TimlocEntity[];

  @OneToMany(() => TimlotEntity, (timlotEntity) => timlotEntity.lotgerente)
  timlots: TimlotEntity[];

  @OneToMany(() => TimltvEntity, (timltvEntity) => timltvEntity.ltvcorretor)
  timltvs: TimltvEntity[];

  @OneToMany(
    () => TimltvEntity,
    (timltvEntity) => timltvEntity.ltvsupervisorcor,
  )
  timltvs2: TimltvEntity[];

  @OneToMany(() => TimltvEntity, (timltvEntity) => timltvEntity.ltvgerentecor)
  timltvs3: TimltvEntity[];

  @OneToMany(() => TimppvEntity, (timppvEntity) => timppvEntity.ppvcorretor)
  timppvs: TimppvEntity[];

  @OneToMany(
    () => TimppvEntity,
    (timppvEntity) => timppvEntity.ppvcorsupervisor,
  )
  timppvs2: TimppvEntity[];

  @OneToMany(() => TimppvEntity, (timppvEntity) => timppvEntity.ppvcorgerente)
  timppvs3: TimppvEntity[];

  @OneToMany(() => TimrclEntity, (timrclEntity) => timrclEntity.rclcorretor)
  timrcls: TimrclEntity[];

  @OneToMany(() => TimsacEntity, (timsacEntity) => timsacEntity.saccorretor)
  timsacs: TimsacEntity[];

  @OneToMany(() => TimvdoEntity, (timvdoEntity) => timvdoEntity.vdocorretor)
  timvdos: TimvdoEntity[];

  @OneToMany(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.corcodigo)
  tsiusus: TsiusuEntity[];
}
