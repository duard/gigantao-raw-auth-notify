import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcaanoEntity } from './tCAANO.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TcamapEntity } from './tCAMAP.entity';

@Index('PK_TCACON', ['codcon', 'codano'], { unique: true })
@Entity('TCACON', { schema: 'SANKHYA' })
export class TcaconEntity {
  @Column('char', { primary: true, name: 'CODCON', length: 2 })
  codcon: string;

  @Column('smallint', { primary: true, name: 'CODANO' })
  codano: number;

  @Column('money', { name: 'VLRMIN', nullable: true })
  vlrmin: number | null;

  @Column('money', { name: 'VLRMAX', nullable: true })
  vlrmax: number | null;

  @Column('char', { name: 'NOMCON', nullable: true, length: 30 })
  nomcon: string | null;

  @Column('char', { name: 'FLGABXMED', nullable: true, length: 1 })
  flgabxmed: string | null;

  @Column('smallint', { name: 'ORDCON' })
  ordcon: number;

  @Column('char', { name: 'SITCON', nullable: true, length: 1 })
  sitcon: string | null;

  @ManyToOne(() => TcaanoEntity, (tcaanoEntity) => tcaanoEntity.tcacons)
  @JoinColumn([{ name: 'CODANO', referencedColumnName: 'codano' }])
  codano2: TcaanoEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcacons)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @OneToMany(() => TcamapEntity, (tcamapEntity) => tcamapEntity.tcacon)
  tcamaps: TcamapEntity[];
}
