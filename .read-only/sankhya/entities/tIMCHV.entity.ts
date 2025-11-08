import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimimbEntity } from './tIMIMB.entity';
import { TimcorEntity } from './tIMCOR.entity';
import { TimimvEntity } from './tIMIMV.entity';
import { TimstatchvEntity } from './tIMSTATCHV.entity';
import { TimiprEntity } from './tIMIPR.entity';

@Index('PK_CODCHV', ['codchv'], { unique: true })
@Entity('TIMCHV', { schema: 'SANKHYA' })
export class TimchvEntity {
  @Column('int', { primary: true, name: 'CODCHV' })
  codchv: number;

  @Column('varchar', { name: 'DESCRCHV', nullable: true, length: 200 })
  descrchv: string | null;

  @Column('varchar', { name: 'CHVOBS', nullable: true, length: 200 })
  chvobs: string | null;

  @Column('int', { name: 'FACCODIGO', nullable: true })
  faccodigo: number | null;

  @Column('datetime', { name: 'DHULTSOL', nullable: true })
  dhultsol: Date | null;

  @Column('int', { name: 'STATCODOLD', nullable: true })
  statcodold: number | null;

  @Column('int', { name: 'CHVCODUSUINC', nullable: true })
  chvcodusuinc: number | null;

  @Column('int', { name: 'CHVCODUSUALT', nullable: true })
  chvcodusualt: number | null;

  @Column('datetime', { name: 'CHVDHINC', nullable: true })
  chvdhinc: Date | null;

  @Column('datetime', { name: 'CHVDHALT', nullable: true })
  chvdhalt: Date | null;

  @ManyToOne(() => TimimbEntity, (timimbEntity) => timimbEntity.timchvs)
  @JoinColumn([{ name: 'IMBCODIGO', referencedColumnName: 'imbcodigo' }])
  imbcodigo: TimimbEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timchvs)
  @JoinColumn([{ name: 'CORCODIGO', referencedColumnName: 'corcodigo' }])
  corcodigo: TimcorEntity;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timchvs)
  @JoinColumn([{ name: 'IMVCODIGO', referencedColumnName: 'imvcodigo' }])
  imvcodigo: TimimvEntity;

  @ManyToOne(
    () => TimstatchvEntity,
    (timstatchvEntity) => timstatchvEntity.timchvs,
  )
  @JoinColumn([{ name: 'STATCOD', referencedColumnName: 'statcod' }])
  statcod: TimstatchvEntity;

  @OneToMany(() => TimiprEntity, (timiprEntity) => timiprEntity.iprchventregue)
  timiprs: TimiprEntity[];
}
