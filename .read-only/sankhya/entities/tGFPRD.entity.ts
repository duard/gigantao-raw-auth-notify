import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFPRD', ['codprod', 'dtimport'], { unique: true })
@Entity('TGFPRD', { schema: 'SANKHYA' })
export class TgfprdEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { primary: true, name: 'DTIMPORT' })
  dtimport: Date;

  @Column('float', { name: 'MARGLUCRO', precision: 53 })
  marglucro: number;

  @Column('float', { name: 'COMGER', precision: 53 })
  comger: number;

  @Column('float', { name: 'COMVEND', precision: 53 })
  comvend: number;

  @Column('float', { name: 'PERCCUSFIXO', precision: 53 })
  perccusfixo: number;

  @Column('float', { name: 'ROYALT', precision: 53 })
  royalt: number;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfprds)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
