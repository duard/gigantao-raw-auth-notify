import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfplaEntity } from './tGFPLA.entity';

@Index('PK_TGFGAR', ['codplano', 'codgar'], { unique: true })
@Entity('TGFGAR', { schema: 'SANKHYA' })
export class TgfgarEntity {
  @Column('smallint', { primary: true, name: 'CODPLANO' })
  codplano: number;

  @Column('int', { primary: true, name: 'CODGAR' })
  codgar: number;

  @Column('float', { name: 'VLRMIN', precision: 53, default: () => '(0)' })
  vlrmin: number;

  @Column('float', { name: 'VLRMAX', precision: 53, default: () => '(0)' })
  vlrmax: number;

  @Column('money', { name: 'PRECO', default: () => '(0)' })
  preco: number;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfgars)
  @JoinColumn([{ name: 'CODGAR', referencedColumnName: 'codprod' }])
  codgar2: TgfproEntity;

  @ManyToOne(() => TgfplaEntity, (tgfplaEntity) => tgfplaEntity.tgfgars, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPLANO', referencedColumnName: 'codplano' }])
  codplano2: TgfplaEntity;
}
