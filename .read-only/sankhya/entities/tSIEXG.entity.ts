import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsigruEntity } from './tSIGRU.entity';
import { TsiclaEntity } from './tSICLA.entity';

@Index('PK_TSIEXG', ['codcla', 'codgrupo', 'tipovisu'], { unique: true })
@Entity('TSIEXG', { schema: 'SANKHYA' })
export class TsiexgEntity {
  @Column('smallint', { primary: true, name: 'CODCLA' })
  codcla: number;

  @Column('smallint', { primary: true, name: 'CODGRUPO' })
  codgrupo: number;

  @Column('char', { primary: true, name: 'TIPOVISU', length: 1 })
  tipovisu: string;

  @ManyToOne(() => TsigruEntity, (tsigruEntity) => tsigruEntity.tsiexgs)
  @JoinColumn([{ name: 'CODGRUPO', referencedColumnName: 'codgrupo' }])
  codgrupo2: TsigruEntity;

  @ManyToOne(() => TsiclaEntity, (tsiclaEntity) => tsiclaEntity.tsiexgs)
  @JoinColumn([{ name: 'CODCLA', referencedColumnName: 'codcla' }])
  codcla2: TsiclaEntity;
}
