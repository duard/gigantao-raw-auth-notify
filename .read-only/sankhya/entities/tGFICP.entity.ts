import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfeprEntity } from './tGFEPR.entity';

@Index(
  'PK_TGFICP',
  [
    'codprod',
    'variacao',
    'codlocal',
    'controle',
    'codetapa',
    'codmatprima',
    'codlocalmp',
    'controlemp',
  ],
  { unique: true },
)
@Index('TGFICP_I01', ['codmatprima'], {})
@Entity('TGFICP', { schema: 'SANKHYA' })
export class TgficpEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'VARIACAO' })
  variacao: number;

  @Column('int', { primary: true, name: 'CODLOCAL', default: () => '(0)' })
  codlocal: number;

  @Column('char', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('int', { primary: true, name: 'CODETAPA', default: () => '(0)' })
  codetapa: number;

  @Column('int', { primary: true, name: 'CODMATPRIMA' })
  codmatprima: number;

  @Column('int', { primary: true, name: 'CODLOCALMP', default: () => '(0)' })
  codlocalmp: number;

  @Column('char', {
    primary: true,
    name: 'CONTROLEMP',
    length: 11,
    default: () => "' '",
  })
  controlemp: string;

  @Column('smallint', { name: 'TGF_CODLOCAL', nullable: true })
  tgfCodlocal: number | null;

  @Column('int', { name: 'TGF_CODPROD', nullable: true })
  tgfCodprod: number | null;

  @Column('float', { name: 'QTDMISTURA', precision: 53 })
  qtdmistura: number;

  @Column('float', { name: 'DESVIOPADRAO', nullable: true, precision: 53 })
  desviopadrao: number | null;

  @Column('char', { name: 'ATUALESTOQUE', length: 1, default: () => "'S'" })
  atualestoque: string;

  @Column('int', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('char', { name: 'FIXO', length: 1, default: () => "'N'" })
  fixo: string;

  @Column('char', { name: 'OPCIONAL', length: 1, default: () => "'N'" })
  opcional: string;

  @Column('char', { name: 'MANTEMQTD', length: 1, default: () => "'N'" })
  mantemqtd: string;

  @Column('char', { name: 'TERCEIROS', length: 1, default: () => "'N'" })
  terceiros: string;

  @Column('varchar', { name: 'ONDEEXEC', nullable: true, length: 250 })
  ondeexec: string | null;

  @Column('char', { name: 'SINCRFLUXO', nullable: true, length: 1 })
  sincrfluxo: string | null;

  @Column('char', { name: 'SELECIONAPROX', nullable: true, length: 1 })
  selecionaprox: string | null;

  @Column('char', { name: 'PODECONCLUIR', nullable: true, length: 1 })
  podeconcluir: string | null;

  @Column('char', { name: 'SEGUEANTERIOR', nullable: true, length: 1 })
  segueanterior: string | null;

  @Column('smallint', { name: 'NIVEISRECUO', nullable: true })
  niveisrecuo: number | null;

  @Column('varchar', { name: 'TIPTRANSICAO', length: 1, default: () => "'A'" })
  tiptransicao: string;

  @Column('varchar', { name: 'TRANSICAO', length: 1, default: () => "'N'" })
  transicao: string;

  @Column('float', { name: 'PRECO', nullable: true, precision: 53 })
  preco: number | null;

  @Column('char', {
    name: 'ATUALESTINDIVIDUAL',
    length: 1,
    default: () => "'N'",
  })
  atualestindividual: string;

  @Column('char', { name: 'ULOCETPAESTIND', length: 1, default: () => "'N'" })
  ulocetpaestind: string;

  @Column('char', { name: 'TIPTROCPRODKIT', length: 1, default: () => "'K'" })
  tiptrocprodkit: string;

  @Column('char', { name: 'VARIARCONTROLE', length: 1, default: () => "'N'" })
  variarcontrole: string;

  @Column('float', { name: 'DESCONTOECONECT', nullable: true, precision: 53 })
  descontoeconect: number | null;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgficps)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgficps)
  @JoinColumn([{ name: 'CODLOCALMP', referencedColumnName: 'codlocal' }])
  codlocalmp2: TgflocEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgficps2)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgficps)
  @JoinColumn([{ name: 'CODMATPRIMA', referencedColumnName: 'codprod' }])
  codmatprima2: TgfproEntity;

  @ManyToOne(() => TgfeprEntity, (tgfeprEntity) => tgfeprEntity.tgficps)
  @JoinColumn([
    { name: 'CODPROD', referencedColumnName: 'codprod' },
    { name: 'VARIACAO', referencedColumnName: 'variacao' },
    { name: 'CODLOCAL', referencedColumnName: 'codlocal' },
    { name: 'CONTROLE', referencedColumnName: 'controle' },
    { name: 'CODETAPA', referencedColumnName: 'codetapa' },
  ])
  tgfepr: TgfeprEntity;
}
