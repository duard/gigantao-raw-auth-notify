import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimclaEntity } from './tIMCLA.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TIMCLC', ['clccontrato', 'clccomprador'], { unique: true })
@Entity('TIMCLC', { schema: 'SANKHYA' })
export class TimclcEntity {
  @Column('int', { primary: true, name: 'CLCCONTRATO' })
  clccontrato: number;

  @Column('int', { primary: true, name: 'CLCCOMPRADOR' })
  clccomprador: number;

  @Column('float', { name: 'CLCPERCENTUALDACOMPRA', precision: 53 })
  clcpercentualdacompra: number;

  @Column('char', {
    name: 'CLCESTAGIO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  clcestagio: string | null;

  @Column('char', {
    name: 'CLCRESPBOL',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  clcrespbol: string | null;

  @Column('char', { name: 'CLCLEGADO', nullable: true, length: 1 })
  clclegado: string | null;

  @ManyToOne(() => TimclaEntity, (timclaEntity) => timclaEntity.timclcs)
  @JoinColumn([{ name: 'CLCCONTRATO', referencedColumnName: 'clacodigo' }])
  clccontrato2: TimclaEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timclcs)
  @JoinColumn([{ name: 'CLCCOMPRADOR', referencedColumnName: 'codparc' }])
  clccomprador2: TgfparEntity;
}
