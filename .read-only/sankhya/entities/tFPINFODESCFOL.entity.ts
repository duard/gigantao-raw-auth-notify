import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpdetdescfolEntity } from './tFPDETDESCFOL.entity';
import { TsibcoEntity } from './tSIBCO.entity';

@Index('PK_TFPINFODESCFOL', ['nrounico'], { unique: true })
@Index('TFPINFODESCFOL_UNQ01', ['tipodesconto', 'codbco', 'nrocontrato'], {
  unique: true,
})
@Entity('TFPINFODESCFOL', { schema: 'SANKHYA' })
export class TfpinfodescfolEntity {
  @Column('int', { primary: true, name: 'NROUNICO' })
  nrounico: number;

  @Column('varchar', { name: 'TIPODESCONTO', length: 1 })
  tipodesconto: string;

  @Column('smallint', { name: 'CODBCO' })
  codbco: number;

  @Column('varchar', { name: 'NROCONTRATO', length: 15 })
  nrocontrato: string;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @OneToMany(
    () => TfpdetdescfolEntity,
    (tfpdetdescfolEntity) => tfpdetdescfolEntity.nrounico2,
  )
  tfpdetdescfols: TfpdetdescfolEntity[];

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.tfpinfodescfols)
  @JoinColumn([{ name: 'CODBCO', referencedColumnName: 'codbco' }])
  codbco2: TsibcoEntity;
}
