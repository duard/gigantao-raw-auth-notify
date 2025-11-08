import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmsregEntity } from './tMSREG.entity';

@Index('PK_TMSREGCID', ['codreg', 'codcid'], { unique: true })
@Entity('TMSREGCID', { schema: 'SANKHYA' })
export class TmsregcidEntity {
  @Column('int', { primary: true, name: 'CODREG' })
  codreg: number;

  @Column('int', { primary: true, name: 'CODCID' })
  codcid: number;

  @Column('int', { name: 'DIASPREVENTREGA', nullable: true })
  diaspreventrega: number | null;

  @ManyToOne(() => TmsregEntity, (tmsregEntity) => tmsregEntity.tmsregcs)
  @JoinColumn([{ name: 'CODREG', referencedColumnName: 'codreg' }])
  codreg2: TmsregEntity;
}
