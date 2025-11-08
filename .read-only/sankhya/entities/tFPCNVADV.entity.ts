import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpcnvEntity } from './tFPCNV.entity';
import { TfpadvEntity } from './tFPADV.entity';

@Index('PK_TFPCNVADV', ['codsind', 'processo', 'sequencia', 'codadv'], {
  unique: true,
})
@Entity('TFPCNVADV', { schema: 'SANKHYA' })
export class TfpcnvadvEntity {
  @Column('smallint', { primary: true, name: 'CODSIND' })
  codsind: number;

  @Column('varchar', { primary: true, name: 'PROCESSO', length: 30 })
  processo: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODADV' })
  codadv: number;

  @Column('float', { name: 'VLRADV', nullable: true, precision: 53 })
  vlradv: number | null;

  @ManyToOne(() => TfpcnvEntity, (tfpcnvEntity) => tfpcnvEntity.tfpcnvadvs)
  @JoinColumn([
    { name: 'CODSIND', referencedColumnName: 'codsind' },
    { name: 'PROCESSO', referencedColumnName: 'processo' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tfpcnv: TfpcnvEntity;

  @ManyToOne(() => TfpadvEntity, (tfpadvEntity) => tfpadvEntity.tfpcnvadvs)
  @JoinColumn([{ name: 'CODADV', referencedColumnName: 'codigo' }])
  codadv2: TfpadvEntity;
}
