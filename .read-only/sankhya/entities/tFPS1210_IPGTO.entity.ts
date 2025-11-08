import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1210AipgtoEntity } from './tFPS1210_AIPGTO.entity';
import { Tfps1210DipgtoEntity } from './tFPS1210_DIPGTO.entity';
import { Tfps1210FipgtoEntity } from './tFPS1210_FIPGTO.entity';
import { Tfps1210IipgtoEntity } from './tFPS1210_IIPGTO.entity';
import { Tfps1210Entity } from './tFPS1210.entity';
import { Tfps1210RipgtoEntity } from './tFPS1210_RIPGTO.entity';

@Index(
  'PK_TFPS1210_IPGTO',
  ['codemp', 'dtref', 'sequencia', 'tpamb', 'cpfbenef', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS1210_IPGTO', { schema: 'SANKHYA' })
export class Tfps1210IpgtoEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('datetime', { name: 'DTPGTO', nullable: true })
  dtpgto: Date | null;

  @Column('smallint', { name: 'TPPGTO', nullable: true })
  tppgto: number | null;

  @Column('char', { name: 'INDRESBR', nullable: true, length: 1 })
  indresbr: string | null;

  @Column('varchar', { name: 'PERREF', nullable: true, length: 7 })
  perref: string | null;

  @Column('varchar', { name: 'IDEDMDEV', nullable: true, length: 30 })
  idedmdev: string | null;

  @Column('char', { name: 'INDPGTOTT', nullable: true, length: 1 })
  indpgtott: string | null;

  @Column('float', { name: 'VRLIQ', nullable: true, precision: 53 })
  vrliq: number | null;

  @Column('varchar', { name: 'CODPAIS', nullable: true, length: 3 })
  codpais: string | null;

  @Column('smallint', { name: 'INDNIF', nullable: true })
  indnif: number | null;

  @Column('varchar', { name: 'NIFBENEF', nullable: true, length: 20 })
  nifbenef: string | null;

  @Column('varchar', { name: 'DSCLOGRAD', nullable: true, length: 80 })
  dsclograd: string | null;

  @Column('varchar', { name: 'NRLOGRAD', nullable: true, length: 10 })
  nrlograd: string | null;

  @Column('varchar', { name: 'COMPLEM', nullable: true, length: 30 })
  complem: string | null;

  @Column('varchar', { name: 'BAIRRO', nullable: true, length: 60 })
  bairro: string | null;

  @Column('varchar', { name: 'NMCID', nullable: true, length: 50 })
  nmcid: string | null;

  @Column('varchar', { name: 'CODPOSTAL', nullable: true, length: 12 })
  codpostal: string | null;

  @Column('smallint', { name: 'FRMTRIBUT', nullable: true })
  frmtribut: number | null;

  @Column('char', { name: 'ENDFISCEXT', nullable: true, length: 1 })
  endfiscext: string | null;

  @Column('varchar', { name: 'TELEF', nullable: true, length: 15 })
  telef: string | null;

  @Column('varchar', { name: 'ENDESTADO', nullable: true, length: 40 })
  endestado: string | null;

  @OneToMany(
    () => Tfps1210AipgtoEntity,
    (tfps1210AipgtoEntity) => tfps1210AipgtoEntity.tfps1210Ipgto,
  )
  tfps1210Aipgtos: Tfps1210AipgtoEntity[];

  @OneToMany(
    () => Tfps1210DipgtoEntity,
    (tfps1210DipgtoEntity) => tfps1210DipgtoEntity.tfps1210Ipgto,
  )
  tfps1210Dipgtos: Tfps1210DipgtoEntity[];

  @OneToMany(
    () => Tfps1210FipgtoEntity,
    (tfps1210FipgtoEntity) => tfps1210FipgtoEntity.tfps1210Ipgto,
  )
  tfps1210Fipgtos: Tfps1210FipgtoEntity[];

  @OneToMany(
    () => Tfps1210IipgtoEntity,
    (tfps1210IipgtoEntity) => tfps1210IipgtoEntity.tfps1210Ipgto,
  )
  tfps1210Iipgtos: Tfps1210IipgtoEntity[];

  @ManyToOne(
    () => Tfps1210Entity,
    (tfps1210Entity) => tfps1210Entity.tfps1210Ipgtos,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CPFBENEF', referencedColumnName: 'chave' },
  ])
  tfps1: Tfps1210Entity;

  @OneToMany(
    () => Tfps1210RipgtoEntity,
    (tfps1210RipgtoEntity) => tfps1210RipgtoEntity.tfps1210Ipgto,
  )
  tfps1210Ripgtos: Tfps1210RipgtoEntity[];
}
