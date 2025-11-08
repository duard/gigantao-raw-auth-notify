import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfeacEntity } from './tGFEAC.entity';
import { TgfeloEntity } from './tGFELO.entity';
import { TgfeprEntity } from './tGFEPR.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfstaEntity } from './tGFSTA.entity';
import { TgpacoEntity } from './tGPACO.entity';
import { TgpcabEntity } from './tGPCAB.entity';
import { TgpfluEntity } from './tGPFLU.entity';

@Index('PK_TGFETA', ['codetapa'], { unique: true })
@Index('TGFETA_I01', ['nomeetapa'], {})
@Index('TGFETA_I02', ['seqotica'], {})
@Index('TGFETA_I03', ['codetapamp'], {})
@Index('TGFETA_I04', ['codetapaprinc'], {})
@Entity('TGFETA', { schema: 'SANKHYA' })
export class TgfetaEntity {
  @Column('int', { primary: true, name: 'CODETAPA', default: () => '(0)' })
  codetapa: number;

  @Column('char', { name: 'NOMEETAPA', length: 40 })
  nomeetapa: string;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('smallint', { name: 'TOPENTRADA', nullable: true })
  topentrada: number | null;

  @Column('smallint', { name: 'TOPSAIDA', nullable: true })
  topsaida: number | null;

  @Column('smallint', { name: 'TOPDEVMP', nullable: true })
  topdevmp: number | null;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'I'" })
  tipo: string;

  @Column('int', { name: 'SEQOTICA', nullable: true })
  seqotica: number | null;

  @Column('char', { name: 'PENDENTEENT', length: 1, default: () => "'N'" })
  pendenteent: string;

  @Column('char', { name: 'PENDENTESAI', length: 1, default: () => "'N'" })
  pendentesai: string;

  @Column('char', { name: 'USALOCENTORIGPA', length: 1, default: () => "'N'" })
  usalocentorigpa: string;

  @Column('char', { name: 'USALOCENTDESTPA', length: 1, default: () => "'N'" })
  usalocentdestpa: string;

  @Column('char', { name: 'USALOCSAIORIGPA', length: 1, default: () => "'N'" })
  usalocsaiorigpa: string;

  @Column('char', { name: 'USALOCSAIDESTPA', length: 1, default: () => "'N'" })
  usalocsaidestpa: string;

  @Column('varchar', { name: 'LOCALORIGENT', nullable: true, length: 1 })
  localorigent: string | null;

  @Column('varchar', { name: 'LOCALORIGSAI', nullable: true, length: 1 })
  localorigsai: string | null;

  @Column('smallint', { name: 'CODEMPORIG', nullable: true })
  codemporig: number | null;

  @Column('smallint', { name: 'CODEMPDEST', nullable: true })
  codempdest: number | null;

  @Column('varchar', { name: 'AJUSTARMPS', length: 1, default: () => "'N'" })
  ajustarmps: string;

  @Column('int', { name: 'CODETAPAMP', nullable: true })
  codetapamp: number | null;

  @Column('smallint', { name: 'TOPPRODUCAO', nullable: true })
  topproducao: number | null;

  @Column('varchar', { name: 'VALIDAWMS', length: 1, default: () => "'N'" })
  validawms: string;

  @Column('varchar', { name: 'GERARAMOSTRA', length: 1, default: () => "'N'" })
  geraramostra: string;

  @Column('int', { name: 'CODETAPAPRINC', nullable: true })
  codetapaprinc: number | null;

  @Column('char', { name: 'USALOCETAPAORIG', length: 1, default: () => "'N'" })
  usalocetapaorig: string;

  @Column('char', { name: 'PERMALTQTDPROD', length: 1, default: () => "'N'" })
  permaltqtdprod: string;

  @Column('char', { name: 'ATUALESTINDPA', length: 1, default: () => "'N'" })
  atualestindpa: string;

  @Column('char', { name: 'SUBMPETPPRINC', length: 1, default: () => "'N'" })
  submpetpprinc: string;

  @OneToMany(() => TgfeacEntity, (tgfeacEntity) => tgfeacEntity.codetapa2)
  tgfeacs: TgfeacEntity[];

  @OneToMany(() => TgfeloEntity, (tgfeloEntity) => tgfeloEntity.codetapa2)
  tgfelos: TgfeloEntity[];

  @OneToMany(() => TgfeprEntity, (tgfeprEntity) => tgfeprEntity.codetapa2)
  tgfeprs: TgfeprEntity[];

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfetas)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TgfetaEntity, (tgfetaEntity) => tgfetaEntity.tgfetas)
  @JoinColumn([{ name: 'CODETAPAMP', referencedColumnName: 'codetapa' }])
  codetapamp2: TgfetaEntity;

  @OneToMany(() => TgfetaEntity, (tgfetaEntity) => tgfetaEntity.codetapamp2)
  tgfetas: TgfetaEntity[];

  @ManyToOne(() => TgfetaEntity, (tgfetaEntity) => tgfetaEntity.tgfetas2)
  @JoinColumn([{ name: 'CODETAPAPRINC', referencedColumnName: 'codetapa' }])
  codetapaprinc2: TgfetaEntity;

  @OneToMany(() => TgfetaEntity, (tgfetaEntity) => tgfetaEntity.codetapaprinc2)
  tgfetas2: TgfetaEntity[];

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfetas)
  @JoinColumn([{ name: 'CODLOCALENTDEST', referencedColumnName: 'codlocal' }])
  codlocalentdest: TgflocEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfetas2)
  @JoinColumn([{ name: 'CODLOCALENTORIG', referencedColumnName: 'codlocal' }])
  codlocalentorig: TgflocEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfetas3)
  @JoinColumn([{ name: 'CODLOCALSAIORIG', referencedColumnName: 'codlocal' }])
  codlocalsaiorig: TgflocEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfetas4)
  @JoinColumn([{ name: 'CODLOCALSAIDEST', referencedColumnName: 'codlocal' }])
  codlocalsaidest: TgflocEntity;

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.codetapa)
  tgfites: TgfiteEntity[];

  @OneToMany(() => TgfstaEntity, (tgfstaEntity) => tgfstaEntity.codetapa2)
  tgfstas: TgfstaEntity[];

  @OneToMany(() => TgpacoEntity, (tgpacoEntity) => tgpacoEntity.codetapa)
  tgpacos: TgpacoEntity[];

  @OneToMany(() => TgpcabEntity, (tgpcabEntity) => tgpcabEntity.codetapafinal)
  tgpcabs: TgpcabEntity[];

  @OneToMany(() => TgpfluEntity, (tgpfluEntity) => tgpfluEntity.codetapadest2)
  tgpflus: TgpfluEntity[];

  @OneToMany(() => TgpfluEntity, (tgpfluEntity) => tgpfluEntity.codetapaorig2)
  tgpflus2: TgpfluEntity[];
}
