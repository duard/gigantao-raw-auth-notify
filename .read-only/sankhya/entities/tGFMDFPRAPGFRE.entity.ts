import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfmdfpgfreEntity } from './tGFMDFPGFRE.entity';

@Index('PK_TGFMDFPRAPGFRE', ['nuviag', 'seqmdfe', 'seqpgfre', 'seqprapgfre'], {
  unique: true,
})
@Entity('TGFMDFPRAPGFRE', { schema: 'SANKHYA' })
export class TgfmdfprapgfreEntity {
  @Column('int', { primary: true, name: 'NUVIAG' })
  nuviag: number;

  @Column('smallint', { primary: true, name: 'SEQMDFE' })
  seqmdfe: number;

  @Column('smallint', { primary: true, name: 'SEQPGFRE' })
  seqpgfre: number;

  @Column('smallint', { primary: true, name: 'SEQPRAPGFRE' })
  seqprapgfre: number;

  @Column('smallint', { name: 'PARCELA', nullable: true })
  parcela: number | null;

  @Column('datetime', { name: 'VENCIMENTO', nullable: true })
  vencimento: Date | null;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;

  @ManyToOne(
    () => TgfmdfpgfreEntity,
    (tgfmdfpgfreEntity) => tgfmdfpgfreEntity.tgfmdfprapgfres,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'NUVIAG', referencedColumnName: 'nuviag' },
    { name: 'SEQMDFE', referencedColumnName: 'seqmdfe' },
    { name: 'SEQPGFRE', referencedColumnName: 'seqpgfre' },
  ])
  tgfmdfpgfre: TgfmdfpgfreEntity;
}
