import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgwareEntity } from './tGWARE.entity';
import { TgwteqEntity } from './tGWTEQ.entity';
import { TgwittEntity } from './tGWITT.entity';
import { TgwrprEntity } from './tGWRPR.entity';

@Index('PK_TGWEQP', ['codequip'], { unique: true })
@Entity('TGWEQP', { schema: 'SANKHYA' })
export class TgweqpEntity {
  @Column('int', { primary: true, name: 'CODEQUIP' })
  codequip: number;

  @Column('char', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @OneToMany(() => TgwareEntity, (tgwareEntity) => tgwareEntity.codequip)
  tgwares: TgwareEntity[];

  @ManyToOne(() => TgwteqEntity, (tgwteqEntity) => tgwteqEntity.tgweqps)
  @JoinColumn([{ name: 'CODTIPEQUIP', referencedColumnName: 'codtipequip' }])
  codtipequip: TgwteqEntity;

  @OneToMany(() => TgwittEntity, (tgwittEntity) => tgwittEntity.codequip)
  tgwitts: TgwittEntity[];

  @OneToMany(() => TgwrprEntity, (tgwrprEntity) => tgwrprEntity.codequip2)
  tgwrprs: TgwrprEntity[];
}
