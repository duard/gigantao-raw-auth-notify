import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpratvEntity } from './tPRATV.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TPRMPA', ['idefx', 'seqmpa'], { unique: true })
@Entity('TPRMPA', { schema: 'SANKHYA' })
export class TprmpaEntity {
  @Column('int', { primary: true, name: 'IDEFX' })
  idefx: number;

  @Column('smallint', { primary: true, name: 'SEQMPA' })
  seqmpa: number;

  @Column('varchar', { name: 'CONTROLEPA', length: 11 })
  controlepa: string;

  @Column('varchar', { name: 'CONTROLEMP', length: 11, default: () => "' '" })
  controlemp: string;

  @Column('int', { name: 'CODPRODMPALT' })
  codprodmpalt: number;

  @Column('varchar', {
    name: 'CONTROLEMPALT',
    length: 11,
    default: () => "' '",
  })
  controlempalt: string;

  @Column('char', { name: 'USOMPA', length: 1, default: () => "'A'" })
  usompa: string;

  @Column('float', { name: 'QTDMISTURA', precision: 53, default: () => '(0)' })
  qtdmistura: number;

  @Column('varchar', { name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('smallint', { name: 'CONJUNTO', nullable: true })
  conjunto: number | null;

  @Column('int', { name: 'CODLOCALORIG', nullable: true })
  codlocalorig: number | null;

  @Column('int', { name: 'CODLOCALBAIXA', nullable: true })
  codlocalbaixa: number | null;

  @Column('smallint', { name: 'CODUSUALT', nullable: true })
  codusualt: number | null;

  @Column('datetime', { name: 'DHCAD', nullable: true })
  dhcad: Date | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('smallint', { name: 'CODUSUCAD', nullable: true })
  codusucad: number | null;

  @ManyToOne(() => TpratvEntity, (tpratvEntity) => tpratvEntity.tprmpas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx2: TpratvEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprmpas)
  @JoinColumn([{ name: 'CODPRODPA', referencedColumnName: 'codprod' }])
  codprodpa: TgfproEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprmpas2)
  @JoinColumn([{ name: 'CODPRODMP', referencedColumnName: 'codprod' }])
  codprodmp: TgfproEntity;
}
