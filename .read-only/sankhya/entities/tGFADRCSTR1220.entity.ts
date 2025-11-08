import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfadrcstEntity } from './tGFADRCST.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index(
  'PK_TGFADRCSTR1220',
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
@Entity('TGFADRCSTR1220', { schema: 'SANKHYA' })
export class Tgfadrcstr1220Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { name: 'CFOP' })
  cfop: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 44 })
  chave: string;

  @Column('varchar', { name: 'CHAVE_REF', length: 44 })
  chaveRef: string;

  @Column('varchar', { name: 'CNPJ_CPF_DEST', nullable: true, length: 14 })
  cnpjCpfDest: string | null;

  @Column('varchar', { name: 'CNPJ_EMIT', length: 14 })
  cnpjEmit: string;

  @Column('int', { primary: true, name: 'COD_ITEM' })
  codItem: number;

  @Column('smallint', { name: 'CST_CSOSN' })
  cstCsosn: number;

  @Column('datetime', { name: 'DT_DOC' })
  dtDoc: Date;

  @Column('int', { primary: true, name: 'N_ITEM' })
  nItem: number;

  @Column('int', { name: 'N_ITEM_REF' })
  nItemRef: number;

  @Column('int', { name: 'N_NF' })
  nNf: number;

  @Column('float', { name: 'QTD_DEVOLVIDA', precision: 53 })
  qtdDevolvida: number;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'1220'",
  })
  reg: string;

  @Column('varchar', { name: 'UF_DEST', nullable: true, length: 2 })
  ufDest: string | null;

  @Column('varchar', { name: 'UF_EMIT', length: 2 })
  ufEmit: string;

  @Column('varchar', { primary: true, name: 'UNID_ITEM', length: 2 })
  unidItem: string;

  @Column('float', { name: 'VL_ICMS_EFETIVO', precision: 53 })
  vlIcmsEfetivo: number;

  @Column('float', { name: 'VL_UNIT_ITEM', precision: 53 })
  vlUnitItem: number;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI',
    length: 4,
    default: () => "'1200'",
  })
  regpai: string;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @ManyToOne(
    () => TgfadrcstEntity,
    (tgfadrcstEntity) => tgfadrcstEntity.tgfadrcstr1s8,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
  ])
  tgfadrcst: TgfadrcstEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfadrcstr1s8)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfadrcstr1s8)
  @JoinColumn([{ name: 'COD_ITEM', referencedColumnName: 'codprod' }])
  codItem2: TgfproEntity;
}
