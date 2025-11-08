import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsigruEntity } from './tSIGRU.entity';

@Index('PK_TDDPER', ['idacesso', 'codusu', 'codgrupo'], { unique: true })
@Entity('TDDPER', { schema: 'SANKHYA' })
export class TddperEntity {
  @Column('varchar', { primary: true, name: 'IDACESSO', length: 100 })
  idacesso: string;

  @Column('smallint', { primary: true, name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('smallint', { primary: true, name: 'CODGRUPO', default: () => '(0)' })
  codgrupo: number;

  @Column('varchar', { name: 'ACESSO', nullable: true, length: 50 })
  acesso: string | null;

  @Column('smallint', { name: 'VERSAO', nullable: true })
  versao: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tddpers)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TsigruEntity, (tsigruEntity) => tsigruEntity.tddpers)
  @JoinColumn([{ name: 'CODGRUPO', referencedColumnName: 'codgrupo' }])
  codgrupo2: TsigruEntity;
}
