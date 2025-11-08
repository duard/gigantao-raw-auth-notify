import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5002DeddepenEntity } from './tFPS5002_DEDDEPEN.entity';
import { Tfps5002InfoircomplemEntity } from './tFPS5002_INFOIRCOMPLEM.entity';
import { Tfps5002InfoprocretEntity } from './tFPS5002_INFOPROCRET.entity';
import { Tfps5002PenalimEntity } from './tFPS5002_PENALIM.entity';
import { Tfps5002PrevidcomplEntity } from './tFPS5002_PREVIDCOMPL.entity';

@Index('PK_TFPS5002_INFOIRCR', ['cods5002Infoircr'], { unique: true })
@Entity('TFPS5002_INFOIRCR', { schema: 'SANKHYA' })
export class Tfps5002InfoircrEntity {
  @Column('int', { primary: true, name: 'CODS5002_INFOIRCR' })
  cods5002Infoircr: number;

  @Column('varchar', { name: 'TPCR', nullable: true, length: 6 })
  tpcr: string | null;

  @OneToMany(
    () => Tfps5002DeddepenEntity,
    (tfps5002DeddepenEntity) => tfps5002DeddepenEntity.cods5002Infoircr,
  )
  tfps5002Deddepens: Tfps5002DeddepenEntity[];

  @ManyToOne(
    () => Tfps5002InfoircomplemEntity,
    (tfps5002InfoircomplemEntity) =>
      tfps5002InfoircomplemEntity.tfps5002Infoircrs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'CODS5002_INFOIRCOMPLEM',
      referencedColumnName: 'cods5002Infoircomplem',
    },
  ])
  cods5002Infoircomplem: Tfps5002InfoircomplemEntity;

  @OneToMany(
    () => Tfps5002InfoprocretEntity,
    (tfps5002InfoprocretEntity) => tfps5002InfoprocretEntity.cods5002Infoircr,
  )
  tfps5002Infoprocrets: Tfps5002InfoprocretEntity[];

  @OneToMany(
    () => Tfps5002PenalimEntity,
    (tfps5002PenalimEntity) => tfps5002PenalimEntity.cods5002Infoircr,
  )
  tfps5002Penalims: Tfps5002PenalimEntity[];

  @OneToMany(
    () => Tfps5002PrevidcomplEntity,
    (tfps5002PrevidcomplEntity) => tfps5002PrevidcomplEntity.cods5002Infoircr,
  )
  tfps5002Previdcompls: Tfps5002PrevidcomplEntity[];
}
