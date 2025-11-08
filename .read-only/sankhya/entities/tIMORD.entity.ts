import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimpinEntity } from './tIMPIN.entity';

@Index('PK_TIMORD', ['nuord'], { unique: true })
@Entity('TIMORD', { schema: 'SANKHYA' })
export class TimordEntity {
  @Column('int', { primary: true, name: 'NUORD' })
  nuord: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('text', { name: 'SQLORDERBY' })
  sqlorderby: string;

  @OneToMany(() => TimpinEntity, (timpinEntity) => timpinEntity.nuord)
  timpins: TimpinEntity[];
}
