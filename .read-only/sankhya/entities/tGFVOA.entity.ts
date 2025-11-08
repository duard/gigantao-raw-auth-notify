import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfvoahEntity } from './tGFVOAH.entity';

@Index('PK_TGFVOA', ['codprod', 'codvol', 'controle'], { unique: true })
@Index('TGFOVA_I01', ['codbarra'], {})
@Entity('TGFVOA', { schema: 'SANKHYA' })
export class TgfvoaEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('char', { name: 'DIVIDEMULTIPLICA', length: 1 })
  dividemultiplica: string;

  @Column('float', { name: 'QUANTIDADE', precision: 53 })
  quantidade: number;

  @Column('float', { name: 'MULTIPVLR', nullable: true, precision: 53 })
  multipvlr: number | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'SELECIONADO', nullable: true, length: 1 })
  selecionado: string | null;

  @Column('float', { name: 'M3', nullable: true, precision: 53 })
  m3: number | null;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 25 })
  codbarra: string | null;

  @Column('char', { name: 'TIPCODBARRA', nullable: true, length: 1 })
  tipcodbarra: string | null;

  @Column('char', {
    primary: true,
    name: 'CONTROLE',
    length: 30,
    default: () => "' '",
  })
  controle: string;

  @Column('char', { name: 'UNIDTRIB', length: 1, default: () => "'N'" })
  unidtrib: string;

  @Column('char', { name: 'UNIDSELO', length: 1, default: () => "'N'" })
  unidselo: string;

  @Column('smallint', { name: 'TIPGTINNFE', default: () => '(3)' })
  tipgtinnfe: number;

  @Column('char', { name: 'OPCAOSEP', length: 1, default: () => "'S'" })
  opcaosep: string;

  @Column('int', { name: 'LASTRO', nullable: true })
  lastro: number | null;

  @Column('int', { name: 'CAMADAS', nullable: true })
  camadas: number | null;

  @Column('varchar', { name: 'DESCRVOLALT', nullable: true, length: 30 })
  descrvolalt: string | null;

  @Column('varchar', { name: 'DESCRDANFE', nullable: true, length: 50 })
  descrdanfe: string | null;

  @Column('int', { name: 'QTDPECA', default: () => '(0)' })
  qtdpeca: number;

  @Column('varchar', { name: 'TAMANHO', nullable: true, length: 11 })
  tamanho: string | null;

  @Column('char', { name: 'UNTRIBEXPORTACAO', nullable: true, length: 1 })
  untribexportacao: string | null;

  @Column('int', { name: 'QTDDECIMAISUPF', nullable: true })
  qtddecimaisupf: number | null;

  @Column('varchar', { name: 'DESCRUNTRIBEXPORT', nullable: true, length: 6 })
  descruntribexport: string | null;

  @Column('char', {
    name: 'OPCOESGERAR0220',
    nullable: true,
    length: 1,
    default: () => 'NULL',
  })
  opcoesgerar0220: string | null;

  @Column('varchar', { name: 'UNDTRIBRECOB', nullable: true, length: 1 })
  undtribrecob: string | null;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfvoas)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol2: TgfvolEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfvoas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @OneToMany(() => TgfvoahEntity, (tgfvoahEntity) => tgfvoahEntity.tgfvoa)
  tgfvoahs: TgfvoahEntity[];
}
