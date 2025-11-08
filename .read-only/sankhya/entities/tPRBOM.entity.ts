import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprimpsEntity } from './tPRIMPS.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index(
  'PK_TPRBOM',
  ['numps', 'seqimps', 'codprodmp', 'controlemp', 'tipoqtd'],
  { unique: true },
)
@Entity('TPRBOM', { schema: 'SANKHYA' })
export class TprbomEntity {
  @Column('int', { primary: true, name: 'NUMPS' })
  numps: number;

  @Column('int', { primary: true, name: 'SEQIMPS' })
  seqimps: number;

  @Column('int', { primary: true, name: 'CODPRODMP' })
  codprodmp: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLEMP',
    length: 11,
    default: () => "' '",
  })
  controlemp: string;

  @Column('float', { name: 'QTDMISTURA', precision: 53, default: () => '(0)' })
  qtdmistura: number;

  @Column('char', {
    primary: true,
    name: 'TIPOQTD',
    length: 1,
    default: () => "'V'",
  })
  tipoqtd: string;

  @Column('float', { name: 'QTDTOTAL', precision: 53, default: () => '(0)' })
  qtdtotal: number;

  @Column('char', { name: 'TIPOPI', length: 1, default: () => "'E'" })
  tipopi: string;

  @Column('char', { name: 'TIPOSUBOP', length: 1, default: () => "'I'" })
  tiposubop: string;

  @Column('char', { name: 'PRODINTERM', length: 1, default: () => "'N'" })
  prodinterm: string;

  @ManyToOne(() => TprimpsEntity, (tprimpsEntity) => tprimpsEntity.tprboms, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUMPS', referencedColumnName: 'numps' },
    { name: 'SEQIMPS', referencedColumnName: 'seqimps' },
  ])
  tprimps: TprimpsEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprboms)
  @JoinColumn([{ name: 'CODPRODMP', referencedColumnName: 'codprod' }])
  codprodmp2: TgfproEntity;
}
