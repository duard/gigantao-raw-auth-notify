import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AdPropostaEntity } from './aD_PROPOSTA.entity';

@Index('PK_AD_OBJETIVO', ['codprop', 'codobjetivo'], { unique: true })
@Entity('AD_OBJETIVO', { schema: 'SANKHYA' })
export class AdObjetivoEntity {
  @Column('int', { primary: true, name: 'CODPROP' })
  codprop: number;

  @Column('int', { primary: true, name: 'CODOBJETIVO' })
  codobjetivo: number;

  @Column('varchar', { name: 'DESCROBJETIVO', nullable: true, length: 100 })
  descrobjetivo: string | null;

  @Column('varchar', { name: 'INDICEOBJETIVO', nullable: true, length: 100 })
  indiceobjetivo: string | null;

  @Column('text', { name: 'CLAU01', nullable: true })
  clau01: string | null;

  @ManyToOne(
    () => AdPropostaEntity,
    (adPropostaEntity) => adPropostaEntity.adObjetivos,
  )
  @JoinColumn([{ name: 'CODPROP', referencedColumnName: 'codprop' }])
  codprop2: AdPropostaEntity;
}
