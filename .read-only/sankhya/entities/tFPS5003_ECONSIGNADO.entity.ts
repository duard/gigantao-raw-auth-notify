import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5003InfotrabfgtsEntity } from './tFPS5003_INFOTRABFGTS.entity';

@Index('PK_TFPS5003_ECONSIGNADO', ['cods5003Econsignado'], { unique: true })
@Entity('TFPS5003_ECONSIGNADO', { schema: 'SANKHYA' })
export class Tfps5003EconsignadoEntity {
  @Column('int', { primary: true, name: 'CODS5003_ECONSIGNADO' })
  cods5003Econsignado: number;

  @Column('int', { name: 'INSTFINANC', nullable: true })
  instfinanc: number | null;

  @Column('varchar', { name: 'NRCONTRATO', nullable: true, length: 15 })
  nrcontrato: string | null;

  @Column('float', { name: 'VRECONSIGNADO', nullable: true, precision: 53 })
  vreconsignado: number | null;

  @ManyToOne(
    () => Tfps5003InfotrabfgtsEntity,
    (tfps5003InfotrabfgtsEntity) =>
      tfps5003InfotrabfgtsEntity.tfps5003Econsignados,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'CODS5003_INFOTRABFGTS',
      referencedColumnName: 'cods5003Infotrabfgts',
    },
  ])
  cods5003Infotrabfgts: Tfps5003InfotrabfgtsEntity;
}
