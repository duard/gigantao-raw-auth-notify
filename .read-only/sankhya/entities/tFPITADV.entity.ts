import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpirraEntity } from './tFPIRRA.entity';

@Index('PK_TFPITADV', ['nuitadv'], { unique: true })
@Entity('TFPITADV', { schema: 'SANKHYA' })
export class TfpitadvEntity {
  @Column('int', { primary: true, name: 'NUITADV' })
  nuitadv: number;

  @Column('varchar', { name: 'NMADV', length: 50 })
  nmadv: string;

  @Column('varchar', { name: 'TIPOINSCR', length: 1 })
  tipoinscr: string;

  @Column('varchar', { name: 'CNPJCPF', length: 14 })
  cnpjcpf: string;

  @Column('float', { name: 'VLRDESP', nullable: true, precision: 53 })
  vlrdesp: number | null;

  @ManyToOne(() => TfpirraEntity, (tfpirraEntity) => tfpirraEntity.tfpitadvs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NURRA', referencedColumnName: 'nurra' }])
  nurra: TfpirraEntity;
}
