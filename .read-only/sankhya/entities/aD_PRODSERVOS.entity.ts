import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsconEntity } from './tCSCON.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_AD_PRODSERVOS', ['numcontrato', 'sequencia'], { unique: true })
@Entity('AD_PRODSERVOS', { schema: 'SANKHYA' })
export class AdProdservosEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'OBS', nullable: true, length: 100 })
  obs: string | null;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.adProdservos)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.adProdservos)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;
}
