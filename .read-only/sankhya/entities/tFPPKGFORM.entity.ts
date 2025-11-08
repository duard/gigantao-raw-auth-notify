import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpnewformEntity } from './tFPNEWFORM.entity';
import { TfpreqpkgEntity } from './tFPREQPKG.entity';
import { TfpreqsanpkgEntity } from './tFPREQSANPKG.entity';

@Index('PK_TFPPKGFORM', ['codpkg'], { unique: true })
@Entity('TFPPKGFORM', { schema: 'SANKHYA' })
export class TfppkgformEntity {
  @Column('int', { primary: true, name: 'CODPKG' })
  codpkg: number;

  @Column('varchar', { name: 'RAIZCNPJ', length: 8 })
  raizcnpj: string;

  @Column('varchar', { name: 'FINALCNPJ', length: 6 })
  finalcnpj: string;

  @Column('varchar', { name: 'DESCRPKG', length: 200 })
  descrpkg: string;

  @OneToMany(() => TfpnewformEntity, (tfpnewformEntity) => tfpnewformEntity.pkg)
  tfpnewforms: TfpnewformEntity[];

  @OneToMany(() => TfpreqpkgEntity, (tfpreqpkgEntity) => tfpreqpkgEntity.codpkg)
  tfpreqpkgs: TfpreqpkgEntity[];

  @OneToMany(
    () => TfpreqsanpkgEntity,
    (tfpreqsanpkgEntity) => tfpreqsanpkgEntity.codpkg,
  )
  tfpreqsanpkgs: TfpreqsanpkgEntity[];
}
