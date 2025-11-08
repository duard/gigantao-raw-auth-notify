import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TsicusEntity } from './tSICUS.entity';

@Index('PK_TGMCFGI', ['codmeta'], { unique: true })
@Index(
  'TGMCFGI_I01',
  ['dtinic', 'codmeta', 'codemp', 'codparc', 'codcencus', 'codproj'],
  {},
)
@Entity('TGMCFGI', { schema: 'SANKHYA' })
export class TgmcfgiEntity {
  @Column('int', { primary: true, name: 'CODMETA' })
  codmeta: number;

  @Column('smallint', { name: 'CODEMP', default: () => '(0)' })
  codemp: number;

  @Column('int', { name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('int', { name: 'CODCENCUS', default: () => '(0)' })
  codcencus: number;

  @Column('int', { name: 'CODPROJ', default: () => '(0)' })
  codproj: number;

  @Column('datetime', { name: 'DTINIC' })
  dtinic: Date;

  @Column('datetime', { name: 'DTFIM' })
  dtfim: Date;

  @Column('datetime', { name: 'DTALTER', default: () => '(0)' })
  dtalter: Date;

  @Column('int', { name: 'CODCENCUSFIM', nullable: true })
  codcencusfim: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgmcfgis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgmcfgis)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgmcfgis)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgmcfgis)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus2: TsicusEntity;
}
