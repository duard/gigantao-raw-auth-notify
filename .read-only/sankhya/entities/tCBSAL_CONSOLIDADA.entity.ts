import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TCBSAL_CONSOLIDADA',
  ['idconsolid', 'codemp', 'codctactb', 'codcencus', 'codproj', 'referencia'],
  { unique: true },
)
@Entity('TCBSAL_CONSOLIDADA', { schema: 'SANKHYA' })
export class TcbsalConsolidadaEntity {
  @Column('smallint', { primary: true, name: 'IDCONSOLID' })
  idconsolid: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODCTACTB' })
  codctactb: number;

  @Column('int', { primary: true, name: 'CODCENCUS' })
  codcencus: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('decimal', {
    name: 'SALDOINICMES',
    precision: 15,
    scale: 2,
    default: () => '(0)',
  })
  saldoinicmes: number;

  @Column('decimal', {
    name: 'DEBMES',
    precision: 15,
    scale: 2,
    default: () => '(0)',
  })
  debmes: number;

  @Column('decimal', {
    name: 'CREDMES',
    precision: 15,
    scale: 2,
    default: () => '(0)',
  })
  credmes: number;

  @Column('int', { primary: true, name: 'CODPROJ', default: () => '(0)' })
  codproj: number;
}
