import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpambrEntity } from './tFPAMBR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPRRA', ['cpfresp'], { unique: true })
@Entity('TFPRRA', { schema: 'SANKHYA' })
export class TfprraEntity {
  @Column('varchar', { primary: true, name: 'CPFRESP', length: 11 })
  cpfresp: string;

  @Column('varchar', { name: 'NISRESP', nullable: true, length: 11 })
  nisresp: string | null;

  @Column('varchar', { name: 'NMRESP', nullable: true, length: 70 })
  nmresp: string | null;

  @Column('smallint', { name: 'IDEOC', nullable: true })
  ideoc: number | null;

  @Column('varchar', { name: 'DSCOC', nullable: true, length: 20 })
  dscoc: string | null;

  @Column('varchar', { name: 'NROC', nullable: true, length: 14 })
  nroc: string | null;

  @Column('varchar', { name: 'UFOC', nullable: true, length: 2 })
  ufoc: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @OneToMany(() => TfpambrEntity, (tfpambrEntity) => tfpambrEntity.cpfresp2)
  tfpambrs: TfpambrEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfprras)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
