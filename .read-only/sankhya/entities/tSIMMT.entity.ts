import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsimmmEntity } from './tSIMMM.entity';

@Index('PK_TSIMMT', ['codmarca', 'tecla'], { unique: true })
@Entity('TSIMMT', { schema: 'SANKHYA' })
export class TsimmtEntity {
  @Column('int', { primary: true, name: 'CODMARCA' })
  codmarca: number;

  @Column('varchar', { primary: true, name: 'TECLA', length: 1 })
  tecla: string;

  @ManyToOne(() => TsimmmEntity, (tsimmmEntity) => tsimmmEntity.tsimmts)
  @JoinColumn([{ name: 'CODMARCA', referencedColumnName: 'codmarca' }])
  codmarca2: TsimmmEntity;
}
