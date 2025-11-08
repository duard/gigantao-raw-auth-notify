import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimifeEntity } from './tIMIFE.entity';
import { TimedgEntity } from './tIMEDG.entity';

@Index('PK_TIMIEO', ['ieocodigo'], { unique: true })
@Index(
  'UK_INFRAESTRUTURA',
  [
    'ieoinfraestrutura',
    'ieoedificio',
    'ieoempreend',
    'ieoimovel',
    'ieolote',
    'ieoloteamen',
  ],
  { unique: true },
)
@Entity('TIMIEO', { schema: 'SANKHYA' })
export class TimieoEntity {
  @Column('int', { primary: true, name: 'IEOCODIGO' })
  ieocodigo: number;

  @Column('int', { name: 'IEOINFRAESTRUTURA', unique: true })
  ieoinfraestrutura: number;

  @Column('int', { name: 'IEOLOTEAMEN', nullable: true, unique: true })
  ieoloteamen: number | null;

  @Column('int', { name: 'IEOLOTE', nullable: true, unique: true })
  ieolote: number | null;

  @Column('int', { name: 'IEOIMOVEL', nullable: true, unique: true })
  ieoimovel: number | null;

  @Column('int', { name: 'IEOEMPREEND', nullable: true, unique: true })
  ieoempreend: number | null;

  @Column('int', { name: 'IEOEDIFICIO', nullable: true, unique: true })
  ieoedificio: number | null;

  @Column('text', { name: 'IEOOBSERVACAO', nullable: true })
  ieoobservacao: string | null;

  @Column('char', { name: 'IEOLEGADO', nullable: true, length: 1 })
  ieolegado: string | null;

  @ManyToOne(() => TimifeEntity, (timifeEntity) => timifeEntity.timieos)
  @JoinColumn([
    { name: 'IEOINFRAESTRUTURA', referencedColumnName: 'ifecodigo' },
  ])
  ieoinfraestrutura2: TimifeEntity;

  @ManyToOne(() => TimedgEntity, (timedgEntity) => timedgEntity.timieos)
  @JoinColumn([{ name: 'IEOEDIFICIO', referencedColumnName: 'edgcodigo' }])
  ieoedificio2: TimedgEntity;
}
