import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpqplaEntity } from './tPQPLA.entity';

@Index('PK_TPQAVD', ['nuavaliacao'], { unique: true })
@Index('UC_TPQAVD', ['nupla', 'nuplaavaliado'], { unique: true })
@Entity('TPQAVD', { schema: 'SANKHYA' })
export class TpqavdEntity {
  @Column('int', { primary: true, name: 'NUAVALIACAO' })
  nuavaliacao: number;

  @Column('int', { name: 'NUPLA', unique: true })
  nupla: number;

  @Column('int', { name: 'NUPLAAVALIADO', unique: true })
  nuplaavaliado: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @ManyToOne(() => TpqplaEntity, (tpqplaEntity) => tpqplaEntity.tpqavds)
  @JoinColumn([{ name: 'NUPLA', referencedColumnName: 'nupla' }])
  nupla2: TpqplaEntity;

  @ManyToOne(() => TpqplaEntity, (tpqplaEntity) => tpqplaEntity.tpqavds2)
  @JoinColumn([{ name: 'NUPLAAVALIADO', referencedColumnName: 'nupla' }])
  nuplaavaliado2: TpqplaEntity;
}
