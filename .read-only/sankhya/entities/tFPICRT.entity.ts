import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpitcrEntity } from './tFPITCR.entity';

@Index('PK_TFPICRT', ['nucrt'], { unique: true })
@Entity('TFPICRT', { schema: 'SANKHYA' })
export class TfpicrtEntity {
  @Column('int', { primary: true, name: 'NUCRT' })
  nucrt: number;

  @Column('float', { name: 'VRRENDTRIB', nullable: true, precision: 53 })
  vrrendtrib: number | null;

  @Column('float', { name: 'VRRENDTRIB13', nullable: true, precision: 53 })
  vrrendtrib13: number | null;

  @Column('float', { name: 'VRRENDMOLEGRAVE', nullable: true, precision: 53 })
  vrrendmolegrave: number | null;

  @Column('float', { name: 'VRRENDISEN65', nullable: true, precision: 53 })
  vrrendisen65: number | null;

  @Column('float', { name: 'VRJUROSMORA', nullable: true, precision: 53 })
  vrjurosmora: number | null;

  @Column('float', { name: 'VRRENDISENNTRIB', nullable: true, precision: 53 })
  vrrendisenntrib: number | null;

  @Column('varchar', { name: 'DESCISENNTRIB', nullable: true, length: 60 })
  descisenntrib: string | null;

  @Column('float', { name: 'VRPREVOFICIAL', nullable: true, precision: 53 })
  vrprevoficial: number | null;

  @Column('float', { name: 'VRRENDMOLEGRAVE13', nullable: true, precision: 53 })
  vrrendmolegrave13: number | null;

  @Column('float', { name: 'VLRAUXMORADIA', nullable: true, precision: 53 })
  vlrauxmoradia: number | null;

  @Column('float', { name: 'VRRENDISEN65DEC', nullable: true, precision: 53 })
  vrrendisen65Dec: number | null;

  @Column('float', { name: 'VLRINDRESCONTRATO', nullable: true, precision: 53 })
  vlrindrescontrato: number | null;

  @Column('float', { name: 'VRJUROSMORA13', nullable: true, precision: 53 })
  vrjurosmora13: number | null;

  @Column('float', { name: 'VRPREVOFICIAL13', nullable: true, precision: 53 })
  vrprevoficial13: number | null;

  @Column('float', { name: 'VLRAJUDACUSTO', nullable: true, precision: 53 })
  vlrajudacusto: number | null;

  @Column('float', { name: 'VLRDIARIAS', nullable: true, precision: 53 })
  vlrdiarias: number | null;

  @Column('float', { name: 'VLRABONOPEC', nullable: true, precision: 53 })
  vlrabonopec: number | null;

  @ManyToOne(() => TfpitcrEntity, (tfpitcrEntity) => tfpitcrEntity.tfpicrts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUITCR', referencedColumnName: 'nuitcr' }])
  nuitcr: TfpitcrEntity;
}
