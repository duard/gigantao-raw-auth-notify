import { Column, Entity, Index, ManyToMany, OneToMany } from 'typeorm';
import { TapcusEntity } from './tAPCUS.entity';
import { TapamoEntity } from './tAPAMO.entity';

@Index('PK_TAPTAN', ['codtipana'], { unique: true })
@Entity('TAPTAN', { schema: 'SANKHYA' })
export class TaptanEntity {
  @Column('smallint', { primary: true, name: 'CODTIPANA' })
  codtipana: number;

  @Column('char', { name: 'DESCRICAO', nullable: true, length: 50 })
  descricao: string | null;

  @OneToMany(() => TapcusEntity, (tapcusEntity) => tapcusEntity.codtipana)
  tapcuses: TapcusEntity[];

  @ManyToMany(() => TapamoEntity, (tapamoEntity) => tapamoEntity.taptans)
  tapamos: TapamoEntity[];
}
