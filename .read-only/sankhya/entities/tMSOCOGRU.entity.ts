import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsigruEntity } from './tSIGRU.entity';

@Index('PK_TMSOCOGRU', ['nuocor', 'codgrupo'], { unique: true })
@Entity('TMSOCOGRU', { schema: 'SANKHYA' })
export class TmsocogruEntity {
  @Column('int', { primary: true, name: 'NUOCOR' })
  nuocor: number;

  @Column('smallint', { primary: true, name: 'CODGRUPO' })
  codgrupo: number;

  @ManyToOne(() => TsigruEntity, (tsigruEntity) => tsigruEntity.tmsocogrus)
  @JoinColumn([{ name: 'CODGRUPO', referencedColumnName: 'codgrupo' }])
  codgrupo2: TsigruEntity;
}
