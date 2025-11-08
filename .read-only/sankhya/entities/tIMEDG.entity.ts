import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsicidEntity } from './tSICID.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiendEntity } from './tSIEND.entity';
import { TimeprEntity } from './tIMEPR.entity';
import { TimfacEntity } from './tIMFAC.entity';
import { TimieoEntity } from './tIMIEO.entity';
import { TimimvEntity } from './tIMIMV.entity';
import { TimiptEntity } from './tIMIPT.entity';

@Index('PK_TIMEDG', ['edgcodigo'], { unique: true })
@Entity('TIMEDG', { schema: 'SANKHYA' })
export class TimedgEntity {
  @Column('int', { primary: true, name: 'EDGCODIGO' })
  edgcodigo: number;

  @Column('varchar', { name: 'EDGEDIFICIO', length: 50 })
  edgedificio: string;

  @Column('int', { name: 'EDGEMPREENDIMENTO', nullable: true })
  edgempreendimento: number | null;

  @Column('varchar', { name: 'EDGENDERECO', nullable: true, length: 50 })
  edgendereco: string | null;

  @Column('int', { name: 'EDGCONSTRUTORA', nullable: true })
  edgconstrutora: number | null;

  @Column('smallint', { name: 'EDGTORRES', nullable: true })
  edgtorres: number | null;

  @Column('smallint', { name: 'EDGPAVIMENTOS', nullable: true })
  edgpavimentos: number | null;

  @Column('smallint', { name: 'EDGANDARES', nullable: true })
  edgandares: number | null;

  @Column('smallint', { name: 'EDGAPTOPORANDAR', nullable: true })
  edgaptoporandar: number | null;

  @Column('smallint', { name: 'EDGSUBSOLO', nullable: true })
  edgsubsolo: number | null;

  @Column('smallint', { name: 'EDGELEVADORES', nullable: true })
  edgelevadores: number | null;

  @Column('smallint', { name: 'EDGANOCONSTRUCAO', nullable: true })
  edganoconstrucao: number | null;

  @Column('varchar', { name: 'EDGSINDICO', nullable: true, length: 50 })
  edgsindico: string | null;

  @Column('varchar', { name: 'EDGTELEFONES', nullable: true, length: 50 })
  edgtelefones: string | null;

  @Column('varchar', { name: 'EDGEMAIL', nullable: true, length: 50 })
  edgemail: string | null;

  @Column('varchar', { name: 'EDGADMNOME', nullable: true, length: 50 })
  edgadmnome: string | null;

  @Column('varchar', { name: 'EDGADMFONE', nullable: true, length: 50 })
  edgadmfone: string | null;

  @Column('varchar', { name: 'EDGADMEMAIL', nullable: true, length: 50 })
  edgadmemail: string | null;

  @Column('varchar', { name: 'EDGCTBNOME', nullable: true, length: 50 })
  edgctbnome: string | null;

  @Column('varchar', { name: 'EDGCTBFONE', nullable: true, length: 50 })
  edgctbfone: string | null;

  @Column('varchar', { name: 'EDGCTBEMAIL', nullable: true, length: 50 })
  edgctbemail: string | null;

  @Column('float', { name: 'EDGCONDVALOR', nullable: true, precision: 53 })
  edgcondvalor: number | null;

  @Column('varchar', { name: 'EDGCONDREFERENCIA', nullable: true, length: 20 })
  edgcondreferencia: string | null;

  @Column('smallint', { name: 'EDGCONDTIPO', nullable: true })
  edgcondtipo: number | null;

  @Column('float', { name: 'EDGTXMUDVALOR', nullable: true, precision: 53 })
  edgtxmudvalor: number | null;

  @Column('smallint', { name: 'EDGTXMUDTIPOCOB', nullable: true })
  edgtxmudtipocob: number | null;

  @Column('char', { name: 'EDGTXMUDCOBRAR', length: 1, default: () => "'N'" })
  edgtxmudcobrar: string;

  @Column('smallint', { name: 'EDGRATEARPARA', nullable: true })
  edgratearpara: number | null;

  @Column('char', { name: 'EDGSEGINCTEM', length: 1, default: () => "'N'" })
  edgseginctem: string;

  @Column('datetime', { name: 'EDGSEGINCINICIO', nullable: true })
  edgsegincinicio: Date | null;

  @Column('datetime', { name: 'EDGSEGINCFIM', nullable: true })
  edgsegincfim: Date | null;

  @Column('float', { name: 'EDGSEGINCTPCOB', nullable: true, precision: 53 })
  edgseginctpcob: number | null;

  @Column('datetime', { name: 'EDGULTIMAASSEMBLEIA', nullable: true })
  edgultimaassembleia: Date | null;

  @Column('char', { name: 'EDGFUNDORESERVA', length: 1, default: () => "'N'" })
  edgfundoreserva: string;

  @Column('varchar', { name: 'EDGGASNOME', nullable: true, length: 50 })
  edggasnome: string | null;

  @Column('varchar', { name: 'EDGGASFONE', nullable: true, length: 50 })
  edggasfone: string | null;

  @Column('varchar', { name: 'EDGGASEMAIL', nullable: true, length: 50 })
  edggasemail: string | null;

  @Column('char', { name: 'EDGPODEANIMAIS', length: 1, default: () => "'N'" })
  edgpodeanimais: string;

  @Column('float', { name: 'EDGVALORCONTA', nullable: true, precision: 53 })
  edgvalorconta: number | null;

  @Column('varchar', { name: 'EDGSEGURADORA', nullable: true, length: 50 })
  edgseguradora: string | null;

  @Column('varchar', { name: 'EDGCEP', nullable: true, length: 8 })
  edgcep: string | null;

  @Column('varchar', { name: 'EDGCOMPL', nullable: true, length: 40 })
  edgcompl: string | null;

  @Column('int', { name: 'EDGNUMERO', nullable: true })
  edgnumero: number | null;

  @Column('char', { name: 'EDGLEGADO', nullable: true, length: 1 })
  edglegado: string | null;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.timedgs)
  @JoinColumn([{ name: 'EDGCIDADE', referencedColumnName: 'codcid' }])
  edgcidade: TsicidEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.timedgs)
  @JoinColumn([{ name: 'EDGBAIRRO', referencedColumnName: 'codbai' }])
  edgbairro: TsibaiEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timedgs)
  @JoinColumn([{ name: 'EDGCODPARCEIRO', referencedColumnName: 'codparc' }])
  edgcodparceiro: TgfparEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.timedgs)
  @JoinColumn([{ name: 'EDGCODEND', referencedColumnName: 'codend' }])
  edgcodend: TsiendEntity;

  @OneToMany(() => TimeprEntity, (timeprEntity) => timeprEntity.epredificio)
  timeprs: TimeprEntity[];

  @OneToMany(() => TimfacEntity, (timfacEntity) => timfacEntity.facedificio)
  timfacs: TimfacEntity[];

  @OneToMany(() => TimieoEntity, (timieoEntity) => timieoEntity.ieoedificio2)
  timieos: TimieoEntity[];

  @OneToMany(() => TimimvEntity, (timimvEntity) => timimvEntity.imvedificio)
  timimvs: TimimvEntity[];

  @OneToMany(() => TimiptEntity, (timiptEntity) => timiptEntity.iptedificio)
  timipts: TimiptEntity[];
}
