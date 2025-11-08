import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfnmdfeEntity } from './tGFNMDFE.entity';

@Index('PK_TGFPERI', ['nuviag', 'seqmdfe', 'nunota', 'numonu'], {
  unique: true,
})
@Entity('TGFPERI', { schema: 'SANKHYA' })
export class TgfperiEntity {
  @Column('int', { primary: true, name: 'NUVIAG' })
  nuviag: number;

  @Column('smallint', { primary: true, name: 'SEQMDFE' })
  seqmdfe: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { primary: true, name: 'NUMONU', length: 4 })
  numonu: string;

  @Column('varchar', { name: 'QTDTOTPROD', length: 20 })
  qtdtotprod: string;

  @ManyToOne(
    () => TgfnmdfeEntity,
    (tgfnmdfeEntity) => tgfnmdfeEntity.tgfperis,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'NUVIAG', referencedColumnName: 'nuviag' },
    { name: 'SEQMDFE', referencedColumnName: 'seqmdfe' },
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
  ])
  tgfnmdfe: TgfnmdfeEntity;
}
