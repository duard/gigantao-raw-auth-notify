import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5002EndextEntity } from './tFPS5002_ENDEXT.entity';
import { Tfps5002DmdevEntity } from './tFPS5002_DMDEV.entity';

@Index('PK_TFPS5002_INFOPGTOEXT', ['cods5002Infopgtoext'], { unique: true })
@Entity('TFPS5002_INFOPGTOEXT', { schema: 'SANKHYA' })
export class Tfps5002InfopgtoextEntity {
  @Column('int', { primary: true, name: 'CODS5002_INFOPGTOEXT' })
  cods5002Infopgtoext: number;

  @Column('varchar', { name: 'PAISRESIDEXT', nullable: true, length: 3 })
  paisresidext: string | null;

  @Column('varchar', { name: 'INDNIF', nullable: true, length: 1 })
  indnif: string | null;

  @Column('varchar', { name: 'NIFBENEF', nullable: true, length: 30 })
  nifbenef: string | null;

  @Column('varchar', { name: 'FRMTRIBUT', nullable: true, length: 2 })
  frmtribut: string | null;

  @OneToMany(
    () => Tfps5002EndextEntity,
    (tfps5002EndextEntity) => tfps5002EndextEntity.cods5002Infopgtoext,
  )
  tfps5002Endexts: Tfps5002EndextEntity[];

  @ManyToOne(
    () => Tfps5002DmdevEntity,
    (tfps5002DmdevEntity) => tfps5002DmdevEntity.tfps5002Infopgtoexts,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODS5002_DMDEV', referencedColumnName: 'cods5002Dmdev' },
  ])
  cods5002Dmdev: Tfps5002DmdevEntity;
}
