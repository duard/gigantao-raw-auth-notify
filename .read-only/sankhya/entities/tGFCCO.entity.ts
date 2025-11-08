import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsirfeEntity } from './tSIRFE.entity';
import { TgftopEntity } from './tGFTOP.entity';

@Index('PK_TGFCCO', ['nucco'], { unique: true })
@Entity('TGFCCO', { schema: 'SANKHYA' })
export class TgfccoEntity {
  @Column('int', { primary: true, name: 'NUCCO' })
  nucco: number;

  @Column('varchar', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('varchar', { name: 'MOMENTOCONFERENCIA', length: 1 })
  momentoconferencia: string;

  @Column('varchar', { name: 'BUSCARCODBARRAPOR', length: 1 })
  buscarcodbarrapor: string;

  @Column('varchar', { name: 'EXIBIRPROD', nullable: true, length: 1 })
  exibirprod: string | null;

  @Column('varchar', { name: 'EXIBIRQTD', nullable: true, length: 1 })
  exibirqtd: string | null;

  @Column('varchar', { name: 'EXIBIRQTDCONF', nullable: true, length: 1 })
  exibirqtdconf: string | null;

  @Column('varchar', { name: 'EXIBIRPRODCONF', nullable: true, length: 1 })
  exibirprodconf: string | null;

  @Column('varchar', { name: 'QTDAMAIOR', length: 1 })
  qtdamaior: string;

  @Column('varchar', { name: 'PRODUTOSFORAPED', length: 1 })
  produtosforaped: string;

  @Column('varchar', { name: 'EXIBIRPRODDIVER', nullable: true, length: 1 })
  exibirproddiver: string | null;

  @Column('varchar', { name: 'CORTECONF', length: 1, default: () => "'N'" })
  corteconf: string;

  @Column('varchar', { name: 'CORTEPARCIAL', nullable: true, length: 1 })
  corteparcial: string | null;

  @Column('varchar', { name: 'LIBCORTE', nullable: true, length: 1 })
  libcorte: string | null;

  @Column('varchar', { name: 'TIPOLIBERACAO', nullable: true, length: 1 })
  tipoliberacao: string | null;

  @Column('varchar', { name: 'AOLIBERAR', nullable: true, length: 1 })
  aoliberar: string | null;

  @Column('varchar', { name: 'TIPOCONTAGEM', length: 1 })
  tipocontagem: string;

  @Column('varchar', { name: 'ABRANGRECONTAGEM', length: 1 })
  abrangrecontagem: string;

  @Column('varchar', { name: 'TIPORECONTAGEM', length: 1 })
  tiporecontagem: string;

  @Column('varchar', { name: 'PROCEDCORTE', nullable: true, length: 1 })
  procedcorte: string | null;

  @Column('char', { name: 'MULTENTREGAS', nullable: true, length: 1 })
  multentregas: string | null;

  @Column('smallint', { name: 'QTDMINRECONT', nullable: true })
  qtdminrecont: number | null;

  @Column('char', {
    name: 'EXIBIRALERTASONORO',
    length: 1,
    default: () => "'N'",
  })
  exibiralertasonoro: string;

  @Column('char', { name: 'FATAOCONCLUIR', length: 1, default: () => "'N'" })
  fataoconcluir: string;

  @Column('char', { name: 'FORMACAOVOLUMES', length: 1, default: () => "'N'" })
  formacaovolumes: string;

  @Column('char', { name: 'IMPREETIQUETAS', length: 1, default: () => "'N'" })
  impreetiquetas: string;

  @Column('char', { name: 'APRESFILASEMPRE', length: 1, default: () => "'N'" })
  apresfilasempre: string;

  @Column('char', { name: 'EXIBIRCODBARRAS', length: 1, default: () => "'N'" })
  exibircodbarras: string;

  @Column('char', {
    name: 'IGNORACONTROLELOTE',
    length: 1,
    default: () => "'N'",
  })
  ignoracontrolelote: string;

  @Column('char', {
    name: 'IGNORACOMPONENTKIT',
    length: 1,
    default: () => "'N'",
  })
  ignoracomponentkit: string;

  @Column('char', { name: 'GERARPEDCOMPL', length: 1, default: () => "'N'" })
  gerarpedcompl: string;

  @Column('char', {
    name: 'PEDCOMPLCONFIRMADO',
    length: 1,
    default: () => "'N'",
  })
  pedcomplconfirmado: string;

  @Column('char', {
    name: 'NOTADEVCONFIRMADA',
    length: 1,
    default: () => "'N'",
  })
  notadevconfirmada: string;

  @Column('int', { name: 'MODNOTADEVOLUCAO', nullable: true })
  modnotadevolucao: number | null;

  @Column('int', { name: 'MODNOTAPEDCOMPL', nullable: true })
  modnotapedcompl: number | null;

  @Column('char', { name: 'USASEQCODBAR', nullable: true, length: 1 })
  usaseqcodbar: string | null;

  @Column('varchar', { name: 'SEPSEQCODBAR', nullable: true, length: 5 })
  sepseqcodbar: string | null;

  @Column('char', { name: 'EXPLODIRLOTE', nullable: true, length: 1 })
  explodirlote: string | null;

  @Column('char', { name: 'IGNORAMSGCONF', nullable: true, length: 1 })
  ignoramsgconf: string | null;

  @Column('text', { name: 'REGPESOTOTAL', default: () => "'N'" })
  regpesototal: string;

  @Column('char', { name: 'EXIGEIDENTIFPROD', length: 1, default: () => "'N'" })
  exigeidentifprod: string;

  @Column('char', { name: 'IMPETIQVOL', nullable: true, length: 1 })
  impetiqvol: string | null;

  @Column('char', { name: 'IMPDANFEVOL', nullable: true, length: 1 })
  impdanfevol: string | null;

  @Column('char', { name: 'CONSIDERAESTCONF', length: 1, default: () => "'N'" })
  consideraestconf: string;

  @Column('char', { name: 'EXIBIRIMGPROD', length: 1, default: () => "'N'" })
  exibirimgprod: string;

  @Column('char', { name: 'FEEDBACKAUTOMATICO', nullable: true, length: 1 })
  feedbackautomatico: string | null;

  @Column('varchar', {
    name: 'ABRIRCONFERENCIA',
    length: 1,
    default: () => "'N'",
  })
  abrirconferencia: string;

  @Column('varchar', { name: 'ABRIRNOTAFAT', length: 1, default: () => "'N'" })
  abrirnotafat: string;

  @Column('char', { name: 'PROIBEALTERARDOCUMENTO', nullable: true, length: 1 })
  proibealterardocumento: string | null;

  @Column('varchar', {
    name: 'OBTERQTDBALANCA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  obterqtdbalanca: string | null;

  @Column('smallint', { name: 'NUETIQPESO', nullable: true })
  nuetiqpeso: number | null;

  @Column('varchar', {
    name: 'CONFPRODFORAPED',
    length: 1,
    default: () => "'N'",
  })
  confprodforaped: string;

  @Column('varchar', { name: 'CONFPORSERIE', nullable: true, length: 1 })
  confporserie: string | null;

  @Column('varchar', { name: 'SOLRECNOCORTE', nullable: true, length: 1 })
  solrecnocorte: string | null;

  @Column('char', { name: 'VALLOTCONEST', nullable: true, length: 1 })
  vallotconest: string | null;

  @ManyToOne(() => TsirfeEntity, (tsirfeEntity) => tsirfeEntity.tgfccos)
  @JoinColumn([{ name: 'NURFEETIQ', referencedColumnName: 'nurfe' }])
  nurfeetiq: TsirfeEntity;

  @OneToMany(() => TgftopEntity, (tgftopEntity) => tgftopEntity.nucco)
  tgftops: TgftopEntity[];
}
