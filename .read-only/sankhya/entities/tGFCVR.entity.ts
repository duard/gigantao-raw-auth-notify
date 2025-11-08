import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgffvrEntity } from './tGFFVR.entity';
import { TgfivrEntity } from './tGFIVR.entity';

@Index('PK_TGFCVR', ['nucvr'], { unique: true })
@Entity('TGFCVR', { schema: 'SANKHYA' })
export class TgfcvrEntity {
  @Column('int', { primary: true, name: 'NUCVR' })
  nucvr: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('smallint', { name: 'CODTIPVENDA', nullable: true })
  codtipvenda: number | null;

  @Column('datetime', { name: 'DHTIPVENDA', nullable: true })
  dhtipvenda: Date | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('smallint', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('datetime', { name: 'DHTIPOPER', nullable: true })
  dhtipoper: Date | null;

  @Column('smallint', { name: 'CODVEND', nullable: true })
  codvend: number | null;

  @Column('int', { name: 'CODCENCUS', nullable: true })
  codcencus: number | null;

  @Column('int', { name: 'CODNAT', nullable: true })
  codnat: number | null;

  @Column('datetime', { name: 'DTNEG', nullable: true })
  dtneg: Date | null;

  @Column('datetime', { name: 'DTENTSAI', nullable: true })
  dtentsai: Date | null;

  @Column('varchar', { name: 'TIPMOV', nullable: true, length: 1 })
  tipmov: string | null;

  @Column('datetime', { name: 'DTMOV', nullable: true })
  dtmov: Date | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('varchar', { name: 'SERIENOTA', nullable: true, length: 3 })
  serienota: string | null;

  @Column('int', { name: 'CODPARCTRANSP', nullable: true })
  codparctransp: number | null;

  @Column('varchar', { name: 'TIPFRETE', nullable: true, length: 1 })
  tipfrete: string | null;

  @Column('varchar', { name: 'CIF_FOB', nullable: true, length: 1 })
  cifFob: string | null;

  @Column('datetime', { name: 'VENCFRETE', nullable: true })
  vencfrete: Date | null;

  @Column('float', { name: 'PERCDESCFOB', precision: 53, default: () => '(0)' })
  percdescfob: number;

  @Column('float', { name: 'VLRFRETE', precision: 53, default: () => '(0)' })
  vlrfrete: number;

  @Column('float', { name: 'PERCDESC', precision: 53, default: () => '(0)' })
  percdesc: number;

  @Column('float', { name: 'ALIQIRF', precision: 53, default: () => '(0)' })
  aliqirf: number;

  @Column('float', { name: 'BASEIRF', precision: 53, default: () => '(0)' })
  baseirf: number;

  @Column('float', { name: 'VLRIRF', precision: 53, default: () => '(0)' })
  vlrirf: number;

  @Column('float', { name: 'BASEISS', precision: 53, default: () => '(0)' })
  baseiss: number;

  @Column('float', { name: 'VLRISS', precision: 53, default: () => '(0)' })
  vlriss: number;

  @Column('float', { name: 'BASEINSS', precision: 53, default: () => '(0)' })
  baseinss: number;

  @Column('float', { name: 'VLRINSS', precision: 53, default: () => '(0)' })
  vlrinss: number;

  @Column('float', { name: 'VLRJURO', precision: 53, default: () => '(0)' })
  vlrjuro: number;

  @Column('float', { name: 'VLRDESCTOT', precision: 53, default: () => '(0)' })
  vlrdesctot: number;

  @Column('float', { name: 'VLRNOTA', precision: 53, default: () => '(0)' })
  vlrnota: number;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('int', { name: 'QTDVOL', default: () => '(0)' })
  qtdvol: number;

  @Column('char', {
    name: 'STATUS',
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  status: string | null;

  @Column('datetime', {
    name: 'DTFECHAMENTO',
    nullable: true,
    default: () => 'NULL',
  })
  dtfechamento: Date | null;

  @Column('datetime', {
    name: 'DTINSERCAO',
    nullable: true,
    default: () => 'getdate()',
  })
  dtinsercao: Date | null;

  @Column('float', {
    name: 'VLRICMS',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlricms: number | null;

  @Column('float', {
    name: 'VLRIPI',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlripi: number | null;

  @Column('float', { name: 'BASEIPI', nullable: true, precision: 53 })
  baseipi: number | null;

  @Column('float', { name: 'BASEICMS', nullable: true, precision: 53 })
  baseicms: number | null;

  @Column('float', { name: 'BASESUBSTIT', nullable: true, precision: 53 })
  basesubstit: number | null;

  @Column('float', { name: 'VLRSUBST', nullable: true, precision: 53 })
  vlrsubst: number | null;

  @Column('float', { name: 'VLRDESCTOTITEM', nullable: true, precision: 53 })
  vlrdesctotitem: number | null;

  @Column('int', { name: 'CODCONTATO', nullable: true })
  codcontato: number | null;

  @Column('int', { name: 'CODPARCDEST', nullable: true })
  codparcdest: number | null;

  @Column('int', { name: 'CODVEICULO', nullable: true })
  codveiculo: number | null;

  @Column('datetime', { name: 'DTFATUR', nullable: true })
  dtfatur: Date | null;

  @Column('varchar', { name: 'IRFRETIDO', nullable: true, length: 1 })
  irfretido: string | null;

  @Column('varchar', { name: 'ISSRETIDO', nullable: true, length: 1 })
  issretido: string | null;

  @Column('smallint', { name: 'NUFOP', nullable: true })
  nufop: number | null;

  @OneToMany(() => TgffvrEntity, (tgffvrEntity) => tgffvrEntity.nucvr)
  tgffvrs: TgffvrEntity[];

  @OneToMany(() => TgfivrEntity, (tgfivrEntity) => tgfivrEntity.nucvr2)
  tgfivrs: TgfivrEntity[];
}
