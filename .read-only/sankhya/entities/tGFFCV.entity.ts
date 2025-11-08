import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffocEntity } from './tGFFOC.entity';
import { TgfvenEntity } from './tGFVEN.entity';

@Index('PK_TGFFCV', ['codvend', 'codform'], { unique: true })
@Entity('TGFFCV', { schema: 'SANKHYA' })
export class TgffcvEntity {
  @Column('smallint', { primary: true, name: 'CODVEND' })
  codvend: number;

  @Column('smallint', { primary: true, name: 'CODFORM' })
  codform: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TgffocEntity, (tgffocEntity) => tgffocEntity.tgffcvs)
  @JoinColumn([{ name: 'CODFORM', referencedColumnName: 'codform' }])
  codform2: TgffocEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tgffcvs)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend2: TgfvenEntity;
}
