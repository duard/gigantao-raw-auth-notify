import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AdPropostaEntity } from './aD_PROPOSTA.entity';

@Index('PK_AD_VALOREQUIPAMANTO', ['codprop', 'idvalores'], { unique: true })
@Entity('AD_VALOREQUIPAMANTO', { schema: 'SANKHYA' })
export class AdValorequipamantoEntity {
  @Column('int', { primary: true, name: 'CODPROP' })
  codprop: number;

  @Column('int', { primary: true, name: 'IDVALORES' })
  idvalores: number;

  @Column('varchar', { name: 'EQUIPAMENTO', nullable: true, length: 100 })
  equipamento: string | null;

  @Column('float', { name: 'VALOREQUIMAOOBRA', nullable: true, precision: 53 })
  valorequimaoobra: number | null;

  @Column('float', { name: 'VLRHORAEQUI', nullable: true, precision: 53 })
  vlrhoraequi: number | null;

  @Column('float', { name: 'VLRHORAMAO', nullable: true, precision: 53 })
  vlrhoramao: number | null;

  @Column('float', { name: 'GARANTIA', nullable: true, precision: 53 })
  garantia: number | null;

  @Column('float', { name: 'MOBIDESMOB', nullable: true, precision: 53 })
  mobidesmob: number | null;

  @ManyToOne(
    () => AdPropostaEntity,
    (adPropostaEntity) => adPropostaEntity.adValorequipamantos,
  )
  @JoinColumn([{ name: 'CODPROP', referencedColumnName: 'codprop' }])
  codprop2: AdPropostaEntity;
}
