import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfadrcstEntity } from './tGFADRCST.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index(
  'PK_TGFADRCSTR1110',
  [
    'codemp',
    'referencia',
    'regpai',
    'reg',
    'codItem',
    'unidItem',
    'chave',
    'nItem',
  ],
  { unique: true },
)
@Entity('TGFADRCSTR1110', { schema: 'SANKHYA' })
export class Tgfadrcstr1110Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { name: 'CFOP' })
  cfop: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 44 })
  chave: string;

  @Column('varchar', { name: 'CNPJ_DEST', length: 14 })
  cnpjDest: string;

  @Column('varchar', { name: 'CNPJ_EMIT', length: 14 })
  cnpjEmit: string;

  @Column('int', { primary: true, name: 'COD_ITEM' })
  codItem: number;

  @Column('varchar', { name: 'COD_RESP_RET', length: 1 })
  codRespRet: string;

  @Column('smallint', { name: 'CST_CSOSN' })
  cstCsosn: number;

  @Column('datetime', { name: 'DT_DOC' })
  dtDoc: Date;

  @Column('int', { primary: true, name: 'N_ITEM' })
  nItem: number;

  @Column('int', { name: 'N_NF' })
  nNf: number;

  @Column('float', { name: 'QTD_ENTRADA', precision: 53 })
  qtdEntrada: number;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'1110'",
  })
  reg: string;

  @Column('varchar', { name: 'UF_DEST', length: 2 })
  ufDest: string;

  @Column('varchar', { name: 'UF_EMIT', length: 2 })
  ufEmit: string;

  @Column('varchar', { primary: true, name: 'UNID_ITEM', length: 2 })
  unidItem: string;

  @Column('float', { name: 'VL_BC_ICMS_ST', precision: 53 })
  vlBcIcmsSt: number;

  @Column('float', { name: 'VL_ICMS_SUPORT_ENTR', precision: 53 })
  vlIcmsSuportEntr: number;

  @Column('float', { name: 'VL_UNIT_ITEM', precision: 53 })
  vlUnitItem: number;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI',
    length: 4,
    default: () => "'1100'",
  })
  regpai: string;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @ManyToOne(
    () => TgfadrcstEntity,
    (tgfadrcstEntity) => tgfadrcstEntity.tgfadrcstr1s4,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
  ])
  tgfadrcst: TgfadrcstEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfadrcstr1s4)
  @JoinColumn([{ name: 'COD_ITEM', referencedColumnName: 'codprod' }])
  codItem2: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfadrcstr1s4)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
