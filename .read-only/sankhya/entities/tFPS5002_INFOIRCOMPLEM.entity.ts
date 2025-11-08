import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5002IdedepEntity } from './tFPS5002_IDEDEP.entity';
import { Tfps5002Entity } from './tFPS5002.entity';
import { Tfps5002InfoircrEntity } from './tFPS5002_INFOIRCR.entity';
import { Tfps5002InforeembmedEntity } from './tFPS5002_INFOREEMBMED.entity';
import { Tfps5002PlansaudeEntity } from './tFPS5002_PLANSAUDE.entity';

@Index('PK_TFPS5002_INFOIRCOMPLEM', ['cods5002Infoircomplem'], { unique: true })
@Entity('TFPS5002_INFOIRCOMPLEM', { schema: 'SANKHYA' })
export class Tfps5002InfoircomplemEntity {
  @Column('int', { primary: true, name: 'CODS5002_INFOIRCOMPLEM' })
  cods5002Infoircomplem: number;

  @Column('datetime', { name: 'DTLAUDO', nullable: true })
  dtlaudo: Date | null;

  @Column('varchar', { name: 'NRREC1210ORIG', nullable: true, length: 30 })
  nrrec1210Orig: string | null;

  @Column('varchar', { name: 'PERREFAJUSTE', nullable: true, length: 10 })
  perrefajuste: string | null;

  @OneToMany(
    () => Tfps5002IdedepEntity,
    (tfps5002IdedepEntity) => tfps5002IdedepEntity.cods5002Infoircomplem,
  )
  tfps5002Idedeps: Tfps5002IdedepEntity[];

  @ManyToOne(
    () => Tfps5002Entity,
    (tfps5002Entity) => tfps5002Entity.tfps5002Infoircomplems,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMPMATRIZ', referencedColumnName: 'codempmatriz' },
    { name: 'CPF', referencedColumnName: 'cpf' },
  ])
  tfps5: Tfps5002Entity;

  @OneToMany(
    () => Tfps5002InfoircrEntity,
    (tfps5002InfoircrEntity) => tfps5002InfoircrEntity.cods5002Infoircomplem,
  )
  tfps5002Infoircrs: Tfps5002InfoircrEntity[];

  @OneToMany(
    () => Tfps5002InforeembmedEntity,
    (tfps5002InforeembmedEntity) =>
      tfps5002InforeembmedEntity.cods5002Infoircomplem,
  )
  tfps5002Inforeembmeds: Tfps5002InforeembmedEntity[];

  @OneToMany(
    () => Tfps5002PlansaudeEntity,
    (tfps5002PlansaudeEntity) => tfps5002PlansaudeEntity.cods5002Infoircomplem,
  )
  tfps5002Plansaudes: Tfps5002PlansaudeEntity[];
}
