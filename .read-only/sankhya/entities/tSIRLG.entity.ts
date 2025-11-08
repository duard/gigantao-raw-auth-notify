import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiacmEntity } from './tSIACM.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSIRLG', ['codusu', 'seqacesso'], { unique: true })
@Index('TSIRLG_IDX_01', ['sessionid'], {})
@Entity('TSIRLG', { schema: 'SANKHYA' })
export class TsirlgEntity {
  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('int', { primary: true, name: 'SEQACESSO' })
  seqacesso: number;

  @Column('datetime', { name: 'LOGIN' })
  login: Date;

  @Column('datetime', { name: 'LOGOUT', nullable: true })
  logout: Date | null;

  @Column('varchar', { name: 'IP', nullable: true, length: 50 })
  ip: string | null;

  @Column('varchar', { name: 'AGENTE', nullable: true, length: 256 })
  agente: string | null;

  @Column('char', { name: 'EVENTO', nullable: true, length: 1 })
  evento: string | null;

  @Column('varchar', { name: 'SESSIONID', nullable: true, length: 254 })
  sessionid: string | null;

  @OneToMany(() => TsiacmEntity, (tsiacmEntity) => tsiacmEntity.tsirlg)
  tsiacms: TsiacmEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsirlgs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
