import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFENV', ['nunota', 'dhalter'], { unique: true })
@Entity('TGFENV', { schema: 'SANKHYA' })
export class TgfenvEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('char', { name: 'EMAIL', length: 80 })
  email: string;

  @Column('datetime', {
    primary: true,
    name: 'DHALTER',
    default: () => 'getdate()',
  })
  dhalter: Date;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfenvs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfenvs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
