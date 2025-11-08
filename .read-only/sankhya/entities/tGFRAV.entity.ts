import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicusEntity } from './tSICUS.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfsitEntity } from './tGFSIT.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TcbplaEntity } from './tCBPLA.entity';

@Index(
  'PK_TGFRAV',
  [
    'origem',
    'nufin',
    'codnat',
    'codcencus',
    'codproj',
    'codsite',
    'codparc',
    'codveiculo',
  ],
  { unique: true },
)
@Index('TGFRAV_I01', ['nufin'], {})
@Index('TGFRAV_I02', ['codveiculo'], {})
@Entity('TGFRAV', { schema: 'SANKHYA' })
export class TgfravEntity {
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

  @Column('float', { name: 'PERCRATEIO', precision: 53 })
  percrateio: number;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { primary: true, name: 'CODSITE', default: () => '(0)' })
  codsite: number;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODVEICULO', default: () => '(0)' })
  codveiculo: number;

  @Column('char', { name: 'TIPOAFERICAO', length: 1, default: () => "'N'" })
  tipoafericao: string;

  @Column('float', { name: 'AFERICAO', precision: 53, default: () => '(0)' })
  afericao: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfravs)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus2: TsicusEntity;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tgfravs)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato: TcsconEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfravs)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;

  @ManyToOne(() => TgfsitEntity, (tgfsitEntity) => tgfsitEntity.tgfravs)
  @JoinColumn([{ name: 'CODSITE', referencedColumnName: 'codsite' }])
  codsite2: TgfsitEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfravs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgfravs)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfravs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgfravs)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo2: TgfveiEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfravs)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb: TcbplaEntity;
}
