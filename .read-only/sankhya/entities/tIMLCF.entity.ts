import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TimlocEntity } from './tIMLOC.entity';

@Index('PK_TIMLCF', ['lcflocacao', 'lcffiador'], { unique: true })
@Entity('TIMLCF', { schema: 'SANKHYA' })
export class TimlcfEntity {
  @Column('int', { primary: true, name: 'LCFLOCACAO' })
  lcflocacao: number;

  @Column('int', { primary: true, name: 'LCFFIADOR' })
  lcffiador: number;

  @Column('smallint', { name: 'LCFESTAGIO', nullable: true })
  lcfestagio: number | null;

  @Column('datetime', { name: 'LCFCANCELAMENTO', nullable: true })
  lcfcancelamento: Date | null;

  @Column('char', { name: 'LCFLEGADO', nullable: true, length: 1 })
  lcflegado: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timlcfs)
  @JoinColumn([{ name: 'LCFFIADOR', referencedColumnName: 'codparc' }])
  lcffiador2: TgfparEntity;

  @ManyToOne(() => TimlocEntity, (timlocEntity) => timlocEntity.timlcfs)
  @JoinColumn([{ name: 'LCFLOCACAO', referencedColumnName: 'loccodigo' }])
  lcflocacao2: TimlocEntity;
}
