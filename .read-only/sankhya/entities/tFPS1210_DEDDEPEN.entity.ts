import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1210InfoircrEntity } from './tFPS1210_INFOIRCR.entity';

@Index(
  'PK_TFPS1210_DEDDEPEN',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1210',
    'chaveinfoircomplen',
    'chaveinfoircr',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1210_DEDDEPEN', { schema: 'SANKHYA' })
export class Tfps1210DeddepenEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVEINFOIRCOMPLEN', length: 100 })
  chaveinfoircomplen: string;

  @Column('varchar', { primary: true, name: 'CHAVEINFOIRCR', length: 100 })
  chaveinfoircr: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'TPREND', length: 2 })
  tprend: string;

  @Column('varchar', { name: 'CPFDEP', length: 11 })
  cpfdep: string;

  @Column('float', { name: 'VLRDEDDEP', precision: 53 })
  vlrdeddep: number;

  @ManyToOne(
    () => Tfps1210InfoircrEntity,
    (tfps1210InfoircrEntity) => tfps1210InfoircrEntity.tfps1210Deddepens,
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
