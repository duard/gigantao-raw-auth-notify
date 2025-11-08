import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps2240AgnocEntity } from './tFPS2240_AGNOC.entity';
import { Tfps2240FatriscoEntity } from './tFPS2240_FATRISCO.entity';
import { Tfps2240InfoambEntity } from './tFPS2240_INFOAMB.entity';
import { Tfps2240RespregEntity } from './tFPS2240_RESPREG.entity';

@Index('PK_TFPS2240', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Index('TFPS2240_I01', ['codemp', 'cpftrab'], {})
@Entity('TFPS2240', { schema: 'SANKHYA' })
export class Tfps2240Entity {
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

  @Column('smallint', { name: 'CODEMPFUNC', nullable: true })
  codempfunc: number | null;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 15 })
  nrinsc: string | null;

  @Column('varchar', { name: 'CPFTRAB', nullable: true, length: 11 })
  cpftrab: string | null;

  @Column('varchar', { name: 'NISTRAB', nullable: true, length: 11 })
  nistrab: string | null;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('datetime', { name: 'DTINICONDICAO', nullable: true })
  dtinicondicao: Date | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('datetime', { name: 'DTFIMCONDICAO', nullable: true })
  dtfimcondicao: Date | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @OneToMany(
    () => Tfps2240AgnocEntity,
    (tfps2240AgnocEntity) => tfps2240AgnocEntity.tfps2,
  )
  tfps2240Agnocs: Tfps2240AgnocEntity[];

  @OneToMany(
    () => Tfps2240FatriscoEntity,
    (tfps2240FatriscoEntity) => tfps2240FatriscoEntity.tfps2,
  )
  tfps2240Fatriscos: Tfps2240FatriscoEntity[];

  @OneToMany(
    () => Tfps2240InfoambEntity,
    (tfps2240InfoambEntity) => tfps2240InfoambEntity.tfps2,
  )
  tfps2240Infoambs: Tfps2240InfoambEntity[];

  @OneToMany(
    () => Tfps2240RespregEntity,
    (tfps2240RespregEntity) => tfps2240RespregEntity.tfps2,
  )
  tfps2240Respregs: Tfps2240RespregEntity[];
}
