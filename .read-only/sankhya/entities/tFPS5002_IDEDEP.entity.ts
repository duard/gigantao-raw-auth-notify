import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5002InfoircomplemEntity } from './tFPS5002_INFOIRCOMPLEM.entity';

@Index('PK_TFPS5002_IDEDEP', ['cods5002Idedep'], { unique: true })
@Entity('TFPS5002_IDEDEP', { schema: 'SANKHYA' })
export class Tfps5002IdedepEntity {
  @Column('int', { primary: true, name: 'CODS5002_IDEDEP' })
  cods5002Idedep: number;

  @Column('varchar', { name: 'CPFDEP', nullable: true, length: 11 })
  cpfdep: string | null;

  @Column('varchar', { name: 'DEPIRRF', nullable: true, length: 1 })
  depirrf: string | null;

  @Column('datetime', { name: 'DTNASCTO', nullable: true })
  dtnascto: Date | null;

  @Column('varchar', { name: 'NOME', nullable: true, length: 70 })
  nome: string | null;

  @Column('varchar', { name: 'TPDEP', nullable: true, length: 2 })
  tpdep: string | null;

  @Column('varchar', { name: 'DESCRDEP', nullable: true, length: 100 })
  descrdep: string | null;

  @ManyToOne(
    () => Tfps5002InfoircomplemEntity,
    (tfps5002InfoircomplemEntity) =>
      tfps5002InfoircomplemEntity.tfps5002Idedeps,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'CODS5002_INFOIRCOMPLEM',
      referencedColumnName: 'cods5002Infoircomplem',
    },
  ])
  cods5002Infoircomplem: Tfps5002InfoircomplemEntity;
}
