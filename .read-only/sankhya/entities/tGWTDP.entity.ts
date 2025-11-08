import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwittEntity } from './tGWITT.entity';

@Index('PK_TGWTDP', ['nutarefadep', 'sequenciadep', 'nutarefa', 'sequencia'], {
  unique: true,
})
@Index('TGWTDP_I01', ['nutarefa', 'sequencia'], {})
@Entity('TGWTDP', { schema: 'SANKHYA' })
export class TgwtdpEntity {
  @Column('int', { primary: true, name: 'NUTAREFADEP' })
  nutarefadep: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIADEP' })
  sequenciadep: number;

  @Column('int', { primary: true, name: 'NUTAREFA' })
  nutarefa: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'QTDDEP', nullable: true, precision: 53 })
  qtddep: number | null;

  @ManyToOne(() => TgwittEntity, (tgwittEntity) => tgwittEntity.tgwtdps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUTAREFA', referencedColumnName: 'nutarefa' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgwitt: TgwittEntity;
}
