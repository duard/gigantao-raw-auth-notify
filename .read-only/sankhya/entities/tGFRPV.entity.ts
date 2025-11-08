import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiregEntity } from './tSIREG.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfvenEntity } from './tGFVEN.entity';

@Index('PK_TGFRPV', ['codvend', 'codreg', 'codparc'], { unique: true })
@Index('TGFRPV_I01', ['codreg', 'codvend', 'codparc'], {})
@Entity('TGFRPV', { schema: 'SANKHYA' })
export class TgfrpvEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { primary: true, name: 'CODVEND' })
  codvend: number;

  @Column('int', { primary: true, name: 'CODREG', default: () => '(0)' })
  codreg: number;

  @ManyToOne(() => TsiregEntity, (tsiregEntity) => tsiregEntity.tgfrpvs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODREG', referencedColumnName: 'codreg' }])
  codreg2: TsiregEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfrpvs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tgfrpvs)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend2: TgfvenEntity;
}
