import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFE340', ['codemp', 'dtinicio', 'sequencia'], { unique: true })
@Entity('TGFE340', { schema: 'SANKHYA' })
export class Tgfe340Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'COD_AJ' })
  codAj: number;

  @Column('float', { name: 'VL_AJ', precision: 53 })
  vlAj: number;

  @Column('varchar', { name: 'NUM_DA', nullable: true, length: 30 })
  numDa: string | null;

  @Column('varchar', { name: 'NUM_PROC', nullable: true, length: 30 })
  numProc: string | null;

  @Column('smallint', { name: 'IND_PROC', nullable: true })
  indProc: number | null;

  @Column('varchar', { name: 'DESC_PROC', nullable: true, length: 250 })
  descProc: string | null;

  @Column('smallint', { name: 'COD_INF_OBS', nullable: true })
  codInfObs: number | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfes)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
