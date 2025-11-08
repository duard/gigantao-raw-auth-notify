import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgwendEntity } from './tGWEND.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgwtraEntity } from './tGWTRA.entity';

@Index('PK_TGWITR', ['nutransferencia', 'sequencia'], { unique: true })
@Entity('TGWITR', { schema: 'SANKHYA' })
export class TgwitrEntity {
  @Column('int', { primary: true, name: 'NUTRANSFERENCIA' })
  nutransferencia: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('numeric', {
    name: 'QTDORIG',
    nullable: true,
    precision: 13,
    scale: 4,
  })
  qtdorig: number | null;

  @Column('numeric', {
    name: 'QTDDEST',
    nullable: true,
    precision: 13,
    scale: 4,
  })
  qtddest: number | null;

  @Column('char', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgwitrs)
  @JoinColumn([{ name: 'CODVOLDEST', referencedColumnName: 'codvol' }])
  codvoldest: TgfvolEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgwitrs2)
  @JoinColumn([{ name: 'CODVOLORIG', referencedColumnName: 'codvol' }])
  codvolorig: TgfvolEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgwitrs)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal: TgflocEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwitrs)
  @JoinColumn([{ name: 'CODENDDESTINO', referencedColumnName: 'codend' }])
  codenddestino: TgwendEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwitrs2)
  @JoinColumn([{ name: 'CODENDORIGEM', referencedColumnName: 'codend' }])
  codendorigem: TgwendEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwitrs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgwitrs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TgwtraEntity, (tgwtraEntity) => tgwtraEntity.tgwitrs)
  @JoinColumn([
    { name: 'NUTRANSFERENCIA', referencedColumnName: 'nutransferencia' },
  ])
  nutransferencia2: TgwtraEntity;
}
