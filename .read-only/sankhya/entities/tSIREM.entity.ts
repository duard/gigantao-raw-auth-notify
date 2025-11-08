import { Column, Entity, Index, OneToMany, OneToOne } from 'typeorm';
import { TgffctEntity } from './tGFFCT.entity';
import { TgffemEntity } from './tGFFEM.entity';
import { TgffttEntity } from './tGFFTT.entity';
import { TimcedEntity } from './tIMCED.entity';
import { TsiireEntity } from './tSIIRE.entity';
import { TssitpEntity } from './tSSITP.entity';

@Index('PK_TSIREM', ['modulo', 'codigo'], { unique: true })
@Entity('TSIREM', { schema: 'SANKHYA' })
export class TsiremEntity {
  @Column('char', {
    primary: true,
    name: 'MODULO',
    length: 1,
    default: () => "'B'",
  })
  modulo: string;

  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('char', { name: 'TITULO', nullable: true, length: 40 })
  titulo: string | null;

  @Column('smallint', { name: 'TAMREGISTRO', nullable: true })
  tamregistro: number | null;

  @Column('int', { name: 'CODPAI' })
  codpai: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('smallint', { name: 'GRAU' })
  grau: number;

  @Column('text', { name: 'FILTRO', nullable: true })
  filtro: string | null;

  @Column('text', { name: 'COMGROUPBY', nullable: true })
  comgroupby: string | null;

  @Column('text', { name: 'COMHAVING', nullable: true })
  comhaving: string | null;

  @Column('text', { name: 'NOMEARQ', nullable: true })
  nomearq: string | null;

  @Column('text', { name: 'COMSELECT', nullable: true })
  comselect: string | null;

  @Column('text', { name: 'COMORDERBY', nullable: true })
  comorderby: string | null;

  @Column('char', { name: 'UTILIZASEQALT', length: 1, default: () => "'N'" })
  utilizaseqalt: string;

  @Column('char', { name: 'UTILIZASEQINFO', length: 1, default: () => "'N'" })
  utilizaseqinfo: string;

  @Column('int', { name: 'SEQINFO', nullable: true })
  seqinfo: number | null;

  @Column('varchar', { name: 'ORDENAR', length: 1, default: () => "'N'" })
  ordenar: string;

  @Column('varchar', { name: 'FICHA', length: 1, default: () => "'N'" })
  ficha: string;

  @Column('varchar', { name: 'ARQPORLINHA', length: 1, default: () => "'N'" })
  arqporlinha: string;

  @Column('varchar', { name: 'INICARQREM', length: 5, default: () => "'COB'" })
  inicarqrem: string;

  @Column('varchar', { name: 'CONF', nullable: true, length: 3103 })
  conf: string | null;

  @Column('varchar', { name: 'CONSULTASQLLOTE', nullable: true, length: 3103 })
  consultasqllote: string | null;

  @Column('int', { name: 'CODBCO', nullable: true })
  codbco: number | null;

  @Column('varchar', {
    name: 'ARQPORLAYOUTDETALHE',
    length: 1,
    default: () => "'N'",
  })
  arqporlayoutdetalhe: string;

  @Column('char', { name: 'ISPROTECTED', nullable: true, length: 1 })
  isprotected: string | null;

  @OneToMany(() => TgffctEntity, (tgffctEntity) => tgffctEntity.tsirem)
  tgffcts: TgffctEntity[];

  @OneToMany(() => TgffemEntity, (tgffemEntity) => tgffemEntity.tsirem)
  tgffems: TgffemEntity[];

  @OneToMany(() => TgffttEntity, (tgffttEntity) => tgffttEntity.tsirem)
  tgfftts: TgffttEntity[];

  @OneToOne(() => TimcedEntity, (timcedEntity) => timcedEntity.tsirem)
  timced: TimcedEntity;

  @OneToMany(() => TsiireEntity, (tsiireEntity) => tsiireEntity.tsirem)
  tsiires: TsiireEntity[];

  @OneToMany(() => TssitpEntity, (tssitpEntity) => tssitpEntity.tsirem)
  tssitps: TssitpEntity[];
}
