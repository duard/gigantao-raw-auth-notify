import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpratvEntity } from './tPRATV.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TprwcpEntity } from './tPRWCP.entity';
import { TprcwcEntity } from './tPRCWC.entity';

@Index('PK_TPRTXP2', ['idefx', 'codprodpa', 'controlepa', 'codcwc', 'codwcp'], {
  unique: true,
})
@Entity('TPRTXP', { schema: 'SANKHYA' })
export class TprtxpEntity {
  @Column('int', { primary: true, name: 'IDEFX' })
  idefx: number;

  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLEPA',
    length: 11,
    default: () => "' '",
  })
  controlepa: string;

  @Column('int', { primary: true, name: 'CODCWC', default: () => '(0)' })
  codcwc: number;

  @Column('int', { primary: true, name: 'CODWCP', default: () => '(0)' })
  codwcp: number;

  @Column('varchar', { name: 'TIPOTEMPO', length: 1, default: () => "'Q'" })
  tipotempo: string;

  @Column('float', {
    name: 'TEMPOATIVIDADE',
    precision: 53,
    default: () => '(0)',
  })
  tempoatividade: number;

  @Column('char', { name: 'UNTEMPO', length: 1, default: () => "'M'" })
  untempo: string;

  @Column('smallint', { name: 'CODUSUCAD', nullable: true })
  codusucad: number | null;

  @Column('smallint', { name: 'CODUSUALT', nullable: true })
  codusualt: number | null;

  @Column('datetime', { name: 'DHCAD', nullable: true })
  dhcad: Date | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('char', {
    name: 'USARCTPADRAO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  usarctpadrao: string | null;

  @ManyToOne(() => TpratvEntity, (tpratvEntity) => tpratvEntity.tprtxps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx2: TpratvEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprtxps)
  @JoinColumn([{ name: 'CODPRODPA', referencedColumnName: 'codprod' }])
  codprodpa2: TgfproEntity;

  @ManyToOne(() => TprwcpEntity, (tprwcpEntity) => tprwcpEntity.tprtxps)
  @JoinColumn([{ name: 'CODWCP', referencedColumnName: 'codwcp' }])
  codwcp2: TprwcpEntity;

  @ManyToOne(() => TprcwcEntity, (tprcwcEntity) => tprcwcEntity.tprtxps)
  @JoinColumn([{ name: 'CODCWC', referencedColumnName: 'codcwc' }])
  codcwc2: TprcwcEntity;
}
