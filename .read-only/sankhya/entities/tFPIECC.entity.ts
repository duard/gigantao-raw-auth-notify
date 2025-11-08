import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TfpbacEntity } from './tFPBAC.entity';
import { TfpbccEntity } from './tFPBCC.entity';
import { TfpicecEntity } from './tFPICEC.entity';
import { TfpicscEntity } from './tFPICSC.entity';
import { TfpilccEntity } from './tFPILCC.entity';
import { TfpsbpisEntity } from './tFPSBPIS.entity';

@Index('PK_TFPIECC', ['codicsc', 'dtref', 'codemp', 'codfilial'], {
  unique: true,
})
@Entity('TFPIECC', { schema: 'SANKHYA' })
export class TfpieccEntity {
  @Column('smallint', { primary: true, name: 'CODICSC' })
  codicsc: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODFILIAL' })
  codfilial: number;

  @Column('int', { name: 'CNAEPREP', nullable: true })
  cnaeprep: number | null;

  @Column('smallint', { name: 'ALIQRAT', nullable: true })
  aliqrat: number | null;

  @Column('float', { name: 'FAP', nullable: true, precision: 53 })
  fap: number | null;

  @Column('float', { name: 'ALIQRATAJUST', nullable: true, precision: 53 })
  aliqratajust: number | null;

  @Column('smallint', { name: 'INDSUBSTPATROBRA', nullable: true })
  indsubstpatrobra: number | null;

  @OneToMany(() => TfpbacEntity, (tfpbacEntity) => tfpbacEntity.tfpiecc)
  tfpbacs: TfpbacEntity[];

  @OneToMany(() => TfpbccEntity, (tfpbccEntity) => tfpbccEntity.tfpiecc)
  tfpbccs: TfpbccEntity[];

  @OneToMany(() => TfpicecEntity, (tfpicecEntity) => tfpicecEntity.tfpiecc)
  tfpicecs: TfpicecEntity[];

  @ManyToOne(() => TfpicscEntity, (tfpicscEntity) => tfpicscEntity.tfpieccs)
  @JoinColumn([
    { name: 'CODICSC', referencedColumnName: 'codicsc' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
  ])
  tfpicsc: TfpicscEntity;

  @OneToMany(() => TfpilccEntity, (tfpilccEntity) => tfpilccEntity.tfpiecc)
  tfpilccs: TfpilccEntity[];

  @OneToOne(() => TfpsbpisEntity, (tfpsbpisEntity) => tfpsbpisEntity.tfpiecc)
  tfpsbpis: TfpsbpisEntity;
}
