import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpbapcEntity } from './tFPBAPC.entity';
import { TfpbrcEntity } from './tFPBRC.entity';
import { TfpbrcdecEntity } from './tFPBRCDEC.entity';
import { TfpdopcEntity } from './tFPDOPC.entity';
import { TfpiepcEntity } from './tFPIEPC.entity';
import { TfpieccEntity } from './tFPIECC.entity';
import { TfpippcEntity } from './tFPIPPC.entity';
import { TfpitscEntity } from './tFPITSC.entity';

@Index(
  'PK_TFPILCC',
  ['codicsc', 'dtref', 'codemp', 'codfilial', 'codlotacao'],
  { unique: true },
)
@Entity('TFPILCC', { schema: 'SANKHYA' })
export class TfpilccEntity {
  @Column('smallint', { primary: true, name: 'CODICSC' })
  codicsc: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODFILIAL' })
  codfilial: number;

  @Column('varchar', { primary: true, name: 'CODLOTACAO', length: 30 })
  codlotacao: string;

  @Column('smallint', { name: 'FPAS', nullable: true })
  fpas: number | null;

  @Column('varchar', { name: 'CODTERCS', nullable: true, length: 5 })
  codtercs: string | null;

  @Column('varchar', { name: 'CODTERCSSUSP', nullable: true, length: 5 })
  codtercssusp: string | null;

  @OneToMany(() => TfpbapcEntity, (tfpbapcEntity) => tfpbapcEntity.tfpilcc)
  tfpbapcs: TfpbapcEntity[];

  @OneToMany(() => TfpbrcEntity, (tfpbrcEntity) => tfpbrcEntity.tfpilcc)
  tfpbrcs: TfpbrcEntity[];

  @OneToMany(
    () => TfpbrcdecEntity,
    (tfpbrcdecEntity) => tfpbrcdecEntity.tfpilcc,
  )
  tfpbrcdecs: TfpbrcdecEntity[];

  @OneToMany(() => TfpdopcEntity, (tfpdopcEntity) => tfpdopcEntity.tfpilcc)
  tfpdopcs: TfpdopcEntity[];

  @OneToMany(() => TfpiepcEntity, (tfpiepcEntity) => tfpiepcEntity.tfpilcc)
  tfpiepcs: TfpiepcEntity[];

  @ManyToOne(() => TfpieccEntity, (tfpieccEntity) => tfpieccEntity.tfpilccs)
  @JoinColumn([
    { name: 'CODICSC', referencedColumnName: 'codicsc' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFILIAL', referencedColumnName: 'codfilial' },
  ])
  tfpiecc: TfpieccEntity;

  @OneToMany(() => TfpippcEntity, (tfpippcEntity) => tfpippcEntity.tfpilcc)
  tfpippcs: TfpippcEntity[];

  @OneToMany(() => TfpitscEntity, (tfpitscEntity) => tfpitscEntity.tfpilcc)
  tfpitscs: TfpitscEntity[];
}
