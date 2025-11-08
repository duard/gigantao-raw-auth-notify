import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFMPE', ['sequencia'], { unique: true })
@Index('TGFMPE_I01', ['codprod'], {})
@Entity('TGFMPE', { schema: 'SANKHYA' })
export class TgfmpeEntity {
  @Column('char', { name: 'RODADA', nullable: true, length: 1 })
  rodada: string | null;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'NUACORDO', nullable: true })
  nuacordo: number | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'CODCONTATO', nullable: true })
  codcontato: number | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('int', { name: 'CODLOCAL', nullable: true })
  codlocal: number | null;

  @Column('char', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('char', { name: 'CODVOL', nullable: true, length: 2 })
  codvol: string | null;

  @Column('money', { name: 'VLRPROD', nullable: true })
  vlrprod: number | null;

  @Column('smallint', { name: 'PRAZOPAG', nullable: true })
  prazopag: number | null;

  @Column('smallint', { name: 'PRAZOENTREGA', nullable: true })
  prazoentrega: number | null;

  @Column('smallint', { name: 'PRAZOFAT', nullable: true })
  prazofat: number | null;

  @Column('char', { name: 'TIPPER', nullable: true, length: 1 })
  tipper: string | null;

  @Column('char', { name: 'TIPEST', nullable: true, length: 1 })
  tipest: string | null;

  @Column('smallint', { name: 'DECQTD', nullable: true })
  decqtd: number | null;

  @Column('float', { name: 'ESTOQUE', nullable: true, precision: 53 })
  estoque: number | null;

  @Column('float', { name: 'ESTMIN', nullable: true, precision: 53 })
  estmin: number | null;

  @Column('float', { name: 'ESTMAX', nullable: true, precision: 53 })
  estmax: number | null;

  @Column('float', { name: 'SUGESTAO', nullable: true, precision: 53 })
  sugestao: number | null;

  @Column('float', { name: 'GIRO', nullable: true, precision: 53 })
  giro: number | null;

  @Column('char', { name: 'SITUACAO', nullable: true, length: 1 })
  situacao: string | null;

  @Column('datetime', { name: 'DTULTCOMPRA', nullable: true })
  dtultcompra: Date | null;

  @Column('float', { name: 'QTDULTCOMPRA', nullable: true, precision: 53 })
  qtdultcompra: number | null;

  @Column('money', { name: 'VLRULTCOMPRA', nullable: true })
  vlrultcompra: number | null;

  @Column('char', { name: 'DESCRPROD', nullable: true, length: 40 })
  descrprod: string | null;

  @Column('char', { name: 'MARCA', nullable: true, length: 10 })
  marca: string | null;

  @Column('char', { name: 'REFERENCIA', nullable: true, length: 15 })
  referencia: string | null;

  @Column('char', { name: 'DESCRLOCAL', nullable: true, length: 40 })
  descrlocal: string | null;

  @Column('char', { name: 'DISTORCAOGIRO', length: 1, default: () => "'N'" })
  distorcaogiro: string;

  @Column('float', { name: 'PENDENT', nullable: true, precision: 53 })
  pendent: number | null;

  @Column('float', { name: 'PENDSAI', nullable: true, precision: 53 })
  pendsai: number | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('float', {
    name: 'PRECO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  preco: number | null;

  @Column('float', {
    name: 'PRECO1',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  preco1: number | null;

  @Column('float', {
    name: 'CUSREP',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  cusrep: number | null;

  @Column('char', { name: 'LOCALIZACAO', nullable: true, length: 15 })
  localizacao: string | null;

  @Column('int', { name: 'CODPARCOPERLOGIST', nullable: true })
  codparcoperlogist: number | null;

  @Column('char', { name: 'CURVATOT', nullable: true, length: 1 })
  curvatot: string | null;

  @Column('char', { name: 'CURVAQTD', nullable: true, length: 1 })
  curvaqtd: string | null;

  @Column('int', { name: 'DTACRITICA', nullable: true })
  dtacritica: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfmpes)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
