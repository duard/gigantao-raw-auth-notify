import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwconEntity } from './tGWCON.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfiteEntity } from './tGFITE.entity';

@Index('PK_TGWDEV', ['nudev'], { unique: true })
@Entity('TGWDEV', { schema: 'SANKHYA' })
export class TgwdevEntity {
  @Column('int', { primary: true, name: 'NUDEV' })
  nudev: number;

  @Column('float', { name: 'QTDDEVOLVER', precision: 53 })
  qtddevolver: number;

  @Column('datetime', { name: 'DHDEV' })
  dhdev: Date;

  @ManyToOne(() => TgwconEntity, (tgwconEntity) => tgwconEntity.tgwdevs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUCONFERENCIA', referencedColumnName: 'nuconferencia' },
  ])
  nuconferencia: TgwconEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwdevs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgwdevs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;
}
