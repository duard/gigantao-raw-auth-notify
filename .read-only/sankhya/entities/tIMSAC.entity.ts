import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimctrEntity } from './tIMCTR.entity';
import { TimcorEntity } from './tIMCOR.entity';
import { TimltvEntity } from './tIMLTV.entity';
import { TimthiEntity } from './tIMTHI.entity';
import { TimimvEntity } from './tIMIMV.entity';
import { TimlteEntity } from './tIMLTE.entity';
import { TimeprEntity } from './tIMEPR.entity';
import { TimlocEntity } from './tIMLOC.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TimlotEntity } from './tIMLOT.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TimfacEntity } from './tIMFAC.entity';
import { TimmcaEntity } from './tIMMCA.entity';
import { TimscaEntity } from './tIMSCA.entity';

@Index('IX_SACHISTORICO', ['sactipohist'], {})
@Index('IX_SACORIGCHAMADA', ['sacorigchamada'], {})
@Index('IX_SACTIPO', ['sactipo'], {})
@Index('PK_TIMSAC', ['saccodigo'], { unique: true })
@Entity('TIMSAC', { schema: 'SANKHYA' })
export class TimsacEntity {
  @Column('int', { primary: true, name: 'SACCODIGO' })
  saccodigo: number;

  @Column('varchar', { name: 'SACORIGCHAMADA', length: 2 })
  sacorigchamada: string;

  @Column('varchar', { name: 'SACTIPO', length: 2 })
  sactipo: string;

  @Column('int', { name: 'SACVENDAIMV', nullable: true })
  sacvendaimv: number | null;

  @Column('int', { name: 'SACPROSPECCAO', nullable: true })
  sacprospeccao: number | null;

  @Column('datetime', { name: 'SACDATA', nullable: true })
  sacdata: Date | null;

  @Column('int', { name: 'SACTIPOHIST' })
  sactipohist: number;

  @Column('text', { name: 'SACOCORRENCIA', nullable: true })
  sacocorrencia: string | null;

  @Column('datetime', { name: 'SACDATARES', nullable: true })
  sacdatares: Date | null;

  @Column('text', { name: 'SACRESULTADO', nullable: true })
  sacresultado: string | null;

  @Column('datetime', { name: 'SACPROMETIDO', nullable: true })
  sacprometido: Date | null;

  @Column('char', { name: 'SACINTERNET', length: 1, default: () => "'N'" })
  sacinternet: string;

  @Column('datetime', { name: 'SACDTCONCLUSAO', nullable: true })
  sacdtconclusao: Date | null;

  @Column('varchar', { name: 'SACTIPOCOMUNICACAO', nullable: true, length: 2 })
  sactipocomunicacao: string | null;

  @Column('float', { name: 'SACVALORSERVICO', nullable: true, precision: 53 })
  sacvalorservico: number | null;

  @Column('text', { name: 'SACCONTESTACAO', nullable: true })
  saccontestacao: string | null;

  @Column('varchar', { name: 'SACESTAGIOOS', length: 2, default: () => "'SO'" })
  sacestagioos: string;

  @Column('varchar', { name: 'SACQUEMPAGA', length: 2, default: () => "'L'" })
  sacquempaga: string;

  @Column('varchar', { name: 'SACTIPOOS', nullable: true, length: 2 })
  sactipoos: string | null;

  @Column('varchar', { name: 'SACSOLICITANTEOS', nullable: true, length: 1 })
  sacsolicitanteos: string | null;

  @Column('int', { name: 'SACTESTEOS', nullable: true })
  sactesteos: number | null;

  @Column('varchar', { name: 'SACEHOS', length: 1, default: () => "'N'" })
  sacehos: string;

  @Column('varchar', {
    name: 'SACFINANCEIROBAIXADO',
    length: 1,
    default: () => "'N'",
  })
  sacfinanceirobaixado: string;

  @Column('varchar', { name: 'SACCOMOCONCLUIU', nullable: true, length: 1 })
  saccomoconcluiu: string | null;

  @Column('varchar', { name: 'SACSEMSUCESSO', nullable: true, length: 2 })
  sacsemsucesso: string | null;

  @Column('varchar', { name: 'SACCOMSUCESSO', nullable: true, length: 1 })
  saccomsucesso: string | null;

  @Column('varchar', { name: 'SACCOMRECLAMACAO', nullable: true, length: 2 })
  saccomreclamacao: string | null;

  @Column('char', { name: 'SACESTAGIOFAC', nullable: true, length: 1 })
  sacestagiofac: string | null;

  @Column('char', { name: 'SACLEGADO', nullable: true, length: 1 })
  saclegado: string | null;

  @Column('datetime', { name: 'SACDTINIOS', nullable: true })
  sacdtinios: Date | null;

  @Column('datetime', { name: 'SACDTFINOS', nullable: true })
  sacdtfinos: Date | null;

  @Column('datetime', { name: 'SACDHCANCELOS', nullable: true })
  sacdhcancelos: Date | null;

  @OneToMany(
    () => TimctrEntity,
    (timctrEntity) => timctrEntity.ctrsacnegociacao,
  )
  timctrs: TimctrEntity[];

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timsacs)
  @JoinColumn([{ name: 'SACCORRETOR', referencedColumnName: 'corcodigo' }])
  saccorretor: TimcorEntity;

  @ManyToOne(() => TimltvEntity, (timltvEntity) => timltvEntity.timsacs)
  @JoinColumn([{ name: 'SACVENDALOTE', referencedColumnName: 'ltvcodigo' }])
  sacvendalote: TimltvEntity;

  @ManyToOne(() => TimthiEntity, (timthiEntity) => timthiEntity.timsacs)
  @JoinColumn([
    { name: 'SACORIGEM', referencedColumnName: 'thiorigem' },
    { name: 'SACTIPOHIST', referencedColumnName: 'thicodigo' },
  ])
  timthi: TimthiEntity;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timsacs)
  @JoinColumn([{ name: 'SACIMOVEL', referencedColumnName: 'imvcodigo' }])
  sacimovel: TimimvEntity;

  @ManyToOne(() => TimlteEntity, (timlteEntity) => timlteEntity.timsacs)
  @JoinColumn([{ name: 'SACLOTE', referencedColumnName: 'ltecodigo' }])
  saclote: TimlteEntity;

  @ManyToOne(() => TimeprEntity, (timeprEntity) => timeprEntity.timsacs)
  @JoinColumn([
    { name: 'SACEMPREENDIMENTO', referencedColumnName: 'eprcodigo' },
  ])
  sacempreendimento: TimeprEntity;

  @ManyToOne(() => TimlocEntity, (timlocEntity) => timlocEntity.timsacs)
  @JoinColumn([{ name: 'SACLOCACAO', referencedColumnName: 'loccodigo' }])
  saclocacao: TimlocEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timsacs)
  @JoinColumn([{ name: 'SACUSUARIO', referencedColumnName: 'codusu' }])
  sacusuario: TsiusuEntity;

  @ManyToOne(() => TimlotEntity, (timlotEntity) => timlotEntity.timsacs)
  @JoinColumn([{ name: 'SACLOTEAMENTO', referencedColumnName: 'lotcodigo' }])
  sacloteamento: TimlotEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timsacs)
  @JoinColumn([{ name: 'SACPARCEIRO', referencedColumnName: 'codparc' }])
  sacparceiro: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timsacs2)
  @JoinColumn([{ name: 'SACCODPARCPREST', referencedColumnName: 'codparc' }])
  saccodparcprest: TgfparEntity;

  @ManyToOne(() => TimfacEntity, (timfacEntity) => timfacEntity.timsacs)
  @JoinColumn([{ name: 'SACFAC', referencedColumnName: 'faccodigo' }])
  sacfac: TimfacEntity;

  @ManyToOne(() => TimmcaEntity, (timmcaEntity) => timmcaEntity.timsacs)
  @JoinColumn([{ name: 'SACMTVCANCELADO', referencedColumnName: 'mcacodigo' }])
  sacmtvcancelado: TimmcaEntity;

  @OneToMany(() => TimscaEntity, (timscaEntity) => timscaEntity.scasac2)
  timscas: TimscaEntity[];
}
