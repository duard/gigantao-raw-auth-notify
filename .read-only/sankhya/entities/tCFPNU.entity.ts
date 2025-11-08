import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TcfpnuhistEntity } from './tCFPNUHIST.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TCFPNU', ['nupneu'], { unique: true })
@Entity('TCFPNU', { schema: 'SANKHYA' })
export class TcfpnuEntity {
  @Column('int', { primary: true, name: 'NUPNEU' })
  nupneu: number;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('float', { name: 'SULCO', nullable: true, precision: 53 })
  sulco: number | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('int', { name: 'NUNOTACPA', nullable: true })
  nunotacpa: number | null;

  @Column('int', { name: 'ITEMNFCPA', nullable: true })
  itemnfcpa: number | null;

  @Column('varchar', { name: 'NUMEROFOGO', nullable: true, length: 100 })
  numerofogo: string | null;

  @Column('varchar', { name: 'NOMEPOSICAO', nullable: true, length: 100 })
  nomeposicao: string | null;

  @Column('varchar', { name: 'NOMEEIXO', nullable: true, length: 100 })
  nomeeixo: string | null;

  @Column('varchar', { name: 'MARCA', nullable: true, length: 100 })
  marca: string | null;

  @Column('varchar', { name: 'MODELO', nullable: true, length: 100 })
  modelo: string | null;

  @Column('int', { name: 'KMACUM', nullable: true })
  kmacum: number | null;

  @Column('int', { name: 'KMORIG', nullable: true })
  kmorig: number | null;

  @Column('int', { name: 'KMR1', nullable: true })
  kmr1: number | null;

  @Column('int', { name: 'KMR2', nullable: true })
  kmr2: number | null;

  @Column('int', { name: 'KMR3', nullable: true })
  kmr3: number | null;

  @Column('int', { name: 'KMANT', nullable: true })
  kmant: number | null;

  @Column('int', { name: 'ESTOQUE', nullable: true })
  estoque: number | null;

  @Column('int', { name: 'KMINICIAL', nullable: true })
  kminicial: number | null;

  @Column('varchar', { name: 'TIPOEIXO', nullable: true, length: 10 })
  tipoeixo: string | null;

  @Column('int', { name: 'ITEMNFSAI', nullable: true })
  itemnfsai: number | null;

  @Column('int', { name: 'NUNOTASAI', nullable: true })
  nunotasai: number | null;

  @Column('varchar', { name: 'DOT', nullable: true, length: 100 })
  dot: string | null;

  @Column('int', { name: 'QTDREC', nullable: true })
  qtdrec: number | null;

  @Column('int', { name: 'CODBANDARODORIG', nullable: true })
  codbandarodorig: number | null;

  @Column('int', { name: 'CODBANDAROD1', nullable: true })
  codbandarod1: number | null;

  @Column('int', { name: 'CODBANDAROD2', nullable: true })
  codbandarod2: number | null;

  @Column('int', { name: 'CODBANDAROD3', nullable: true })
  codbandarod3: number | null;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcfpnus)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcfpnus)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tcfpnus)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo: TgfveiEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tcfpnus)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal: TgflocEntity;

  @OneToMany(
    () => TcfpnuhistEntity,
    (tcfpnuhistEntity) => tcfpnuhistEntity.nupneu2,
  )
  tcfpnuhists: TcfpnuhistEntity[];
}
