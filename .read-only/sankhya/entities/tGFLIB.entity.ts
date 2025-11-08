import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFLIB', ['nunota', 'codusu'], { unique: true })
@Index('TGFLIB_IFK', ['codusu'], {})
@Entity('TGFLIB', { schema: 'SANKHYA' })
export class TgflibEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DT' })
  dt: Date;

  @Column('char', { name: 'LIBERACOES', nullable: true, length: 50 })
  liberacoes: string | null;

  @Column('char', { name: 'OBS', nullable: true, length: 255 })
  obs: string | null;

  @Column('money', { name: 'VLRTOTAL', nullable: true })
  vlrtotal: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgflibs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgflibs)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  tgfcab: TgfcabEntity;
}
