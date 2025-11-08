import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TapamoEntity } from './tAPAMO.entity';
import { TapiapEntity } from './tAPIAP.entity';

@Index('PK_TAPCAM', ['nuamostra'], { unique: true })
@Entity('TAPCAM', { schema: 'SANKHYA' })
export class TapcamEntity {
  @Column('int', { primary: true, name: 'NUAMOSTRA' })
  nuamostra: number;

  @Column('char', { name: 'IDAMOSTRA', length: 50 })
  idamostra: string;

  @Column('int', { name: 'NUMCUSTODIA', nullable: true })
  numcustodia: number | null;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 15 })
  codbarra: string | null;

  @Column('datetime', { name: 'DHREMESSA', nullable: true })
  dhremessa: Date | null;

  @Column('char', { name: 'STATUSREC', nullable: true, length: 1 })
  statusrec: string | null;

  @Column('char', { name: 'OBSREC', nullable: true, length: 256 })
  obsrec: string | null;

  @Column('smallint', { name: 'HRCOLETA', nullable: true })
  hrcoleta: number | null;

  @Column('float', { name: 'PROFINICIAL', nullable: true, precision: 53 })
  profinicial: number | null;

  @Column('float', { name: 'PROFFINAL', nullable: true, precision: 53 })
  proffinal: number | null;

  @OneToOne(() => TapamoEntity, (tapamoEntity) => tapamoEntity.tapcam)
  @JoinColumn([{ name: 'NUAMOSTRA', referencedColumnName: 'nuamostra' }])
  nuamostra2: TapamoEntity;

  @ManyToOne(() => TapiapEntity, (tapiapEntity) => tapiapEntity.tapcams)
  @JoinColumn([
    { name: 'NUAPONTA', referencedColumnName: 'nuaponta' },
    { name: 'NUMITEM', referencedColumnName: 'numitem' },
  ])
  tapiap: TapiapEntity;
}
