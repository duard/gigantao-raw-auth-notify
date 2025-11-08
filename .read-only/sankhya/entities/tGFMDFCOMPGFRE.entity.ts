import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfmdfpgfreEntity } from './tGFMDFPGFRE.entity';

@Index('PK_TGFMDFCOMPGFRE', ['nuviag', 'seqmdfe', 'seqpgfre', 'seqcompgfre'], {
  unique: true,
})
@Entity('TGFMDFCOMPGFRE', { schema: 'SANKHYA' })
export class TgfmdfcompgfreEntity {
  @Column('int', { primary: true, name: 'NUVIAG' })
  nuviag: number;

  @Column('smallint', { primary: true, name: 'SEQMDFE' })
  seqmdfe: number;

  @Column('smallint', { primary: true, name: 'SEQPGFRE' })
  seqpgfre: number;

  @Column('smallint', { primary: true, name: 'SEQCOMPGFRE' })
  seqcompgfre: number;

  @Column('varchar', { name: 'TPCOMP', nullable: true, length: 2 })
  tpcomp: string | null;

  @Column('float', { name: 'VLRCOMP', nullable: true, precision: 53 })
  vlrcomp: number | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 60 })
  descricao: string | null;

  @Column('char', { name: 'INDALTODESEMP', nullable: true, length: 1 })
  indaltodesemp: string | null;

  @Column('float', { name: 'VLRADIANT', nullable: true, precision: 53 })
  vlradiant: number | null;

  @ManyToOne(
    () => TgfmdfpgfreEntity,
    (tgfmdfpgfreEntity) => tgfmdfpgfreEntity.tgfmdfcompgfres,
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
