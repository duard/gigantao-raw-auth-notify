import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcsvEntity } from './tGFCSV.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFMCS', ['codprod', 'codcomp'], { unique: true })
@Entity('TGFMCS', { schema: 'SANKHYA' })
export class TgfmcsEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODCOMP' })
  codcomp: number;

  @Column('smallint', { name: 'TIPCOMP' })
  tipcomp: number;

  @Column('float', { name: 'VLRPADRAO', nullable: true, precision: 53 })
  vlrpadrao: number | null;

  @ManyToOne(() => TgfcsvEntity, (tgfcsvEntity) => tgfcsvEntity.tgfmcs)
  @JoinColumn([{ name: 'CODCOMP', referencedColumnName: 'codcomp' }])
  codcomp2: TgfcsvEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfmcs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
