import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDC1010',
  ['codemp', 'dtref', 'regniv1', 'nuprocesso', 'seqprocesso'],
  {
    unique: true,
  },
)
@Entity('TGFEFDC1010', { schema: 'SANKHYA' })
export class Tgfefdc1010Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'1001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('smallint', { primary: true, name: 'SEQPROCESSO' })
  seqprocesso: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'1010'" })
  registro: string;

  @Column('varchar', { name: 'NUM_PROC', nullable: true, length: 21 })
  numProc: string | null;

  @Column('varchar', { name: 'ID_SEC_JUD', nullable: true, length: 255 })
  idSecJud: string | null;

  @Column('varchar', { name: 'ID_VARA', nullable: true, length: 2 })
  idVara: string | null;

  @Column('varchar', { name: 'IND_NAT_ACAO', nullable: true, length: 2 })
  indNatAcao: string | null;

  @Column('varchar', { name: 'DESC_DEC_JUD', nullable: true, length: 100 })
  descDecJud: string | null;

  @Column('datetime', { name: 'DT_SENT_JUD', nullable: true })
  dtSentJud: Date | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
