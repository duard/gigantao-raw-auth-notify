import { Column, Entity, Index } from 'typeorm';

@Index('PK_AD_VALORESDPORC', ['nunico', 'ano'], { unique: true })
@Entity('AD_VALORESDPORC', { schema: 'SANKHYA' })
export class AdValoresdporcEntity {
  @Column('int', { primary: true, name: 'ANO' })
  ano: number;

  @Column('int', { primary: true, name: 'NUNICO' })
  nunico: number;
}
