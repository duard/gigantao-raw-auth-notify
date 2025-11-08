import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1210IpgtoEntity } from './tFPS1210_IPGTO.entity';
import { Tfps1210DaipgtoEntity } from './tFPS1210_DAIPGTO.entity';

@Index(
  'PK_TFPS1210_AIPGTO',
  ['codemp', 'dtref', 'sequencia', 'tpamb', 'cpfbenef', 'dtTppgto', 'chave'],
  { unique: true },
)
@Entity('TFPS1210_AIPGTO', { schema: 'SANKHYA' })
export class Tfps1210AipgtoEntity {
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

  @ManyToOne(
    () => Tfps1210IpgtoEntity,
    (tfps1210IpgtoEntity) => tfps1210IpgtoEntity.tfps1210Aipgtos,
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

  @OneToMany(
    () => Tfps1210DaipgtoEntity,
    (tfps1210DaipgtoEntity) => tfps1210DaipgtoEntity.tfps1210Aipgto,
  )
  tfps1210Daipgtos: Tfps1210DaipgtoEntity[];
}
