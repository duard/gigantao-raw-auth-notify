import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimacmEntity } from './tIMACM.entity';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TIMACO', ['aconufin', 'acoacumulo', 'acocontrato'], { unique: true })
@Entity('TIMACO', { schema: 'SANKHYA' })
export class TimacoEntity {
  @Column('int', { primary: true, name: 'ACONUFIN' })
  aconufin: number;

  @Column('int', { primary: true, name: 'ACOACUMULO' })
  acoacumulo: number;

  @Column('int', { primary: true, name: 'ACOCONTRATO' })
  acocontrato: number;

  @Column('int', { name: 'ACOTIMPARCELA', nullable: true })
  acotimparcela: number | null;

  @Column('datetime', { name: 'ACODTVENC', nullable: true })
  acodtvenc: Date | null;

  @Column('float', { name: 'ACOVLRDESDOB', nullable: true, precision: 53 })
  acovlrdesdob: number | null;

  @Column('float', { name: 'ACOVLRCORRMONET', nullable: true, precision: 53 })
  acovlrcorrmonet: number | null;

  @Column('float', { name: 'ACOVLRJUROS', nullable: true, precision: 53 })
  acovlrjuros: number | null;

  @Column('float', { name: 'ACOVLRMULTA', nullable: true, precision: 53 })
  acovlrmulta: number | null;

  @Column('float', { name: 'ACOVLRATUAL', nullable: true, precision: 53 })
  acovlratual: number | null;

  @Column('char', { name: 'ACOLEGADO', nullable: true, length: 1 })
  acolegado: string | null;

  @ManyToOne(() => TimacmEntity, (timacmEntity) => timacmEntity.timacos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'ACOACUMULO', referencedColumnName: 'acmsequencia' },
    { name: 'ACOCONTRATO', referencedColumnName: 'acmcontrato' },
  ])
  timacm: TimacmEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.timacos)
  @JoinColumn([{ name: 'ACONUFIN', referencedColumnName: 'nufin' }])
  aconufin2: TgffinEntity;
}
