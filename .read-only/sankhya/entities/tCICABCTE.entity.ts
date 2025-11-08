import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TcicteEntity } from './tCICTE.entity';

@Index('PK_TCICABCTE', ['dtinvent', 'codemp'], { unique: true })
@Entity('TCICABCTE', { schema: 'SANKHYA' })
export class TcicabcteEntity {
  @Column('datetime', { primary: true, name: 'DTINVENT' })
  dtinvent: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcicabctes)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @OneToMany(() => TcicteEntity, (tcicteEntity) => tcicteEntity.tcicabcte)
  tcictes: TcicteEntity[];
}
