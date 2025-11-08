import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfcfiEntity } from './tGFCFI.entity';

@Index('PK_TGFCFM', ['nucfm'], { unique: true })
@Index('TGFCFM_I01', ['nunota'], {})
@Index('TGFCFM_I02', ['nunotaorig'], {})
@Index('TGFCFM_I03', ['nufidel'], {})
@Entity('TGFCFM', { schema: 'SANKHYA' })
export class TgfcfmEntity {
  @Column('int', { primary: true, name: 'NUCFM' })
  nucfm: number;

  @Column('int', { name: 'NUFIDEL' })
  nufidel: number;

  @Column('smallint', { name: 'SINAL' })
  sinal: number;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'NUNOTAORIG', nullable: true })
  nunotaorig: number | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfcfms)
  @JoinColumn([{ name: 'NUNOTAORIG', referencedColumnName: 'nunota' }])
  nunotaorig2: TgfcabEntity;

  @ManyToOne(() => TgfcfiEntity, (tgfcfiEntity) => tgfcfiEntity.tgfcfms)
  @JoinColumn([{ name: 'NUFIDEL', referencedColumnName: 'nufidel' }])
  nufidel2: TgfcfiEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfcfms2, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
