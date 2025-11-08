import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgwcaiEntity } from './tGWCAI.entity';
import { TgwccxEntity } from './tGWCCX.entity';
import { TgwrevEntity } from './tGWREV.entity';
import { TgwtarEntity } from './tGWTAR.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TgwondEntity } from './tGWOND.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgwdcaEntity } from './tGWDCA.entity';
import { TgwconEntity } from './tGWCON.entity';
import { TgwarcEntity } from './tGWARC.entity';
import { TgwarsEntity } from './tGWARS.entity';
import { TgwsxnEntity } from './tGWSXN.entity';

@Index('PK_TGWSEP', ['nuseparacao'], { unique: true })
@Index('TGWSEP_I01', ['dtseparacao'], {})
@Index('TGWSEP_I03', ['nuseparacao', 'situacao'], {})
@Index('TGWSEP_I04', ['nutarefa'], {})
@Index('TGWSEP_I05', ['codempoc', 'ordemcarga'], {})
@Index('TGWSEP_I06', ['nuconferencia'], {})
@Index('TGWSEP_I07', ['nropalete'], {})
@Entity('TGWSEP', { schema: 'SANKHYA' })
export class TgwsepEntity {
  @Column('int', { primary: true, name: 'NUSEPARACAO' })
  nuseparacao: number;

  @Column('int', { name: 'CODENDDOCA' })
  codenddoca: number;

  @Column('smallint', { name: 'SITUACAO', default: () => '(0)' })
  situacao: number;

  @Column('datetime', { name: 'DTSEPARACAO' })
  dtseparacao: Date;

  @Column('int', { name: 'NUTAREFA', nullable: true })
  nutarefa: number | null;

  @Column('int', { name: 'NUCONFERENCIA', nullable: true })
  nuconferencia: number | null;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('smallint', { name: 'STATUSCONF', default: () => '(0)' })
  statusconf: number;

  @Column('smallint', { name: 'PRIORIDADE', nullable: true })
  prioridade: number | null;

  @Column('char', { name: 'FLOWRACK', length: 1, default: () => "'N'" })
  flowrack: string;

  @Column('int', { name: 'QTDCXSFLOWRACK', nullable: true })
  qtdcxsflowrack: number | null;

  @Column('datetime', { name: 'DHINISEPPKG', nullable: true })
  dhiniseppkg: Date | null;

  @Column('datetime', { name: 'DHFIMSEPPKG', nullable: true })
  dhfimseppkg: Date | null;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('int', { name: 'ORDEMCARGA', nullable: true })
  ordemcarga: number | null;

  @Column('smallint', { name: 'CODEMPOC', nullable: true })
  codempoc: number | null;

  @Column('smallint', { name: 'TIPOSPLIT', nullable: true })
  tiposplit: number | null;

  @Column('int', { name: 'NROPALETE', nullable: true })
  nropalete: number | null;

  @Column('char', { name: 'LIBERADA', length: 1, default: () => "'N'" })
  liberada: string;

  @Column('char', { name: 'LIBERAREAB', length: 1, default: () => "'N'" })
  liberareab: string;

  @Column('char', { name: 'EFETIVANDO', length: 1, default: () => "'N'" })
  efetivando: string;

  @Column('smallint', { name: 'QTDCHECKOUTS', nullable: true })
  qtdcheckouts: number | null;

  @Column('int', { name: 'NUSEPMAE', nullable: true })
  nusepmae: number | null;

  @Column('char', { name: 'TRIADO', nullable: true, length: 1 })
  triado: string | null;

  @Column('varchar', {
    name: 'CANCELADA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  cancelada: string | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 250 })
  observacao: string | null;

  @Column('int', { name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('numeric', {
    name: 'SITUACAOANT',
    nullable: true,
    precision: 5,
    scale: 0,
  })
  situacaoant: number | null;

  @OneToMany(() => TgwcaiEntity, (tgwcaiEntity) => tgwcaiEntity.nuseparacao2)
  tgwcais: TgwcaiEntity[];

  @OneToMany(() => TgwccxEntity, (tgwccxEntity) => tgwccxEntity.nuseparacao2)
  tgwccxes: TgwccxEntity[];

  @OneToMany(() => TgwccxEntity, (tgwccxEntity) => tgwccxEntity.nuseparacao3)
  tgwccxes2: TgwccxEntity[];

  @OneToMany(() => TgwrevEntity, (tgwrevEntity) => tgwrevEntity.nuseparacao2)
  tgwrevs: TgwrevEntity[];

  @ManyToOne(() => TgwtarEntity, (tgwtarEntity) => tgwtarEntity.tgwseps)
  @JoinColumn([{ name: 'NUTAREFA', referencedColumnName: 'nutarefa' }])
  nutarefa2: TgwtarEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgwseps)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota: TgfcabEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tgwseps)
  @JoinColumn([
    { name: 'CODEMPFUNC', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TgwondEntity, (tgwondEntity) => tgwondEntity.tgwseps)
  @JoinColumn([{ name: 'CODONDA', referencedColumnName: 'codonda' }])
  codonda: TgwondEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwseps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgwdcaEntity, (tgwdcaEntity) => tgwdcaEntity.tgwseps)
  @JoinColumn([{ name: 'CODDOCA', referencedColumnName: 'coddoca' }])
  coddoca: TgwdcaEntity;

  @ManyToOne(() => TgwconEntity, (tgwconEntity) => tgwconEntity.tgwseps)
  @JoinColumn([
    { name: 'NUCONFERENCIA', referencedColumnName: 'nuconferencia' },
  ])
  nuconferencia2: TgwconEntity;

  @ManyToOne(() => TgwarcEntity, (tgwarcEntity) => tgwarcEntity.tgwseps)
  @JoinColumn([{ name: 'CODAREACONF', referencedColumnName: 'codareaconf' }])
  codareaconf: TgwarcEntity;

  @ManyToOne(() => TgwarsEntity, (tgwarsEntity) => tgwarsEntity.tgwseps)
  @JoinColumn([{ name: 'CODAREASEP', referencedColumnName: 'codareasep' }])
  codareasep: TgwarsEntity;

  @OneToMany(() => TgwsxnEntity, (tgwsxnEntity) => tgwsxnEntity.nuseparacao2)
  tgwsxns: TgwsxnEntity[];
}
