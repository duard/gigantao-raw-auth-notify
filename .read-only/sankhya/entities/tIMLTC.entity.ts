import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TsibcoEntity } from './tSIBCO.entity';
import { TimlocEntity } from './tIMLOC.entity';

@Index('PK_TIMLTC', ['ltccodigo', 'ltccontrato'], { unique: true })
@Entity('TIMLTC', { schema: 'SANKHYA' })
export class TimltcEntity {
  @Column('int', { primary: true, name: 'LTCCODIGO' })
  ltccodigo: number;

  @Column('int', { primary: true, name: 'LTCCONTRATO' })
  ltccontrato: number;

  @Column('varchar', { name: 'LTCAGENCIA', nullable: true, length: 20 })
  ltcagencia: string | null;

  @Column('datetime', { name: 'LTCDTINIVIGENCIA', nullable: true })
  ltcdtinivigencia: Date | null;

  @Column('datetime', { name: 'LTCDTRESGATE', nullable: true })
  ltcdtresgate: Date | null;

  @Column('float', { name: 'LTCVLRTITULO', nullable: true, precision: 53 })
  ltcvlrtitulo: number | null;

  @Column('varchar', { name: 'LTCNRODOC', nullable: true, length: 100 })
  ltcnrodoc: string | null;

  @Column('varchar', { name: 'LTCAPOLICE', nullable: true, length: 40 })
  ltcapolice: string | null;

  @Column('float', { name: 'LTCCOMISSAO', nullable: true, precision: 53 })
  ltccomissao: number | null;

  @Column('float', { name: 'LTCVLRPREMIO', nullable: true, precision: 53 })
  ltcvlrpremio: number | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timltcs)
  @JoinColumn([{ name: 'LTCSEGURADORA', referencedColumnName: 'codparc' }])
  ltcseguradora: TgfparEntity;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.timltcs)
  @JoinColumn([{ name: 'LTCBANCO', referencedColumnName: 'codbco' }])
  ltcbanco: TsibcoEntity;

  @ManyToOne(() => TimlocEntity, (timlocEntity) => timlocEntity.timltcs)
  @JoinColumn([{ name: 'LTCCONTRATO', referencedColumnName: 'loccodigo' }])
  ltccontrato2: TimlocEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timltcs2)
  @JoinColumn([{ name: 'LTCCORRETORA', referencedColumnName: 'codparc' }])
  ltccorretora: TgfparEntity;
}
