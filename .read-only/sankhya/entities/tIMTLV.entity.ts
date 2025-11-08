import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimltvEntity } from './tIMLTV.entity';
import { TimtnpEntity } from './tIMTNP.entity';
import { TimtvpEntity } from './tIMTVP.entity';

@Index('PK_TIMTLV', ['tlvsequencia', 'tlvcontrato'], { unique: true })
@Entity('TIMTLV', { schema: 'SANKHYA' })
export class TimtlvEntity {
  @Column('int', { primary: true, name: 'TLVSEQUENCIA' })
  tlvsequencia: number;

  @Column('int', { primary: true, name: 'TLVCONTRATO' })
  tlvcontrato: number;

  @Column('datetime', { name: 'TLVDATA', default: () => 'getdate()' })
  tlvdata: Date;

  @Column('varchar', { name: 'TLVCOMENTARIO', nullable: true, length: 50 })
  tlvcomentario: string | null;

  @Column('char', { name: 'TLVESTAGIO', length: 2, default: () => "'CA'" })
  tlvestagio: string;

  @Column('datetime', { name: 'TLVDATAEFETIVACAO', nullable: true })
  tlvdataefetivacao: Date | null;

  @Column('float', { name: 'TLVVLTRANSF', precision: 53 })
  tlvvltransf: number;

  @Column('float', { name: 'TLVTXTRANSF', nullable: true, precision: 53 })
  tlvtxtransf: number | null;

  @Column('int', { name: 'TLVNURENEG', nullable: true })
  tlvnureneg: number | null;

  @Column('char', { name: 'TLVLEGADO', nullable: true, length: 1 })
  tlvlegado: string | null;

  @ManyToOne(() => TimltvEntity, (timltvEntity) => timltvEntity.timtlvs)
  @JoinColumn([{ name: 'TLVCONTRATO', referencedColumnName: 'ltvcodigo' }])
  tlvcontrato2: TimltvEntity;

  @OneToMany(() => TimtnpEntity, (timtnpEntity) => timtnpEntity.timtlv)
  timtnps: TimtnpEntity[];

  @OneToMany(() => TimtvpEntity, (timtvpEntity) => timtvpEntity.timtlv)
  timtvps: TimtvpEntity[];
}
