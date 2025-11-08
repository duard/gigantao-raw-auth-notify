import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimvcoEntity } from './tIMVCO.entity';
import { TimedgEntity } from './tIMEDG.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TimcorEntity } from './tIMCOR.entity';
import { TimeprEntity } from './tIMEPR.entity';
import { TimtpiEntity } from './tIMTPI.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TimiprEntity } from './tIMIPR.entity';
import { TimpprEntity } from './tIMPPR.entity';
import { TimsacEntity } from './tIMSAC.entity';
import { TimvdoEntity } from './tIMVDO.entity';

@Index('PK_TIMFAC', ['faccodigo'], { unique: true })
@Entity('TIMFAC', { schema: 'SANKHYA' })
export class TimfacEntity {
  @Column('int', { primary: true, name: 'FACCODIGO' })
  faccodigo: number;

  @Column('char', { name: 'FACESTAGIO', length: 1, default: () => "'0'" })
  facestagio: string;

  @Column('varchar', { name: 'FACOBSERVACAO', nullable: true, length: 120 })
  facobservacao: string | null;

  @Column('char', { name: 'FACBUSCAPOR', length: 2 })
  facbuscapor: string;

  @Column('datetime', { name: 'FACLANCAMENTO', default: () => 'getdate()' })
  faclancamento: Date;

  @Column('smallint', { name: 'FACQUARTOS', nullable: true })
  facquartos: number | null;

  @Column('char', { name: 'FACORIGEM', nullable: true, length: 1 })
  facorigem: string | null;

  @Column('float', { name: 'FACVALORPEDIDO', nullable: true, precision: 53 })
  facvalorpedido: number | null;

  @Column('datetime', { name: 'FACRETORNAR', nullable: true })
  facretornar: Date | null;

  @Column('int', { name: 'FACPROSPECT', nullable: true })
  facprospect: number | null;

  @Column('char', { name: 'FACCAPTACAO', nullable: true, length: 1 })
  faccaptacao: string | null;

  @Column('datetime', { name: 'FACDHALTER', nullable: true })
  facdhalter: Date | null;

  @Column('varchar', { name: 'FACSITUACAOCHAVE', nullable: true, length: 1 })
  facsituacaochave: string | null;

  @Column('datetime', { name: 'FACDHDEVCHAVE', nullable: true })
  facdhdevchave: Date | null;

  @Column('datetime', { name: 'FACDHENTCHAVE', nullable: true })
  facdhentchave: Date | null;

  @Column('varchar', { name: 'FACDOCCHAVE', nullable: true, length: 40 })
  facdocchave: string | null;

  @Column('char', { name: 'FACLEGADO', nullable: true, length: 1 })
  faclegado: string | null;

  @Column('int', { name: 'FACCODPARC', nullable: true })
  faccodparc: number | null;

  @Column('varchar', { name: 'FACTABELAORIG', nullable: true, length: 40 })
  factabelaorig: string | null;

  @ManyToOne(() => TimvcoEntity, (timvcoEntity) => timvcoEntity.timfacs)
  @JoinColumn([{ name: 'FACVEICULO', referencedColumnName: 'vcocodigo' }])
  facveiculo: TimvcoEntity;

  @ManyToOne(() => TimedgEntity, (timedgEntity) => timedgEntity.timfacs)
  @JoinColumn([{ name: 'FACEDIFICIO', referencedColumnName: 'edgcodigo' }])
  facedificio: TimedgEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.timfacs)
  @JoinColumn([{ name: 'FACBAIRROIMOVEL', referencedColumnName: 'codbai' }])
  facbairroimovel: TsibaiEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timfacs)
  @JoinColumn([{ name: 'FACCORRETOR', referencedColumnName: 'corcodigo' }])
  faccorretor: TimcorEntity;

  @ManyToOne(() => TimeprEntity, (timeprEntity) => timeprEntity.timfacs)
  @JoinColumn([
    { name: 'FACEMPREENDIMENTO', referencedColumnName: 'eprcodigo' },
  ])
  facempreendimento: TimeprEntity;

  @ManyToOne(() => TimtpiEntity, (timtpiEntity) => timtpiEntity.timfacs)
  @JoinColumn([{ name: 'FACTIPOIMOVEL', referencedColumnName: 'tpicodigo' }])
  factipoimovel: TimtpiEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timfacs)
  @JoinColumn([{ name: 'FACUSUARIO', referencedColumnName: 'codusu' }])
  facusuario: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timfacs2)
  @JoinColumn([{ name: 'FACUSUALTER', referencedColumnName: 'codusu' }])
  facusualter: TsiusuEntity;

  @OneToMany(() => TimiprEntity, (timiprEntity) => timiprEntity.iprfac2)
  timiprs: TimiprEntity[];

  @OneToMany(() => TimpprEntity, (timpprEntity) => timpprEntity.pprfacini)
  timpprs: TimpprEntity[];

  @OneToMany(() => TimsacEntity, (timsacEntity) => timsacEntity.sacfac)
  timsacs: TimsacEntity[];

  @OneToMany(() => TimvdoEntity, (timvdoEntity) => timvdoEntity.vdofichaatend)
  timvdos: TimvdoEntity[];
}
