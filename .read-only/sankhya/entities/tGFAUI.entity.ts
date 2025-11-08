import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFAUI', ['nunota', 'sequencia'], { unique: true })
@Entity('TGFAUI', { schema: 'SANKHYA' })
export class TgfauiEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'BASEICMS', precision: 53, default: () => '(0)' })
  baseicms: number;

  @Column('float', { name: 'VLRICMS', precision: 53, default: () => '(0)' })
  vlricms: number;

  @Column('float', { name: 'BASESUBSTIT', precision: 53, default: () => '(0)' })
  basesubstit: number;

  @Column('float', { name: 'VLRSUBST', precision: 53, default: () => '(0)' })
  vlrsubst: number;

  @Column('float', { name: 'BASEIPI', precision: 53, default: () => '(0)' })
  baseipi: number;

  @Column('float', { name: 'VLRIPI', precision: 53, default: () => '(0)' })
  vlripi: number;

  @Column('float', { name: 'VLRTOT', precision: 53, default: () => '(0)' })
  vlrtot: number;

  @Column('smallint', { name: 'CODCFO', default: () => '(0)' })
  codcfo: number;

  @Column('float', { name: 'VLRREPRED', precision: 53, default: () => '(0)' })
  vlrrepred: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @OneToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfaui, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfauis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
