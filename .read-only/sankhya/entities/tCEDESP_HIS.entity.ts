import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TsimoeEntity } from './tSIMOE.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TCEDESP_HIS', ['nuimp', 'sequencia', 'seqhist'], { unique: true })
@Entity('TCEDESP_HIS', { schema: 'SANKHYA' })
export class TcedespHisEntity {
  @Column('smallint', { primary: true, name: 'SEQHIST' })
  seqhist: number;

  @Column('int', { primary: true, name: 'NUIMP' })
  nuimp: number;

  @Column('varchar', { name: 'GRUPO', length: 40 })
  grupo: string;

  @Column('datetime', { name: 'DTCOTACAO' })
  dtcotacao: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'VLRDESDOB', precision: 53 })
  vlrdesdob: number;

  @Column('float', { name: 'VLRMOEDA', precision: 53, default: () => '(0)' })
  vlrmoeda: number;

  @Column('datetime', { name: 'DTVENC' })
  dtvenc: Date;

  @Column('smallint', { name: 'RECDESP', default: () => '(1)' })
  recdesp: number;

  @Column('varchar', { name: 'PROVISAO', length: 1, default: () => "'N'" })
  provisao: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('varchar', { name: 'HISTORICO', nullable: true, length: 250 })
  historico: string | null;

  @Column('datetime', { name: 'DTNEG', nullable: true })
  dtneg: Date | null;

  @Column('int', { name: 'NUMDOC', nullable: true })
  numdoc: number | null;

  @Column('float', { name: 'VLREMMOEDA', nullable: true, precision: 53 })
  vlremmoeda: number | null;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tcedespHis)
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin: TgffinEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tcedespHis)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint: TsictaEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.tcedespHis)
  @JoinColumn([{ name: 'CODMOEDA', referencedColumnName: 'codmoeda' }])
  codmoeda: TsimoeEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tcedespHis)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tcedespHis)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcedespHis)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}
