import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCSRUS', ['codusu', 'tipo', 'codusurel'], { unique: true })
@Entity('TCSRUS', { schema: 'SANKHYA' })
export class TcsrusEntity {
  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('char', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @Column('smallint', { primary: true, name: 'CODUSUREL' })
  codusurel: number;

  @Column('char', {
    name: 'VINCULO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  vinculo: string | null;

  @Column('char', {
    name: 'ORIGEM',
    nullable: true,
    length: 1,
    default: () => "'W'",
  })
  origem: string | null;

  @Column('char', {
    name: 'LIDERIMEDIATO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  liderimediato: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsruses)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsruses2)
  @JoinColumn([{ name: 'CODUSUREL', referencedColumnName: 'codusu' }])
  codusurel2: TsiusuEntity;
}
