import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmiefeEntity } from './tMIEFE.entity';

@Index('PK_TMICAU', ['nuefeito', 'nucausa'], { unique: true })
@Entity('TMICAU', { schema: 'SANKHYA' })
export class TmicauEntity {
  @Column('int', { primary: true, name: 'NUEFEITO' })
  nuefeito: number;

  @Column('int', { primary: true, name: 'NUCAUSA' })
  nucausa: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 250 })
  descricao: string | null;

  @Column('char', { name: 'IMPORTANCIA', nullable: true, length: 1 })
  importancia: string | null;

  @Column('int', { name: 'NUCAUSAORIG', default: () => '(0)' })
  nucausaorig: number;

  @Column('varchar', { name: 'DETALHES', length: 3103 })
  detalhes: string;

  @ManyToOne(() => TmiefeEntity, (tmiefeEntity) => tmiefeEntity.tmicaus)
  @JoinColumn([{ name: 'NUEFEITO', referencedColumnName: 'nuefeito' }])
  nuefeito2: TmiefeEntity;
}
