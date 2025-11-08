import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcafreEntity } from './tCAFRE.entity';
import { TcaturEntity } from './tCATUR.entity';
import { TcaconEntity } from './tCACON.entity';
import { TcadiaEntity } from './tCADIA.entity';
import { TcadseEntity } from './tCADSE.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TcaperEntity } from './tCAPER.entity';
import { TcanotEntity } from './tCANOT.entity';

@Index('PK_TCAMAP', ['numapa'], { unique: true })
@Entity('TCAMAP', { schema: 'SANKHYA' })
export class TcamapEntity {
  @Column('int', { primary: true, name: 'NUMAPA' })
  numapa: number;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('decimal', {
    name: 'TOTFALTA',
    nullable: true,
    precision: 15,
    scale: 4,
  })
  totfalta: number | null;

  @Column('decimal', {
    name: 'TOTNOTA',
    nullable: true,
    precision: 15,
    scale: 4,
  })
  totnota: number | null;

  @Column('decimal', {
    name: 'FALTAJUS',
    nullable: true,
    precision: 15,
    scale: 4,
  })
  faltajus: number | null;

  @OneToMany(() => TcafreEntity, (tcafreEntity) => tcafreEntity.numapa2)
  tcafres: TcafreEntity[];

  @ManyToOne(() => TcaturEntity, (tcaturEntity) => tcaturEntity.tcamaps)
  @JoinColumn([{ name: 'CODTURMA', referencedColumnName: 'codturma' }])
  codturma: TcaturEntity;

  @ManyToOne(() => TcaconEntity, (tcaconEntity) => tcaconEntity.tcamaps)
  @JoinColumn([
    { name: 'CONCEITO', referencedColumnName: 'codcon' },
    { name: 'CODANO', referencedColumnName: 'codano' },
  ])
  tcacon: TcaconEntity;

  @ManyToOne(() => TcadiaEntity, (tcadiaEntity) => tcadiaEntity.tcamaps)
  @JoinColumn([{ name: 'NUMDIARIO', referencedColumnName: 'numdiario' }])
  numdiario: TcadiaEntity;

  @ManyToOne(() => TcadseEntity, (tcadseEntity) => tcadseEntity.tcamaps)
  @JoinColumn([{ name: 'CODDSE', referencedColumnName: 'coddse' }])
  coddse: TcadseEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcamaps)
  @JoinColumn([{ name: 'CODALU', referencedColumnName: 'codparc' }])
  codalu: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcamaps2)
  @JoinColumn([{ name: 'CODPROF', referencedColumnName: 'codparc' }])
  codprof: TgfparEntity;

  @ManyToOne(() => TcaperEntity, (tcaperEntity) => tcaperEntity.tcamaps)
  @JoinColumn([
    { name: 'NUPERIODO', referencedColumnName: 'nuperiodo' },
    { name: 'CODANO', referencedColumnName: 'codano' },
  ])
  tcaper: TcaperEntity;

  @OneToMany(() => TcanotEntity, (tcanotEntity) => tcanotEntity.numapa2)
  tcanots: TcanotEntity[];
}
