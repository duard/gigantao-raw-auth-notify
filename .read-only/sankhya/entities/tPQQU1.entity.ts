import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfveiEntity } from './tGFVEI.entity';
import { Tpqpe1Entity } from './tPQPE1.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TpqrpoEntity } from './tPQRPO.entity';

@Index('PK_TPQQU1', ['codquest'], { unique: true })
@Entity('TPQQU1', { schema: 'SANKHYA' })
export class Tpqqu1Entity {
  @Column('int', { primary: true, name: 'CODQUEST' })
  codquest: number;

  @Column('varchar', { name: 'DESCRQUEST', length: 250 })
  descrquest: string;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('varchar', {
    name: 'PODEFECHARORDCARG',
    length: 1,
    default: () => "'S'",
  })
  podefecharordcarg: string;

  @Column('varchar', { name: 'PODEOBS', length: 1, default: () => "'S'" })
  podeobs: string;

  @Column('smallint', { name: 'NOTAMIN', default: () => '(0)' })
  notamin: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @OneToMany(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.codquest)
  tgfveis: TgfveiEntity[];

  @OneToMany(() => Tpqpe1Entity, (tpqpe1Entity) => tpqpe1Entity.codquest2)
  tpqpes: Tpqpe1Entity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tpqqus)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(
    () => TpqrpoEntity,
    (tpqrpoEntity) => tpqrpoEntity.codquestmotorista,
  )
  tpqrpos: TpqrpoEntity[];

  @OneToMany(() => TpqrpoEntity, (tpqrpoEntity) => tpqrpoEntity.codquestveiculo)
  tpqrpos2: TpqrpoEntity[];
}
