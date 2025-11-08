import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgccredEntity } from './tGCCRED.entity';
import { TgcinfEntity } from './tGCINF.entity';

@Index('PK_TGCGRU', ['codcred', 'codgrupocred'], { unique: true })
@Entity('TGCGRU', { schema: 'SANKHYA' })
export class TgcgruEntity {
  @Column('int', { primary: true, name: 'CODCRED' })
  codcred: number;

  @Column('int', { primary: true, name: 'CODGRUPOCRED' })
  codgrupocred: number;

  @Column('char', { name: 'DESCRGRUPOCRED', length: 40 })
  descrgrupocred: string;

  @Column('smallint', { name: 'ORDEM', default: () => '(0)' })
  ordem: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgcgrus)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgccredEntity, (tgccredEntity) => tgccredEntity.tgcgrus, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODCRED', referencedColumnName: 'codcred' }])
  codcred2: TgccredEntity;

  @OneToMany(() => TgcinfEntity, (tgcinfEntity) => tgcinfEntity.tgcgru)
  tgcinfs: TgcinfEntity[];
}
