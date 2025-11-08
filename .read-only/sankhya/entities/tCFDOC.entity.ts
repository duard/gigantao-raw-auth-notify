import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TcftipdocEntity } from './tCFTIPDOC.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfveidocEntity } from './tGFVEIDOC.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TsiufsEntity } from './tSIUFS.entity';

@Index('PK_TCFDOC', ['nudoc'], { unique: true })
@Entity('TCFDOC', { schema: 'SANKHYA' })
export class TcfdocEntity {
  @Column('int', { primary: true, name: 'NUDOC' })
  nudoc: number;

  @Column('varchar', { name: 'DESCRDOC', nullable: true, length: 100 })
  descrdoc: string | null;

  @Column('int', { name: 'DIASVAL', nullable: true })
  diasval: number | null;

  @Column('int', { name: 'QTDDIASAVI', nullable: true })
  qtddiasavi: number | null;

  @Column('int', { name: 'QTDDIASBLOQ', nullable: true })
  qtddiasbloq: number | null;

  @Column('varchar', { name: 'ACAO', nullable: true, length: 10 })
  acao: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 10 })
  tipo: string | null;

  @Column('varchar', { name: 'NROAPOLICE', nullable: true, length: 100 })
  nroapolice: string | null;

  @Column('datetime', { name: 'DTVIGINI', nullable: true })
  dtvigini: Date | null;

  @Column('datetime', { name: 'DTVIGFIN', nullable: true })
  dtvigfin: Date | null;

  @Column('float', { name: 'VLRDANOSCORP', nullable: true, precision: 53 })
  vlrdanoscorp: number | null;

  @Column('float', { name: 'VLRMORTEPASS', nullable: true, precision: 53 })
  vlrmortepass: number | null;

  @Column('float', { name: 'VLRDANOMAT', nullable: true, precision: 53 })
  vlrdanomat: number | null;

  @Column('float', { name: 'VLRDANOMORAIS', nullable: true, precision: 53 })
  vlrdanomorais: number | null;

  @Column('float', { name: 'VLRINVALIDEZ', nullable: true, precision: 53 })
  vlrinvalidez: number | null;

  @Column('int', { name: 'CLASSEBONUS', nullable: true })
  classebonus: number | null;

  @Column('float', { name: 'VLRSEG', nullable: true, precision: 53 })
  vlrseg: number | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('varchar', { name: 'OBSSEGURADORA', nullable: true, length: 3103 })
  obsseguradora: string | null;

  @Column('float', { name: 'VLRFRANQUIA', nullable: true, precision: 53 })
  vlrfranquia: number | null;

  @Column('varchar', { name: 'SEGRCTRC', nullable: true, length: 10 })
  segrctrc: string | null;

  @Column('varchar', { name: 'NROAPOLICERCTRC', nullable: true, length: 100 })
  nroapolicerctrc: string | null;

  @Column('varchar', { name: 'SEGRCFDC', nullable: true, length: 10 })
  segrcfdc: string | null;

  @Column('varchar', { name: 'NROAPOLICERCFDC', nullable: true, length: 100 })
  nroapolicercfdc: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'DIASNOTIFICVENC', nullable: true })
  diasnotificvenc: number | null;

  @Column('varchar', { name: 'EMAILNOTIFICVENC', nullable: true, length: 100 })
  emailnotificvenc: string | null;

  @Column('int', { name: 'CODVEICULO', nullable: true })
  codveiculo: number | null;

  @Column('int', { name: 'AD_CODFUNC', nullable: true })
  adCodfunc: number | null;

  @Column('char', { name: 'AD_ATIVO', nullable: true, length: 1 })
  adAtivo: string | null;

  @ManyToOne(
    () => TcftipdocEntity,
    (tcftipdocEntity) => tcftipdocEntity.tcfdocs,
  )
  @JoinColumn([{ name: 'CODTIPDOC', referencedColumnName: 'codtipdoc' }])
  codtipdoc: TcftipdocEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcfdocs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcfdocs)
  @JoinColumn([{ name: 'CODPARCSEG', referencedColumnName: 'codparc' }])
  codparcseg: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcfdocs2)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcfdocs3)
  @JoinColumn([{ name: 'CODPARCSEGCARGA', referencedColumnName: 'codparc' }])
  codparcsegcarga: TgfparEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tcfdocs)
  @JoinColumn([{ name: 'CODUF', referencedColumnName: 'coduf' }])
  coduf: TsiufsEntity;

  @OneToMany(
    () => TgfveidocEntity,
    (tgfveidocEntity) => tgfveidocEntity.coddoc2,
  )
  tgfveidocs: TgfveidocEntity[];
}
