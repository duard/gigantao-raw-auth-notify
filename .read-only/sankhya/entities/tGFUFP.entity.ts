import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfmdfeEntity } from './tGFMDFE.entity';
import { TsiufsEntity } from './tSIUFS.entity';

@Index('PK_TGFUFP', ['nuviag', 'seqmdfe', 'coduf', 'seqviagem'], {
  unique: true,
})
@Entity('TGFUFP', { schema: 'SANKHYA' })
export class TgfufpEntity {
  @Column('int', { primary: true, name: 'NUVIAG' })
  nuviag: number;

  @Column('smallint', { primary: true, name: 'SEQMDFE' })
  seqmdfe: number;

  @Column('smallint', { primary: true, name: 'CODUF' })
  coduf: number;

  @Column('smallint', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('int', { primary: true, name: 'SEQVIAGEM', default: () => '(0)' })
  seqviagem: number;

  @ManyToOne(() => TgfmdfeEntity, (tgfmdfeEntity) => tgfmdfeEntity.tgfufps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUVIAG', referencedColumnName: 'nuviag' },
    { name: 'SEQMDFE', referencedColumnName: 'seqmdfe' },
  ])
  tgfmdfe: TgfmdfeEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tgfufps)
  @JoinColumn([{ name: 'CODUF', referencedColumnName: 'coduf' }])
  coduf2: TsiufsEntity;
}
