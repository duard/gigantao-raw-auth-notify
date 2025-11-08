import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpitcrEntity } from './tFPITCR.entity';
import { TfpitpbcEntity } from './tFPITPBC.entity';
import { TfpprtEntity } from './tFPPRT.entity';

@Index('PK_TFPITPRT', ['nuitprt'], { unique: true })
@Entity('TFPITPRT', { schema: 'SANKHYA' })
export class TfpitprtEntity {
  @Column('int', { primary: true, name: 'NUITPRT' })
  nuitprt: number;

  @Column('datetime', { name: 'DTREFPGTO' })
  dtrefpgto: Date;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 999 })
  observacao: string | null;

  @Column('char', { name: 'CONFIRMADO', length: 1 })
  confirmado: string;

  @Column('char', { name: 'INCPORTALESOCIAL', nullable: true, length: 1 })
  incportalesocial: string | null;

  @Column('varchar', { name: 'NRORECIBOESOCIAL', nullable: true, length: 50 })
  nroreciboesocial: string | null;

  @Column('smallint', { name: 'IDESEQPROC', nullable: true })
  ideseqproc: number | null;

  @Column('varchar', { name: 'REGPASSIVO13', nullable: true, length: 1 })
  regpassivo13: string | null;

  @OneToMany(() => TfpitcrEntity, (tfpitcrEntity) => tfpitcrEntity.nuitprt)
  tfpitcrs: TfpitcrEntity[];

  @OneToMany(() => TfpitpbcEntity, (tfpitpbcEntity) => tfpitpbcEntity.nuitprt)
  tfpitpbcs: TfpitpbcEntity[];

  @ManyToOne(() => TfpprtEntity, (tfpprtEntity) => tfpprtEntity.tfpitprts)
  @JoinColumn([{ name: 'NUPRT', referencedColumnName: 'nuprt' }])
  nuprt: TfpprtEntity;
}
