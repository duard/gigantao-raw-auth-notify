import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiufsEntity } from './tSIUFS.entity';
import { TgaartsEntity } from './tGAARTS.entity';

@Index('PK_TGAART', ['nuart'], { unique: true })
@Entity('TGAART', { schema: 'SANKHYA' })
export class TgaartEntity {
  @Column('int', { primary: true, name: 'NUART' })
  nuart: number;

  @Column('varchar', { name: 'ARTCREA', nullable: true, length: 20 })
  artcrea: string | null;

  @Column('datetime', { name: 'DTVINC', nullable: true })
  dtvinc: Date | null;

  @Column('smallint', { name: 'ULTSEQ', nullable: true })
  ultseq: number | null;

  @Column('char', { name: 'ARTPRECAD', length: 1, default: () => "'N'" })
  artprecad: string;

  @Column('int', { name: 'QTDREC', default: () => '(0)' })
  qtdrec: number;

  @Column('char', { name: 'TIPNUMERAR', nullable: true, length: 1 })
  tipnumerar: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgaarts)
  @JoinColumn([{ name: 'AGRONOMO', referencedColumnName: 'codparc' }])
  agronomo: TgfparEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tgaarts)
  @JoinColumn([{ name: 'CODUF', referencedColumnName: 'coduf' }])
  coduf: TsiufsEntity;

  @OneToMany(() => TgaartsEntity, (tgaartsEntity) => tgaartsEntity.nuart2)
  tgaarts: TgaartsEntity[];
}
