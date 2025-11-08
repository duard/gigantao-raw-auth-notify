import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFADG', ['nuassoc', 'nunota'], { unique: true })
@Index('TGFADG_I01', ['nunota'], {})
@Index('TGFADG_I02', ['dtassoc'], {})
@Entity('TGFADG', { schema: 'SANKHYA' })
export class TgfadgEntity {
  @Column('int', { primary: true, name: 'NUASSOC' })
  nuassoc: number;

  @Column('datetime', { name: 'DTASSOC', nullable: true })
  dtassoc: Date | null;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfadgs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfadgs)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
