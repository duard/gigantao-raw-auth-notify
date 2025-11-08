import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcipmEntity } from './tGFCIPM.entity';
import { TgfgruEntity } from './tGFGRU.entity';

@Index('PK_TGFCIPMGRU', ['coduf', 'codigoitem', 'codgrupoprod'], {
  unique: true,
})
@Entity('TGFCIPMGRU', { schema: 'SANKHYA' })
export class TgfcipmgruEntity {
  @Column('smallint', { primary: true, name: 'CODUF' })
  coduf: number;

  @Column('varchar', { primary: true, name: 'CODIGOITEM', length: 60 })
  codigoitem: string;

  @Column('int', { primary: true, name: 'CODGRUPOPROD' })
  codgrupoprod: number;

  @ManyToOne(() => TgfcipmEntity, (tgfcipmEntity) => tgfcipmEntity.tgfcipmgrus)
  @JoinColumn([
    { name: 'CODUF', referencedColumnName: 'coduf' },
    { name: 'CODIGOITEM', referencedColumnName: 'codigoitem' },
  ])
  tgfcipm: TgfcipmEntity;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tgfcipmgrus)
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod2: TgfgruEntity;
}
