import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfagmEntity } from './tGFAGM.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgmcfgEntity } from './tGMCFG.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfppmEntity } from './tGFPPM.entity';
import { TgfromEntity } from './tGFROM.entity';

@Index('PK_TGFPPL', ['nuplan'], { unique: true })
@Index('TGFPPL_I01', ['dtref'], {})
@Index('TGFPPL_I02', ['nunota'], {})
@Index('TGFPPL_I03', ['nunotaorig', 'sequenciaorig'], {})
@Index('TGFPPL_I04', ['codprod', 'nunota', 'dtmov'], {})
@Index('TGFPPL_I05', ['nuplanorig'], {})
@Entity('TGFPPL', { schema: 'SANKHYA' })
export class TgfpplEntity {
  @Column('int', { primary: true, name: 'NUPLAN' })
  nuplan: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('int', { name: 'CODLOCAL' })
  codlocal: number;

  @Column('char', { name: 'CONTROLE', length: 11, default: () => "''" })
  controle: string;

  @Column('smallint', { name: 'VARIACAO' })
  variacao: number;

  @Column('float', { name: 'QTD', precision: 53 })
  qtd: number;

  @Column('datetime', { name: 'DTMOV' })
  dtmov: Date;

  @Column('smallint', { name: 'ORDEM' })
  ordem: number;

  @Column('char', { name: 'PROBLEMA', length: 1, default: () => "'N'" })
  problema: string;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('datetime', { name: 'DTREF' })
  dtref: Date;

  @Column('int', { name: 'NUNOTAORIG', nullable: true })
  nunotaorig: number | null;

  @Column('smallint', { name: 'SEQUENCIAORIG', nullable: true })
  sequenciaorig: number | null;

  @Column('int', { name: 'NUPLANORIG', nullable: true })
  nuplanorig: number | null;

  @Column('varchar', { name: 'PLANDEMAND', length: 1, default: () => "'N'" })
  plandemand: string;

  @Column('smallint', { name: 'SEQPREV', nullable: true })
  seqprev: number | null;

  @Column('datetime', { name: 'DTPLA', nullable: true })
  dtpla: Date | null;

  @Column('varchar', { name: 'OBS', nullable: true, length: 512 })
  obs: string | null;

  @Column('datetime', { name: 'DHLIBLOG', nullable: true })
  dhliblog: Date | null;

  @Column('datetime', { name: 'DHLIBPROD', nullable: true })
  dhlibprod: Date | null;

  @Column('smallint', { name: 'VARIACAOMAPA', nullable: true })
  variacaomapa: number | null;

  @Column('float', { name: 'QTDMESTRE', nullable: true, precision: 53 })
  qtdmestre: number | null;

  @Column('float', { name: 'MULTPA', nullable: true, precision: 53 })
  multpa: number | null;

  @Column('char', { name: 'FIXO', length: 1, default: () => "'N'" })
  fixo: string;

  @Column('int', { name: 'LEADTIME', nullable: true })
  leadtime: number | null;

  @Column('varchar', { name: 'TIPOPLAN', nullable: true, length: 3 })
  tipoplan: string | null;

  @OneToMany(() => TgfagmEntity, (tgfagmEntity) => tgfagmEntity.nuplan2)
  tgfagms: TgfagmEntity[];

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfppls)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgmcfgEntity, (tgmcfgEntity) => tgmcfgEntity.tgfppls)
  @JoinColumn([{ name: 'CODMETA', referencedColumnName: 'codmeta' }])
  codmeta: TgmcfgEntity;

  @ManyToOne(() => TgfpplEntity, (tgfpplEntity) => tgfpplEntity.tgfppls)
  @JoinColumn([{ name: 'NUPLAMESTRE', referencedColumnName: 'nuplan' }])
  nuplamestre: TgfpplEntity;

  @OneToMany(() => TgfpplEntity, (tgfpplEntity) => tgfpplEntity.nuplamestre)
  tgfppls: TgfpplEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfppls)
  @JoinColumn([{ name: 'CODUSULIBLOG', referencedColumnName: 'codusu' }])
  codusuliblog: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfppls2)
  @JoinColumn([{ name: 'CODUSULIBPROD', referencedColumnName: 'codusu' }])
  codusulibprod: TsiusuEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfppls)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfppls)
  @JoinColumn([{ name: 'CODPARCTRANSP', referencedColumnName: 'codparc' }])
  codparctransp: TgfparEntity;

  @OneToMany(() => TgfppmEntity, (tgfppmEntity) => tgfppmEntity.nuplamestre)
  tgfppms: TgfppmEntity[];

  @OneToMany(() => TgfppmEntity, (tgfppmEntity) => tgfppmEntity.nuplan2)
  tgfppms2: TgfppmEntity[];

  @OneToMany(() => TgfromEntity, (tgfromEntity) => tgfromEntity.nuplan2)
  tgfroms: TgfromEntity[];
}
