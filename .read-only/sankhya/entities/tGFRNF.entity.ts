import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TGFRNF', ['nufin'], { unique: true })
@Entity('TGFRNF', { schema: 'SANKHYA' })
export class TgfrnfEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('int', { name: 'CODNATREND', nullable: true })
  codnatrend: number | null;

  @Column('varchar', { name: 'SEMIREXT', nullable: true, length: 1 })
  semirext: string | null;

  @Column('smallint', { name: 'TRIBIRRFEXT', nullable: true })
  tribirrfext: number | null;

  @Column('varchar', { name: 'TEMDEDIRPF', nullable: true, length: 1 })
  temdedirpf: string | null;

  @Column('smallint', { name: 'CODDEDIRPF', nullable: true })
  coddedirpf: number | null;

  @Column('float', { name: 'VLRDEDBASEIRPF', nullable: true, precision: 53 })
  vlrdedbaseirpf: number | null;

  @Column('varchar', { name: 'IRRFISENTO', nullable: true, length: 1 })
  irrfisento: string | null;

  @Column('smallint', { name: 'TPISENCAO', nullable: true })
  tpisencao: number | null;

  @Column('float', { name: 'VLRISENCAOIDADE', nullable: true, precision: 53 })
  vlrisencaoidade: number | null;

  @Column('datetime', { name: 'DTLAUDO', nullable: true })
  dtlaudo: Date | null;

  @Column('varchar', { name: 'DESCISENCAO', nullable: true, length: 100 })
  descisencao: string | null;

  @Column('datetime', { name: 'DTESCRCONT', nullable: true })
  dtescrcont: Date | null;

  @OneToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfrnf)
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;
}
