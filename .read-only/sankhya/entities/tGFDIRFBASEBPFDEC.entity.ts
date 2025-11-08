import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index(
  'PK_TGFDIRFBASEBPFDEC',
  [
    'codemp',
    'dtinicial',
    'dtfinal',
    'reg',
    'regpai',
    'regpai2',
    'regpai3',
    'codrec',
    'cpf',
    'tipo',
    'codimp',
    'nunota',
    'sequencia',
    'nufin',
  ],
  { unique: true },
)
@Entity('TGFDIRFBASEBPFDEC', { schema: 'SANKHYA' })
export class TgfdirfbasebpfdecEntity {
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
    default: () => "'BASEBPFDEC'",
  })
  reg: string;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI',
    length: 6,
    default: () => "'BPFDEC'",
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

  @Column('varchar', { primary: true, name: 'CPF', length: 11 })
  cpf: string;

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

  @Column('char', { name: 'RETIDO', nullable: true, length: 1 })
  retido: string | null;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 10 })
  origem: string | null;

  @ManyToOne(
    () => TgfempEntity,
    (tgfempEntity) => tgfempEntity.tgfdirfbasebpfdecs,
  )
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
