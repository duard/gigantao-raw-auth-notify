import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFE350', ['codemp', 'dtinicio', 'sequencia'], { unique: true })
@Entity('TGFE350', { schema: 'SANKHYA' })
export class Tgfe350Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'COD_OR' })
  codOr: number;

  @Column('float', { name: 'VL_OR', precision: 53 })
  vlOr: number;

  @Column('datetime', { name: 'DT_VCTO', nullable: true })
  dtVcto: Date | null;

  @Column('varchar', { name: 'COD_REC', nullable: true, length: 30 })
  codRec: string | null;

  @Column('varchar', { name: 'UF_OR', nullable: true, length: 2 })
  ufOr: string | null;

  @Column('varchar', { name: 'NUM_PROC', nullable: true, length: 30 })
  numProc: string | null;

  @Column('smallint', { name: 'IND_PROC', nullable: true })
  indProc: number | null;

  @Column('varchar', { name: 'DESC_PROC', nullable: true, length: 250 })
  descProc: string | null;

  @Column('smallint', { name: 'COD_INF_OBS', nullable: true })
  codInfObs: number | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfes2)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
