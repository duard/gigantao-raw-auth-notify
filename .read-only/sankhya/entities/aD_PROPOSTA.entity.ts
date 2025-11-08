import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AdEquipservicoEntity } from './aD_EQUIPSERVICO.entity';
import { AdInsumosEntity } from './aD_INSUMOS.entity';
import { AdObjetivoEntity } from './aD_OBJETIVO.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { AdPropostacontEntity } from './aD_PROPOSTACONT.entity';
import { AdValorequipamantoEntity } from './aD_VALOREQUIPAMANTO.entity';

@Index('PK_AD_PROPOSTA', ['codprop'], { unique: true })
@Entity('AD_PROPOSTA', { schema: 'SANKHYA' })
export class AdPropostaEntity {
  @Column('int', { primary: true, name: 'CODPROP' })
  codprop: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('text', { name: 'PARAGRAFOUNICO', nullable: true })
  paragrafounico: string | null;

  @Column('text', { name: 'REGIMETRABALHO', nullable: true })
  regimetrabalho: string | null;

  @Column('text', { name: 'HORAEXTRA', nullable: true })
  horaextra: string | null;

  @OneToMany(
    () => AdEquipservicoEntity,
    (adEquipservicoEntity) => adEquipservicoEntity.codprop2,
  )
  adEquipservicos: AdEquipservicoEntity[];

  @OneToMany(
    () => AdInsumosEntity,
    (adInsumosEntity) => adInsumosEntity.codprop2,
  )
  adInsumos: AdInsumosEntity[];

  @OneToMany(
    () => AdObjetivoEntity,
    (adObjetivoEntity) => adObjetivoEntity.codprop2,
  )
  adObjetivos: AdObjetivoEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adPropostas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(
    () => AdPropostacontEntity,
    (adPropostacontEntity) => adPropostacontEntity.codprop,
  )
  adPropostaconts: AdPropostacontEntity[];

  @OneToMany(
    () => AdValorequipamantoEntity,
    (adValorequipamantoEntity) => adValorequipamantoEntity.codprop2,
  )
  adValorequipamantos: AdValorequipamantoEntity[];
}
