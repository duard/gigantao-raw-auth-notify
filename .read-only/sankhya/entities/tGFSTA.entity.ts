import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfetaEntity } from './tGFETA.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFSTA', ['nunotaorig', 'dtalter', 'codetapa'], { unique: true })
@Index('TGFSTA_I01', ['nunota'], {})
@Entity('TGFSTA', { schema: 'SANKHYA' })
export class TgfstaEntity {
  @Column('int', { primary: true, name: 'NUNOTAORIG' })
  nunotaorig: number;

  @Column('datetime', {
    primary: true,
    name: 'DTALTER',
    default: () => 'getdate()',
  })
  dtalter: Date;

  @Column('int', { primary: true, name: 'CODETAPA' })
  codetapa: number;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('char', { name: 'DESCROPER', nullable: true, length: 40 })
  descroper: string | null;

  @Column('int', { name: 'SEQOTICA', nullable: true })
  seqotica: number | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfstas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTAORIG', referencedColumnName: 'nunota' }])
  nunotaorig2: TgfcabEntity;

  @ManyToOne(() => TgfetaEntity, (tgfetaEntity) => tgfetaEntity.tgfstas)
  @JoinColumn([{ name: 'CODETAPA', referencedColumnName: 'codetapa' }])
  codetapa2: TgfetaEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfstas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
