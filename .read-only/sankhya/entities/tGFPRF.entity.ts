import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFPRF', ['codprod', 'qtd'], { unique: true })
@Entity('TGFPRF', { schema: 'SANKHYA' })
export class TgfprfEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('float', { primary: true, name: 'QTD', precision: 53 })
  qtd: number;

  @Column('float', { name: 'DESCMAXFLEX', precision: 53 })
  descmaxflex: number;

  @Column('float', { name: 'DESCPRECO', nullable: true, precision: 53 })
  descpreco: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfprfs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
