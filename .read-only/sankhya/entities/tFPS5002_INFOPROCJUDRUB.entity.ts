import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5002InfoirEntity } from './tFPS5002_INFOIR.entity';

@Index('PK_TFPS5002_INFOPROCJUDRUB', ['cods5002Infoprocjudrub'], {
  unique: true,
})
@Entity('TFPS5002_INFOPROCJUDRUB', { schema: 'SANKHYA' })
export class Tfps5002InfoprocjudrubEntity {
  @Column('int', { primary: true, name: 'CODS5002_INFOPROCJUDRUB' })
  cods5002Infoprocjudrub: number;

  @Column('varchar', { name: 'NRPROC', nullable: true, length: 20 })
  nrproc: string | null;

  @Column('varchar', { name: 'UFVARA', nullable: true, length: 2 })
  ufvara: string | null;

  @Column('varchar', { name: 'CODMUNIC', nullable: true, length: 7 })
  codmunic: string | null;

  @Column('varchar', { name: 'IDVARA', nullable: true, length: 4 })
  idvara: string | null;

  @ManyToOne(
    () => Tfps5002InfoirEntity,
    (tfps5002InfoirEntity) => tfps5002InfoirEntity.tfps5002Infoprocjudrubs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODS5002_INFOIR', referencedColumnName: 'cods5002Infoir' },
  ])
  cods5002Infoir: Tfps5002InfoirEntity;
}
