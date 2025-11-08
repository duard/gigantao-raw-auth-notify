import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpcnvadvEntity } from './tFPCNVADV.entity';

@Index('PK_TFPADV', ['codigo'], { unique: true })
@Entity('TFPADV', { schema: 'SANKHYA' })
export class TfpadvEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('smallint', { name: 'TIPOINSCRICAO' })
  tipoinscricao: number;

  @Column('varchar', { name: 'NROINSCRICAO', length: 14 })
  nroinscricao: string;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 50 })
  descricao: string | null;

  @OneToMany(
    () => TfpcnvadvEntity,
    (tfpcnvadvEntity) => tfpcnvadvEntity.codadv2,
  )
  tfpcnvadvs: TfpcnvadvEntity[];
}
