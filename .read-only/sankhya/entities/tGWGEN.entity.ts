import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgwegeEntity } from './tGWEGE.entity';
import { TgwfegEntity } from './tGWFEG.entity';

@Index('PK_TGWGEN', ['codgen'], { unique: true })
@Entity('TGWGEN', { schema: 'SANKHYA' })
export class TgwgenEntity {
  @Column('int', { primary: true, name: 'CODGEN' })
  codgen: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @OneToMany(() => TgwegeEntity, (tgwegeEntity) => tgwegeEntity.codgen2)
  tgweges: TgwegeEntity[];

  @OneToMany(() => TgwfegEntity, (tgwfegEntity) => tgwfegEntity.codgen2)
  tgwfegs: TgwfegEntity[];
}
