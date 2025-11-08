import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcbempEntity } from './tCBEMP.entity';
import { TcbgruEntity } from './tCBGRU.entity';

@Index('PK_TCBDEM', ['codemp', 'coddemonst'], { unique: true })
@Entity('TCBDEM', { schema: 'SANKHYA' })
export class TcbdemEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODDEMONST' })
  coddemonst: number;

  @Column('char', { name: 'DESCRDEMONST', length: 40 })
  descrdemonst: string;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbdems)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @OneToMany(() => TcbgruEntity, (tcbgruEntity) => tcbgruEntity.tcbdem)
  tcbgrus: TcbgruEntity[];
}
