import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfpclEntity } from './tGFPCL.entity';

@Index('PK_TGFVTP', ['codvtp'], { unique: true })
@Entity('TGFVTP', { schema: 'SANKHYA' })
export class TgfvtpEntity {
  @Column('int', { primary: true, name: 'CODVTP' })
  codvtp: number;

  @Column('varchar', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'R'" })
  tipo: string;

  @Column('smallint', { name: 'LEADTIME' })
  leadtime: number;

  @Column('smallint', { name: 'LEADTIMECONF', nullable: true })
  leadtimeconf: number | null;

  @Column('smallint', { name: 'LEADTIMEPROC', nullable: true })
  leadtimeproc: number | null;

  @Column('smallint', { name: 'LEADTIMEEMPC', nullable: true })
  leadtimeempc: number | null;

  @Column('smallint', { name: 'LEADTIMEDESP', nullable: true })
  leadtimedesp: number | null;

  @Column('smallint', { name: 'QTDITENS', nullable: true })
  qtditens: number | null;

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codvtp)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfpclEntity, (tgfpclEntity) => tgfpclEntity.codvtp2)
  tgfpcls: TgfpclEntity[];

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfvtps)
  @JoinColumn([{ name: 'CODMODPED', referencedColumnName: 'nunota' }])
  codmodped: TgfcabEntity;
}
