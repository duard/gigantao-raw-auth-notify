import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsimodEntity } from './tSIMOD.entity';
import { TimpinEntity } from './tIMPIN.entity';

@Index('PK_TIMCOL', ['nucol'], { unique: true })
@Entity('TIMCOL', { schema: 'SANKHYA' })
export class TimcolEntity {
  @Column('int', { primary: true, name: 'NUCOL' })
  nucol: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('varchar', { name: 'CLASSNAME', length: 100 })
  classname: string;

  @ManyToOne(() => TsimodEntity, (tsimodEntity) => tsimodEntity.timcols)
  @JoinColumn([{ name: 'CODMODULO', referencedColumnName: 'codmodulo' }])
  codmodulo: TsimodEntity;

  @OneToMany(() => TimpinEntity, (timpinEntity) => timpinEntity.nucol)
  timpins: TimpinEntity[];
}
