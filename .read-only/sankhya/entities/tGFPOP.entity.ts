import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfoccEntity } from './tGFOCC.entity';

@Index('PK_TGFPOP', ['codocc', 'sequencia'], { unique: true })
@Entity('TGFPOP', { schema: 'SANKHYA' })
export class TgfpopEntity {
  @Column('int', { primary: true, name: 'CODOCC' })
  codocc: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'PALAVRACHAVE', length: 200 })
  palavrachave: string;

  @ManyToOne(() => TgfoccEntity, (tgfoccEntity) => tgfoccEntity.tgfpops)
  @JoinColumn([{ name: 'CODOCC', referencedColumnName: 'codocc' }])
  codocc2: TgfoccEntity;
}
