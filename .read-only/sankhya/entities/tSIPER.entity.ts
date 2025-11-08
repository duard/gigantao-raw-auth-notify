import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsigruEntity } from './tSIGRU.entity';

@Index('PK_TSIPER', ['codgrupo', 'permissao', 'codusu'], { unique: true })
@Entity('TSIPER', { schema: 'SANKHYA' })
export class TsiperEntity {
  @Column('smallint', { primary: true, name: 'CODGRUPO' })
  codgrupo: number;

  @Column('char', { primary: true, name: 'PERMISSAO', length: 30 })
  permissao: string;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { name: 'TIPOACESSO', nullable: true })
  tipoacesso: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsipers)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TsigruEntity, (tsigruEntity) => tsigruEntity.tsipers)
  @JoinColumn([{ name: 'CODGRUPO', referencedColumnName: 'codgrupo' }])
  codgrupo2: TsigruEntity;
}
