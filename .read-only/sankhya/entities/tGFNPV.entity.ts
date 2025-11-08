import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfvenEntity } from './tGFVEN.entity';
import { TgfntaEntity } from './tGFNTA.entity';

@Index('PK_TGFNPV', ['codtipvenda', 'codvend'], { unique: true })
@Entity('TGFNPV', { schema: 'SANKHYA' })
export class TgfnpvEntity {
  @Column('smallint', { primary: true, name: 'CODTIPVENDA' })
  codtipvenda: number;

  @Column('smallint', { primary: true, name: 'CODVEND' })
  codvend: number;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tgfnpvs)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend2: TgfvenEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgfnpvs)
  @JoinColumn([{ name: 'CODTAB', referencedColumnName: 'codtab' }])
  codtab: TgfntaEntity;
}
