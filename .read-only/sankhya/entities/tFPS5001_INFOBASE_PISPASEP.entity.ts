import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5001InfocategPispasepEntity } from './tFPS5001_INFOCATEG_PISPASEP.entity';

@Index('PK_TFPS5001_INFOBASE', ['codinfobase'], { unique: true })
@Entity('TFPS5001_INFOBASE_PISPASEP', { schema: 'SANKHYA' })
export class Tfps5001InfobasePispasepEntity {
  @Column('int', { primary: true, name: 'CODINFOBASE' })
  codinfobase: number;

  @Column('varchar', { name: 'IND13', nullable: true, length: 1 })
  ind13: string | null;

  @Column('varchar', { name: 'TPVALORPISPASEP', nullable: true, length: 2 })
  tpvalorpispasep: string | null;

  @Column('float', { name: 'VALORPISPASEP', nullable: true, precision: 53 })
  valorpispasep: number | null;

  @ManyToOne(
    () => Tfps5001InfocategPispasepEntity,
    (tfps5001InfocategPispasepEntity) =>
      tfps5001InfocategPispasepEntity.tfps5001InfobasePispaseps,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'CODINFOCATEG', referencedColumnName: 'codinfocateg' }])
  codinfocateg: Tfps5001InfocategPispasepEntity;
}
