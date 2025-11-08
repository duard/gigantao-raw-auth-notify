import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiimpEntity } from './tSIIMP.entity';
import { TsigruEntity } from './tSIGRU.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSIACI', ['codusu', 'codgrupo', 'codrel'], { unique: true })
@Index('TSIACI_I01', ['codrel'], {})
@Entity('TSIACI', { schema: 'SANKHYA' })
export class TsiaciEntity {
  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { primary: true, name: 'CODGRUPO' })
  codgrupo: number;

  @Column('int', { primary: true, name: 'CODREL' })
  codrel: number;

  @Column('char', { name: 'CONS', length: 1, default: () => "'N'" })
  cons: string;

  @Column('char', { name: 'ALTERA', length: 1, default: () => "'N'" })
  altera: string;

  @Column('char', { name: 'FILTRO', length: 1, default: () => "'N'" })
  filtro: string;

  @Column('char', { name: 'RESUMO', length: 1, default: () => "'N'" })
  resumo: string;

  @Column('char', { name: 'SEGURANCA', length: 1, default: () => "'N'" })
  seguranca: string;

  @ManyToOne(() => TsiimpEntity, (tsiimpEntity) => tsiimpEntity.tsiacis, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODREL', referencedColumnName: 'codrel' }])
  codrel2: TsiimpEntity;

  @ManyToOne(() => TsigruEntity, (tsigruEntity) => tsigruEntity.tsiacis)
  @JoinColumn([{ name: 'CODGRUPO', referencedColumnName: 'codgrupo' }])
  codgrupo2: TsigruEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsiacis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
