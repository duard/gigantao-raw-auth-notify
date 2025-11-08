import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TmsregcidEntity } from './tMSREGCID.entity';

@Index('PK_TMSREG', ['codreg'], { unique: true })
@Entity('TMSREG', { schema: 'SANKHYA' })
export class TmsregEntity {
  @Column('int', { primary: true, name: 'CODREG' })
  codreg: number;

  @Column('varchar', { name: 'NOMEREG', length: 100 })
  nomereg: string;

  @OneToMany(
    () => TmsregcidEntity,
    (tmsregcidEntity) => tmsregcidEntity.codreg2,
  )
  tmsregcs: TmsregcidEntity[];
}
