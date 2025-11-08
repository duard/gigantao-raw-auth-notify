import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_EVTFILACANCEL',
  ['codemp', 'referencia', 'tpamb', 'sequencia', 'tipoevento', 'chave', 'acao'],
  { unique: true },
)
@Entity('EVTFILACANCEL', { schema: 'SANKHYA' })
export class EvtfilacancelEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'TPAMB' })
  tpamb: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'TIPOEVENTO', length: 20 })
  tipoevento: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 255 })
  chave: string;

  @Column('char', { primary: true, name: 'ACAO', length: 1 })
  acao: string;

  @Column('datetime', { name: 'DHINC' })
  dhinc: Date;
}
