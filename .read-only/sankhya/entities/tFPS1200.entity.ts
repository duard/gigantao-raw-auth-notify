import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps1200DmdevEntity } from './tFPS1200_DMDEV.entity';
import { Tfps1200ProcjudEntity } from './tFPS1200_PROCJUD.entity';
import { Tfps1200RemoutrempreEntity } from './tFPS1200_REMOUTREMPRE.entity';

@Index('PK_TFPS1200', ['codemp', 'dtref', 'sequencia', 'tpamb', 'chave'], {
  unique: true,
})
@Index(
  'TFPS1200_I01',
  ['codemp', 'tpamb', 'status', 'chave', 'nrorecibo', 'dtref', 'sequencia'],
  {},
)
@Index('TFPS1200_I02', ['codemp', 'dtref', 'tpamb'], {})
@Entity('TFPS1200', { schema: 'SANKHYA' })
export class Tfps1200Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { name: 'INDAPURACAO', nullable: true })
  indapuracao: number | null;

  @Column('varchar', { name: 'PERAPUR', nullable: true, length: 7 })
  perapur: string | null;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 15 })
  nrinsc: string | null;

  @Column('varchar', { name: 'CPFTRAB', nullable: true, length: 11 })
  cpftrab: string | null;

  @Column('varchar', { name: 'NISTRAB', nullable: true, length: 11 })
  nistrab: string | null;

  @Column('smallint', { name: 'INDMV', nullable: true })
  indmv: number | null;

  @Column('varchar', { name: 'NMTRAB', nullable: true, length: 70 })
  nmtrab: string | null;

  @Column('datetime', { name: 'DTNASCTO', nullable: true })
  dtnascto: Date | null;

  @Column('varchar', { name: 'CODCBO', nullable: true, length: 6 })
  codcbo: string | null;

  @Column('smallint', { name: 'NATATIVIDADE', nullable: true })
  natatividade: number | null;

  @Column('smallint', { name: 'QTDDIASTRAB', nullable: true })
  qtddiastrab: number | null;

  @Column('varchar', { name: 'CNPJEMPREGANT', nullable: true, length: 14 })
  cnpjempregant: string | null;

  @Column('varchar', { name: 'MATRICANT', nullable: true, length: 30 })
  matricant: string | null;

  @Column('datetime', { name: 'DTADM', nullable: true })
  dtadm: Date | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @Column('smallint', { name: 'QTDDIASINTERM', nullable: true })
  qtddiasinterm: number | null;

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

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('smallint', { name: 'TPINSCANT', nullable: true })
  tpinscant: number | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('smallint', { name: 'DIAINFOINTERM', nullable: true })
  diainfointerm: number | null;

  @Column('varchar', { name: 'LSTDIAINTERM', nullable: true, length: 100 })
  lstdiainterm: string | null;

  @Column('varchar', { name: 'INDAPURIR', nullable: true, length: 1 })
  indapurir: string | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @OneToMany(
    () => Tfps1200DmdevEntity,
    (tfps1200DmdevEntity) => tfps1200DmdevEntity.tfps1,
  )
  tfps1200Dmdevs: Tfps1200DmdevEntity[];

  @OneToMany(
    () => Tfps1200ProcjudEntity,
    (tfps1200ProcjudEntity) => tfps1200ProcjudEntity.tfps1,
  )
  tfps1200Procjuds: Tfps1200ProcjudEntity[];

  @OneToMany(
    () => Tfps1200RemoutrempreEntity,
    (tfps1200RemoutrempreEntity) => tfps1200RemoutrempreEntity.tfps1,
  )
  tfps1200Remoutrempres: Tfps1200RemoutrempreEntity[];
}
