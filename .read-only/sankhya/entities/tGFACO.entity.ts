import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfcttEntity } from './tGFCTT.entity';
import { TgfiacEntity } from './tGFIAC.entity';

@Index('PK_TGFACO', ['nuacordo'], { unique: true })
@Entity('TGFACO', { schema: 'SANKHYA' })
export class TgfacoEntity {
  @Column('int', { primary: true, name: 'NUACORDO' })
  nuacordo: number;

  @Column('datetime', { name: 'DTACORDO' })
  dtacordo: Date;

  @Column('datetime', { name: 'DHVAL' })
  dhval: Date;

  @Column('money', { name: 'VLRMINPED', nullable: true })
  vlrminped: number | null;

  @Column('char', { name: 'VIAPEDIDO', length: 1, default: () => "'E'" })
  viapedido: string;

  @Column('char', { name: 'EXIGEAPROVPED', length: 1, default: () => "'S'" })
  exigeaprovped: string;

  @Column('smallint', { name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('char', { name: 'TIPEST', length: 1, default: () => "'E'" })
  tipest: string;

  @Column('varchar', {
    name: 'ANALISARGIRO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  analisargiro: string | null;

  @Column('smallint', {
    name: 'DIASAVISOVALIDADE',
    nullable: true,
    default: () => '(0)',
  })
  diasavisovalidade: number | null;

  @Column('char', {
    name: 'GERARPED',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  gerarped: string | null;

  @Column('varchar', { name: 'SERIENOTA', nullable: true, length: 3 })
  serienota: string | null;

  @Column('char', { name: 'RESSUP', length: 1, default: () => "'N'" })
  ressup: string;

  @Column('char', { name: 'CIF_FOB', nullable: true, length: 1 })
  cifFob: string | null;

  @Column('smallint', { name: 'DIASENTSAI', nullable: true })
  diasentsai: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfacos)
  @JoinColumn([{ name: 'CODUSURESP', referencedColumnName: 'codusu' }])
  codusuresp: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfacos2)
  @JoinColumn([{ name: 'CODUSUCOT', referencedColumnName: 'codusu' }])
  codusucot: TsiusuEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfacos)
  @JoinColumn([{ name: 'CODLOCALORIG', referencedColumnName: 'codlocal' }])
  codlocalorig: TgflocEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfacos)
  @JoinColumn([{ name: 'CODPARCTRANSP', referencedColumnName: 'codparc' }])
  codparctransp: TgfparEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgfacos)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfacos2)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfacos)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfacos)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfacos)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.tgfacos)
  @JoinColumn([
    { name: 'CODPARC', referencedColumnName: 'codparc' },
    { name: 'CODCONTATO', referencedColumnName: 'codcontato' },
  ])
  tgfctt: TgfcttEntity;

  @OneToMany(() => TgfiacEntity, (tgfiacEntity) => tgfiacEntity.nuacordo2)
  tgfiacs: TgfiacEntity[];
}
