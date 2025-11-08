import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfiffEntity } from './tGFIFF.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFIFFP', ['nudecreto', 'codprod'], { unique: true })
@Entity('TGFIFFP', { schema: 'SANKHYA' })
export class TgfiffpEntity {
  @Column('int', { primary: true, name: 'NUDECRETO' })
  nudecreto: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'ALIQINCSEMIMPBASE', nullable: true })
  aliqincsemimpbase: number | null;

  @ManyToOne(() => TgfiffEntity, (tgfiffEntity) => tgfiffEntity.tgfiffps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUDECRETO', referencedColumnName: 'nudecreto' }])
  nudecreto2: TgfiffEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfiffps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfiffps)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
