import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpddesEntity } from './tFPDDES.entity';
import { TfpiprrdjEntity } from './tFPIPRRDJ.entity';

@Index('PK_TFPIVRDJ', ['nuivrdj'], { unique: true })
@Entity('TFPIVRDJ', { schema: 'SANKHYA' })
export class TfpivrdjEntity {
  @Column('int', { primary: true, name: 'NUIVRDJ' })
  nuivrdj: number;

  @Column('varchar', { name: 'INDAPURACAO', length: 1 })
  indapuracao: string;

  @Column('float', { name: 'VLRNRETIDO', nullable: true, precision: 53 })
  vlrnretido: number | null;

  @Column('float', { name: 'VLRDEPJUD', nullable: true, precision: 53 })
  vlrdepjud: number | null;

  @Column('float', { name: 'VLRCMPANOCAL', nullable: true, precision: 53 })
  vlrcmpanocal: number | null;

  @Column('float', { name: 'VLRCMPANOANT', nullable: true, precision: 53 })
  vlrcmpanoant: number | null;

  @Column('float', { name: 'VLRRENDSUSP', nullable: true, precision: 53 })
  vlrrendsusp: number | null;

  @OneToMany(() => TfpddesEntity, (tfpddesEntity) => tfpddesEntity.nuivrdj)
  tfpddes: TfpddesEntity[];

  @ManyToOne(
    () => TfpiprrdjEntity,
    (tfpiprrdjEntity) => tfpiprrdjEntity.tfpivrdjs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'NUIPRRDJ', referencedColumnName: 'nuiprrdj' }])
  nuiprrdj: TfpiprrdjEntity;
}
