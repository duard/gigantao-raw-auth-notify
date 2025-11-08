import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicusEntity } from './tSICUS.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfsitEntity } from './tGFSIT.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TcbplaEntity } from './tCBPLA.entity';

@Index(
  'PK_TCCRAT',
  ['origem', 'nufin', 'codnat', 'codcencus', 'codproj', 'codparc'],
  {
    unique: true,
  },
)
@Index('TCCRAT_I01', ['nufin'], {})
@Entity('TCCRAT', { schema: 'SANKHYA' })
export class TccratEntity {
  @Column('char', { primary: true, name: 'ORIGEM', length: 1 })
  origem: string;

  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('int', { primary: true, name: 'CODCENCUS' })
  codcencus: number;

  @Column('int', { primary: true, name: 'CODPROJ' })
  codproj: number;

  @Column('float', { name: 'PERCRATEIO', nullable: true, precision: 53 })
  percrateio: number | null;

  @Column('char', { name: 'DIGITADO', length: 1 })
  digitado: string;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tccrats)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus2: TsicusEntity;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tccrats)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato: TcsconEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tccrats)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;

  @ManyToOne(() => TgfsitEntity, (tgfsitEntity) => tgfsitEntity.tccrats)
  @JoinColumn([{ name: 'CODSITE', referencedColumnName: 'codsite' }])
  codsite: TgfsitEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tccrats)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tccrats)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tccrats)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb: TcbplaEntity;
}
