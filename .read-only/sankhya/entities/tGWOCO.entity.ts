import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgwmocEntity } from './tGWMOC.entity';

@Index('PK_TGWOCO', ['codoco'], { unique: true })
@Entity('TGWOCO', { schema: 'SANKHYA' })
export class TgwocoEntity {
  @Column('int', { primary: true, name: 'CODOCO' })
  codoco: number;

  @Column('varchar', { name: 'DESCRICAO', length: 30 })
  descricao: string;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('varchar', { name: 'TIPO', length: 1, default: () => "'A'" })
  tipo: string;

  @OneToMany(() => TgwmocEntity, (tgwmocEntity) => tgwmocEntity.codoco)
  tgwmocs: TgwmocEntity[];
}
