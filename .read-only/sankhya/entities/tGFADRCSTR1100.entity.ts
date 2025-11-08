import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfadrcstEntity } from './tGFADRCST.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index(
  'PK_TGFADRCSTR1100',
  ['codemp', 'referencia', 'regpai2', 'regpai', 'reg', 'codItem', 'unidItem'],
  { unique: true },
)
@Entity('TGFADRCSTR1100', { schema: 'SANKHYA' })
export class Tgfadrcstr1100Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { primary: true, name: 'COD_ITEM' })
  codItem: number;

  @Column('varchar', { primary: true, name: 'UNID_ITEM', length: 2 })
  unidItem: string;

  @Column('float', { name: 'MENOR_VL_UNIT_ITEM', precision: 53 })
  menorVlUnitItem: number;

  @Column('float', { name: 'QTD_TOT_ENTRADA', precision: 53 })
  qtdTotEntrada: number;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'1100'",
  })
  reg: string;

  @Column('float', { name: 'VL_BC_ICMSST_UNIT_MED', precision: 53 })
  vlBcIcmsstUnitMed: number;

  @Column('float', { name: 'VL_TOT_ICMS_SUPORT_ENTR', precision: 53 })
  vlTotIcmsSuportEntr: number;

  @Column('float', { name: 'VL_UNIT_MED_ICMS_SUPORT_ENTR', precision: 53 })
  vlUnitMedIcmsSuportEntr: number;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI',
    length: 4,
    default: () => "'1000'",
  })
  regpai: string;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI2',
    length: 4,
    default: () => "'0000'",
  })
  regpai2: string;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(
    () => TgfadrcstEntity,
    (tgfadrcstEntity) => tgfadrcstEntity.tgfadrcstr1s3,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
  ])
  tgfadrcst: TgfadrcstEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfadrcstr1s3)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfadrcstr1s3)
  @JoinColumn([{ name: 'COD_ITEM', referencedColumnName: 'codprod' }])
  codItem2: TgfproEntity;
}
