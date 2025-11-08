import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimsacEntity } from './tIMSAC.entity';

@Index('PK_TIMMCA', ['mcacodigo'], { unique: true })
@Entity('TIMMCA', { schema: 'SANKHYA' })
export class TimmcaEntity {
  @Column('int', { primary: true, name: 'MCACODIGO' })
  mcacodigo: number;

  @Column('varchar', { name: 'MCACMOTIVO', nullable: true, length: 40 })
  mcacmotivo: string | null;

  @OneToMany(() => TimsacEntity, (timsacEntity) => timsacEntity.sacmtvcancelado)
  timsacs: TimsacEntity[];
}
