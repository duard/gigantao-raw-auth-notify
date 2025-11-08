import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgftppEntity } from './tGFTPP.entity';
import { TgfgruEntity } from './tGFGRU.entity';
import { TgfvenEntity } from './tGFVEN.entity';

@Index('PK_TGFCVG', ['codvend', 'codgrupoprod', 'codtipparc'], { unique: true })
@Entity('TGFCVG', { schema: 'SANKHYA' })
export class TgfcvgEntity {
  @Column('smallint', { primary: true, name: 'CODVEND' })
  codvend: number;

  @Column('int', { primary: true, name: 'CODGRUPOPROD' })
  codgrupoprod: number;

  @Column('int', { primary: true, name: 'CODTIPPARC' })
  codtipparc: number;

  @Column('float', { name: 'COMISSAO', precision: 53 })
  comissao: number;

  @ManyToOne(() => TgftppEntity, (tgftppEntity) => tgftppEntity.tgfcvgs)
  @JoinColumn([{ name: 'CODTIPPARC', referencedColumnName: 'codtipparc' }])
  codtipparc2: TgftppEntity;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tgfcvgs)
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod2: TgfgruEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tgfcvgs)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend2: TgfvenEntity;
}
