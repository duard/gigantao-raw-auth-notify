import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TgftcfEntity } from './tGFTCF.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFMFO', ['nunota'], { unique: true })
@Entity('TGFMFO', { schema: 'SANKHYA' })
export class TgfmfoEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { name: 'QTDPARCELAS', default: () => '(0)' })
  qtdparcelas: number;

  @Column('smallint', { name: 'CARENCIA', default: () => '(0)' })
  carencia: number;

  @Column('float', { name: 'TAXAJUR', precision: 53, default: () => '(0)' })
  taxajur: number;

  @Column('money', { name: 'VLRTAC', default: () => '(0)' })
  vlrtac: number;

  @Column('money', { name: 'VLRSEG', default: () => '(0)' })
  vlrseg: number;

  @Column('money', { name: 'VLRBOL', default: () => '(0)' })
  vlrbol: number;

  @Column('money', { name: 'VLRENTRADA', default: () => '(0)' })
  vlrentrada: number;

  @Column('money', { name: 'VLRFINANCIADO', default: () => '(0)' })
  vlrfinanciado: number;

  @Column('float', { name: 'COEFICIENTE', precision: 53, default: () => '(0)' })
  coeficiente: number;

  @ManyToOne(() => TgftcfEntity, (tgftcfEntity) => tgftcfEntity.tgfmfos)
  @JoinColumn([{ name: 'CODTCF', referencedColumnName: 'codtcf' }])
  codtcf: TgftcfEntity;

  @OneToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfmfo, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
