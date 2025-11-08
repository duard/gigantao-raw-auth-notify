import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1210DfipgtoEntity } from './tFPS1210_DFIPGTO.entity';
import { Tfps1210IpgtoEntity } from './tFPS1210_IPGTO.entity';

@Index(
  'PK_TFPS1210_FIPGTO',
  ['codemp', 'dtref', 'sequencia', 'tpamb', 'cpfbenef', 'dtTppgto', 'chave'],
  { unique: true },
)
@Entity('TFPS1210_FIPGTO', { schema: 'SANKHYA' })
export class Tfps1210FipgtoEntity {
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

  @Column('varchar', { primary: true, name: 'CPFBENEF', length: 100 })
  cpfbenef: string;

  @Column('varchar', { primary: true, name: 'DT_TPPGTO', length: 100 })
  dtTppgto: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('datetime', { name: 'DTINIGOZ', nullable: true })
  dtinigoz: Date | null;

  @Column('smallint', { name: 'QTDIAS', nullable: true })
  qtdias: number | null;

  @Column('float', { name: 'VRLIQ', nullable: true, precision: 53 })
  vrliq: number | null;

  @OneToMany(
    () => Tfps1210DfipgtoEntity,
    (tfps1210DfipgtoEntity) => tfps1210DfipgtoEntity.tfps1210Fipgto,
  )
  tfps1210Dfipgtos: Tfps1210DfipgtoEntity[];

  @ManyToOne(
    () => Tfps1210IpgtoEntity,
    (tfps1210IpgtoEntity) => tfps1210IpgtoEntity.tfps1210Fipgtos,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CPFBENEF', referencedColumnName: 'cpfbenef' },
    { name: 'DT_TPPGTO', referencedColumnName: 'chave' },
  ])
  tfps1210Ipgto: Tfps1210IpgtoEntity;
}
