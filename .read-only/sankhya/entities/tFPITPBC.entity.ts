import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpitcrEntity } from './tFPITCR.entity';
import { TfpitprtEntity } from './tFPITPRT.entity';

@Index('PK_TFPITPBC', ['nuitpbc'], { unique: true })
@Entity('TFPITPBC', { schema: 'SANKHYA' })
export class TfpitpbcEntity {
  @Column('int', { primary: true, name: 'NUITPBC' })
  nuitpbc: number;

  @Column('datetime', { name: 'DTREFCALC', nullable: true })
  dtrefcalc: Date | null;

  @Column('float', { name: 'VLRBASCALCPREV', nullable: true, precision: 53 })
  vlrbascalcprev: number | null;

  @Column('float', { name: 'VLRBASCALCPREV13', nullable: true, precision: 53 })
  vlrbascalcprev13: number | null;

  @Column('float', { name: 'VLRREDTRIB', nullable: true, precision: 53 })
  vlrredtrib: number | null;

  @Column('float', { name: 'VLRREDTRIB13', nullable: true, precision: 53 })
  vlrredtrib13: number | null;

  @OneToMany(() => TfpitcrEntity, (tfpitcrEntity) => tfpitcrEntity.nuitpbc)
  tfpitcrs: TfpitcrEntity[];

  @ManyToOne(() => TfpitprtEntity, (tfpitprtEntity) => tfpitprtEntity.tfpitpbcs)
  @JoinColumn([{ name: 'NUITPRT', referencedColumnName: 'nuitprt' }])
  nuitprt: TfpitprtEntity;
}
