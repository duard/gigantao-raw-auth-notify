import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpicrEntity } from './tFPICR.entity';

@Index('PK_TFPIRCC', ['codircc', 'dtref', 'codemp'], { unique: true })
@Entity('TFPIRCC', { schema: 'SANKHYA' })
export class TfpirccEntity {
  @Column('smallint', { primary: true, name: 'CODIRCC' })
  codircc: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { name: 'NRRECARQBASE', nullable: true, length: 40 })
  nrrecarqbase: string | null;

  @Column('smallint', { name: 'INDEXISTINFO', nullable: true })
  indexistinfo: number | null;

  @OneToMany(() => TfpicrEntity, (tfpicrEntity) => tfpicrEntity.tfpircc)
  tfpicrs: TfpicrEntity[];
}
