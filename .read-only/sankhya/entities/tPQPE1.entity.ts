import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tpqqu1Entity } from './tPQQU1.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { Tpqrp1Entity } from './tPQRP1.entity';

@Index('PK_TPQPE1', ['codquest', 'codperg'], { unique: true })
@Entity('TPQPE1', { schema: 'SANKHYA' })
export class Tpqpe1Entity {
  @Column('int', { primary: true, name: 'CODQUEST' })
  codquest: number;

  @Column('int', { primary: true, name: 'CODPERG' })
  codperg: number;

  @Column('varchar', { name: 'DESCRPERG', length: 250 })
  descrperg: string;

  @Column('smallint', { name: 'ORDEM', default: () => '(0)' })
  ordem: number;

  @Column('smallint', { name: 'PONTSIM', default: () => '(0)' })
  pontsim: number;

  @Column('smallint', { name: 'PONTNAO', default: () => '(0)' })
  pontnao: number;

  @Column('varchar', { name: 'IMPEDSIM', length: 1, default: () => "'N'" })
  impedsim: string;

  @Column('varchar', { name: 'IMPEDNAO', length: 1, default: () => "'N'" })
  impednao: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => Tpqqu1Entity, (tpqqu1Entity) => tpqqu1Entity.tpqpes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODQUEST', referencedColumnName: 'codquest' }])
  codquest2: Tpqqu1Entity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tpqpes3)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => Tpqrp1Entity, (tpqrp1Entity) => tpqrp1Entity.tpqpe)
  tpqrps: Tpqrp1Entity[];
}
