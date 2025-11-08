import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfadrcstEntity } from './tGFADRCST.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index(
  'PK_TGFADRCSTR1200',
  ['codemp', 'referencia', 'regpai', 'reg', 'codItem', 'unidItem'],
  {
    unique: true,
  },
)
@Entity('TGFADRCSTR1200', { schema: 'SANKHYA' })
export class Tgfadrcstr1200Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { primary: true, name: 'COD_ITEM' })
  codItem: number;

  @Column('varchar', { primary: true, name: 'UNID_ITEM', length: 2 })
  unidItem: string;

  @Column('float', { name: 'APUR_FECOP_COMPLEMENTAR', precision: 53 })
  apurFecopComplementar: number;

  @Column('float', { name: 'APUR_FECOP_RESSARCIR', precision: 53 })
  apurFecopRessarcir: number;

  @Column('float', { name: 'APUR_ICMSST_COMPLEMENTAR', precision: 53 })
  apurIcmsstComplementar: number;

  @Column('float', { name: 'APUR_ICMSST_RECUPERAR_RESSARC', precision: 53 })
  apurIcmsstRecuperarRessarc: number;

  @Column('float', { name: 'QTD_TOT_SAIDA', precision: 53 })
  qtdTotSaida: number;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'1200'",
  })
  reg: string;

  @Column('float', { name: 'RESULT_COMPLEMENTAR', precision: 53 })
  resultComplementar: number;

  @Column('float', { name: 'RESULT_RECUPERAR_RESSARCIR', precision: 53 })
  resultRecuperarRessarcir: number;

  @Column('float', { name: 'VL_CONFRONTO_ICMS_ENTRADA', precision: 53 })
  vlConfrontoIcmsEntrada: number;

  @Column('float', { name: 'VL_TOT_ICMS_EFETIVO', precision: 53 })
  vlTotIcmsEfetivo: number;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI',
    length: 4,
    default: () => "'1000'",
  })
  regpai: string;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(
    () => TgfadrcstEntity,
    (tgfadrcstEntity) => tgfadrcstEntity.tgfadrcstr1s6,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
  ])
  tgfadrcst: TgfadrcstEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfadrcstr1s6)
  @JoinColumn([{ name: 'COD_ITEM', referencedColumnName: 'codprod' }])
  codItem2: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfadrcstr1s6)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
