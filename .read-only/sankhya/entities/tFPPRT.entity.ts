import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpitprtEntity } from './tFPITPRT.entity';
import { TfpprtdpdEntity } from './tFPPRTDPD.entity';
import { TfpprtictEntity } from './tFPPRTICT.entity';

@Index('PK_TFPPRT', ['nuprt'], { unique: true })
@Entity('TFPPRT', { schema: 'SANKHYA' })
export class TfpprtEntity {
  @Column('int', { primary: true, name: 'NUPRT' })
  nuprt: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { name: 'RESPINDIRETA', nullable: true, length: 1 })
  respindireta: string | null;

  @Column('smallint', { name: 'TPINSCEMPREGADOR', nullable: true })
  tpinscempregador: number | null;

  @Column('varchar', { name: 'NRINSCEMPREGADOR', nullable: true, length: 14 })
  nrinscempregador: string | null;

  @Column('smallint', { name: 'ORIGPROCESSO', nullable: true })
  origprocesso: number | null;

  @Column('varchar', { name: 'NRPROCESSO', nullable: true, length: 20 })
  nrprocesso: string | null;

  @Column('varchar', { name: 'OBSPROCESSO', nullable: true, length: 999 })
  obsprocesso: string | null;

  @Column('datetime', { name: 'DTSENTENCA', nullable: true })
  dtsentenca: Date | null;

  @Column('varchar', { name: 'UFVARA', nullable: true, length: 2 })
  ufvara: string | null;

  @Column('int', { name: 'CODCID', nullable: true })
  codcid: number | null;

  @Column('smallint', { name: 'IDVARA', nullable: true })
  idvara: number | null;

  @Column('datetime', { name: 'DTCONCILIACAO', nullable: true })
  dtconciliacao: Date | null;

  @Column('smallint', { name: 'AMBITOCELEBRACAO', nullable: true })
  ambitocelebracao: number | null;

  @Column('varchar', { name: 'CNPJSINDCATO', nullable: true, length: 14 })
  cnpjsindcato: string | null;

  @Column('varchar', { name: 'TRABCONTRATDECL', nullable: true, length: 1 })
  trabcontratdecl: string | null;

  @Column('int', { name: 'CODFUNCTRAB', nullable: true })
  codfunctrab: number | null;

  @Column('smallint', { name: 'CODEMPTRAB', nullable: true })
  codemptrab: number | null;

  @Column('varchar', { name: 'CPFTRAB', nullable: true, length: 11 })
  cpftrab: string | null;

  @Column('varchar', { name: 'NOMETRAB', nullable: true, length: 70 })
  nometrab: string | null;

  @Column('datetime', { name: 'DTNASCTOTRAB', nullable: true })
  dtnasctotrab: Date | null;

  @Column('char', { name: 'CONFIRMADO', length: 1 })
  confirmado: string;

  @Column('datetime', { name: 'DTLAUDOMOLESTIA', nullable: true })
  dtlaudomolestia: Date | null;

  @Column('char', { name: 'INCPORTALESOCIAL', nullable: true, length: 1 })
  incportalesocial: string | null;

  @Column('varchar', { name: 'NRORECIBOESOCIAL', nullable: true, length: 50 })
  nroreciboesocial: string | null;

  @Column('datetime', { name: 'DTADMRESPDIR', nullable: true })
  dtadmrespdir: Date | null;

  @Column('varchar', { name: 'MATRESPDIR', nullable: true, length: 30 })
  matrespdir: string | null;

  @Column('smallint', { name: 'IDESEQTRAB', nullable: true })
  ideseqtrab: number | null;

  @OneToMany(() => TfpitprtEntity, (tfpitprtEntity) => tfpitprtEntity.nuprt)
  tfpitprts: TfpitprtEntity[];

  @OneToMany(() => TfpprtdpdEntity, (tfpprtdpdEntity) => tfpprtdpdEntity.nuprt2)
  tfpprtdpds: TfpprtdpdEntity[];

  @OneToMany(() => TfpprtictEntity, (tfpprtictEntity) => tfpprtictEntity.nuprt)
  tfpprticts: TfpprtictEntity[];
}
