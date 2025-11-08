import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TCCFIN', ['codcc', 'nufinorig'], { unique: true })
@Entity('TCCFIN', { schema: 'SANKHYA' })
export class TccfinEntity {
  @Column('int', { primary: true, name: 'CODCC' })
  codcc: number;

  @Column('int', { name: 'NUMNEG' })
  numneg: number;

  @Column('int', { primary: true, name: 'NUFINORIG' })
  nufinorig: number;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tccfins, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUFINORIG', referencedColumnName: 'nufin' }])
  nufinorig2: TgffinEntity;
}
