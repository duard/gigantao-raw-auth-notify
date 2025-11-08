import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TGFRAP', ['nurateio', 'nufin'], { unique: true })
@Index('TGFRAP_I01', ['nufin'], {})
@Entity('TGFRAP', { schema: 'SANKHYA' })
export class TgfrapEntity {
  @Column('int', { primary: true, name: 'NURATEIO' })
  nurateio: number;

  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('smallint', { name: 'RECDESP', default: () => '(-1)' })
  recdesp: number;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'R'" })
  tipo: string;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfraps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;
}
