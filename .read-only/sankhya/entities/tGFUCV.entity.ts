import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfmdfeEntity } from './tGFMDFE.entity';

@Index('PK_TGFUCV', ['nuviag', 'seqmdfe', 'codunicv'], { unique: true })
@Entity('TGFUCV', { schema: 'SANKHYA' })
export class TgfucvEntity {
  @Column('int', { primary: true, name: 'NUVIAG' })
  nuviag: number;

  @Column('smallint', { primary: true, name: 'SEQMDFE' })
  seqmdfe: number;

  @Column('smallint', { primary: true, name: 'CODUNICV' })
  codunicv: number;

  @Column('varchar', { name: 'IDUNIDCARGAVAZIA', length: 20 })
  idunidcargavazia: string;

  @Column('smallint', { name: 'TIPOUNICARGAVAZIA', default: () => '(1)' })
  tipounicargavazia: number;

  @ManyToOne(() => TgfmdfeEntity, (tgfmdfeEntity) => tgfmdfeEntity.tgfucvs)
  @JoinColumn([
    { name: 'NUVIAG', referencedColumnName: 'nuviag' },
    { name: 'SEQMDFE', referencedColumnName: 'seqmdfe' },
  ])
  tgfmdfe: TgfmdfeEntity;
}
