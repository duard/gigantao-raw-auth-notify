import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfphcpEntity } from './tFPHCP.entity';
import { TfphfxEntity } from './tFPHFX.entity';
import { TfppreEntity } from './tFPPRE.entity';
import { TfpregcalcEntity } from './tFPREGCALC.entity';

@Index('PK_TFPHLM', ['nulimitehr'], { unique: true })
@Entity('TFPHLM', { schema: 'SANKHYA' })
export class TfphlmEntity {
  @Column('smallint', { primary: true, name: 'NULIMITEHR' })
  nulimitehr: number;

  @Column('varchar', { name: 'DESCRLIMITEHR', length: 60 })
  descrlimitehr: string;

  @Column('smallint', { name: 'TIPOLIMITE', default: () => '(1)' })
  tipolimite: number;

  @Column('char', { name: 'USAHORADIARIA', length: 1, default: () => "'N'" })
  usahoradiaria: string;

  @Column('char', { name: 'USALIMITEMENSAL', length: 1, default: () => "'N'" })
  usalimitemensal: string;

  @Column('char', { name: 'SOMAACRESCLIMITE', length: 1, default: () => "'N'" })
  somaacresclimite: string;

  @Column('char', { name: 'ORDEMPORSEQ', length: 1, default: () => "'N'" })
  ordemporseq: string;

  @OneToMany(() => TfphcpEntity, (tfphcpEntity) => tfphcpEntity.nulimitehr2)
  tfphcps: TfphcpEntity[];

  @OneToMany(() => TfphfxEntity, (tfphfxEntity) => tfphfxEntity.codtabhoras)
  tfphfxes: TfphfxEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.nufaixapgtobh)
  tfppres: TfppreEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.nufaixapgtobh,
  )
  tfpregcalcs: TfpregcalcEntity[];
}
