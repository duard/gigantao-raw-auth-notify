import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AdQuitaEntity } from './aD_QUITA.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_AD_ITEQUITA', ['id', 'sequencia'], { unique: true })
@Entity('AD_ITEQUITA', { schema: 'SANKHYA' })
export class AdItequitaEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CONTROLE', nullable: true, length: 100 })
  controle: string | null;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @Column('float', { name: 'VLR_TOT', nullable: true, precision: 53 })
  vlrTot: number | null;

  @Column('float', { name: 'VLR_UNIT', nullable: true, precision: 53 })
  vlrUnit: number | null;

  @Column('int', { name: 'CODUSURESP', nullable: true })
  codusuresp: number | null;

  @Column('varchar', { name: 'FECHADO', nullable: true, length: 10 })
  fechado: string | null;

  @Column('varchar', { name: 'DESCRGRUPOPROD', nullable: true, length: 100 })
  descrgrupoprod: string | null;

  @ManyToOne(() => AdQuitaEntity, (adQuitaEntity) => adQuitaEntity.adItequitas)
  @JoinColumn([{ name: 'ID', referencedColumnName: 'id' }])
  adQuita: AdQuitaEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.adItequitas)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;
}
