import { Column, Entity, Index } from 'typeorm';

@Index('PK_AD_TIPOATIVIDADE', ['ativcod'], { unique: true })
@Entity('AD_TIPOATIVIDADE', { schema: 'SANKHYA' })
export class AdTipoatividadeEntity {
  @Column('int', { primary: true, name: 'ATIVCOD' })
  ativcod: number;

  @Column('varchar', { name: 'ATIVDESCR', nullable: true, length: 100 })
  ativdescr: string | null;
}
