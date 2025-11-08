import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AdPropostaEntity } from './aD_PROPOSTA.entity';

@Index('PK_AD_EQUIPSERVICO', ['codprop', 'idequipaservico'], { unique: true })
@Entity('AD_EQUIPSERVICO', { schema: 'SANKHYA' })
export class AdEquipservicoEntity {
  @Column('int', { primary: true, name: 'CODPROP' })
  codprop: number;

  @Column('int', { primary: true, name: 'IDEQUIPASERVICO' })
  idequipaservico: number;

  @Column('varchar', { name: 'DESCREQSER', nullable: true, length: 100 })
  descreqser: string | null;

  @Column('int', { name: 'INDICE', nullable: true })
  indice: number | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('varchar', { name: 'LOCALSERVICO', nullable: true, length: 100 })
  localservico: string | null;

  @Column('datetime', { name: 'DATAINICIO', nullable: true })
  datainicio: Date | null;

  @Column('varchar', { name: 'PERIODOLOCA', nullable: true, length: 100 })
  periodoloca: string | null;

  @ManyToOne(
    () => AdPropostaEntity,
    (adPropostaEntity) => adPropostaEntity.adEquipservicos,
  )
  @JoinColumn([{ name: 'CODPROP', referencedColumnName: 'codprop' }])
  codprop2: AdPropostaEntity;
}
