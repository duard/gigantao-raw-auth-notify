import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgvpergEntity } from './tGVPERG.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGVPEPR', ['codperg', 'codprod'], { unique: true })
@Index('TGVPEPR_I01', ['codprod'], {})
@Entity('TGVPEPR', { schema: 'SANKHYA' })
export class TgvpeprEntity {
  @Column('int', { primary: true, name: 'CODPERG' })
  codperg: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgvpeprs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgvpergEntity, (tgvpergEntity) => tgvpergEntity.tgvpeprs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPERG', referencedColumnName: 'codperg' }])
  codperg2: TgvpergEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgvpeprs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
