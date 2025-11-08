import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsigruEntity } from './tSIGRU.entity';

@Index('PK_TSIGPU', ['sequencia', 'codgrupo', 'codusu'], { unique: true })
@Entity('TSIGPU', { schema: 'SANKHYA' })
export class TsigpuEntity {
  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'CODGRUPO' })
  codgrupo: number;

  @Column('datetime', { name: 'DATAINICIO' })
  datainicio: Date;

  @Column('datetime', { name: 'DATAFIM', nullable: true })
  datafim: Date | null;

  @Column('char', { name: 'REPASSAR', nullable: true, length: 1 })
  repassar: string | null;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsigpus)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TsigruEntity, (tsigruEntity) => tsigruEntity.tsigpus)
  @JoinColumn([{ name: 'CODGRUPO', referencedColumnName: 'codgrupo' }])
  codgrupo2: TsigruEntity;
}
