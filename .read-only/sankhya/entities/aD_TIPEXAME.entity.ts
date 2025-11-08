import { Column, Entity, Index, ManyToMany } from 'typeorm';
import { AdContratgigEntity } from './aD_CONTRATGIG.entity';

@Index('PK_AD_TIPEXAME', ['unico'], { unique: true })
@Entity('AD_TIPEXAME', { schema: 'SANKHYA' })
export class AdTipexameEntity {
  @Column('int', { primary: true, name: 'UNICO' })
  unico: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @ManyToMany(
    () => AdContratgigEntity,
    (adContratgigEntity) => adContratgigEntity.adTipexames,
  )
  adContratgigs: AdContratgigEntity[];
}
