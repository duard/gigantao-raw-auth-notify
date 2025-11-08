import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRINFSP',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave', 'nunota'],
  { unique: true },
)
@Index('TRINFSP_I01', ['nunota'], {})
@Entity('TRINFSP', { schema: 'SANKHYA' })
export class TrinfspEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 255 })
  chave: string;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { name: 'SERIE', nullable: true, length: 5 })
  serie: string | null;

  @Column('varchar', { name: 'NUMDOCTO', nullable: true, length: 15 })
  numdocto: string | null;

  @Column('datetime', { name: 'DTEMISSAONF', nullable: true })
  dtemissaonf: Date | null;

  @Column('float', { name: 'VLRBRUTO', nullable: true, precision: 53 })
  vlrbruto: number | null;

  @Column('varchar', { name: 'OBS', nullable: true, length: 250 })
  obs: string | null;

  @Column('float', { name: 'VLRBASERET', nullable: true, precision: 53 })
  vlrbaseret: number | null;

  @Column('float', { name: 'VLRRETENCAO', nullable: true, precision: 53 })
  vlrretencao: number | null;

  @Column('float', { name: 'VLRRETENCAOCALC', nullable: true, precision: 53 })
  vlrretencaocalc: number | null;

  @Column('float', { name: 'VLRDIFRET', nullable: true, precision: 53 })
  vlrdifret: number | null;

  @Column('float', { name: 'VLRADICIONAL', nullable: true, precision: 53 })
  vlradicional: number | null;

  @Column('float', { name: 'VLRADICIONALCALC', nullable: true, precision: 53 })
  vlradicionalcalc: number | null;

  @Column('float', { name: 'VLRADICIONALDIF', nullable: true, precision: 53 })
  vlradicionaldif: number | null;
}
