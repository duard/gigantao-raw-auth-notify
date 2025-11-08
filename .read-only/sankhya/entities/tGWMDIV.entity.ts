import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgwcoiEntity } from './tGWCOI.entity';

@Index('PK_TGWMDIV', ['codmdiv'], { unique: true })
@Entity('TGWMDIV', { schema: 'SANKHYA' })
export class TgwmdivEntity {
  @Column('int', { primary: true, name: 'CODMDIV' })
  codmdiv: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'TIPOCONF', length: 1, default: () => "'E'" })
  tipoconf: string;

  @OneToMany(() => TgwcoiEntity, (tgwcoiEntity) => tgwcoiEntity.codmdiv)
  tgwcois: TgwcoiEntity[];
}
