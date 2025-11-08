import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfpfxEntity } from './tGFPFX.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFINSSREF', ['codparc', 'competencia'], { unique: true })
@Entity('TGFINSSREF', { schema: 'SANKHYA' })
export class TgfinssrefEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('datetime', { primary: true, name: 'COMPETENCIA' })
  competencia: Date;

  @Column('float', { name: 'BASE', precision: 53 })
  base: number;

  @Column('float', { name: 'VLRIMP', precision: 53 })
  vlrimp: number;

  @ManyToOne(() => TgfpfxEntity, (tgfpfxEntity) => tgfpfxEntity.tgfinssrefs)
  @JoinColumn([{ name: 'COMPETENCIA', referencedColumnName: 'competencia' }])
  competencia2: TgfpfxEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfinssrefs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
