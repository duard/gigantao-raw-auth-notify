import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsictaEntity } from './tSICTA.entity';
import { TsimoeEntity } from './tSIMOE.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TcecabEntity } from './tCECAB.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsicusEntity } from './tSICUS.entity';

@Index('PK_TCEDESP', ['nuimp', 'sequencia'], { unique: true })
@Index('TCEDESP_I01', ['nufin'], {})
@Entity('TCEDESP', { schema: 'SANKHYA' })
export class TcedespEntity {
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

  @Column('float', { name: 'NUMDOC', nullable: true, precision: 53 })
  numdoc: number | null;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('float', { name: 'VLREMMOEDA', nullable: true, precision: 53 })
  vlremmoeda: number | null;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tcedesps)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint: TsictaEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.tcedesps)
  @JoinColumn([{ name: 'CODMOEDA', referencedColumnName: 'codmoeda' }])
  codmoeda: TsimoeEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tcedesps)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TcecabEntity, (tcecabEntity) => tcecabEntity.tcedesps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUIMP', referencedColumnName: 'nuimp' }])
  nuimp2: TcecabEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcedesps)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tcedesps)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;
}
