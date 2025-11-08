import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimcitEntity } from './tIMCIT.entity';

@Index('PK_TIMFCI', ['fcicomissao', 'fcimaxvalor'], { unique: true })
@Entity('TIMFCI', { schema: 'SANKHYA' })
export class TimfciEntity {
  @Column('int', { primary: true, name: 'FCICOMISSAO' })
  fcicomissao: number;

  @Column('float', { primary: true, name: 'FCIMAXVALOR', precision: 53 })
  fcimaxvalor: number;

  @Column('float', { name: 'FCIPERCENTUAL', nullable: true, precision: 53 })
  fcipercentual: number | null;

  @ManyToOne(() => TimcitEntity, (timcitEntity) => timcitEntity.timfcis)
  @JoinColumn([{ name: 'FCICOMISSAO', referencedColumnName: 'citcodigo' }])
  fcicomissao2: TimcitEntity;
}
