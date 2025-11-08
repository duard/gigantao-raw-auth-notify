import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiimpEntity } from './tSIIMP.entity';

@Index('PK_TSIIMV', ['codrel', 'nomevar'], { unique: true })
@Entity('TSIIMV', { schema: 'SANKHYA' })
export class TsiimvEntity {
  @Column('int', { primary: true, name: 'CODREL' })
  codrel: number;

  @Column('varchar', { primary: true, name: 'NOMEVAR', length: 15 })
  nomevar: string;

  @Column('varchar', { name: 'TIPO', length: 10 })
  tipo: string;

  @Column('varchar', { name: 'VALORPADRAO', length: 15 })
  valorpadrao: string;

  @ManyToOne(() => TsiimpEntity, (tsiimpEntity) => tsiimpEntity.tsiimvs)
  @JoinColumn([{ name: 'CODREL', referencedColumnName: 'codrel' }])
  codrel2: TsiimpEntity;
}
