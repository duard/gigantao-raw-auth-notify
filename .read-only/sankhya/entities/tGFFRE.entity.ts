import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfedifreEntity } from './tGFEDIFRE.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TGFFRE', ['nuacerto', 'sequencia'], { unique: true })
@Index(
  'TGFFRE_I01',
  ['nuacerto', 'nunota', 'nufin', 'nufinorig', 'sequencia'],
  { unique: true },
)
@Index('TGFFRE_I02', ['nunota'], {})
@Index('TGFFRE_I03', ['nufin'], {})
@Index('TGFFRE_I04', ['nufinorig'], {})
@Index('TGFFRE_I05', ['dhalter'], {})
@Index('TGFFRE_I06', ['nunota', 'tipacerto'], {})
@Index('TGFFRE_I07', ['nuedi'], {})
@Entity('TGFFRE', { schema: 'SANKHYA' })
export class TgffreEntity {
  @Column('int', { primary: true, name: 'NUACERTO' })
  nuacerto: number;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('int', { name: 'NUFINORIG', nullable: true })
  nufinorig: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('char', { name: 'TIPACERTO', nullable: true, length: 1 })
  tipacerto: string | null;

  @Column('int', { primary: true, name: 'SEQUENCIA', default: () => '(0)' })
  sequencia: number;

  @Column('int', { name: 'NUEDI', nullable: true })
  nuedi: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgffres)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(
    () => TgfedifreEntity,
    (tgfedifreEntity) => tgfedifreEntity.tgffres,
  )
  @JoinColumn([{ name: 'NUEDI', referencedColumnName: 'nuedi' }])
  nuedi2: TgfedifreEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgffres)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgffres)
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgffres2)
  @JoinColumn([{ name: 'NUFINORIG', referencedColumnName: 'nufin' }])
  nufinorig2: TgffinEntity;
}
