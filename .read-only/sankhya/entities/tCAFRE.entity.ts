import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcamapEntity } from './tCAMAP.entity';

@Index('PK_TCAFRE', ['data', 'numapa'], { unique: true })
@Entity('TCAFRE', { schema: 'SANKHYA' })
export class TcafreEntity {
  @Column('datetime', { primary: true, name: 'DATA' })
  data: Date;

  @Column('int', { primary: true, name: 'NUMAPA' })
  numapa: number;

  @Column('char', { name: 'FREQUENCIA', nullable: true, length: 1 })
  frequencia: string | null;

  @ManyToOne(() => TcamapEntity, (tcamapEntity) => tcamapEntity.tcafres)
  @JoinColumn([{ name: 'NUMAPA', referencedColumnName: 'numapa' }])
  numapa2: TcamapEntity;
}
