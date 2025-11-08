import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { TcsiteEntity } from './tCSITE.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TCSOOS', ['codocoros'], { unique: true })
@Entity('TCSOOS', { schema: 'SANKHYA' })
export class TcsoosEntity {
  @Column('smallint', { primary: true, name: 'CODOCOROS' })
  codocoros: number;

  @Column('char', { name: 'DESCROCOROS', length: 40 })
  descrocoros: string;

  @Column('char', { name: 'COBRAR', length: 1, default: () => "'S'" })
  cobrar: string;

  @Column('char', { name: 'PREVISTO', length: 1, default: () => "'S'" })
  previsto: string;

  @OneToMany(() => TcsiteEntity, (tcsiteEntity) => tcsiteEntity.codocoros)
  tcsites: TcsiteEntity[];

  @ManyToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcsoos)
  @JoinTable({
    name: 'TCSSEM',
    joinColumns: [{ name: 'CODOCOROS', referencedColumnName: 'codocoros' }],
    inverseJoinColumns: [{ name: 'CODPROD', referencedColumnName: 'codprod' }],
    schema: 'SANKHYA',
  })
  tgfpros: TgfproEntity[];
}
