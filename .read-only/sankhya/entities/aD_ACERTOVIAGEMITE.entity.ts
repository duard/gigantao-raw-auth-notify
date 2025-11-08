import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AdAcertoviagemEntity } from './aD_ACERTOVIAGEM.entity';
import { TgfnatEntity } from './tGFNAT.entity';

@Index('PK_AD_ACERTOVIAGEMITE', ['nroadiant', 'sequencia'], { unique: true })
@Entity('AD_ACERTOVIAGEMITE', { schema: 'SANKHYA' })
export class AdAcertoviagemiteEntity {
  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'NROADIANT' })
  nroadiant: number;

  @Column('datetime', { name: 'DATA', nullable: true })
  data: Date | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('image', { name: 'COMPROVANTE', nullable: true })
  comprovante: Buffer | null;

  @Column('text', { name: 'OBSITE', nullable: true })
  obsite: string | null;

  @Column('image', { name: 'COMPROVANTE2', nullable: true })
  comprovante2: Buffer | null;

  @Column('varchar', { name: 'PAGO_DINHEIRO', nullable: true, length: 10 })
  pagoDinheiro: string | null;

  @ManyToOne(
    () => AdAcertoviagemEntity,
    (adAcertoviagemEntity) => adAcertoviagemEntity.adAcertoviagemites,
  )
  @JoinColumn([{ name: 'NROADIANT', referencedColumnName: 'nroadiant' }])
  nroadiant2: AdAcertoviagemEntity;

  @ManyToOne(
    () => TgfnatEntity,
    (tgfnatEntity) => tgfnatEntity.adAcertoviagemites,
  )
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;
}
