import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TgfidiEntity } from './tGFIDI.entity';
import { TgfiteEntity } from './tGFITE.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFIII', ['nunota', 'sequencia'], { unique: true })
@Entity('TGFIII', { schema: 'SANKHYA' })
export class TgfiiiEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'BASEIMPOSTO', precision: 53, default: () => '(0)' })
  baseimposto: number;

  @Column('float', { name: 'VLRDESPADUA', precision: 53, default: () => '(0)' })
  vlrdespadua: number;

  @Column('float', { name: 'VLRIMPOSTO', precision: 53, default: () => '(0)' })
  vlrimposto: number;

  @Column('float', { name: 'VLRIOF', precision: 53, default: () => '(0)' })
  vlriof: number;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('char', { name: 'IMPTAGEXCNOTNAC', length: 1, default: () => "'N'" })
  imptagexcnotnac: string;

  @OneToMany(() => TgfidiEntity, (tgfidiEntity) => tgfidiEntity.tgfiii)
  tgfidis: TgfidiEntity[];

  @OneToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfiii, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfiiis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
