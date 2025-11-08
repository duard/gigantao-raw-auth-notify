import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfexpnEntity } from './tGFEXPN.entity';

@Index(
  'PK_TGFEXPC',
  ['nunota', 'nrore', 'nrodeclaracao', 'codcfo', 'natureza'],
  { unique: true },
)
@Entity('TGFEXPC', { schema: 'SANKHYA' })
export class TgfexpcEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { primary: true, name: 'NRORE', length: 12 })
  nrore: string;

  @Column('varchar', { primary: true, name: 'NRODECLARACAO', length: 14 })
  nrodeclaracao: string;

  @Column('int', { primary: true, name: 'CODCFO' })
  codcfo: number;

  @Column('varchar', { name: 'NROCONHEC', nullable: true, length: 18 })
  nroconhec: string | null;

  @Column('varchar', { primary: true, name: 'NATUREZA', length: 5 })
  natureza: string;

  @ManyToOne(() => TgfexpnEntity, (tgfexpnEntity) => tgfexpnEntity.tgfexpcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'NRORE', referencedColumnName: 'nrore' },
    { name: 'NRODECLARACAO', referencedColumnName: 'nrodeclaracao' },
  ])
  tgfexpn: TgfexpnEntity;
}
