import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsigruEntity } from './tSIGRU.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TMIAUN', ['codung', 'codusu', 'codgrupo'], { unique: true })
@Entity('TMIAUN', { schema: 'SANKHYA' })
export class TmiaunEntity {
  @Column('int', { primary: true, name: 'CODUNG' })
  codung: number;

  @Column('char', { name: 'TEMACESSO', length: 1, default: () => "'N'" })
  temacesso: string;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { primary: true, name: 'CODGRUPO' })
  codgrupo: number;

  @ManyToOne(() => TsigruEntity, (tsigruEntity) => tsigruEntity.tmiauns)
  @JoinColumn([{ name: 'CODGRUPO', referencedColumnName: 'codgrupo' }])
  codgrupo2: TsigruEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmiauns)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
