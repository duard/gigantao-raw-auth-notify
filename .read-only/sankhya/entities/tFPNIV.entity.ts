import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpcarEntity } from './tFPCAR.entity';
import { TfppubEntity } from './tFPPUB.entity';

@Index('PK_TFPNIV', ['codnivelref'], { unique: true })
@Entity('TFPNIV', { schema: 'SANKHYA' })
export class TfpnivEntity {
  @Column('smallint', { primary: true, name: 'CODNIVELREF' })
  codnivelref: number;

  @Column('char', { name: 'DESCRNIV', length: 36 })
  descrniv: string;

  @OneToMany(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.codnivelini)
  tfpcars: TfpcarEntity[];

  @OneToMany(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.codnivelfim)
  tfpcars2: TfpcarEntity[];

  @OneToMany(() => TfppubEntity, (tfppubEntity) => tfppubEntity.codnivelref)
  tfppubs: TfppubEntity[];
}
