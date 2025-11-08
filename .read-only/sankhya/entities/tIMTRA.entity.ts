import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimpinEntity } from './tIMPIN.entity';
import { TsimodEntity } from './tSIMOD.entity';

@Index('PK_TIMTRA', ['nutra'], { unique: true })
@Entity('TIMTRA', { schema: 'SANKHYA' })
export class TimtraEntity {
  @Column('int', { primary: true, name: 'NUTRA' })
  nutra: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('varchar', { name: 'CLASSNAME', length: 100 })
  classname: string;

  @OneToMany(() => TimpinEntity, (timpinEntity) => timpinEntity.nutra)
  timpins: TimpinEntity[];

  @ManyToOne(() => TsimodEntity, (tsimodEntity) => tsimodEntity.timtras)
  @JoinColumn([{ name: 'CODMODULO', referencedColumnName: 'codmodulo' }])
  codmodulo: TsimodEntity;
}
