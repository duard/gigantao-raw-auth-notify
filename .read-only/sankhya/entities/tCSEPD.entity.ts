import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsfetEntity } from './tCSFET.entity';

@Index('PK_TCSEPD', ['nufap', 'numetapa', 'numetapapred'], { unique: true })
@Entity('TCSEPD', { schema: 'SANKHYA' })
export class TcsepdEntity {
  @Column('int', { primary: true, name: 'NUMETAPA' })
  numetapa: number;

  @Column('int', { primary: true, name: 'NUMETAPAPRED' })
  numetapapred: number;

  @Column('char', { name: 'TIPO', length: 2, default: () => "'TI'" })
  tipo: string;

  @Column('int', { primary: true, name: 'NUFAP' })
  nufap: number;

  @ManyToOne(() => TcsfetEntity, (tcsfetEntity) => tcsfetEntity.tcsepds)
  @JoinColumn([
    { name: 'NUFAP', referencedColumnName: 'nufap' },
    { name: 'NUMETAPA', referencedColumnName: 'numetapa' },
  ])
  tcsfet: TcsfetEntity;

  @ManyToOne(() => TcsfetEntity, (tcsfetEntity) => tcsfetEntity.tcsepds2)
  @JoinColumn([
    { name: 'NUFAP', referencedColumnName: 'nufap' },
    { name: 'NUMETAPAPRED', referencedColumnName: 'numetapa' },
  ])
  tcsfet2: TcsfetEntity;
}
