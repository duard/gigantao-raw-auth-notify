import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgftabEntity } from './tGFTAB.entity';

@Index('PK_TGFEXC', ['nutab', 'codprod', 'codlocal', 'controle'], {
  unique: true,
})
@Index('TGFEXC_I01', ['codprod'], {})
@Entity('TGFEXC', { schema: 'SANKHYA' })
export class TgfexcEntity {
  @Column('int', { primary: true, name: 'NUTAB' })
  nutab: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODLOCAL', default: () => '(0)' })
  codlocal: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('float', { name: 'VLRVENDA', nullable: true, precision: 53 })
  vlrvenda: number | null;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'V'" })
  tipo: string;

  @Column('char', {
    name: 'MODBASEICMS',
    nullable: true,
    length: 1,
    default: () => "'O'",
  })
  modbaseicms: string | null;

  @Column('float', { name: 'PERCDESC', nullable: true, precision: 53 })
  percdesc: number | null;

  @Column('float', { name: 'MARGLUCRO', nullable: true, precision: 53 })
  marglucro: number | null;

  @Column('float', { name: 'PERCCOM', nullable: true, precision: 53 })
  perccom: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfexcs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfexcs)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @ManyToOne(() => TgftabEntity, (tgftabEntity) => tgftabEntity.tgfexcs)
  @JoinColumn([{ name: 'NUTAB', referencedColumnName: 'nutab' }])
  nutab2: TgftabEntity;
}
