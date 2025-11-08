import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsiclaEntity } from './tSICLA.entity';

@Index('PK_TSIEXU', ['codcla', 'codusu'], { unique: true })
@Entity('TSIEXU', { schema: 'SANKHYA' })
export class TsiexuEntity {
  @Column('smallint', { primary: true, name: 'CODCLA' })
  codcla: number;

  @Column('char', { name: 'TIPOVISU', length: 1 })
  tipovisu: string;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsiexus)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TsiclaEntity, (tsiclaEntity) => tsiclaEntity.tsiexus)
  @JoinColumn([{ name: 'CODCLA', referencedColumnName: 'codcla' }])
  codcla2: TsiclaEntity;
}
