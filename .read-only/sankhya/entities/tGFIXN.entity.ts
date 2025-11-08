import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgfdfpiEntity } from './tGFDFPI.entity';
import { TgfmdtEntity } from './tGFMDT.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFIXN', ['nuarquivo'], { unique: true })
@Index('TGFIXN_I01', ['nunota'], {})
@Index('TGFIXN_I02', ['chaveacesso'], {})
@Index('TGFIXN_I03', ['nufin'], {})
@Index('TGFIXN_I04', ['statuszip'], {})
@Entity('TGFIXN', { schema: 'SANKHYA' })
export class TgfixnEntity {
  @Column('int', { primary: true, name: 'NUARQUIVO' })
  nuarquivo: number;

  @Column('varchar', { name: 'NOMEARQUIVO', nullable: true, length: 200 })
  nomearquivo: string | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('varchar', { name: 'CHAVEACESSO', nullable: true, length: 44 })
  chaveacesso: string | null;

  @Column('smallint', { name: 'STATUS', default: () => '(0)' })
  status: number;

  @Column('varchar', {
    name: 'DETALHESIMPORTACAO',
    nullable: true,
    length: 3103,
  })
  detalhesimportacao: string | null;

  @Column('datetime', { name: 'DHIMPORT', nullable: true })
  dhimport: Date | null;

  @Column('datetime', { name: 'DHPROCESS', nullable: true })
  dhprocess: Date | null;

  @Column('text', { name: 'XML', nullable: true })
  xml: string | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('text', { name: 'CONFIG', nullable: true })
  config: string | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('smallint', { name: 'CODVEND', nullable: true })
  codvend: number | null;

  @Column('smallint', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('varchar', { name: 'IMPORTADOMDE', nullable: true, length: 1 })
  importadomde: string | null;

  @Column('varchar', { name: 'SITUACAONFE', nullable: true, length: 1 })
  situacaonfe: string | null;

  @Column('varchar', { name: 'SITUACAOMDE', nullable: true, length: 1 })
  situacaomde: string | null;

  @Column('datetime', { name: 'DHEMISS', nullable: true })
  dhemiss: Date | null;

  @Column('float', { name: 'VLRNOTA', nullable: true, precision: 53 })
  vlrnota: number | null;

  @Column('datetime', { name: 'DTVENC', nullable: true })
  dtvenc: Date | null;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('char', {
    name: 'TIPIMPCTE',
    nullable: true,
    length: 1,
    default: () => 'NULL',
  })
  tipimpcte: string | null;

  @Column('char', { name: 'TIPONFE', nullable: true, length: 1 })
  tiponfe: string | null;

  @Column('char', { name: 'SITUACAOCTE', nullable: true, length: 1 })
  situacaocte: string | null;

  @Column('char', { name: 'PAPELCTE', nullable: true, length: 1 })
  papelcte: string | null;

  @Column('smallint', { name: 'TIPOMANIFDFE', nullable: true })
  tipomanifdfe: number | null;

  @Column('varchar', { name: 'OBSERVACAODFE', nullable: true, length: 255 })
  observacaodfe: string | null;

  @Column('varchar', { name: 'ULTEVEDFE', nullable: true, length: 256 })
  ultevedfe: string | null;

  @Column('text', { name: 'DOCSREF', nullable: true })
  docsref: string | null;

  @Column('varchar', { name: 'TOMADORCTE', length: 1, default: () => "'A'" })
  tomadorcte: string;

  @Column('char', { name: 'TIPOCTE', nullable: true, length: 1 })
  tipocte: string | null;

  @Column('smallint', { name: 'SERIEDOC', nullable: true })
  seriedoc: number | null;

  @Column('int', { name: 'CODPARCDEST', nullable: true })
  codparcdest: number | null;

  @Column('varchar', { name: 'NATUREZAOPER', nullable: true, length: 60 })
  naturezaoper: string | null;

  @Column('datetime', { name: 'DTAUTORIZACAO', nullable: true })
  dtautorizacao: Date | null;

  @Column('varchar', { name: 'PLACAVEIC', nullable: true, length: 7 })
  placaveic: string | null;

  @Column('varchar', { name: 'CNPJTRANSP', nullable: true, length: 14 })
  cnpjtransp: string | null;

  @Column('int', { name: 'CODPARCTRANSP', nullable: true })
  codparctransp: number | null;

  @Column('varchar', { name: 'CNPJPARC', nullable: true, length: 14 })
  cnpjparc: string | null;

  @Column('varchar', { name: 'CNPJREMET', nullable: true, length: 14 })
  cnpjremet: string | null;

  @Column('int', { name: 'CODPARCREMET', nullable: true })
  codparcremet: number | null;

  @Column('varchar', { name: 'CNPJDEST', nullable: true, length: 14 })
  cnpjdest: string | null;

  @Column('varchar', { name: 'CNPJEXPED', nullable: true, length: 14 })
  cnpjexped: string | null;

  @Column('int', { name: 'CODPARCEXPED', nullable: true })
  codparcexped: number | null;

  @Column('varchar', { name: 'CNPJRECEB', nullable: true, length: 14 })
  cnpjreceb: string | null;

  @Column('int', { name: 'CODPARCRECEB', nullable: true })
  codparcreceb: number | null;

  @Column('varchar', { name: 'ENTSAINFE', nullable: true, length: 1 })
  entsainfe: string | null;

  @Column('varchar', { name: 'CFOPXML', nullable: true, length: 2000 })
  cfopxml: string | null;

  @Column('datetime', { name: 'DTCONFIRMACAO', nullable: true })
  dtconfirmacao: Date | null;

  @Column('varchar', { name: 'XNOMEEMIT', nullable: true, length: 60 })
  xnomeemit: string | null;

  @Column('varchar', { name: 'XNOMEDEST', nullable: true, length: 60 })
  xnomedest: string | null;

  @Column('varchar', { name: 'XNOMETRANSP', nullable: true, length: 60 })
  xnometransp: string | null;

  @Column('varchar', { name: 'XNOMETOMA', nullable: true, length: 60 })
  xnometoma: string | null;

  @Column('smallint', { name: 'CODTIPVENDA', nullable: true })
  codtipvenda: number | null;

  @Column('int', { name: 'NUMCOTACAO', nullable: true })
  numcotacao: number | null;

  @Column('int', { name: 'STATUSZIP', nullable: true })
  statuszip: number | null;

  @Column('varchar', { name: 'IDPROCESSO', nullable: true, length: 100 })
  idprocesso: string | null;

  @Column('datetime', { name: 'DHPROCAG', nullable: true })
  dhprocag: Date | null;

  @Column('int', { name: 'QTDPROCAG', nullable: true })
  qtdprocag: number | null;

  @OneToMany(() => TgfdfpiEntity, (tgfdfpiEntity) => tgfdfpiEntity.nuarquivo2)
  tgfdfpis: TgfdfpiEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfixns)
  @JoinColumn([{ name: 'CODUSUIMP', referencedColumnName: 'codusu' }])
  codusuimp: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfixns2)
  @JoinColumn([{ name: 'CODUSUPROC', referencedColumnName: 'codusu' }])
  codusuproc: TsiusuEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfixns)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfixns)
  @JoinColumn([{ name: 'CODPARCENTREGACTE', referencedColumnName: 'codparc' }])
  codparcentregacte: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfixns2)
  @JoinColumn([{ name: 'CODPARCCOLETACTE', referencedColumnName: 'codparc' }])
  codparccoletacte: TgfparEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgfixns)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfixns)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @OneToMany(() => TgfmdtEntity, (tgfmdtEntity) => tgfmdtEntity.nuarquivo)
  tgfmdts: TgfmdtEntity[];
}
