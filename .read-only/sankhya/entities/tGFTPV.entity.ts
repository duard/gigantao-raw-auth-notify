import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcamatEntity } from './tCAMAT.entity';
import { TccnegEntity } from './tCCNEG.entity';
import { TgfagdEntity } from './tGFAGD.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TgfobsEntity } from './tGFOBS.entity';
import { TgffdmEntity } from './tGFFDM.entity';
import { TgfntaEntity } from './tGFNTA.entity';
import { TgftcfEntity } from './tGFTCF.entity';

@Index('PK_TGFTPV', ['codtipvenda', 'dhalter'], { unique: true })
@Index('TGFTPV_I01', ['nunota'], {})
@Entity('TGFTPV', { schema: 'SANKHYA' })
export class TgftpvEntity {
  @Column('smallint', { primary: true, name: 'CODTIPVENDA' })
  codtipvenda: number;

  @Column('datetime', { primary: true, name: 'DHALTER' })
  dhalter: Date;

  @Column('char', { name: 'DESCRTIPVENDA', length: 36 })
  descrtipvenda: string;

  @Column('char', { name: 'SUBTIPOVENDA', length: 1 })
  subtipovenda: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('money', { name: 'VENDAMIN', nullable: true })
  vendamin: number | null;

  @Column('money', { name: 'VENDAMAX', nullable: true })
  vendamax: number | null;

  @Column('money', { name: 'TAXAJURO', nullable: true })
  taxajuro: number | null;

  @Column('char', {
    name: 'TIPTAXA',
    nullable: true,
    length: 1,
    default: () => "'U'",
  })
  tiptaxa: string | null;

  @Column('char', {
    name: 'TIPJURO',
    nullable: true,
    length: 1,
    default: () => "'I'",
  })
  tipjuro: string | null;

  @Column('char', { name: 'GRUPOAUTOR', nullable: true, length: 1 })
  grupoautor: string | null;

  @Column('char', { name: 'VALPRAZOCLIENTE', length: 1, default: () => "'S'" })
  valprazocliente: string;

  @Column('smallint', { name: 'BASEPRAZO', nullable: true })
  baseprazo: number | null;

  @Column('float', { name: 'COMISSAO', nullable: true, precision: 53 })
  comissao: number | null;

  @Column('char', { name: 'FIXAVENC', length: 1, default: () => "'N'" })
  fixavenc: string;

  @Column('char', { name: 'EMITEBOLETA', length: 1, default: () => "'S'" })
  emiteboleta: string;

  @Column('char', { name: 'EMITEDUPL', length: 1, default: () => "'N'" })
  emitedupl: string;

  @Column('char', { name: 'APRESTRANSP', length: 1, default: () => "'S'" })
  aprestransp: string;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('char', { name: 'BAIXA', length: 1, default: () => "'N'" })
  baixa: string;

  @Column('money', { name: 'DESCMAX', nullable: true })
  descmax: number | null;

  @Column('smallint', { name: 'PRAZOMEDMAX', nullable: true })
  prazomedmax: number | null;

  @Column('smallint', { name: 'PRAZOMAX', nullable: true })
  prazomax: number | null;

  @Column('char', { name: 'SOMAPRAZOCLIENTE', length: 1, default: () => "'N'" })
  somaprazocliente: string;

  @Column('char', { name: 'PODECONSUMIDOR', length: 1, default: () => "'S'" })
  podeconsumidor: string;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('float', { name: 'LUCROMIN', nullable: true, precision: 53 })
  lucromin: number | null;

  @Column('char', {
    name: 'DESCPROM',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  descprom: string | null;

  @Column('float', { name: 'PERCMINENTRADA', nullable: true, precision: 53 })
  percminentrada: number | null;

  @Column('smallint', { name: 'NROPARCELAS', nullable: true })
  nroparcelas: number | null;

  @Column('smallint', { name: 'PRAZOMAXPRIPARC', nullable: true })
  prazomaxpriparc: number | null;

  @Column('varchar', { name: 'FLEX', length: 1, default: () => "'S'" })
  flex: string;

  @Column('float', { name: 'MARGEMMIN', nullable: true, precision: 53 })
  margemmin: number | null;

  @Column('char', { name: 'MODELOPGTO', length: 1, default: () => "'N'" })
  modelopgto: string;

  @Column('float', { name: 'TAXAJURSIM', nullable: true, precision: 53 })
  taxajursim: number | null;

  @Column('varchar', { name: 'TIPOJURSIM', nullable: true, length: 1 })
  tipojursim: string | null;

  @Column('float', { name: 'PERCDESAGFLEX', nullable: true, precision: 53 })
  percdesagflex: number | null;

  @Column('float', { name: 'COMPRAMAX', nullable: true, precision: 53 })
  compramax: number | null;

  @Column('smallint', { name: 'PRAZOMIN', nullable: true })
  prazomin: number | null;

  @Column('char', { name: 'EDITASIMULACAO', length: 1, default: () => "'N'" })
  editasimulacao: string;

  @Column('char', { name: 'EXPTES', length: 1, default: () => "'N'" })
  exptes: string;

  @Column('smallint', { name: 'EXPGRS', default: () => '(0)' })
  expgrs: number;

  @Column('float', {
    name: 'TXPARCADM',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  txparcadm: number | null;

  @Column('char', { name: 'INTEGRAECONECT', length: 1, default: () => "'N'" })
  integraeconect: string;

  @Column('int', { name: 'FORMARECBTOSOCIN', nullable: true })
  formarecbtosocin: number | null;

  @Column('char', { name: 'FASTUSA', length: 1, default: () => "'S'" })
  fastusa: string;

  @Column('varchar', { name: 'VENCPREFIXPED', nullable: true, length: 1 })
  vencprefixped: string | null;

  @Column('varchar', {
    name: 'ARREDPRIMEIRAPARC',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  arredprimeiraparc: string | null;

  @Column('char', { name: 'TRUNCPARCELA', nullable: true, length: 1 })
  truncparcela: string | null;

  @Column('int', { name: 'TIMQTDPARC', nullable: true })
  timqtdparc: number | null;

  @Column('int', { name: 'AD_CODPAGPIPE', nullable: true })
  adCodpagpipe: number | null;

  @Column('varchar', { name: 'AD_CODPAGPIPEPAD', nullable: true, length: 10 })
  adCodpagpipepad: string | null;

  @Column('char', { name: 'EXVENDAMAIS', nullable: true, length: 1 })
  exvendamais: string | null;

  @OneToMany(() => TcamatEntity, (tcamatEntity) => tcamatEntity.tgftpv)
  tcamats: TcamatEntity[];

  @OneToMany(() => TccnegEntity, (tccnegEntity) => tccnegEntity.tgftpv)
  tccnegs: TccnegEntity[];

  @OneToMany(() => TgfagdEntity, (tgfagdEntity) => tgfagdEntity.tgftpv)
  tgfagds: TgfagdEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgftpv)
  tgfcabs: TgfcabEntity[];

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgftpvs)
  @JoinColumn([{ name: 'CODCTACTB_1', referencedColumnName: 'codctactb' }])
  codctactb: TcbplaEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgftpvs2)
  @JoinColumn([{ name: 'CODCTACTB_2', referencedColumnName: 'codctactb' }])
  codctactb_2: TcbplaEntity;

  @ManyToOne(() => TgfobsEntity, (tgfobsEntity) => tgfobsEntity.tgftpvs)
  @JoinColumn([{ name: 'CODOBSPADRAO', referencedColumnName: 'codobspadrao' }])
  codobspadrao: TgfobsEntity;

  @ManyToOne(() => TgffdmEntity, (tgffdmEntity) => tgffdmEntity.tgftpvs)
  @JoinColumn([{ name: 'CODFORMDESCMAX', referencedColumnName: 'codform' }])
  codformdescmax: TgffdmEntity;

  @ManyToOne(() => TgffdmEntity, (tgffdmEntity) => tgffdmEntity.tgftpvs2)
  @JoinColumn([
    { name: 'CODFORMDESCMAXITENS', referencedColumnName: 'codform' },
  ])
  codformdescmaxitens: TgffdmEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgftpvs)
  @JoinColumn([{ name: 'CODTAB', referencedColumnName: 'codtab' }])
  codtab: TgfntaEntity;

  @ManyToOne(() => TgftcfEntity, (tgftcfEntity) => tgftcfEntity.tgftpvs)
  @JoinColumn([{ name: 'CODTCF', referencedColumnName: 'codtcf' }])
  codtcf: TgftcfEntity;
}
