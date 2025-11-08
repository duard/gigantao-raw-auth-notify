import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TiminpEntity } from './tIMINP.entity';

@Index('PK_TIMIPO', ['ipocodigo', 'ipointegracao'], { unique: true })
@Entity('TIMIPO', { schema: 'SANKHYA' })
export class TimipoEntity {
  @Column('int', { primary: true, name: 'IPOCODIGO' })
  ipocodigo: number;

  @Column('int', { primary: true, name: 'IPOINTEGRACAO' })
  ipointegracao: number;

  @Column('varchar', { name: 'IPONOMEPORTAL', length: 100 })
  iponomeportal: string;

  @Column('varchar', { name: 'IPOCLASSNAME', length: 100 })
  ipoclassname: string;

  @ManyToOne(() => TiminpEntity, (timinpEntity) => timinpEntity.timipos)
  @JoinColumn([{ name: 'IPOINTEGRACAO', referencedColumnName: 'inpcodigo' }])
  ipointegracao2: TiminpEntity;
}
