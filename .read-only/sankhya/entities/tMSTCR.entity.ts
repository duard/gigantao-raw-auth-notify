import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicusEntity } from './tSICUS.entity';

@Index('PK_TMSTCR', ['codtip'], { unique: true })
@Entity('TMSTCR', { schema: 'SANKHYA' })
export class TmstcrEntity {
  @Column('int', { primary: true, name: 'CODTIP' })
  codtip: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('varchar', { name: 'TIPCARMDFE', nullable: true, length: 10 })
  tipcarmdfe: string | null;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tmstcrs)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;
}
