import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicusEntity } from './tSICUS.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsilboEntity } from './tSILBO.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfsitEntity } from './tGFSIT.entity';
import { TgmcfgEntity } from './tGMCFG.entity';
import { TgfrngEntity } from './tGFRNG.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index(
  'PK_TSILIB',
  ['nuchave', 'tabela', 'evento', 'sequencia', 'seqcascata', 'nucll'],
  {
    unique: true,
  },
)
@Index('TSILIB_I01', ['dhlib', 'codusulib'], {})
@Index('TSILIB_I02', ['dhlib', 'codususolicit'], {})
@Index('TSILIB_I03', ['tabela', 'dhsolicit'], {})
@Entity('TSILIB', { schema: 'SANKHYA' })
export class TsilibEntity {
  @Column('int', { primary: true, name: 'NUCHAVE' })
  nuchave: number;

  @Column('char', { primary: true, name: 'TABELA', length: 12 })
  tabela: string;

  @Column('smallint', { primary: true, name: 'EVENTO' })
  evento: number;

  @Column('smallint', { name: 'CODUSUSOLICIT' })
  codususolicit: number;

  @Column('datetime', { name: 'DHSOLICIT' })
  dhsolicit: Date;

  @Column('money', { name: 'VLRLIMITE' })
  vlrlimite: number;

  @Column('money', { name: 'VLRATUAL' })
  vlratual: number;

  @Column('money', { name: 'VLRLIBERADO', default: () => '(0)' })
  vlrliberado: number;

  @Column('smallint', { name: 'CODUSULIB', default: () => '(0)' })
  codusulib: number;

  @Column('datetime', { name: 'DHLIB', nullable: true })
  dhlib: Date | null;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @Column('float', { name: 'PERCLIMITE', precision: 53, default: () => '(0)' })
  perclimite: number;

  @Column('money', { name: 'VLRTOTAL', nullable: true })
  vlrtotal: number | null;

  @Column('char', { name: 'OBSLIB', nullable: true, length: 255 })
  obslib: string | null;

  @Column('money', { name: 'PERCANTERIOR', nullable: true })
  percanterior: number | null;

  @Column('money', { name: 'VLRANTERIOR', nullable: true })
  vlranterior: number | null;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('char', { name: 'REPROVADO', length: 1, default: () => "'N'" })
  reprovado: string;

  @Column('char', { name: 'SUPLEMENTO', length: 1, default: () => "'N'" })
  suplemento: string;

  @Column('char', { name: 'ANTECIPACAO', length: 1, default: () => "'N'" })
  antecipacao: string;

  @Column('char', { name: 'TRANSF', length: 1, default: () => "'N'" })
  transf: string;

  @Column('float', { name: 'VLRDESDOB', nullable: true, precision: 53 })
  vlrdesdob: number | null;

  @Column('smallint', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('smallint', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('smallint', {
    primary: true,
    name: 'SEQCASCATA',
    default: () => '(0)',
  })
  seqcascata: number;

  @Column('int', { primary: true, name: 'NUCLL', default: () => '(0)' })
  nucll: number;

  @Column('text', { name: 'OBSCOMPL', nullable: true })
  obscompl: string | null;

  @Column('datetime', { name: 'DTVALDESC', nullable: true })
  dtvaldesc: Date | null;

  @Column('varchar', { name: 'CORDESTAQUE', nullable: true, length: 20 })
  cordestaque: string | null;

  @Column('char', { name: 'AD_ENVIADO_WPP', nullable: true, length: 1 })
  adEnviadoWpp: string | null;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tsilibs)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tsilibs)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tsilibs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TsilboEntity, (tsilboEntity) => tsilboEntity.tsilibs)
  @JoinColumn([{ name: 'NULBO', referencedColumnName: 'nulbo' }])
  nulbo: TsilboEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tsilibs)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TgfsitEntity, (tgfsitEntity) => tgfsitEntity.tsilibs)
  @JoinColumn([{ name: 'CODSITE', referencedColumnName: 'codsite' }])
  codsite: TgfsitEntity;

  @ManyToOne(() => TgmcfgEntity, (tgmcfgEntity) => tgmcfgEntity.tsilibs)
  @JoinColumn([{ name: 'CODMETA', referencedColumnName: 'codmeta' }])
  codmeta: TgmcfgEntity;

  @ManyToOne(() => TgfrngEntity, (tgfrngEntity) => tgfrngEntity.tsilibs)
  @JoinColumn([{ name: 'NURNG', referencedColumnName: 'nurng' }])
  nurng: TgfrngEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsilibs)
  @JoinColumn([{ name: 'CODUSULIB', referencedColumnName: 'codusu' }])
  codusulib2: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsilibs2)
  @JoinColumn([{ name: 'CODUSUSOLICIT', referencedColumnName: 'codusu' }])
  codususolicit2: TsiusuEntity;
}
