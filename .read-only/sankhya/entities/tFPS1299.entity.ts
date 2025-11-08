import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPS1299', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Entity('TFPS1299', { schema: 'SANKHYA' })
export class Tfps1299Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { name: 'INDAPURACAO', nullable: true })
  indapuracao: number | null;

  @Column('varchar', { name: 'PERAPUR', nullable: true, length: 7 })
  perapur: string | null;

  @Column('smallint', { name: 'TPINSCEMPREGADOR', nullable: true })
  tpinscempregador: number | null;

  @Column('varchar', { name: 'NRINSCEMPREGADOR', nullable: true, length: 15 })
  nrinscempregador: string | null;

  @Column('varchar', { name: 'NMRESP', nullable: true, length: 70 })
  nmresp: string | null;

  @Column('varchar', { name: 'CPFRESP', nullable: true, length: 11 })
  cpfresp: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 13 })
  telefone: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 60 })
  email: string | null;

  @Column('char', { name: 'EVTREMUN', length: 1 })
  evtremun: string;

  @Column('char', { name: 'EVTPGTOS', length: 1 })
  evtpgtos: string;

  @Column('char', { name: 'EVTAQPROD', length: 1 })
  evtaqprod: string;

  @Column('char', { name: 'EVTCOMPROD', length: 1 })
  evtcomprod: string;

  @Column('char', { name: 'EVTCONTRATAVNP', length: 1 })
  evtcontratavnp: string;

  @Column('char', { name: 'EVTINFOCOMPLPER', length: 1 })
  evtinfocomplper: string;

  @Column('varchar', { name: 'COMPSEMMOVTO', nullable: true, length: 7 })
  compsemmovto: string | null;

  @Column('char', { name: 'STATUS', length: 1 })
  status: string;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 50 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBO_ANT', nullable: true, length: 50 })
  nroreciboAnt: string | null;

  @Column('char', { name: 'ACAO', nullable: true, length: 1 })
  acao: string | null;

  @Column('char', { name: 'CONTROLE', length: 1, default: () => "'I'" })
  controle: string;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('varchar', { name: 'TRANSDCFWEB', nullable: true, length: 1 })
  transdcfweb: string | null;

  @Column('char', { name: 'INDEXCAPUR1250', nullable: true, length: 1 })
  indexcapur1250: string | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @Column('varchar', { name: 'VALIDAREGRAFECHA', nullable: true, length: 1 })
  validaregrafecha: string | null;
}
