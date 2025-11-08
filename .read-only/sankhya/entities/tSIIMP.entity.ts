import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcbauxEntity } from './tCBAUX.entity';
import { TfpaviEntity } from './tFPAVI.entity';
import { TgftopEntity } from './tGFTOP.entity';
import { TsiaciEntity } from './tSIACI.entity';
import { TsiimcEntity } from './tSIIMC.entity';
import { TsiimfEntity } from './tSIIMF.entity';
import { TsigreEntity } from './tSIGRE.entity';
import { TgmcfgEntity } from './tGMCFG.entity';
import { TsiimqEntity } from './tSIIMQ.entity';
import { TsiimvEntity } from './tSIIMV.entity';
import { TsitarEntity } from './tSITAR.entity';

@Index('PK_TSIIMP', ['codrel'], { unique: true })
@Index('TSIIMP_I02', ['codgruporel'], {})
@Entity('TSIIMP', { schema: 'SANKHYA' })
export class TsiimpEntity {
  @Column('char', { name: 'TIPO', length: 10 })
  tipo: string;

  @Column('char', { name: 'NOME', length: 40 })
  nome: string;

  @Column('int', { primary: true, name: 'CODREL' })
  codrel: number;

  @Column('text', { name: 'ESCOLHIDOS', nullable: true })
  escolhidos: string | null;

  @Column('text', { name: 'ORDEM', nullable: true })
  ordem: string | null;

  @Column('char', { name: 'RESUMO', nullable: true, length: 20 })
  resumo: string | null;

  @Column('text', { name: 'FILTROS', nullable: true })
  filtros: string | null;

  @Column('text', { name: 'CONTASBCO', nullable: true })
  contasbco: string | null;

  @Column('text', { name: 'FILTROS2', nullable: true })
  filtros2: string | null;

  @Column('text', { name: 'PARAMSGEN', nullable: true })
  paramsgen: string | null;

  @Column('text', { name: 'LISTA1', nullable: true })
  lista1: string | null;

  @Column('text', { name: 'LISTA2', nullable: true })
  lista2: string | null;

  @Column('text', { name: 'LISTA3', nullable: true })
  lista3: string | null;

  @Column('text', { name: 'LISTA4', nullable: true })
  lista4: string | null;

  @Column('char', {
    name: 'ORIENTACAO',
    length: 15,
    default: () => "'Retrato'",
  })
  orientacao: string;

  @Column('char', { name: 'TIPOFONTE', length: 40, default: () => "'Arial'" })
  tipofonte: string;

  @Column('smallint', { name: 'TAMFONTE', default: () => '(8)' })
  tamfonte: number;

  @Column('char', {
    name: 'PERSONALIZADO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  personalizado: string | null;

  @Column('image', { name: 'LAYOUT', nullable: true })
  layout: Buffer | null;

  @Column('image', { name: 'GRAFIC', nullable: true })
  grafic: Buffer | null;

  @Column('datetime', { name: 'DTINICIAL', nullable: true })
  dtinicial: Date | null;

  @Column('datetime', { name: 'DTFINAL', nullable: true })
  dtfinal: Date | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('smallint', { name: 'ORIGEM', nullable: true })
  origem: number | null;

  @Column('smallint', { name: 'NIVEL', default: () => '(100)' })
  nivel: number;

  @Column('int', { name: 'CODGRUPOREL', default: () => '(0)' })
  codgruporel: number;

  @Column('char', { name: 'SANKHYA', length: 1, default: () => "'N'" })
  sankhya: string;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('char', { name: 'FASTSERVICE', length: 1, default: () => "'N'" })
  fastservice: string;

  @Column('image', { name: 'LAYOUTSW', nullable: true })
  layoutsw: Buffer | null;

  @OneToMany(() => TcbauxEntity, (tcbauxEntity) => tcbauxEntity.codrel)
  tcbauxes: TcbauxEntity[];

  @OneToMany(() => TfpaviEntity, (tfpaviEntity) => tfpaviEntity.codrel)
  tfpavis: TfpaviEntity[];

  @OneToMany(() => TgftopEntity, (tgftopEntity) => tgftopEntity.modetqimpcaf)
  tgftops: TgftopEntity[];

  @OneToMany(() => TsiaciEntity, (tsiaciEntity) => tsiaciEntity.codrel2)
  tsiacis: TsiaciEntity[];

  @OneToMany(() => TsiimcEntity, (tsiimcEntity) => tsiimcEntity.codrel2)
  tsiimcs: TsiimcEntity[];

  @OneToMany(() => TsiimfEntity, (tsiimfEntity) => tsiimfEntity.codrel2)
  tsiimfs: TsiimfEntity[];

  @ManyToOne(() => TsigreEntity, (tsigreEntity) => tsigreEntity.tsiimps)
  @JoinColumn([{ name: 'CODGRUPOREL', referencedColumnName: 'codgruporel' }])
  codgruporel2: TsigreEntity;

  @ManyToOne(() => TgmcfgEntity, (tgmcfgEntity) => tgmcfgEntity.tsiimps)
  @JoinColumn([{ name: 'CODMETA', referencedColumnName: 'codmeta' }])
  codmeta: TgmcfgEntity;

  @OneToMany(() => TsiimqEntity, (tsiimqEntity) => tsiimqEntity.codrel2)
  tsiimqs: TsiimqEntity[];

  @OneToMany(() => TsiimvEntity, (tsiimvEntity) => tsiimvEntity.codrel2)
  tsiimvs: TsiimvEntity[];

  @OneToMany(() => TsitarEntity, (tsitarEntity) => tsitarEntity.codrel2)
  tsitars: TsitarEntity[];
}
