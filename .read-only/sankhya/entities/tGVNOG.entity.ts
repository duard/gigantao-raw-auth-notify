import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgvrngEntity } from './tGVRNG.entity';

@Index('PK_TGVNOG', ['codnog'], { unique: true })
@Entity('TGVNOG', { schema: 'SANKHYA' })
export class TgvnogEntity {
  @Column('int', { primary: true, name: 'CODNOG' })
  codnog: number;

  @Column('varchar', { name: 'DESCRNOG', length: 250 })
  descrnog: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('varchar', { name: 'TIPORESULT', length: 1 })
  tiporesult: string;

  @Column('varchar', { name: 'PERIODICIDADE', length: 1, default: () => "'M'" })
  periodicidade: string;

  @Column('smallint', { name: 'QTDPERIODICIDADE', nullable: true })
  qtdperiodicidade: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgvnogs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgvrngEntity, (tgvrngEntity) => tgvrngEntity.codnog2)
  tgvrngs: TgvrngEntity[];
}
