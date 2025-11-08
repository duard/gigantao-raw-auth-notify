import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSCTFRETE', ['codigo'], { unique: true })
@Entity('TMSCTFRETE', { schema: 'SANKHYA' })
export class TmsctfreteEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('int', { name: 'CODVEICULO', nullable: true })
  codveiculo: number | null;

  @Column('int', { name: 'CODMOTORISTA', nullable: true })
  codmotorista: number | null;

  @Column('int', { name: 'NUMCARTAFRETE', nullable: true })
  numcartafrete: number | null;

  @Column('datetime', { name: 'DTFRETE', nullable: true })
  dtfrete: Date | null;

  @Column('float', { name: 'PESOSAIDA', nullable: true, precision: 53 })
  pesosaida: number | null;

  @Column('float', { name: 'VLRFRETEPPT', nullable: true, precision: 53 })
  vlrfreteppt: number | null;

  @Column('float', { name: 'VLRFRETE', nullable: true, precision: 53 })
  vlrfrete: number | null;

  @Column('float', { name: 'VLRADIANTAMENTO', nullable: true, precision: 53 })
  vlradiantamento: number | null;

  @Column('float', { name: 'VLRMERCADORIA', nullable: true, precision: 53 })
  vlrmercadoria: number | null;

  @Column('float', { name: 'VLRUNITMERCADORIA', nullable: true, precision: 53 })
  vlrunitmercadoria: number | null;

  @Column('float', { name: 'PERCTOLERANCIA', nullable: true, precision: 53 })
  perctolerancia: number | null;

  @Column('float', { name: 'PESOTOLERANCIA', nullable: true, precision: 53 })
  pesotolerancia: number | null;

  @Column('float', { name: 'VLRSALDOFRETE', nullable: true, precision: 53 })
  vlrsaldofrete: number | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('int', { name: 'CODPARCORIG', nullable: true })
  codparcorig: number | null;

  @Column('int', { name: 'CODPARCDEST', nullable: true })
  codparcdest: number | null;

  @Column('int', { name: 'CODPARCCOL', nullable: true })
  codparccol: number | null;

  @Column('int', { name: 'CODPARCENT', nullable: true })
  codparcent: number | null;

  @Column('float', { name: 'VLRQUEBRAMERC', nullable: true, precision: 53 })
  vlrquebramerc: number | null;

  @Column('float', { name: 'VLRSEGURO', nullable: true, precision: 53 })
  vlrseguro: number | null;

  @Column('float', {
    name: 'VLROUTROSDESCONTOS',
    nullable: true,
    precision: 53,
  })
  vlroutrosdescontos: number | null;

  @Column('varchar', { name: 'CHAVECTE', nullable: true, length: 100 })
  chavecte: string | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('float', { name: 'PESOCHEGADA', nullable: true, precision: 53 })
  pesochegada: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('float', { name: 'VLROUTROSCREDITOS', nullable: true, precision: 53 })
  vlroutroscreditos: number | null;

  @Column('float', { name: 'VLRQUEBRAPESO', nullable: true, precision: 53 })
  vlrquebrapeso: number | null;

  @Column('int', { name: 'CODCIDORIG', nullable: true })
  codcidorig: number | null;

  @Column('int', { name: 'CODCIDDEST', nullable: true })
  codciddest: number | null;

  @Column('float', { name: 'VLRESTADIA', nullable: true, precision: 53 })
  vlrestadia: number | null;

  @Column('int', { name: 'ORDEMCARGA', nullable: true })
  ordemcarga: number | null;
}
