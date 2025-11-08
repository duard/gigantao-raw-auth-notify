import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcsoccEntity } from './tCSOCC.entity';

@Index('PK_TCSOCO', ['codocor'], { unique: true })
@Index('TCSOCO_I01', ['sitprod', 'codocor'], {})
@Entity('TCSOCO', { schema: 'SANKHYA' })
export class TcsocoEntity {
  @Column('smallint', { primary: true, name: 'CODOCOR' })
  codocor: number;

  @Column('char', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('char', { name: 'SITPROD', length: 1, default: () => "'A'" })
  sitprod: string;

  @OneToMany(() => TcsoccEntity, (tcsoccEntity) => tcsoccEntity.codocor)
  tcsoccs: TcsoccEntity[];
}
