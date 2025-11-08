import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfadrcstEntity } from './tGFADRCST.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index(
  'PK_TGFADRCSTR1000',
  ['codemp', 'referencia', 'regpai', 'reg', 'codItem', 'unidItem'],
  {
    unique: true,
  },
)
@Entity('TGFADRCSTR1000', { schema: 'SANKHYA' })
export class Tgfadrcstr1000Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('float', { name: 'ALIQ_FECOP', nullable: true, precision: 53 })
  aliqFecop: number | null;

  @Column('float', { name: 'ALIQ_ICMS_ITEM', precision: 53 })
  aliqIcmsItem: number;

  @Column('int', { name: 'CEST' })
  cest: number;

  @Column('int', { name: 'COD_ANP', nullable: true })
  codAnp: number | null;

  @Column('varchar', { name: 'COD_BARRAS', nullable: true, length: 14 })
  codBarras: string | null;

  @Column('int', { primary: true, name: 'COD_ITEM' })
  codItem: number;

  @Column('varchar', { name: 'IND_FECOP', length: 1 })
  indFecop: string;

  @Column('varchar', { name: 'NCM', length: 10 })
  ncm: string;

  @Column('float', { name: 'QTD_TOT_ENTRADA', precision: 53 })
  qtdTotEntrada: number;

  @Column('float', { name: 'QTD_TOT_SAIDA', precision: 53 })
  qtdTotSaida: number;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'1000'",
  })
  reg: string;

  @Column('varchar', { primary: true, name: 'UNID_ITEM', length: 2 })
  unidItem: string;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI',
    length: 4,
    default: () => "'0000'",
  })
  regpai: string;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(
    () => TgfadrcstEntity,
    (tgfadrcstEntity) => tgfadrcstEntity.tgfadrcstr1s,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
  ])
  tgfadrcst: TgfadrcstEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfadrcstr1s)
  @JoinColumn([{ name: 'COD_ITEM', referencedColumnName: 'codprod' }])
  codItem2: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfadrcstr1s)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
