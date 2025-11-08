import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFREN', ['nureneg', 'nufin'], { unique: true })
@Index('TGFREN_I01', ['nurenegorig'], {})
@Index('TGFREN_I02', ['nufin', 'nurenegorig'], {})
@Entity('TGFREN', { schema: 'SANKHYA' })
export class TgfrenEntity {
  @Column('int', { primary: true, name: 'NURENEG', default: () => '(0)' })
  nureneg: number;

  @Column('int', { primary: true, name: 'NUFIN', default: () => '(0)' })
  nufin: number;

  @Column('int', { name: 'NURENEGORIG', nullable: true })
  nurenegorig: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfrens)
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfrens)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
