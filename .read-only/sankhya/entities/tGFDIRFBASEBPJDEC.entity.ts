import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index(
  'PK_TGFDIRFBASEBPJDEC',
  [
    'codemp',
    'dtinicial',
    'dtfinal',
    'reg',
    'regpai',
    'regpai2',
    'regpai3',
    'codrec',
    'cnpj',
    'tipo',
    'codimp',
    'nunota',
    'sequencia',
    'nufin',
  ],
  { unique: true },
)
@Entity('TGFDIRFBASEBPJDEC', { schema: 'SANKHYA' })
export class TgfdirfbasebpjdecEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 10,
    default: () => "'BASEBPJDEC'",
  })
  reg: string;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI',
    length: 6,
    default: () => "'BPJDEC'",
  })
  regpai: string;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI2',
    length: 5,
    default: () => "'IDREC'",
  })
  regpai2: string;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI3',
    length: 5,
    default: () => "'DECPJ'",
  })
  regpai3: string;

  @Column('varchar', { primary: true, name: 'CODREC', length: 4 })
  codrec: string;

  @Column('varchar', { primary: true, name: 'CNPJ', length: 14 })
  cnpj: string;

  @Column('varchar', { primary: true, name: 'TIPO', length: 3 })
  tipo: string;

  @Column('smallint', { primary: true, name: 'CODIMP' })
  codimp: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('smallint', { name: 'TIPOIMPOSTO', nullable: true })
  tipoimposto: number | null;

  @Column('float', { name: 'BASE', nullable: true, precision: 53 })
  base: number | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'CODNAT', nullable: true })
  codnat: number | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('datetime', { name: 'REFERENCIA', nullable: true })
  referencia: Date | null;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @ManyToOne(
    () => TgfempEntity,
    (tgfempEntity) => tgfempEntity.tgfdirfbasebpjdecs,
  )
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
