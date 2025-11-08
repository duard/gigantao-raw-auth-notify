import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TimrctEntity } from './tIMRCT.entity';
import { TimlocEntity } from './tIMLOC.entity';
import { TimlcrEntity } from './tIMLCR.entity';
import { TimsacEntity } from './tIMSAC.entity';

@Index('PK_TIMCTR', ['ctrrenovacao', 'ctrcontrato'], { unique: true })
@Entity('TIMCTR', { schema: 'SANKHYA' })
export class TimctrEntity {
  @Column('int', { primary: true, name: 'CTRRENOVACAO' })
  ctrrenovacao: number;

  @Column('int', { primary: true, name: 'CTRCONTRATO' })
  ctrcontrato: number;

  @Column('char', { name: 'CTRESTAGIO', length: 2 })
  ctrestagio: string;

  @Column('int', { name: 'CTRINDICE' })
  ctrindice: number;

  @Column('float', { name: 'CTRTXCORRECAO', precision: 53 })
  ctrtxcorrecao: number;

  @Column('int', { name: 'CTRQTDMESES' })
  ctrqtdmeses: number;

  @Column('char', { name: 'CTRAPROVADO', length: 1 })
  ctraprovado: string;

  @Column('varchar', { name: 'CTRLOG', nullable: true, length: 500 })
  ctrlog: string | null;

  @Column('datetime', { name: 'CTRDHINCLUSAO', nullable: true })
  ctrdhinclusao: Date | null;

  @Column('datetime', { name: 'CTRDHALTERACAO', nullable: true })
  ctrdhalteracao: Date | null;

  @Column('int', { name: 'CTRQTDMESESRENOVAR' })
  ctrqtdmesesrenovar: number;

  @Column('float', { name: 'CTRVALORALUGUEL', precision: 53 })
  ctrvaloraluguel: number;

  @Column('int', { name: 'CTRDIAVENCIMENTO' })
  ctrdiavencimento: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timctrs)
  @JoinColumn([{ name: 'CTRCODUSUALTERACAO', referencedColumnName: 'codusu' }])
  ctrcodusualteracao: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timctrs2)
  @JoinColumn([{ name: 'CTRCODUSUINCLUSAO', referencedColumnName: 'codusu' }])
  ctrcodusuinclusao: TsiusuEntity;

  @ManyToOne(() => TimrctEntity, (timrctEntity) => timrctEntity.timctrs)
  @JoinColumn([{ name: 'CTRRENOVACAO', referencedColumnName: 'rctcodigo' }])
  ctrrenovacao2: TimrctEntity;

  @ManyToOne(() => TimlocEntity, (timlocEntity) => timlocEntity.timctrs)
  @JoinColumn([{ name: 'CTRCONTRATO', referencedColumnName: 'loccodigo' }])
  ctrcontrato2: TimlocEntity;

  @ManyToOne(() => TimlcrEntity, (timlcrEntity) => timlcrEntity.timctrs)
  @JoinColumn([
    { name: 'CTRCONTRATO', referencedColumnName: 'lcrcontrato' },
    { name: 'CTRNEGOCIACAO', referencedColumnName: 'lcrcontador' },
  ])
  timlcr: TimlcrEntity;

  @ManyToOne(() => TimsacEntity, (timsacEntity) => timsacEntity.timctrs)
  @JoinColumn([{ name: 'CTRSACNEGOCIACAO', referencedColumnName: 'saccodigo' }])
  ctrsacnegociacao: TimsacEntity;
}
