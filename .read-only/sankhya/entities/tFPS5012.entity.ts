import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps5012InfocrdiaEntity } from './tFPS5012_INFOCRDIA.entity';
import { Tfps5012InfocrmenEntity } from './tFPS5012_INFOCRMEN.entity';

@Index('PK_TFPS5012', ['cods5012'], { unique: true })
@Index('TFPS5012_I01', ['codemp', 'dtref'], {})
@Index('TFPS5012_I02', ['perapur'], {})
@Entity('TFPS5012', { schema: 'SANKHYA' })
export class Tfps5012Entity {
  @Column('int', { primary: true, name: 'CODS5012' })
  cods5012: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { name: 'PERAPUR', nullable: true, length: 7 })
  perapur: string | null;

  @Column('varchar', { name: 'TPINSC', nullable: true, length: 1 })
  tpinsc: string | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('varchar', { name: 'NRRECARQBASE', nullable: true, length: 23 })
  nrrecarqbase: string | null;

  @Column('varchar', { name: 'INDEXISTINFO', nullable: true, length: 1 })
  indexistinfo: string | null;

  @OneToMany(
    () => Tfps5012InfocrdiaEntity,
    (tfps5012InfocrdiaEntity) => tfps5012InfocrdiaEntity.cods50,
  )
  tfps5012Infocrdias: Tfps5012InfocrdiaEntity[];

  @OneToMany(
    () => Tfps5012InfocrmenEntity,
    (tfps5012InfocrmenEntity) => tfps5012InfocrmenEntity.cods50,
  )
  tfps5012Infocrmen: Tfps5012InfocrmenEntity[];
}
