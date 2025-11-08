import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgflrcEntity } from './tGFLRC.entity';

@Index('PK_TGFILRC', ['nulrc', 'seqlrc'], { unique: true })
@Entity('TGFILRC', { schema: 'SANKHYA' })
export class TgfilrcEntity {
  @Column('int', { primary: true, name: 'NULRC' })
  nulrc: number;

  @Column('smallint', { primary: true, name: 'SEQLRC' })
  seqlrc: number;

  @Column('smallint', { name: 'NROLINHA' })
  nrolinha: number;

  @Column('varchar', { name: 'CODMSG', nullable: true, length: 10 })
  codmsg: string | null;

  @Column('text', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('date', { name: 'DTMOV', nullable: true })
  dtmov: Date | null;

  @Column('float', { name: 'VLRTRANSACAO', nullable: true, precision: 53 })
  vlrtransacao: number | null;

  @Column('float', { name: 'VLRPARCELA', nullable: true, precision: 53 })
  vlrparcela: number | null;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('varchar', { name: 'NUMNSU', nullable: true, length: 15 })
  numnsu: string | null;

  @ManyToOne(() => TgflrcEntity, (tgflrcEntity) => tgflrcEntity.tgfilrcs)
  @JoinColumn([{ name: 'NULRC', referencedColumnName: 'nulrc' }])
  nulrc2: TgflrcEntity;
}
