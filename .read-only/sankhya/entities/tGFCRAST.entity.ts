import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfirastEntity } from './tGFIRAST.entity';

@Index('PK_TGFCRAST', ['nurast'], { unique: true })
@Entity('TGFCRAST', { schema: 'SANKHYA' })
export class TgfcrastEntity {
  @Column('int', { primary: true, name: 'NURAST' })
  nurast: number;

  @Column('smallint', { name: 'OPCRAST', nullable: true })
  opcrast: number | null;

  @Column('char', { name: 'TIPORAST', nullable: true, length: 1 })
  tiporast: string | null;

  @Column('datetime', { name: 'DTRAST', nullable: true })
  dtrast: Date | null;

  @Column('datetime', { name: 'DHSOLICT', nullable: true })
  dhsolict: Date | null;

  @Column('datetime', { name: 'DHFIMRAST', nullable: true })
  dhfimrast: Date | null;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcrasts)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgfirastEntity, (tgfirastEntity) => tgfirastEntity.nurast2)
  tgfirasts: TgfirastEntity[];
}
