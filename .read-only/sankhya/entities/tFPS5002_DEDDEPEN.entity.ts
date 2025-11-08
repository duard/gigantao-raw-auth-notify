import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5002InfoircrEntity } from './tFPS5002_INFOIRCR.entity';

@Index('PK_TFPS5002_DEDDEPEN', ['cods5002Deddepen'], { unique: true })
@Entity('TFPS5002_DEDDEPEN', { schema: 'SANKHYA' })
export class Tfps5002DeddepenEntity {
  @Column('int', { primary: true, name: 'CODS5002_DEDDEPEN' })
  cods5002Deddepen: number;

  @Column('varchar', { name: 'TPREND', nullable: true, length: 2 })
  tprend: string | null;

  @Column('varchar', { name: 'CPFDEP', nullable: true, length: 11 })
  cpfdep: string | null;

  @Column('float', { name: 'VLRDEDDEP', nullable: true, precision: 53 })
  vlrdeddep: number | null;

  @ManyToOne(
    () => Tfps5002InfoircrEntity,
    (tfps5002InfoircrEntity) => tfps5002InfoircrEntity.tfps5002Deddepens,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODS5002_INFOIRCR', referencedColumnName: 'cods5002Infoircr' },
  ])
  cods5002Infoircr: Tfps5002InfoircrEntity;
}
