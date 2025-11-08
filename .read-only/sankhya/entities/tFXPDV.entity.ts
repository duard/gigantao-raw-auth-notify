import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXPDV', ['codpdv'], { unique: true })
@Entity('TFXPDV', { schema: 'SANKHYA' })
export class TfxpdvEntity {
  @Column('int', { primary: true, name: 'CODPDV' })
  codpdv: number;

  @Column('varchar', { name: 'DESCRICAO', length: 60 })
  descricao: string;

  @Column('int', { name: 'CODEMPRESA' })
  codempresa: number;

  @Column('int', { name: 'TEMPODESCANSOTELA', default: () => '(10)' })
  tempodescansotela: number;

  @Column('char', {
    name: 'APRESENTAIMGPRODUTO',
    length: 1,
    default: () => "'N'",
  })
  apresentaimgproduto: string;

  @Column('int', { name: 'TIPOEQPFISCAL', default: () => '(0)' })
  tipoeqpfiscal: number;

  @Column('varchar', {
    name: 'IMPRESSORADEFAULT',
    length: 10,
    default: () => "'?'",
  })
  impressoradefault: string;

  @Column('varchar', { name: 'SATDEFAULT', length: 20, default: () => "'?'" })
  satdefault: string;

  @Column('varchar', { name: 'ASSINATURA', length: 50 })
  assinatura: string;

  @Column('varchar', { name: 'IP', nullable: true, length: 20 })
  ip: string | null;

  @Column('char', { name: 'INTEGRAPARCEIRO', length: 1, default: () => "'N'" })
  integraparceiro: string;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('int', { name: 'USATEF', default: () => '(0)' })
  usatef: number;

  @Column('char', { name: 'CONFIGURADO', length: 1, default: () => "'N'" })
  configurado: string;

  @Column('char', { name: 'HOMOLOGACAO', length: 1, default: () => "'N'" })
  homologacao: string;

  @Column('char', { name: 'CONTINGENCIASAT', length: 1, default: () => "'N'" })
  contingenciasat: string;

  @Column('varchar', { name: 'SERIE', nullable: true, length: 3 })
  serie: string | null;

  @Column('int', { name: 'TIPOTEF', nullable: true, default: () => '(0)' })
  tipotef: number | null;

  @Column('varchar', { name: 'CSCH', nullable: true, length: 100 })
  csch: string | null;

  @Column('varchar', { name: 'IDTOKENH', nullable: true, length: 100 })
  idtokenh: string | null;

  @Column('varchar', { name: 'VERSAO', nullable: true, length: 20 })
  versao: string | null;

  @Column('varchar', { name: 'PROXVERSAO', nullable: true, length: 20 })
  proxversao: string | null;

  @Column('char', {
    name: 'VALIDADO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  validado: string | null;

  @Column('varchar', { name: 'USUARIOPARCERIA', nullable: true, length: 100 })
  usuarioparceria: string | null;

  @Column('varchar', { name: 'SENHAPARCERIA', nullable: true, length: 100 })
  senhaparceria: string | null;

  @Column('text', { name: 'HARDWAREINFO', nullable: true })
  hardwareinfo: string | null;

  @Column('int', { name: 'CODCONTASELECIONADA', nullable: true })
  codcontaselecionada: number | null;
}
