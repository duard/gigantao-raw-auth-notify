import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicusEntity } from './tSICUS.entity';
import { TgfsitEntity } from './tGFSIT.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index(
  'PK_TGFRAT',
  ['origem', 'nufin', 'codnat', 'codcencus', 'codproj', 'codsite', 'codparc'],
  {
    unique: true,
  },
)
@Index('TGFRAT_I01', ['nufin'], {})
@Index('TGFRAT_I02', ['codproj', 'origem'], {})
@Index('TGFRAT_I03', ['codsite'], {})
@Entity('TGFRAT', { schema: 'SANKHYA' })
export class TgfratEntity {
  @Column('char', {
    primary: true,
    name: 'ORIGEM',
    length: 1,
    default: () => "'E'",
  })
  origem: string;

  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('int', { primary: true, name: 'CODNAT', default: () => '(0)' })
  codnat: number;

  @Column('int', { primary: true, name: 'CODCENCUS', default: () => '(0)' })
  codcencus: number;

  @Column('int', { primary: true, name: 'CODPROJ', default: () => '(0)' })
  codproj: number;

  @Column('decimal', {
    name: 'PERCRATEIO',
    nullable: true,
    precision: 16,
    scale: 6,
  })
  percrateio: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { primary: true, name: 'CODSITE', default: () => '(0)' })
  codsite: number;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('datetime', {
    name: 'DTALTER',
    nullable: true,
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dtalter: Date | null;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfrats)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus2: TsicusEntity;

  @ManyToOne(() => TgfsitEntity, (tgfsitEntity) => tgfsitEntity.tgfrats)
  @JoinColumn([{ name: 'CODSITE', referencedColumnName: 'codsite' }])
  codsite2: TgfsitEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfrats)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfrats)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb: TcbplaEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfrats)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tgfrats)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato: TcsconEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgfrats)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfrats)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
