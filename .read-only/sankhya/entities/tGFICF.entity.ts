import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgftcfEntity } from './tGFTCF.entity';

@Index('PK_TGFICF', ['codtcf', 'carencia', 'qtdparcelas'], { unique: true })
@Entity('TGFICF', { schema: 'SANKHYA' })
export class TgficfEntity {
  @Column('int', { primary: true, name: 'CODTCF' })
  codtcf: number;

  @Column('smallint', { primary: true, name: 'CARENCIA' })
  carencia: number;

  @Column('smallint', { primary: true, name: 'QTDPARCELAS' })
  qtdparcelas: number;

  @Column('float', { name: 'COEFICIENTE', precision: 53, default: () => '(0)' })
  coeficiente: number;

  @ManyToOne(() => TgftcfEntity, (tgftcfEntity) => tgftcfEntity.tgficfs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODTCF', referencedColumnName: 'codtcf' }])
  codtcf2: TgftcfEntity;
}
