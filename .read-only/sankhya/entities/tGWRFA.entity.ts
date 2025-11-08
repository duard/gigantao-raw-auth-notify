import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfgruEntity } from './tGFGRU.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgwpemEntity } from './tGWPEM.entity';

@Index('PK_TGWRFA', ['codrfa'], { unique: true })
@Entity('TGWRFA', { schema: 'SANKHYA' })
export class TgwrfaEntity {
  @Column('int', { primary: true, name: 'CODRFA' })
  codrfa: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 50 })
  descricao: string | null;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('varchar', { name: 'PADRAO', length: 1, default: () => "'N'" })
  padrao: string;

  @Column('text', { name: 'CONFIG', nullable: true })
  config: string | null;

  @Column('char', { name: 'USAENDMANUAL', length: 1, default: () => "'N'" })
  usaendmanual: string;

  @OneToMany(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.codrfa)
  tgfgrus: TgfgruEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codrfa)
  tgfpros: TgfproEntity[];

  @OneToMany(() => TgwpemEntity, (tgwpemEntity) => tgwpemEntity.codrfa2)
  tgwpems: TgwpemEntity[];
}
