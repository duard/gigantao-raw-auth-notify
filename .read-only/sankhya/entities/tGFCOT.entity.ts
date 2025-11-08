import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfmtcEntity } from './tGFMTC.entity';
import { TgfscrEntity } from './tGFSCR.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgffrcEntity } from './tGFFRC.entity';
import { TgfitcEntity } from './tGFITC.entity';

@Index('PK_TGFCOT', ['numcotacao'], { unique: true })
@Index('TGFCOT_I01', ['nunotaorig'], {})
@Entity('TGFCOT', { schema: 'SANKHYA' })
export class TgfcotEntity {
  @Column('int', { primary: true, name: 'NUMCOTACAO' })
  numcotacao: number;

  @Column('datetime', { name: 'DHINIC', nullable: true })
  dhinic: Date | null;

  @Column('datetime', { name: 'DHFINAL', nullable: true })
  dhfinal: Date | null;

  @Column('smallint', { name: 'PESOPRECO', nullable: true })
  pesopreco: number | null;

  @Column('smallint', { name: 'PESOCONDPAG', nullable: true })
  pesocondpag: number | null;

  @Column('smallint', { name: 'PESOTAXAJURO', nullable: true })
  pesotaxajuro: number | null;

  @Column('smallint', { name: 'PESOPRAZOENTREG', nullable: true })
  pesoprazoentreg: number | null;

  @Column('smallint', { name: 'PESOQUALPROD', nullable: true })
  pesoqualprod: number | null;

  @Column('smallint', { name: 'PESOCONFIABFORN', nullable: true })
  pesoconfiabforn: number | null;

  @Column('smallint', { name: 'PESOQUALATEND', nullable: true })
  pesoqualatend: number | null;

  @Column('smallint', { name: 'PESOGARANTIA', nullable: true })
  pesogarantia: number | null;

  @Column('smallint', { name: 'PESOPRAZOMED', nullable: true })
  pesoprazomed: number | null;

  @Column('char', {
    name: 'SITUACAO',
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  situacao: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'GERPEDREAL', length: 1, default: () => "'S'" })
  gerpedreal: string;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('int', { name: 'NUNOTAORIG', nullable: true })
  nunotaorig: number | null;

  @Column('int', { name: 'NUMNOTAORIG', nullable: true })
  numnotaorig: number | null;

  @Column('char', { name: 'LOCALENTREGA', nullable: true, length: 100 })
  localentrega: string | null;

  @Column('char', { name: 'LOCALCOLETA', nullable: true, length: 40 })
  localcoleta: string | null;

  @Column('smallint', { name: 'SEQSCR', nullable: true })
  seqscr: number | null;

  @Column('smallint', { name: 'PESOAVALFORNEC', nullable: true })
  pesoavalfornec: number | null;

  @Column('int', { name: 'CODTIPVENDA', nullable: true })
  codtipvenda: number | null;

  @Column('varchar', { name: 'MODFRETE', nullable: true, length: 1 })
  modfrete: string | null;

  @Column('smallint', { name: 'PRAZOENTREGA', nullable: true })
  prazoentrega: number | null;

  @Column('smallint', { name: 'VALPROPOSTA', nullable: true })
  valproposta: number | null;

  @Column('varchar', { name: 'OBSMOTCANC', nullable: true, length: 255 })
  obsmotcanc: string | null;

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.numcotacao2)
  tgfcabs: TgfcabEntity[];

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfcots)
  @JoinColumn([{ name: 'NUNOTAORIG', referencedColumnName: 'nunota' }])
  nunotaorig2: TgfcabEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfcots)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfcots)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcots)
  @JoinColumn([{ name: 'CODUSUREQ', referencedColumnName: 'codusu' }])
  codusureq: TsiusuEntity;

  @ManyToOne(() => TgfmtcEntity, (tgfmtcEntity) => tgfmtcEntity.tgfcots)
  @JoinColumn([{ name: 'CODMOTCAN', referencedColumnName: 'codigo' }])
  codmotcan: TgfmtcEntity;

  @ManyToOne(() => TgfscrEntity, (tgfscrEntity) => tgfscrEntity.tgfcots)
  @JoinColumn([{ name: 'NUSCR', referencedColumnName: 'nuscr' }])
  nuscr: TgfscrEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfcots)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgfcots)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcots2)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcots3)
  @JoinColumn([{ name: 'CODUSURESP', referencedColumnName: 'codusu' }])
  codusuresp: TsiusuEntity;

  @OneToMany(() => TgffrcEntity, (tgffrcEntity) => tgffrcEntity.numcotacao2)
  tgffrcs: TgffrcEntity[];

  @OneToMany(() => TgfitcEntity, (tgfitcEntity) => tgfitcEntity.numcotacao2)
  tgfitcs: TgfitcEntity[];
}
