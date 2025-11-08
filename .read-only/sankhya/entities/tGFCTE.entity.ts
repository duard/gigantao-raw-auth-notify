import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index(
  'PK_TGFCTE',
  [
    'dtcontagem',
    'codemp',
    'codlocal',
    'codprod',
    'controle',
    'codvol',
    'codparc',
    'tipo',
    'sequencia',
  ],
  { unique: true },
)
@Entity('TGFCTE', { schema: 'SANKHYA' })
export class TgfcteEntity {
  @Column('datetime', { primary: true, name: 'DTCONTAGEM' })
  dtcontagem: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('float', { name: 'QTDEST', nullable: true, precision: 53 })
  qtdest: number | null;

  @Column('char', {
    primary: true,
    name: 'CODVOL',
    length: 2,
    default: () => "'0'",
  })
  codvol: string;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('char', {
    primary: true,
    name: 'TIPO',
    length: 1,
    default: () => "'P'",
  })
  tipo: string;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @Column('varchar', { name: 'NOMEARQBOMI', nullable: true, length: 60 })
  nomearqbomi: string | null;

  @Column('datetime', { name: 'DHCONFBOMI', nullable: true })
  dhconfbomi: Date | null;

  @Column('varchar', { name: 'ERROCONFBOMI', nullable: true, length: 100 })
  erroconfbomi: string | null;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('float', { name: 'QTDESTUNCAD', nullable: true, precision: 53 })
  qtdestuncad: number | null;

  @Column('int', { name: 'NUIVT', nullable: true })
  nuivt: number | null;

  @Column('float', { name: 'PESAGEM', nullable: true, precision: 53 })
  pesagem: number | null;

  @Column('datetime', { name: 'DTFABRICACAO', nullable: true })
  dtfabricacao: Date | null;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfctes)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfctes)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol2: TgfvolEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfctes)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfctes)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfctes)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
