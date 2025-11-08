import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpdrtdEntity } from './tFPDRTD.entity';
import { TfpibpaEntity } from './tFPIBPA.entity';
import { TfpicrtEntity } from './tFPICRT.entity';
import { TfpiprrdjEntity } from './tFPIPRRDJ.entity';
import { TfpirraEntity } from './tFPIRRA.entity';
import { TfpitprtEntity } from './tFPITPRT.entity';
import { TfpitpbcEntity } from './tFPITPBC.entity';

@Index('PK_TFPITCR', ['nuitcr'], { unique: true })
@Entity('TFPITCR', { schema: 'SANKHYA' })
export class TfpitcrEntity {
  @Column('int', { primary: true, name: 'NUITCR' })
  nuitcr: number;

  @Column('char', { name: 'TPVALOR', length: 1 })
  tpvalor: string;

  @Column('int', { name: 'CODRECEITA' })
  codreceita: number;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;

  @Column('float', { name: 'VALOR13', nullable: true, precision: 53 })
  valor13: number | null;

  @OneToMany(() => TfpdrtdEntity, (tfpdrtdEntity) => tfpdrtdEntity.nuitcr)
  tfpdrtds: TfpdrtdEntity[];

  @OneToMany(() => TfpibpaEntity, (tfpibpaEntity) => tfpibpaEntity.nuitcr)
  tfpibpas: TfpibpaEntity[];

  @OneToMany(() => TfpicrtEntity, (tfpicrtEntity) => tfpicrtEntity.nuitcr)
  tfpicrts: TfpicrtEntity[];

  @OneToMany(() => TfpiprrdjEntity, (tfpiprrdjEntity) => tfpiprrdjEntity.nuitcr)
  tfpiprrdjs: TfpiprrdjEntity[];

  @OneToMany(() => TfpirraEntity, (tfpirraEntity) => tfpirraEntity.nuitcr)
  tfpirras: TfpirraEntity[];

  @ManyToOne(
    () => TfpitprtEntity,
    (tfpitprtEntity) => tfpitprtEntity.tfpitcrs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'NUITPRT', referencedColumnName: 'nuitprt' }])
  nuitprt: TfpitprtEntity;

  @ManyToOne(() => TfpitpbcEntity, (tfpitpbcEntity) => tfpitpbcEntity.tfpitcrs)
  @JoinColumn([{ name: 'NUITPBC', referencedColumnName: 'nuitpbc' }])
  nuitpbc: TfpitpbcEntity;
}
