import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimltvEntity } from './tIMLTV.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TIMLBF', ['lbfcodigo', 'lbfcontrato'], { unique: true })
@Entity('TIMLBF', { schema: 'SANKHYA' })
export class TimlbfEntity {
  @Column('int', { primary: true, name: 'LBFCODIGO' })
  lbfcodigo: number;

  @Column('int', { primary: true, name: 'LBFCONTRATO' })
  lbfcontrato: number;

  @Column('datetime', { name: 'LBFDTBENFT', nullable: true })
  lbfdtbenft: Date | null;

  @Column('text', { name: 'LBFDESCRICAO' })
  lbfdescricao: string;

  @Column('float', { name: 'LBFVALOR', precision: 53 })
  lbfvalor: number;

  @Column('char', { name: 'LBFLEGADO', nullable: true, length: 1 })
  lbflegado: string | null;

  @ManyToOne(() => TimltvEntity, (timltvEntity) => timltvEntity.timlbfs)
  @JoinColumn([{ name: 'LBFCONTRATO', referencedColumnName: 'ltvcodigo' }])
  lbfcontrato2: TimltvEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timlbfs)
  @JoinColumn([{ name: 'LBFUSUARIO', referencedColumnName: 'codusu' }])
  lbfusuario: TsiusuEntity;
}
