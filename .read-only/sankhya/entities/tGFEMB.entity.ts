import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfctfEntity } from './tGFCTF.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFEMB', ['nuemb'], { unique: true })
@Entity('TGFEMB', { schema: 'SANKHYA' })
export class TgfembEntity {
  @Column('int', { primary: true, name: 'NUEMB' })
  nuemb: number;

  @Column('int', { name: 'LOTE', default: () => '(0)' })
  lote: number;

  @Column('datetime', { name: 'DTEMB' })
  dtemb: Date;

  @Column('float', { name: 'QTDBOLSAS', precision: 53, default: () => '(0)' })
  qtdbolsas: number;

  @Column('float', { name: 'PESOBRUTO', precision: 53, default: () => '(0)' })
  pesobruto: number;

  @Column('float', { name: 'PESOTARA', precision: 53, default: () => '(0)' })
  pesotara: number;

  @Column('float', { name: 'PESOLIQUIDO', precision: 53, default: () => '(0)' })
  pesoliquido: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DTMOV' })
  dtmov: Date;

  @Column('char', { name: 'FECHADO', length: 1, default: () => "'N'" })
  fechado: string;

  @ManyToOne(() => TgfctfEntity, (tgfctfEntity) => tgfctfEntity.tgfembs)
  @JoinColumn([{ name: 'NUCTF', referencedColumnName: 'nuctf' }])
  nuctf: TgfctfEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfembs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}
