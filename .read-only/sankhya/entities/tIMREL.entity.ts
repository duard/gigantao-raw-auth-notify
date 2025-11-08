import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimaclEntity } from './tIMACL.entity';

@Index('PK_TIMREL', ['relcodigo', 'relacumulo'], { unique: true })
@Entity('TIMREL', { schema: 'SANKHYA' })
export class TimrelEntity {
  @Column('int', { primary: true, name: 'RELCODIGO' })
  relcodigo: number;

  @Column('int', { primary: true, name: 'RELACUMULO' })
  relacumulo: number;

  @Column('datetime', { name: 'RELDTVENC' })
  reldtvenc: Date;

  @Column('float', { name: 'RELVLRDESDOB', nullable: true, precision: 53 })
  relvlrdesdob: number | null;

  @Column('int', { name: 'RELNUFIN', nullable: true })
  relnufin: number | null;

  @Column('datetime', { name: 'RELDHGERREPASSE', nullable: true })
  reldhgerrepasse: Date | null;

  @Column('datetime', { name: 'RELDHGERREPPARCIAL', nullable: true })
  reldhgerrepparcial: Date | null;

  @Column('datetime', { name: 'RELDTREPASSE', nullable: true })
  reldtrepasse: Date | null;

  @Column('datetime', { name: 'RELDTREPPARCIAL', nullable: true })
  reldtrepparcial: Date | null;

  @Column('float', { name: 'RELDIFIRRF', nullable: true, precision: 53 })
  reldifirrf: number | null;

  @Column('float', { name: 'RELVLRGRAVADO', nullable: true, precision: 53 })
  relvlrgravado: number | null;

  @ManyToOne(() => TimaclEntity, (timaclEntity) => timaclEntity.timrels, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'RELACUMULO', referencedColumnName: 'aclcodigo' }])
  relacumulo2: TimaclEntity;
}
