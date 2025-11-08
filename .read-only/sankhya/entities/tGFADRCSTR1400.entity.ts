import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfadrcstEntity } from './tGFADRCST.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index(
  'PK_TGFADRCSTR1400',
  ['codemp', 'referencia', 'regpai', 'reg', 'codItem', 'unidItem'],
  {
    unique: true,
  },
)
@Entity('TGFADRCSTR1400', { schema: 'SANKHYA' })
export class Tgfadrcstr1400Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { primary: true, name: 'COD_ITEM' })
  codItem: number;

  @Column('float', { name: 'APUR_ICMSST_RECUPERAR_RESSARC', precision: 53 })
  apurIcmsstRecuperarRessarc: number;

  @Column('float', { name: 'QTD_TOT_SAIDA', precision: 53 })
  qtdTotSaida: number;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'1400'",
  })
  reg: string;

  @Column('float', { name: 'VL_CONFRONTO_ICMS_ENTRADA', precision: 53 })
  vlConfrontoIcmsEntrada: number;

  @Column('float', { name: 'VL_TOT_ICMS_EFETIVO', precision: 53 })
  vlTotIcmsEfetivo: number;

  @Column('varchar', { primary: true, name: 'UNID_ITEM', length: 2 })
  unidItem: string;

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
    (tgfadrcstEntity) => tgfadrcstEntity.tgfadrcstr112,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
  ])
  tgfadrcst: TgfadrcstEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfadrcstr112)
  @JoinColumn([{ name: 'COD_ITEM', referencedColumnName: 'codprod' }])
  codItem2: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfadrcstr112)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
