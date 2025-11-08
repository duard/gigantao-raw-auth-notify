import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfmdfeEntity } from './tGFMDFE.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFOMDF', ['nuviag', 'seqmdfe', 'dhocor'], { unique: true })
@Entity('TGFOMDF', { schema: 'SANKHYA' })
export class TgfomdfEntity {
  @Column('int', { primary: true, name: 'NUVIAG' })
  nuviag: number;

  @Column('smallint', { primary: true, name: 'SEQMDFE' })
  seqmdfe: number;

  @Column('datetime', {
    primary: true,
    name: 'DHOCOR',
    default: () => 'getdate()',
  })
  dhocor: Date;

  @Column('text', { name: 'OCORRENCIAS', nullable: true })
  ocorrencias: string | null;

  @ManyToOne(() => TgfmdfeEntity, (tgfmdfeEntity) => tgfmdfeEntity.tgfomdfs)
  @JoinColumn([
    { name: 'NUVIAG', referencedColumnName: 'nuviag' },
    { name: 'SEQMDFE', referencedColumnName: 'seqmdfe' },
  ])
  tgfmdfe: TgfmdfeEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfomdfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
