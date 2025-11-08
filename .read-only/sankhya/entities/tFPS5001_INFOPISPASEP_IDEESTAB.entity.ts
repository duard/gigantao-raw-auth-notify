import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5001InfocategPispasepEntity } from './tFPS5001_INFOCATEG_PISPASEP.entity';
import { Tfps5001Entity } from './tFPS5001.entity';

@Index('PK_TFPS5001_INFOPISPASEP', ['codinfopispasep'], { unique: true })
@Entity('TFPS5001_INFOPISPASEP_IDEESTAB', { schema: 'SANKHYA' })
export class Tfps5001InfopispasepIdeestabEntity {
  @Column('int', { primary: true, name: 'CODINFOPISPASEP' })
  codinfopispasep: number;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('varchar', { name: 'TPINSC', nullable: true, length: 1 })
  tpinsc: string | null;

  @OneToMany(
    () => Tfps5001InfocategPispasepEntity,
    (tfps5001InfocategPispasepEntity) =>
      tfps5001InfocategPispasepEntity.codinfopispasep,
  )
  tfps5001InfocategPispaseps: Tfps5001InfocategPispasepEntity[];

  @ManyToOne(
    () => Tfps5001Entity,
    (tfps5001Entity) => tfps5001Entity.tfps5001InfopispasepIdeestabs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMPMATRIZ', referencedColumnName: 'codempmatriz' },
    { name: 'CPF', referencedColumnName: 'cpf' },
    { name: 'INDAPURACAO', referencedColumnName: 'indapuracao' },
  ])
  tfps5: Tfps5001Entity;
}
