import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps1210AntEntity } from './tFPS1210_ANT.entity';
import { Tfps1210InfoircomplemEntity } from './tFPS1210_INFOIRCOMPLEM.entity';
import { Tfps1210IpgtoEntity } from './tFPS1210_IPGTO.entity';

@Index('PK_TFPS1210', ['codemp', 'dtref', 'sequencia', 'tpamb', 'chave'], {
  unique: true,
})
@Index('TFPS1210_I01', ['codemp', 'dtref', 'tpamb'], {})
@Entity('TFPS1210', { schema: 'SANKHYA' })
export class Tfps1210Entity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { name: 'INDAPURACAO', nullable: true })
  indapuracao: number | null;

  @Column('varchar', { name: 'PERAPUR', nullable: true, length: 7 })
  perapur: string | null;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('varchar', { name: 'CPFBENEF', nullable: true, length: 11 })
  cpfbenef: string | null;

  @Column('float', { name: 'VRDEDDEP', nullable: true, precision: 53 })
  vrdeddep: number | null;

  @Column('char', { name: 'STATUS', length: 1 })
  status: string;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 40 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBO_ANT', nullable: true, length: 40 })
  nroreciboAnt: string | null;

  @Column('char', { name: 'ACAO', nullable: true, length: 1 })
  acao: string | null;

  @Column('char', { name: 'CONTROLE', length: 1, default: () => "'I'" })
  controle: string;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @OneToMany(
    () => Tfps1210AntEntity,
    (tfps1210AntEntity) => tfps1210AntEntity.tfps1,
  )
  tfps1210Ants: Tfps1210AntEntity[];

  @OneToMany(
    () => Tfps1210InfoircomplemEntity,
    (tfps1210InfoircomplemEntity) => tfps1210InfoircomplemEntity.tfps1,
  )
  tfps1210Infoircomplems: Tfps1210InfoircomplemEntity[];

  @OneToMany(
    () => Tfps1210IpgtoEntity,
    (tfps1210IpgtoEntity) => tfps1210IpgtoEntity.tfps1,
  )
  tfps1210Ipgtos: Tfps1210IpgtoEntity[];
}
