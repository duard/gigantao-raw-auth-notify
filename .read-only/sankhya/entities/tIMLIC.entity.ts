import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimcarEntity } from './tIMCAR.entity';
import { TimimvEntity } from './tIMIMV.entity';
import { TimlocEntity } from './tIMLOC.entity';

@Index('PK_TIMLIC', ['liclocacao', 'licidentificador'], { unique: true })
@Entity('TIMLIC', { schema: 'SANKHYA' })
export class TimlicEntity {
  @Column('int', { primary: true, name: 'LICIDENTIFICADOR' })
  licidentificador: number;

  @Column('int', { primary: true, name: 'LICLOCACAO' })
  liclocacao: number;

  @Column('varchar', { name: 'LICLIVRO', nullable: true, length: 10 })
  liclivro: string | null;

  @Column('varchar', { name: 'LICFOLHAS', nullable: true, length: 20 })
  licfolhas: string | null;

  @Column('datetime', { name: 'LICDATALAVRATURA', nullable: true })
  licdatalavratura: Date | null;

  @Column('varchar', { name: 'LICNUMEROAVERBACAO', nullable: true, length: 10 })
  licnumeroaverbacao: string | null;

  @Column('datetime', { name: 'LICDATAAVERBACAO', nullable: true })
  licdataaverbacao: Date | null;

  @Column('int', { name: 'LICCARTORIOAVERBACAO', nullable: true })
  liccartorioaverbacao: number | null;

  @Column('varchar', { name: 'LICCIRCUNSCRICAO', nullable: true, length: 10 })
  liccircunscricao: string | null;

  @Column('char', { name: 'LICLEGADO', nullable: true, length: 1 })
  liclegado: string | null;

  @ManyToOne(() => TimcarEntity, (timcarEntity) => timcarEntity.timlics)
  @JoinColumn([{ name: 'LICCARTORIO', referencedColumnName: 'carcodigo' }])
  liccartorio: TimcarEntity;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timlics)
  @JoinColumn([{ name: 'LICIMOVEL', referencedColumnName: 'imvcodigo' }])
  licimovel: TimimvEntity;

  @ManyToOne(() => TimlocEntity, (timlocEntity) => timlocEntity.timlics)
  @JoinColumn([{ name: 'LICLOCACAO', referencedColumnName: 'loccodigo' }])
  liclocacao2: TimlocEntity;
}
