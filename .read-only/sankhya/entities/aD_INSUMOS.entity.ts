import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AdPropostaEntity } from './aD_PROPOSTA.entity';

@Index('PK_AD_INSUMOS', ['codprop', 'idinsumos'], { unique: true })
@Entity('AD_INSUMOS', { schema: 'SANKHYA' })
export class AdInsumosEntity {
  @Column('int', { primary: true, name: 'CODPROP' })
  codprop: number;

  @Column('int', { primary: true, name: 'IDINSUMOS' })
  idinsumos: number;

  @Column('varchar', { name: 'ITEM01', nullable: true, length: 10 })
  item01: string | null;

  @Column('text', { name: 'DESCR01', nullable: true })
  descr01: string | null;

  @Column('varchar', { name: 'INDICE', nullable: true, length: 10 })
  indice: string | null;

  @ManyToOne(
    () => AdPropostaEntity,
    (adPropostaEntity) => adPropostaEntity.adInsumos,
  )
  @JoinColumn([{ name: 'CODPROP', referencedColumnName: 'codprop' }])
  codprop2: AdPropostaEntity;
}
