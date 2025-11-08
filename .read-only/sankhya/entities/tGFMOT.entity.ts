import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFMOT', ['nunota', 'seqmot'], { unique: true })
@Entity('TGFMOT', { schema: 'SANKHYA' })
export class TgfmotEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQMOT' })
  seqmot: number;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfmots)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}
