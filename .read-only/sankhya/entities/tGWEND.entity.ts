import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfvorEntity } from './tGFVOR.entity';
import { TgwareEntity } from './tGWARE.entity';
import { TgwarmEntity } from './tGWARM.entity';
import { TgwaxfeEntity } from './tGWAXFE.entity';
import { TgwcteEntity } from './tGWCTE.entity';
import { TgwdcaEntity } from './tGWDCA.entity';
import { TgweacEntity } from './tGWEAC.entity';
import { TgweasEntity } from './tGWEAS.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgwenpEntity } from './tGWENP.entity';
import { TgweplEntity } from './tGWEPL.entity';
import { TgweseEntity } from './tGWESE.entity';
import { TgwestEntity } from './tGWEST.entity';
import { TgwexcEntity } from './tGWEXC.entity';
import { TgwexgEntity } from './tGWEXG.entity';
import { TgwexlEntity } from './tGWEXL.entity';
import { TgwexpEntity } from './tGWEXP.entity';
import { TgwexuEntity } from './tGWEXU.entity';
import { TgwfegEntity } from './tGWFEG.entity';
import { TgwitrEntity } from './tGWITR.entity';
import { TgwittEntity } from './tGWITT.entity';
import { TgwivrEntity } from './tGWIVR.entity';
import { TgwragEntity } from './tGWRAG.entity';
import { TgwrecEntity } from './tGWREC.entity';
import { TgwrepEntity } from './tGWREP.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGWEND', ['codend'], { unique: true })
@Index('TGWEND_I01', ['endereco'], { unique: true })
@Index('TGWEND_I02', ['codemp'], {})
@Entity('TGWEND', { schema: 'SANKHYA' })
export class TgwendEntity {
  @Column('int', { primary: true, name: 'CODEND' })
  codend: number;

  @Column('int', { name: 'CODENDPAI' })
  codendpai: number;

  @Column('varchar', { name: 'DESCREND', nullable: true, length: 50 })
  descrend: string | null;

  @Column('varchar', { name: 'ENDERECO', nullable: true, length: 30 })
  endereco: string | null;

  @Column('smallint', { name: 'GRAU' })
  grau: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('float', { name: 'M3MAX', precision: 53 })
  m3Max: number;

  @Column('float', { name: 'PESOMAX', precision: 53 })
  pesomax: number;

  @Column('float', { name: 'ALTURA', precision: 53 })
  altura: number;

  @Column('float', { name: 'LARGURA', precision: 53 })
  largura: number;

  @Column('smallint', { name: 'NIVEL' })
  nivel: number;

  @Column('char', { name: 'MULTIPROD', length: 1, default: () => "'N'" })
  multiprod: string;

  @Column('char', { name: 'EXPEDICAO', length: 1, default: () => "'S'" })
  expedicao: string;

  @Column('char', { name: 'PROIBIRGRUPO', length: 1, default: () => "'S'" })
  proibirgrupo: string;

  @Column('char', { name: 'PROIBIRPRODUTO', length: 1, default: () => "'S'" })
  proibirproduto: string;

  @Column('char', { name: 'PICKING', length: 1, default: () => "'N'" })
  picking: string;

  @Column('float', { name: 'PROFUNDIDADE', precision: 53 })
  profundidade: number;

  @Column('char', { name: 'PROIBIRLOCAL', length: 1, default: () => "'S'" })
  proibirlocal: string;

  @Column('float', { name: 'ALTCOORD', nullable: true, precision: 53 })
  altcoord: number | null;

  @Column('float', { name: 'LARGCOORD', nullable: true, precision: 53 })
  largcoord: number | null;

  @Column('float', { name: 'PROFUNDCOORD', nullable: true, precision: 53 })
  profundcoord: number | null;

  @Column('varchar', { name: 'FRAGMENTAEST', length: 1, default: () => "'N'" })
  fragmentaest: string;

  @Column('varchar', {
    name: 'PROIBIRCONTROLE',
    length: 1,
    default: () => "'S'",
  })
  proibircontrole: string;

  @Column('char', { name: 'FLOWRACK', length: 1, default: () => "'N'" })
  flowrack: string;

  @Column('char', { name: 'EXCLCONF', length: 1, default: () => "'N'" })
  exclconf: string;

  @Column('char', { name: 'BLOQUEADO', length: 1, default: () => "'N'" })
  bloqueado: string;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 2 })
  tipo: string | null;

  @Column('char', { name: 'PAR', nullable: true, length: 1 })
  par: string | null;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('varchar', { name: 'APENASCONTPORPROD', nullable: true, length: 1 })
  apenascontporprod: string | null;

  @Column('varchar', {
    name: 'ENDMOVVERTICAL',
    length: 1,
    default: () => "'N'",
  })
  endmovvertical: string;

  @Column('int', { name: 'CODENDPREF', nullable: true })
  codendpref: number | null;

  @Column('int', { name: 'CODENDSEC', nullable: true })
  codendsec: number | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('char', {
    name: 'USAPICKINGINTERMEDIARIO',
    length: 1,
    default: () => "'N'",
  })
  usapickingintermediario: string;

  @Column('char', {
    name: 'PICKINGINTERMEDIARIO',
    length: 1,
    default: () => "'N'",
  })
  pickingintermediario: string;

  @Column('char', { name: 'CONEXAOENTRADA', length: 1, default: () => "'S'" })
  conexaoentrada: string;

  @Column('char', { name: 'CONEXAOSAIDA', length: 1, default: () => "'S'" })
  conexaosaida: string;

  @Column('smallint', { name: 'NROMAXPROD', nullable: true })
  nromaxprod: number | null;

  @Column('varchar', { name: 'REABPICK', length: 1, default: () => "'N'" })
  reabpick: string;

  @Column('char', { name: 'CROSSDOCK', length: 1, default: () => "'N'" })
  crossdock: string;

  @Column('varchar', {
    name: 'LOTEUNICO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  loteunico: string | null;

  @Column('char', { name: 'UTILIZAUMA', nullable: true, length: 1 })
  utilizauma: string | null;

  @Column('int', { name: 'QTDMAXUMA', nullable: true })
  qtdmaxuma: number | null;

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codendsobra)
  tgfemps: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codendwms)
  tgfemps2: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.wmscodendgar)
  tgfemps3: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codendretexp)
  tgfemps4: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codendarmindef)
  tgfemps5: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codendavaria)
  tgfemps6: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codenddiverg)
  tgfemps7: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codendperda)
  tgfemps8: TgfempEntity[];

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.codend)
  tgfites: TgfiteEntity[];

  @OneToMany(() => TgfvorEntity, (tgfvorEntity) => tgfvorEntity.codend)
  tgfvors: TgfvorEntity[];

  @OneToMany(() => TgwareEntity, (tgwareEntity) => tgwareEntity.codenddoca)
  tgwares: TgwareEntity[];

  @OneToMany(() => TgwarmEntity, (tgwarmEntity) => tgwarmEntity.codendorig)
  tgwarms: TgwarmEntity[];

  @OneToMany(() => TgwarmEntity, (tgwarmEntity) => tgwarmEntity.codenddest)
  tgwarms2: TgwarmEntity[];

  @OneToMany(() => TgwaxfeEntity, (tgwaxfeEntity) => tgwaxfeEntity.codendini2)
  tgwaxfes: TgwaxfeEntity[];

  @OneToMany(() => TgwaxfeEntity, (tgwaxfeEntity) => tgwaxfeEntity.codendfim)
  tgwaxfes2: TgwaxfeEntity[];

  @OneToMany(() => TgwcteEntity, (tgwcteEntity) => tgwcteEntity.codend2)
  tgwctes: TgwcteEntity[];

  @OneToMany(() => TgwdcaEntity, (tgwdcaEntity) => tgwdcaEntity.codend2)
  tgwdcas: TgwdcaEntity[];

  @OneToMany(() => TgweacEntity, (tgweacEntity) => tgweacEntity.codendfim)
  tgweacs: TgweacEntity[];

  @OneToMany(() => TgweacEntity, (tgweacEntity) => tgweacEntity.codendini2)
  tgweacs2: TgweacEntity[];

  @OneToMany(() => TgweasEntity, (tgweasEntity) => tgweasEntity.codendini2)
  tgweas: TgweasEntity[];

  @OneToMany(() => TgweasEntity, (tgweasEntity) => tgweasEntity.codendfim2)
  tgweas2: TgweasEntity[];

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgwends)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal: TgflocEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgwends)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @OneToMany(() => TgwenpEntity, (tgwenpEntity) => tgwenpEntity.codend)
  tgwenps: TgwenpEntity[];

  @OneToMany(() => TgweplEntity, (tgweplEntity) => tgweplEntity.codend2)
  tgwepls: TgweplEntity[];

  @OneToMany(() => TgweseEntity, (tgweseEntity) => tgweseEntity.codendfim)
  tgwese: TgweseEntity[];

  @OneToMany(() => TgweseEntity, (tgweseEntity) => tgweseEntity.codendini)
  tgwese2: TgweseEntity[];

  @OneToMany(() => TgwestEntity, (tgwestEntity) => tgwestEntity.codend2)
  tgwests: TgwestEntity[];

  @OneToMany(() => TgwexcEntity, (tgwexcEntity) => tgwexcEntity.codend2)
  tgwexcs: TgwexcEntity[];

  @OneToMany(() => TgwexgEntity, (tgwexgEntity) => tgwexgEntity.codend2)
  tgwexgs: TgwexgEntity[];

  @OneToMany(() => TgwexlEntity, (tgwexlEntity) => tgwexlEntity.codend2)
  tgwexls: TgwexlEntity[];

  @OneToMany(() => TgwexpEntity, (tgwexpEntity) => tgwexpEntity.codend2)
  tgwexps: TgwexpEntity[];

  @OneToMany(() => TgwexuEntity, (tgwexuEntity) => tgwexuEntity.codend2)
  tgwexus: TgwexuEntity[];

  @OneToMany(() => TgwfegEntity, (tgwfegEntity) => tgwfegEntity.codendini2)
  tgwfegs: TgwfegEntity[];

  @OneToMany(() => TgwfegEntity, (tgwfegEntity) => tgwfegEntity.codendfin2)
  tgwfegs2: TgwfegEntity[];

  @OneToMany(() => TgwitrEntity, (tgwitrEntity) => tgwitrEntity.codenddestino)
  tgwitrs: TgwitrEntity[];

  @OneToMany(() => TgwitrEntity, (tgwitrEntity) => tgwitrEntity.codendorigem)
  tgwitrs2: TgwitrEntity[];

  @OneToMany(() => TgwittEntity, (tgwittEntity) => tgwittEntity.codenddestino)
  tgwitts: TgwittEntity[];

  @OneToMany(() => TgwittEntity, (tgwittEntity) => tgwittEntity.codendorigem2)
  tgwitts2: TgwittEntity[];

  @OneToMany(() => TgwivrEntity, (tgwivrEntity) => tgwivrEntity.codend)
  tgwivrs: TgwivrEntity[];

  @OneToMany(() => TgwragEntity, (tgwragEntity) => tgwragEntity.codend2)
  tgwrags: TgwragEntity[];

  @OneToMany(() => TgwrecEntity, (tgwrecEntity) => tgwrecEntity.codenddoca)
  tgwrecs: TgwrecEntity[];

  @OneToMany(() => TgwrepEntity, (tgwrepEntity) => tgwrepEntity.codendcede2)
  tgwreps: TgwrepEntity[];

  @OneToMany(() => TgwrepEntity, (tgwrepEntity) => tgwrepEntity.codendrecep2)
  tgwreps2: TgwrepEntity[];

  @ManyToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgwends)
  @JoinTable({
    name: 'TGWTROCADEPO',
    joinColumns: [{ name: 'CODEND', referencedColumnName: 'codend' }],
    inverseJoinColumns: [{ name: 'NUNOTA', referencedColumnName: 'nunota' }],
    schema: 'SANKHYA',
  })
  tgfcabs: TgfcabEntity[];
}
