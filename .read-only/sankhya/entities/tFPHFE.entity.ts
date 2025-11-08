import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPHFE', ['codemp', 'codfunc', 'referencia', 'sequencia'], {
  unique: true,
})
@Entity('TFPHFE', { schema: 'SANKHYA' })
export class TfphfeEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('datetime', { name: 'DTINIAQUI' })
  dtiniaqui: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DTFINAQUI' })
  dtfinaqui: Date;

  @Column('datetime', { name: 'DTPREVISTA', nullable: true })
  dtprevista: Date | null;

  @Column('datetime', { name: 'DTSAIDA', nullable: true })
  dtsaida: Date | null;

  @Column('smallint', { name: 'FALTPER', nullable: true })
  faltper: number | null;

  @Column('smallint', { name: 'ABONOPEC', nullable: true })
  abonopec: number | null;

  @Column('smallint', { name: 'NUMDIASFER', nullable: true })
  numdiasfer: number | null;

  @Column('char', { name: 'ADIANTA13SAL', nullable: true, length: 1 })
  adianta13Sal: string | null;

  @Column('char', { name: 'ATUALFERGOZ', nullable: true, length: 1 })
  atualfergoz: string | null;

  @Column('char', { name: 'ABONOINICIO', nullable: true, length: 1 })
  abonoinicio: string | null;

  @Column('smallint', { name: 'QTDPARCELAS', nullable: true })
  qtdparcelas: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'S'" })
  digitado: string;

  @Column('char', { name: 'APROVADO', nullable: true, length: 1 })
  aprovado: string | null;

  @Column('smallint', { name: 'QTDDIASSOLFERIAS', nullable: true })
  qtddiassolferias: number | null;

  @Column('datetime', { name: 'DTLIMGOZFER', nullable: true })
  dtlimgozfer: Date | null;

  @Column('char', { name: 'PERQUITADO', nullable: true, length: 1 })
  perquitado: string | null;
}
