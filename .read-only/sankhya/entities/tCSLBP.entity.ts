import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TcsfapEntity } from './tCSFAP.entity';
import { TcslbeEntity } from './tCSLBE.entity';
import { TcslbrEntity } from './tCSLBR.entity';

@Index('PK_TCSLBP', ['nufap', 'sequencia'], { unique: true })
@Entity('TCSLBP', { schema: 'SANKHYA' })
export class TcslbpEntity {
  @Column('int', { primary: true, name: 'NUFAP' })
  nufap: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DHBASE' })
  dhbase: Date;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @OneToMany(() => TcslbeEntity, (tcslbeEntity) => tcslbeEntity.tcslbp)
  tcslbes: TcslbeEntity[];

  @ManyToOne(() => TcsfapEntity, (tcsfapEntity) => tcsfapEntity.tcslbps)
  @JoinColumn([{ name: 'NUFAP', referencedColumnName: 'nufap' }])
  nufap2: TcsfapEntity;

  @OneToMany(() => TcslbrEntity, (tcslbrEntity) => tcslbrEntity.tcslbp)
  tcslbrs: TcslbrEntity[];
}
