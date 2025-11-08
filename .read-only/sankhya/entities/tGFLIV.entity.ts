import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfajdEntity } from './tGFAJD.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfnstEntity } from './tGFNST.entity';

@Index('PK_TGFLIV', ['nunota', 'origem', 'sequencia', 'codemp'], {
  unique: true,
})
@Index('TGFLIV_EFD01', ['codemp', 'entsai', 'dtdoc'], {})
@Index('TGFLIV_I03', ['dtdoc', 'numnota', 'serienota', 'codparc', 'codemp'], {})
@Index('TGFLIV_I1', ['dhmov', 'codemp'], {})
@Index('TGFLIV_I2', ['origem', 'digitado', 'dtfilt'], {})
@Entity('TGFLIV', { schema: 'SANKHYA' })
export class TgflivEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('char', {
    primary: true,
    name: 'ORIGEM',
    length: 1,
    default: () => "'E'",
  })
  origem: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'NUMNOTA' })
  numnota: number;

  @Column('char', { name: 'SERIENOTA', length: 3 })
  serienota: string;

  @Column('datetime', { name: 'DTDOC' })
  dtdoc: Date;

  @Column('datetime', { name: 'DHMOV' })
  dhmov: Date;

  @Column('char', { name: 'EMPPARC', length: 1, default: () => "'P'" })
  empparc: string;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('int', { name: 'CODCFO' })
  codcfo: number;

  @Column('int', { name: 'NUMLANC', nullable: true })
  numlanc: number | null;

  @Column('char', { name: 'ESPDOC', nullable: true, length: 2 })
  espdoc: string | null;

  @Column('smallint', { name: 'CODTRIB', nullable: true })
  codtrib: number | null;

  @Column('char', { name: 'TIPICMS', nullable: true, length: 1 })
  tipicms: string | null;

  @Column('money', { name: 'BASEICMS', nullable: true })
  baseicms: number | null;

  @Column('float', { name: 'ALIQICMS', nullable: true, precision: 53 })
  aliqicms: number | null;

  @Column('money', { name: 'VLRICMS', nullable: true })
  vlricms: number | null;

  @Column('money', { name: 'ISENTASICMS', nullable: true })
  isentasicms: number | null;

  @Column('money', { name: 'OUTRASICMS', nullable: true })
  outrasicms: number | null;

  @Column('money', { name: 'BASERETENCAO', nullable: true })
  baseretencao: number | null;

  @Column('money', { name: 'ICMSRETENCAO', nullable: true })
  icmsretencao: number | null;

  @Column('char', { name: 'TIPIPI', nullable: true, length: 1 })
  tipipi: string | null;

  @Column('money', { name: 'BASEIPI', nullable: true })
  baseipi: number | null;

  @Column('float', { name: 'ALIQIPI', nullable: true, precision: 53 })
  aliqipi: number | null;

  @Column('money', { name: 'VLRIPI', nullable: true })
  vlripi: number | null;

  @Column('money', { name: 'ISENTASIPI', nullable: true })
  isentasipi: number | null;

  @Column('money', { name: 'OUTRASIPI', nullable: true })
  outrasipi: number | null;

  @Column('money', { name: 'VLRCTB', nullable: true })
  vlrctb: number | null;

  @Column('int', { name: 'CODCTACTB', nullable: true })
  codctactb: number | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'S'" })
  digitado: string;

  @Column('char', { name: 'ENTSAI', nullable: true, length: 1 })
  entsai: string | null;

  @Column('money', { name: 'DIFICMS', nullable: true })
  dificms: number | null;

  @Column('char', { name: 'UFORIGEM', nullable: true, length: 2 })
  uforigem: string | null;

  @Column('char', { name: 'UFDESTINO', nullable: true, length: 2 })
  ufdestino: string | null;

  @Column('int', { name: 'NUMNOTA2', nullable: true })
  numnota2: number | null;

  @Column('money', { name: 'GTOTECF', nullable: true })
  gtotecf: number | null;

  @Column('datetime', { name: 'DTFILT' })
  dtfilt: Date;

  @Column('smallint', { name: 'CODEMPORIG' })
  codemporig: number;

  @Column('int', { name: 'CODMODDOC', default: () => '(1)' })
  codmoddoc: number;

  @Column('money', { name: 'VLRTARE', nullable: true })
  vlrtare: number | null;

  @Column('money', { name: 'VLRCTBTARE', nullable: true })
  vlrctbtare: number | null;

  @Column('money', { name: 'BASEICMSTARE', nullable: true })
  baseicmstare: number | null;

  @Column('money', { name: 'VLRICMSTARE', nullable: true })
  vlricmstare: number | null;

  @Column('float', {
    name: 'BASERETENCAOSEMRED',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  baseretencaosemred: number | null;

  @Column('varchar', { name: 'CODANTECIPST', nullable: true, length: 1 })
  codantecipst: string | null;

  @Column('varchar', { name: 'CHAVENFE', nullable: true, length: 44 })
  chavenfe: string | null;

  @Column('varchar', { name: 'CHAVECTE', nullable: true, length: 44 })
  chavecte: string | null;

  @Column('varchar', { name: 'CHAVECTEREF', nullable: true, length: 44 })
  chavecteref: string | null;

  @Column('datetime', { name: 'DTENTSAIINFO', nullable: true })
  dtentsaiinfo: Date | null;

  @Column('char', { name: 'TIPOTARE', nullable: true, length: 1 })
  tipotare: string | null;

  @Column('float', {
    name: 'VLRICMSCOMPL',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlricmscompl: number | null;

  @Column('float', { name: 'VLRICMSDIFALDEST', nullable: true, precision: 53 })
  vlricmsdifaldest: number | null;

  @Column('float', { name: 'VLRICMSDIFALREM', nullable: true, precision: 53 })
  vlricmsdifalrem: number | null;

  @Column('float', { name: 'VLRICMSFCP', nullable: true, precision: 53 })
  vlricmsfcp: number | null;

  @Column('int', { name: 'CODCONTATOENTREGA', nullable: true })
  codcontatoentrega: number | null;

  @Column('varchar', { name: 'UFENTREGA', nullable: true, length: 2 })
  ufentrega: string | null;

  @Column('float', { name: 'VLRICMSFCPINT', nullable: true, precision: 53 })
  vlricmsfcpint: number | null;

  @Column('float', { name: 'VLRSTFCPINT', nullable: true, precision: 53 })
  vlrstfcpint: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @OneToMany(() => TgfajdEntity, (tgfajdEntity) => tgfajdEntity.tgfliv)
  tgfajds: TgfajdEntity[];

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgflivs)
  @JoinColumn([{ name: 'CODCIDINICTE', referencedColumnName: 'codcid' }])
  codcidinicte: TsicidEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgflivs2)
  @JoinColumn([{ name: 'CODCIDFIMCTE', referencedColumnName: 'codcid' }])
  codcidfimcte: TsicidEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgflivs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgfnstEntity, (tgfnstEntity) => tgfnstEntity.tgfliv)
  tgfnsts: TgfnstEntity[];
}
