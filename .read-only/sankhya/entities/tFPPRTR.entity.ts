import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfptreiEntity } from './tFPTREI.entity';
import { TfpprofEntity } from './tFPPROF.entity';

@Index('PK_TFPPRTR', ['nrounico', 'cpfprof'], { unique: true })
@Entity('TFPPRTR', { schema: 'SANKHYA' })
export class TfpprtrEntity {
  @Column('int', { primary: true, name: 'NROUNICO' })
  nrounico: number;

  @Column('varchar', { primary: true, name: 'CPFPROF', length: 11 })
  cpfprof: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpprtrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfptreiEntity, (tfptreiEntity) => tfptreiEntity.tfpprtrs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NROUNICO', referencedColumnName: 'nrounico' }])
  nrounico2: TfptreiEntity;

  @ManyToOne(() => TfpprofEntity, (tfpprofEntity) => tfpprofEntity.tfpprtrs)
  @JoinColumn([{ name: 'AD_CPFPROF', referencedColumnName: 'cpfprof' }])
  adCpfprof: TfpprofEntity;

  @ManyToOne(() => TfpprofEntity, (tfpprofEntity) => tfpprofEntity.tfpprtrs2)
  @JoinColumn([{ name: 'CPFPROF', referencedColumnName: 'cpfprof' }])
  cpfprof2: TfpprofEntity;
}
