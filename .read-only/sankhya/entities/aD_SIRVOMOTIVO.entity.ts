import { Column, Entity, Index, OneToMany } from 'typeorm';
import { AdSirvomotEntity } from './aD_SIRVOMOT.entity';

@Index('PK_AD_SIRVOMOTIVO', ['idmotivo'], { unique: true })
@Entity('AD_SIRVOMOTIVO', { schema: 'SANKHYA' })
export class AdSirvomotivoEntity {
  @Column('int', { primary: true, name: 'IDMOTIVO' })
  idmotivo: number;

  @Column('varchar', { name: 'MOTIVO', nullable: true, length: 100 })
  motivo: string | null;

  @OneToMany(
    () => AdSirvomotEntity,
    (adSirvomotEntity) => adSirvomotEntity.idmotivo,
  )
  adSirvomots: AdSirvomotEntity[];
}
