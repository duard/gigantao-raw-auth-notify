import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index(
  'PK_TGFCAN',
  ['numnota', 'codemp', 'serienota', 'dtneg', 'codmaq', 'codmoddoc'],
  {
    unique: true,
  },
)
@Index('TGFCAN_I01', ['nunota'], {})
@Index('TGFCAN_I02', ['dtmov'], {})
@Entity('TGFCAN', { schema: 'SANKHYA' })
export class TgfcanEntity {
  @Column('int', { primary: true, name: 'NUMNOTA' })
  numnota: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('char', {
    primary: true,
    name: 'SERIENOTA',
    length: 3,
    default: () => "' '",
  })
  serienota: string;

  @Column('datetime', { primary: true, name: 'DTNEG' })
  dtneg: Date;

  @Column('datetime', { name: 'DTFATUR', nullable: true })
  dtfatur: Date | null;

  @Column('datetime', { name: 'DTMOV', nullable: true })
  dtmov: Date | null;

  @Column('varchar', { name: 'MOTCANCEL', nullable: true, length: 180 })
  motcancel: string | null;

  @Column('char', {
    name: 'ATUALLIVFIS',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  atuallivfis: string | null;

  @Column('char', {
    name: 'ATUALLIVISS',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  atualliviss: string | null;

  @Column('datetime', { name: 'DTCANC' })
  dtcanc: Date;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODMODDOC', default: () => '(1)' })
  codmoddoc: number;

  @Column('char', { name: 'CHAVENFE', nullable: true, length: 44 })
  chavenfe: string | null;

  @Column('char', { name: 'NUMPROTOCNFE', nullable: true, length: 15 })
  numprotocnfe: string | null;

  @Column('datetime', { name: 'DHPROTOCNFE', nullable: true })
  dhprotocnfe: Date | null;

  @Column('char', { name: 'NUMPROTOCCAN', nullable: true, length: 15 })
  numprotoccan: string | null;

  @Column('datetime', { name: 'DHPROTOCCAN', nullable: true })
  dhprotoccan: Date | null;

  @Column('smallint', { name: 'TPEMISNFE', nullable: true })
  tpemisnfe: number | null;

  @Column('float', { name: 'VLRNOTA', nullable: true, precision: 53 })
  vlrnota: number | null;

  @Column('int', { primary: true, name: 'CODMAQ', default: () => '(0)' })
  codmaq: number;

  @Column('smallint', { name: 'NROREDZ', default: () => '(0)' })
  nroredz: number;

  @Column('varchar', { name: 'NUMREGDPEC', nullable: true, length: 15 })
  numregdpec: string | null;

  @Column('datetime', { name: 'DHREGDPEC', nullable: true })
  dhregdpec: Date | null;

  @Column('varchar', { name: 'NATUREZAOPERDES', nullable: true, length: 2 })
  naturezaoperdes: string | null;

  @Column('varchar', { name: 'SERIENFDES', nullable: true, length: 4 })
  serienfdes: string | null;

  @Column('varchar', { name: 'MODELONFDES', nullable: true, length: 2 })
  modelonfdes: string | null;

  @Column('int', { name: 'NUMCF', nullable: true })
  numcf: number | null;

  @Column('varchar', { name: 'NUMNFSE', nullable: true, length: 20 })
  numnfse: string | null;

  @Column('int', { name: 'NUREM', nullable: true })
  nurem: number | null;

  @Column('varchar', { name: 'NUMPROTOCESPONT', nullable: true, length: 15 })
  numprotocespont: string | null;

  @Column('datetime', { name: 'DHPROTOCESPONT', nullable: true })
  dhprotocespont: Date | null;

  @Column('varchar', { name: 'MD5PAF', nullable: true, length: 32 })
  md5Paf: string | null;

  @Column('varchar', { name: 'TPAMBNFE', nullable: true, length: 1 })
  tpambnfe: string | null;

  @Column('varchar', { name: 'CHAVECTE', nullable: true, length: 44 })
  chavecte: string | null;

  @Column('varchar', { name: 'NUMPROTOCCTE', nullable: true, length: 30 })
  numprotoccte: string | null;

  @Column('datetime', { name: 'DHPROTOCCTE', nullable: true })
  dhprotoccte: Date | null;

  @Column('varchar', { name: 'NUMPROTOCCANCTE', nullable: true, length: 30 })
  numprotoccancte: string | null;

  @Column('datetime', { name: 'DHPROTOCCANCTE', nullable: true })
  dhprotoccancte: Date | null;

  @Column('smallint', { name: 'TPEMISCTE', nullable: true })
  tpemiscte: number | null;

  @Column('char', { name: 'TPAMBCTE', nullable: true, length: 1 })
  tpambcte: string | null;

  @Column('int', { name: 'NUNOTASUB', nullable: true })
  nunotasub: number | null;

  @Column('char', { name: 'TPAMBNFSE', nullable: true, length: 1 })
  tpambnfse: string | null;

  @Column('smallint', { name: 'CODUSULIB', nullable: true })
  codusulib: number | null;

  @Column('varchar', { name: 'PROTCANCNFSE', nullable: true, length: 44 })
  protcancnfse: string | null;

  @Column('datetime', { name: 'DHCANCPREFNFSE', nullable: true })
  dhcancprefnfse: Date | null;

  @Column('char', { name: 'TIPCANCNFSE', nullable: true, length: 1 })
  tipcancnfse: string | null;

  @Column('int', { name: 'NUMCOO', nullable: true })
  numcoo: number | null;

  @Column('char', { name: 'CANCELADO', nullable: true, length: 1 })
  cancelado: string | null;

  @Column('float', { name: 'VLRDESCRAT', nullable: true, precision: 53 })
  vlrdescrat: number | null;

  @Column('float', { name: 'VLRDESCTOTITEM', nullable: true, precision: 53 })
  vlrdesctotitem: number | null;

  @Column('float', { name: 'VLRDESCTOT', nullable: true, precision: 53 })
  vlrdesctot: number | null;

  @Column('int', { name: 'NUMCUPOMECONECT', nullable: true })
  numcupomeconect: number | null;

  @Column('numeric', {
    name: 'IDPONTUACAOPARCERIA',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  idpontuacaoparceria: number | null;

  @Column('varchar', { name: 'AVERBADOTMSCANC', nullable: true, length: 1 })
  averbadotmscanc: string | null;

  @Column('varchar', { name: 'PROTOCCANAVERBA', nullable: true, length: 100 })
  protoccanaverba: string | null;

  @Column('datetime', { name: 'DHCANAVERBA', nullable: true })
  dhcanaverba: Date | null;

  @Column('char', { name: 'NFSECABCEXT', nullable: true, length: 1 })
  nfsecabcext: string | null;

  @Column('varchar', { name: 'NUMPROTOCNFCOM', nullable: true, length: 16 })
  numprotocnfcom: string | null;

  @Column('varchar', { name: 'NUMPROTOCCANFCOM', nullable: true, length: 16 })
  numprotoccanfcom: string | null;

  @Column('int', { name: 'TPEMISNFCOM', nullable: true })
  tpemisnfcom: number | null;

  @Column('varchar', { name: 'CHAVENFCOM', nullable: true, length: 44 })
  chavenfcom: string | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfcans)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
