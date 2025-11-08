import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpratvEntity } from './tPRATV.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgflocEntity } from './tGFLOC.entity';

@Index('PK_TPRLSP', ['idefx', 'seqlsp'], { unique: true })
@Entity('TPRLSP', { schema: 'SANKHYA' })
export class TprlspEntity {
  @Column('int', { primary: true, name: 'IDEFX' })
  idefx: number;

  @Column('smallint', { primary: true, name: 'SEQLSP' })
  seqlsp: number;

  @Column('varchar', { name: 'CONTROLEPA', length: 11 })
  controlepa: string;

  @Column('char', { name: 'TIPOCONTROLESP', length: 1, default: () => "'L'" })
  tipocontrolesp: string;

  @Column('int', { name: 'CODPRODSP' })
  codprodsp: number;

  @Column('varchar', { name: 'CONTROLESP', length: 11 })
  controlesp: string;

  @Column('char', { name: 'TIPOQTD', length: 1, default: () => "'V'" })
  tipoqtd: string;

  @Column('float', { name: 'QTDMISTURA', precision: 53, default: () => '(0)' })
  qtdmistura: number;

  @Column('varchar', { name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('char', { name: 'EXIGEAPONTAMENTO', length: 1, default: () => "'S'" })
  exigeapontamento: string;

  @Column('char', { name: 'SUBPRODUTOPERDA', length: 1, default: () => "'N'" })
  subprodutoperda: string;

  @Column('varchar', { name: 'BASCALCDTVALSP', nullable: true, length: 1 })
  bascalcdtvalsp: string | null;

  @Column('smallint', { name: 'CODUSUALT', nullable: true })
  codusualt: number | null;

  @Column('datetime', { name: 'DHCAD', nullable: true })
  dhcad: Date | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('smallint', { name: 'CODUSUCAD', nullable: true })
  codusucad: number | null;

  @ManyToOne(() => TpratvEntity, (tpratvEntity) => tpratvEntity.tprlsps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx2: TpratvEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprlsps)
  @JoinColumn([{ name: 'CODPRODPA', referencedColumnName: 'codprod' }])
  codprodpa: TgfproEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tprlsps)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal: TgflocEntity;
}
