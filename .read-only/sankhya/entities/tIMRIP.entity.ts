import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TIMRIP', ['ripcodigo'], { unique: true })
@Entity('TIMRIP', { schema: 'SANKHYA' })
export class TimripEntity {
  @Column('int', { primary: true, name: 'RIPCODIGO' })
  ripcodigo: number;

  @Column('varchar', { name: 'RIPESTAGIO', nullable: true, length: 2 })
  ripestagio: string | null;

  @Column('datetime', { name: 'RIPREFERENCIA', nullable: true })
  ripreferencia: Date | null;

  @Column('datetime', { name: 'RIPREFINICOBRANCA', nullable: true })
  riprefinicobranca: Date | null;

  @Column('datetime', { name: 'RIPREFINIPAGTO', nullable: true })
  riprefinipagto: Date | null;

  @Column('float', { name: 'RIPTXEXPEDIENTE', nullable: true, precision: 53 })
  riptxexpediente: number | null;

  @Column('float', { name: 'RIPDESCONTO', nullable: true, precision: 53 })
  ripdesconto: number | null;

  @Column('float', { name: 'RIPPERCREAJUSTE', nullable: true, precision: 53 })
  rippercreajuste: number | null;

  @Column('datetime', { name: 'RIPDHINC', nullable: true })
  ripdhinc: Date | null;

  @Column('datetime', { name: 'RIPDHALTER', nullable: true })
  ripdhalter: Date | null;

  @ManyToOne(() => TimripEntity, (timripEntity) => timripEntity.timrips)
  @JoinColumn([{ name: 'RICREAJUSTE', referencedColumnName: 'ripcodigo' }])
  ricreajuste: TimripEntity;

  @OneToMany(() => TimripEntity, (timripEntity) => timripEntity.ricreajuste)
  timrips: TimripEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timrips)
  @JoinColumn([{ name: 'RIPUSUINC', referencedColumnName: 'codusu' }])
  ripusuinc: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timrips2)
  @JoinColumn([{ name: 'RIPUSUALTER', referencedColumnName: 'codusu' }])
  ripusualter: TsiusuEntity;
}
