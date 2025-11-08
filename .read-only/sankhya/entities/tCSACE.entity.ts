import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TcsoseEntity } from './tCSOSE.entity';

@Index('PK_TCSACE', ['numos', 'codveiculo', 'nunota', 'sequencia'], {
  unique: true,
})
@Index('TCSACE_I01', ['nunota', 'sequencia'], {})
@Index('TCSACE_I02', ['numos'], {})
@Entity('TCSACE', { schema: 'SANKHYA' })
export class TcsaceEntity {
  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('int', { primary: true, name: 'CODVEICULO' })
  codveiculo: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'QTDINST', nullable: true, precision: 53 })
  qtdinst: number | null;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tcsaces)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tcsaces)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo2: TgfveiEntity;

  @ManyToOne(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.tcsaces)
  @JoinColumn([{ name: 'NUMOS', referencedColumnName: 'numos' }])
  numos2: TcsoseEntity;
}
