import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TcidibiEntity } from './tCIDIBI.entity';

@Index('PK_TCIDIB', ['nurateio'], { unique: true })
@Entity('TCIDIB', { schema: 'SANKHYA' })
export class TcidibEntity {
  @Column('int', { primary: true, name: 'NURATEIO' })
  nurateio: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('decimal', { name: 'CODUSU', nullable: true, precision: 5, scale: 0 })
  codusu: number | null;

  @Column('char', {
    name: 'STATUSRATEIO',
    nullable: true,
    length: 1,
    default: () => "'P'",
  })
  statusrateio: string | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tcidibs)
  @JoinColumn([{ name: 'NUNOTADESP', referencedColumnName: 'nunota' }])
  nunotadesp: TgfcabEntity;

  @OneToMany(() => TcidibiEntity, (tcidibiEntity) => tcidibiEntity.nurateio2)
  tcidibis: TcidibiEntity[];
}
