import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_GFRGUI', ['codemp', 'codusu'], { unique: true })
@Entity('GFRGUI', { schema: 'SANKHYA' })
export class GfrguiEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('datetime', {
    name: 'DATACRIACAO',
    nullable: true,
    default: () => 'getdate()',
  })
  datacriacao: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.gfrguis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.gfrguis)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
