import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfmdfeEntity } from './tGFMDFE.entity';

@Index('PK_TGFTERCAR', ['nuviag', 'seqmdfe', 'codtercar'], { unique: true })
@Entity('TGFTERCAR', { schema: 'SANKHYA' })
export class TgftercarEntity {
  @Column('int', { primary: true, name: 'NUVIAG' })
  nuviag: number;

  @Column('smallint', { primary: true, name: 'SEQMDFE' })
  seqmdfe: number;

  @Column('smallint', { primary: true, name: 'CODTERCAR' })
  codtercar: number;

  @Column('varchar', { name: 'CODTERMCARREG', length: 8 })
  codtermcarreg: string;

  @Column('varchar', { name: 'NOMETERMCARREG', length: 60 })
  nometermcarreg: string;

  @ManyToOne(() => TgfmdfeEntity, (tgfmdfeEntity) => tgfmdfeEntity.tgftercars)
  @JoinColumn([
    { name: 'NUVIAG', referencedColumnName: 'nuviag' },
    { name: 'SEQMDFE', referencedColumnName: 'seqmdfe' },
  ])
  tgfmdfe: TgfmdfeEntity;
}
