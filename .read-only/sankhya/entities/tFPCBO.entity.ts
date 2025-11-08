import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpcarEntity } from './tFPCAR.entity';
import { TfpfcoEntity } from './tFPFCO.entity';

@Index('PK_TFPCBO', ['codcbo'], { unique: true })
@Entity('TFPCBO', { schema: 'SANKHYA' })
export class TfpcboEntity {
  @Column('int', { primary: true, name: 'CODCBO' })
  codcbo: number;

  @Column('varchar', { name: 'DESCRCBO', length: 100 })
  descrcbo: string;

  @Column('varchar', {
    name: 'TIPHORANOTURNA',
    length: 1,
    default: () => "'U'",
  })
  tiphoranoturna: string;

  @OneToMany(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.codcbo)
  tfpcars: TfpcarEntity[];

  @OneToMany(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.codcbo)
  tfpfcos: TfpfcoEntity[];
}
