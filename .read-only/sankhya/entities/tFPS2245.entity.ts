import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps2245IdeprofrespEntity } from './tFPS2245_IDEPROFRESP.entity';

@Index('PK_TFPS2245', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Entity('TFPS2245', { schema: 'SANKHYA' })
export class Tfps2245Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'STATUS', length: 1 })
  status: string;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('char', { name: 'ACAO', nullable: true, length: 1 })
  acao: string | null;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 50 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBO_ANT', nullable: true, length: 50 })
  nroreciboAnt: string | null;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 15 })
  nrinsc: string | null;

  @Column('smallint', { name: 'CODEMPFUNC', nullable: true })
  codempfunc: number | null;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;

  @Column('int', { name: 'NROUNICOTREIN', nullable: true })
  nrounicotrein: number | null;

  @Column('varchar', { name: 'CPFTRAB', nullable: true, length: 11 })
  cpftrab: string | null;

  @Column('varchar', { name: 'NISTRAB', nullable: true, length: 11 })
  nistrab: string | null;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('varchar', { name: 'CODTREICAP', nullable: true, length: 4 })
  codtreicap: string | null;

  @Column('datetime', { name: 'DTTREICAP', nullable: true })
  dttreicap: Date | null;

  @Column('float', { name: 'DURTREICAP', nullable: true, precision: 53 })
  durtreicap: number | null;

  @Column('smallint', { name: 'MODTREICAP', nullable: true })
  modtreicap: number | null;

  @Column('smallint', { name: 'TPTREICAP', nullable: true })
  tptreicap: number | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 999 })
  observacao: string | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('char', { name: 'INDTREINANT', nullable: true, length: 1 })
  indtreinant: string | null;

  @OneToMany(
    () => Tfps2245IdeprofrespEntity,
    (tfps2245IdeprofrespEntity) => tfps2245IdeprofrespEntity.tfps2,
  )
  tfps2245Ideprofresps: Tfps2245IdeprofrespEntity[];
}
