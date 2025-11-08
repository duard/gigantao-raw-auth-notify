import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRIREAD_NFS',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave',
    'documento',
    'tipo',
    'nuprocesso',
    'seqprocesso',
    'tprepasse',
  ],
  { unique: true },
)
@Entity('TRIREAD_NFS', { schema: 'SANKHYA' })
export class TrireadNfsEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 255 })
  chave: string;

  @Column('int', { primary: true, name: 'DOCUMENTO' })
  documento: number;

  @Column('char', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('smallint', { primary: true, name: 'SEQPROCESSO' })
  seqprocesso: number;

  @Column('smallint', { primary: true, name: 'TPREPASSE' })
  tprepasse: number;

  @Column('varchar', { name: 'DESCRECURSO', nullable: true, length: 20 })
  descrecurso: string | null;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('smallint', { name: 'TPINSCESTAB', nullable: true })
  tpinscestab: number | null;

  @Column('varchar', { name: 'NRINSCESTAB', nullable: true, length: 14 })
  nrinscestab: string | null;

  @Column('varchar', { name: 'CNPJASSOCDESP', length: 14 })
  cnpjassocdesp: string;

  @Column('float', { name: 'VLRBRUTO', nullable: true, precision: 53 })
  vlrbruto: number | null;

  @Column('float', { name: 'VLRRETAPUR', nullable: true, precision: 53 })
  vlrretapur: number | null;

  @Column('float', { name: 'VLRBASEAPUR', nullable: true, precision: 53 })
  vlrbaseapur: number | null;

  @Column('int', { name: 'CODEMPESTAB', nullable: true })
  codempestab: number | null;

  @Column('int', { name: 'CODPARCASSOCDESP', nullable: true })
  codparcassocdesp: number | null;

  @Column('char', { name: 'NMEMPREXT', nullable: true, length: 100 })
  nmemprext: string | null;

  @Column('char', { name: 'RECEMPREXT', nullable: true, length: 1 })
  recemprext: string | null;
}
