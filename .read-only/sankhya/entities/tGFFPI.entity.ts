import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiufsEntity } from './tSIUFS.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFFPI', ['coduf', 'codtiptit'], { unique: true })
@Entity('TGFFPI', { schema: 'SANKHYA' })
export class TgffpiEntity {
  @Column('smallint', { primary: true, name: 'CODUF' })
  coduf: number;

  @Column('smallint', { primary: true, name: 'CODTIPTIT' })
  codtiptit: number;

  @Column('text', { name: 'FORMULA' })
  formula: string;

  @Column('varchar', { name: 'FINPARAGNRE', nullable: true, length: 1 })
  finparagnre: string | null;

  @Column('smallint', { name: 'CODGUF', nullable: true })
  codguf: number | null;

  @Column('varchar', { name: 'RECDESP', nullable: true, length: 1 })
  recdesp: string | null;

  @Column('int', { name: 'INDVALDOIS', nullable: true })
  indvaldois: number | null;

  @Column('int', { name: 'INDVALUM', nullable: true })
  indvalum: number | null;

  @Column('text', { name: 'FORMULADOIS', nullable: true })
  formuladois: string | null;

  @Column('int', { name: 'CODPRODGNRE', nullable: true })
  codprodgnre: number | null;

  @Column('int', { name: 'CODRECGNRE', nullable: true })
  codrecgnre: number | null;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tgffpis)
  @JoinColumn([{ name: 'CODUF', referencedColumnName: 'coduf' }])
  coduf2: TsiufsEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tgffpis)
  @JoinColumn([{ name: 'CODTIPTIT', referencedColumnName: 'codtiptit' }])
  codtiptit2: TgftitEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgffpis)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}
