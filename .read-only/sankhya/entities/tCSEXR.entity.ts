import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsfetEntity } from './tCSFET.entity';

@Index('PK_TCSEXR', ['nufap', 'numetapa', 'nunota'], { unique: true })
@Entity('TCSEXR', { schema: 'SANKHYA' })
export class TcsexrEntity {
  @Column('int', { primary: true, name: 'NUFAP' })
  nufap: number;

  @Column('int', { primary: true, name: 'NUMETAPA' })
  numetapa: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @ManyToOne(() => TcsfetEntity, (tcsfetEntity) => tcsfetEntity.tcsexrs)
  @JoinColumn([
    { name: 'NUFAP', referencedColumnName: 'nufap' },
    { name: 'NUMETAPA', referencedColumnName: 'numetapa' },
  ])
  tcsfet: TcsfetEntity;
}
