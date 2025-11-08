import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFMDELOG', ['chaveacesso', 'sequencia'], { unique: true })
@Index('TGFMDELOG_I01', ['chaveacesso', 'sequencia', 'codemp'], {})
@Entity('TGFMDELOG', { schema: 'SANKHYA' })
export class TgfmdelogEntity {
  @Column('varchar', { primary: true, name: 'CHAVEACESSO', length: 44 })
  chaveacesso: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'SITUACAOMDE', nullable: true, length: 1 })
  situacaomde: string | null;

  @Column('varchar', { name: 'SITUACAONFE', nullable: true, length: 1 })
  situacaonfe: string | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('text', { name: 'MOTIVONDDIGITAL', nullable: true })
  motivonddigital: string | null;

  @Column('smallint', { name: 'SEQEVENTO', nullable: true })
  seqevento: number | null;

  @Column('datetime', { name: 'DHEVENTO', nullable: true })
  dhevento: Date | null;

  @Column('int', { name: 'TPEVENTO', nullable: true })
  tpevento: number | null;

  @Column('varchar', { name: 'DESCREVENTO', nullable: true, length: 256 })
  descrevento: string | null;

  @Column('varchar', { name: 'INFCOMPL', nullable: true, length: 256 })
  infcompl: string | null;

  @Column('varchar', { name: 'NUMPROTOC', nullable: true, length: 15 })
  numprotoc: string | null;

  @Column('varchar', { name: 'NSU', nullable: true, length: 15 })
  nsu: string | null;

  @Column('char', { name: 'EMISSTERC', nullable: true, length: 1 })
  emissterc: string | null;

  @Column('smallint', { name: 'TPDOC', nullable: true })
  tpdoc: number | null;

  @Column('varchar', { name: 'TPAMB', nullable: true, length: 1 })
  tpamb: string | null;

  @Column('text', { name: 'XMLEVENTO', nullable: true })
  xmlevento: string | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('varchar', { name: 'SITUACAOCTE', nullable: true, length: 1 })
  situacaocte: string | null;

  @Column('varchar', { name: 'NOMEPARCTRANSP', nullable: true, length: 60 })
  nomeparctransp: string | null;

  @Column('varchar', { name: 'NOMEPARCDEST', nullable: true, length: 60 })
  nomeparcdest: string | null;

  @Column('varchar', { name: 'NOMEPARCEMIT', nullable: true, length: 60 })
  nomeparcemit: string | null;

  @Column('varchar', { name: 'NOMEPARCREC', nullable: true, length: 60 })
  nomeparcrec: string | null;

  @Column('varchar', { name: 'JUSTIFICATIVA', nullable: true, length: 255 })
  justificativa: string | null;
}
