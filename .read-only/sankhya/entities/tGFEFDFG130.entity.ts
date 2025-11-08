import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFG130',
  ['codemp', 'dtref', 'regniv1', 'chave', 'seqg125', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFG130', { schema: 'SANKHYA' })
export class Tgfefdfg130Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'G001'",
  })
  regniv1: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { primary: true, name: 'SEQG125' })
  seqg125: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'G130'" })
  registro: string;

  @Column('varchar', { name: 'IND_EMIT', nullable: true, length: 1 })
  indEmit: string | null;

  @Column('varchar', { name: 'COD_PART', nullable: true, length: 60 })
  codPart: string | null;

  @Column('varchar', { name: 'COD_MOD', nullable: true, length: 2 })
  codMod: string | null;

  @Column('varchar', { name: 'SERIE', nullable: true, length: 3 })
  serie: string | null;

  @Column('int', { name: 'NUM_DOC', nullable: true })
  numDoc: number | null;

  @Column('varchar', { name: 'CHV_NFE_CTE', nullable: true, length: 44 })
  chvNfeCte: string | null;

  @Column('datetime', { name: 'DT_DOC', nullable: true })
  dtDoc: Date | null;

  @Column('varchar', { name: 'NUM_DA', nullable: true, length: 15 })
  numDa: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
