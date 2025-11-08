import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1210InfoircrEntity } from './tFPS1210_INFOIRCR.entity';

@Index(
  'PK_TFPS1210_PREVIDCOMPL',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1210',
    'chaveinfoircr',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1210_PREVIDCOMPL', { schema: 'SANKHYA' })
export class Tfps1210PrevidcomplEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE1210', length: 100 })
  chave1210: string;

  @Column('varchar', { primary: true, name: 'CHAVEINFOIRCR', length: 100 })
  chaveinfoircr: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'TPPREV', length: 1 })
  tpprev: string;

  @Column('varchar', { name: 'CNPJENTIDPC', length: 14 })
  cnpjentidpc: string;

  @Column('float', { name: 'VLRDEDPC', precision: 53 })
  vlrdedpc: number;

  @Column('float', { name: 'VLRDEDPC13', nullable: true, precision: 53 })
  vlrdedpc13: number | null;

  @ManyToOne(
    () => Tfps1210InfoircrEntity,
    (tfps1210InfoircrEntity) => tfps1210InfoircrEntity.tfps1210Previdcompls,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1210', referencedColumnName: 'chave1210' },
    { name: 'CHAVEINFOIRCOMPLEN', referencedColumnName: 'chaveinfoircomplen' },
    { name: 'CHAVEINFOIRCR', referencedColumnName: 'chave' },
  ])
  tfps1210Infoircr: Tfps1210InfoircrEntity;
}
