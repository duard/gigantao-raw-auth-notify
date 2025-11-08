import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimpinEntity } from './tIMPIN.entity';

@Index('PK_TIMFID', ['nufid'], { unique: true })
@Entity('TIMFID', { schema: 'SANKHYA' })
export class TimfidEntity {
  @Column('int', { primary: true, name: 'NUFID' })
  nufid: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('text', { name: 'SQLWHERE' })
  sqlwhere: string;

  @OneToMany(() => TimpinEntity, (timpinEntity) => timpinEntity.nuf)
  timpins: TimpinEntity[];
}
