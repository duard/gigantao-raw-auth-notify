import { Column, Entity, Index, ManyToMany, OneToMany } from 'typeorm';
import { TgwtarEntity } from './tGWTAR.entity';
import { TgwteqEntity } from './tGWTEQ.entity';
import { TgwusuEntity } from './tGWUSU.entity';

@Index('PK_TGWTTR', ['codtarefa'], { unique: true })
@Entity('TGWTTR', { schema: 'SANKHYA' })
export class TgwttrEntity {
  @Column('int', { primary: true, name: 'CODTAREFA' })
  codtarefa: number;

  @Column('char', { name: 'DESCRTAREFA', length: 30 })
  descrtarefa: string;

  @OneToMany(() => TgwtarEntity, (tgwtarEntity) => tgwtarEntity.codtarefa2)
  tgwtars: TgwtarEntity[];

  @ManyToMany(() => TgwteqEntity, (tgwteqEntity) => tgwteqEntity.tgwttrs)
  tgwteqs: TgwteqEntity[];

  @OneToMany(() => TgwusuEntity, (tgwusuEntity) => tgwusuEntity.codtarefa2)
  tgwusus: TgwusuEntity[];
}
