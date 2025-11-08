import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgvpergEntity } from './tGVPERG.entity';

@Index('PK_TGVPEU', ['codperg', 'codusualt'], { unique: true })
@Index('TGVPEU_I01', ['codusu'], {})
@Entity('TGVPEU', { schema: 'SANKHYA' })
export class TgvpeuEntity {
  @Column('int', { primary: true, name: 'CODPERG' })
  codperg: number;

  @Column('smallint', { primary: true, name: 'CODUSUALT' })
  codusualt: number;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgvpeus, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODUSUALT', referencedColumnName: 'codusu' }])
  codusualt2: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgvpeus2)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TgvpergEntity, (tgvpergEntity) => tgvpergEntity.tgvpeus, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPERG', referencedColumnName: 'codperg' }])
  codperg2: TgvpergEntity;
}
