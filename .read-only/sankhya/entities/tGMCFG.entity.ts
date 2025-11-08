import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TcametEntity } from './tCAMET.entity';
import { TgfipoEntity } from './tGFIPO.entity';
import { TgfpplEntity } from './tGFPPL.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgmperEntity } from './tGMPER.entity';
import { TgmrevEntity } from './tGMREV.entity';
import { TgmsubEntity } from './tGMSUB.entity';
import { TgmtmeEntity } from './tGMTME.entity';
import { TsiimpEntity } from './tSIIMP.entity';
import { TsilibEntity } from './tSILIB.entity';

@Index('PK_TGMCFG', ['codmeta'], { unique: true })
@Index('TGMCFG_I01', ['codmeta', 'simplificada'], { unique: true })
@Entity('TGMCFG', { schema: 'SANKHYA' })
export class TgmcfgEntity {
  @Column('smallint', { primary: true, name: 'CODMETA' })
  codmeta: number;

  @Column('char', { name: 'DESCRMETA', length: 40 })
  descrmeta: string;

  @Column('char', { name: 'TIPODATA', length: 1, default: () => "'N'" })
  tipodata: string;

  @Column('smallint', { name: 'DATA', nullable: true })
  data: number | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('smallint', { name: 'PERIODO', default: () => '(4)' })
  periodo: number;

  @Column('smallint', { name: 'EMPRESA', nullable: true })
  empresa: number | null;

  @Column('smallint', { name: 'PROJETO', nullable: true })
  projeto: number | null;

  @Column('smallint', { name: 'NATUREZA', nullable: true })
  natureza: number | null;

  @Column('smallint', { name: 'CENTRORESULTADO', nullable: true })
  centroresultado: number | null;

  @Column('smallint', { name: 'CONTROLE', nullable: true })
  controle: number | null;

  @Column('smallint', { name: 'LOCAL', nullable: true })
  local: number | null;

  @Column('smallint', { name: 'REGIAO', nullable: true })
  regiao: number | null;

  @Column('smallint', { name: 'GRUPO', nullable: true })
  grupo: number | null;

  @Column('smallint', { name: 'PRODUTO', nullable: true })
  produto: number | null;

  @Column('smallint', { name: 'VENDEDOR', nullable: true })
  vendedor: number | null;

  @Column('char', {
    name: 'TIPOMSG',
    nullable: true,
    length: 1,
    default: () => "'I'",
  })
  tipomsg: string | null;

  @Column('smallint', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('smallint', { name: 'MARCA', nullable: true })
  marca: number | null;

  @Column('char', { name: 'TIPQTD', length: 1, default: () => "'Q'" })
  tipqtd: string;

  @Column('char', { name: 'TIPVLR', length: 1, default: () => "'V'" })
  tipvlr: string;

  @Column('char', { name: 'TIPMETA', length: 1, default: () => "'C'" })
  tipmeta: string;

  @Column('smallint', { name: 'CODGER', nullable: true })
  codger: number | null;

  @Column('smallint', { name: 'UF', nullable: true })
  uf: number | null;

  @Column('smallint', { name: 'CIDADE', nullable: true })
  cidade: number | null;

  @Column('smallint', { name: 'PAIS', nullable: true })
  pais: number | null;

  @Column('smallint', { name: 'PERFIL', nullable: true })
  perfil: number | null;

  @Column('char', { name: 'VERSAO', nullable: true, length: 20 })
  versao: string | null;

  @Column('datetime', { name: 'DTAPROV', nullable: true })
  dtaprov: Date | null;

  @Column('float', { name: 'PERCAVISO', nullable: true, precision: 53 })
  percaviso: number | null;

  @Column('smallint', { name: 'CODMETAANT', nullable: true })
  codmetaant: number | null;

  @Column('char', { name: 'INVESTIMENTO', length: 1, default: () => "'N'" })
  investimento: string;

  @Column('smallint', { name: 'VENDITEM', nullable: true })
  venditem: number | null;

  @Column('smallint', { name: 'EXECUTANTE', nullable: true })
  executante: number | null;

  @Column('char', { name: 'SOMARISSRET', length: 1, default: () => "'N'" })
  somarissret: string;

  @Column('char', { name: 'SOMARINSS', length: 1, default: () => "'N'" })
  somarinss: string;

  @Column('char', { name: 'SOMARIRRF', length: 1, default: () => "'N'" })
  somarirrf: string;

  @Column('char', { name: 'SOMARIMP', length: 1, default: () => "'N'" })
  somarimp: string;

  @Column('char', { name: 'VALORBRUTO', length: 1, default: () => "'N'" })
  valorbruto: string;

  @Column('varchar', { name: 'SIMPLIFICADA', nullable: true, length: 1 })
  simplificada: string | null;

  @Column('varchar', { name: 'INCCOMP', length: 1, default: () => "'S'" })
  inccomp: string;

  @Column('smallint', { name: 'GRUPONAT', nullable: true })
  gruponat: number | null;

  @Column('varchar', { name: 'ARQIMPORTPO', nullable: true, length: 255 })
  arqimportpo: string | null;

  @Column('varchar', { name: 'APRESCOD', nullable: true, length: 1 })
  aprescod: string | null;

  @Column('char', { name: 'VALPREVIGOR', length: 1, default: () => "'N'" })
  valprevigor: string;

  @Column('char', { name: 'IGNORCNAOPREV', nullable: true, length: 1 })
  ignorcnaoprev: string | null;

  @Column('datetime', { name: 'DTINICIOORC', nullable: true })
  dtinicioorc: Date | null;

  @Column('char', {
    name: 'METAPORQTD',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  metaporqtd: string | null;

  @Column('smallint', { name: 'DTINICORC', nullable: true })
  dtinicorc: number | null;

  @OneToMany(() => TcametEntity, (tcametEntity) => tcametEntity.codmeta2)
  tcamets: TcametEntity[];

  @OneToMany(() => TgfipoEntity, (tgfipoEntity) => tgfipoEntity.codmeta)
  tgfipos: TgfipoEntity[];

  @OneToMany(() => TgfpplEntity, (tgfpplEntity) => tgfpplEntity.codmeta)
  tgfppls: TgfpplEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgmcfgs)
  @JoinColumn([{ name: 'CODUSUAPROV', referencedColumnName: 'codusu' }])
  codusuaprov: TsiusuEntity;

  @OneToMany(() => TgmperEntity, (tgmperEntity) => tgmperEntity.codmeta2)
  tgmpers: TgmperEntity[];

  @OneToOne(() => TgmrevEntity, (tgmrevEntity) => tgmrevEntity.codmeta2)
  tgmrev: TgmrevEntity;

  @OneToOne(() => TgmrevEntity, (tgmrevEntity) => tgmrevEntity.codmetaant2)
  tgmrev2: TgmrevEntity;

  @OneToMany(() => TgmsubEntity, (tgmsubEntity) => tgmsubEntity.codmeta2)
  tgmsubs: TgmsubEntity[];

  @OneToMany(() => TgmtmeEntity, (tgmtmeEntity) => tgmtmeEntity.codmeta2)
  tgmtmes: TgmtmeEntity[];

  @OneToMany(() => TsiimpEntity, (tsiimpEntity) => tsiimpEntity.codmeta)
  tsiimps: TsiimpEntity[];

  @OneToMany(() => TsilibEntity, (tsilibEntity) => tsilibEntity.codmeta)
  tsilibs: TsilibEntity[];
}
