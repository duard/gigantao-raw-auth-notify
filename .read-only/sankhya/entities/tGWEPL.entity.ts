import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgwendEntity } from './tGWEND.entity';
import { TgwestEntity } from './tGWEST.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgwrplEntity } from './tGWRPL.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index(
  'PK_TGWEPL',
  [
    'idpalete',
    'codemp',
    'codlocal',
    'controle',
    'codend',
    'codprod',
    'codvol',
    'codparc',
  ],
  { unique: true },
)
@Entity('TGWEPL', { schema: 'SANKHYA' })
export class TgweplEntity {
  @Column('int', { primary: true, name: 'IDPALETE' })
  idpalete: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('char', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('int', { primary: true, name: 'CODEND' })
  codend: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('numeric', {
    name: 'QTD',
    nullable: true,
    precision: 13,
    scale: 4,
    default: () => '(0)',
  })
  qtd: number | null;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgwepls)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgwepls)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol2: TgfvolEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwepls)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend2: TgwendEntity;

  @ManyToOne(() => TgwestEntity, (tgwestEntity) => tgwestEntity.tgwepls, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODLOCAL', referencedColumnName: 'codlocal' },
    { name: 'CONTROLE', referencedColumnName: 'controle' },
    { name: 'CODEND', referencedColumnName: 'codend' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
    { name: 'CODVOL', referencedColumnName: 'codvol' },
    { name: 'CODPARC', referencedColumnName: 'codparc' },
  ])
  tgwest: TgwestEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgwepls)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwepls)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgwrplEntity, (tgwrplEntity) => tgwrplEntity.tgwepls)
  @JoinColumn([{ name: 'IDPALETE', referencedColumnName: 'idpalete' }])
  idpalete2: TgwrplEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgwepls)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
