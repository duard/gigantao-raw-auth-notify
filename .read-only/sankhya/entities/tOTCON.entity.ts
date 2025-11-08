import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TOTCON', ['codprod', 'controle'], { unique: true })
@Entity('TOTCON', { schema: 'SANKHYA' })
export class TotconEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CONTROLE', length: 11 })
  controle: string;

  @Column('smallint', { name: 'DIAMETRO', default: () => '(0)' })
  diametro: number;

  @Column('float', { name: 'BASE', precision: 53, default: () => '(0)' })
  base: number;

  @Column('float', { name: 'ADICAO', precision: 53, default: () => '(0)' })
  adicao: number;

  @Column('char', { name: 'OLHO', length: 1, default: () => "'D'" })
  olho: string;

  @Column('float', { name: 'BASEREAL', nullable: true, precision: 53 })
  basereal: number | null;

  @Column('float', { name: 'ESPESSURA', nullable: true, precision: 53 })
  espessura: number | null;

  @Column('float', { name: 'CURVAANT', nullable: true, precision: 53 })
  curvaant: number | null;

  @Column('float', { name: 'SAGITA', nullable: true, precision: 53 })
  sagita: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.totcons, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
