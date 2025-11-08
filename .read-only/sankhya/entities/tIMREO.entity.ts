import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimrenEntity } from './tIMREN.entity';

@Index('PK_TIMREO', ['reoreneg', 'reonufin'], { unique: true })
@Entity('TIMREO', { schema: 'SANKHYA' })
export class TimreoEntity {
  @Column('int', { primary: true, name: 'REORENEG' })
  reoreneg: number;

  @Column('int', { primary: true, name: 'REONUFIN' })
  reonufin: number;

  @Column('datetime', { name: 'REODTVENC', nullable: true })
  reodtvenc: Date | null;

  @Column('float', { name: 'REOVLRJUROS', nullable: true, precision: 53 })
  reovlrjuros: number | null;

  @Column('float', { name: 'REOVLRMULTA', nullable: true, precision: 53 })
  reovlrmulta: number | null;

  @Column('float', { name: 'REOVLRCORR', nullable: true, precision: 53 })
  reovlrcorr: number | null;

  @Column('float', { name: 'REOVLRDESCAP', nullable: true, precision: 53 })
  reovlrdescap: number | null;

  @Column('float', { name: 'REOVLRDESDOB', nullable: true, precision: 53 })
  reovlrdesdob: number | null;

  @Column('float', { name: 'REOVLRTOTAL', nullable: true, precision: 53 })
  reovlrtotal: number | null;

  @ManyToOne(() => TimrenEntity, (timrenEntity) => timrenEntity.timreos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'REORENEG', referencedColumnName: 'rencodigo' }])
  reoreneg2: TimrenEntity;
}
