import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgwendEntity } from './tGWEND.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index(
  'PK_TGWCTE',
  [
    'codemp',
    'codprod',
    'codlocal',
    'controle',
    'codparc',
    'codend',
    'dtcontagem',
  ],
  { unique: true },
)
@Index('TGWCTE_I02', ['codend', 'codprod'], {})
@Entity('TGWCTE', { schema: 'SANKHYA' })
export class TgwcteEntity {
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

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODEND' })
  codend: number;

  @Column('datetime', { primary: true, name: 'DTCONTAGEM' })
  dtcontagem: Date;

  @Column('decimal', {
    name: 'ESTOQUE',
    precision: 13,
    scale: 4,
    default: () => '(0)',
  })
  estoque: number;

  @Column('decimal', {
    name: 'RESERVADO',
    nullable: true,
    precision: 13,
    scale: 4,
    default: () => '(0)',
  })
  reservado: number | null;

  @Column('float', { name: 'ESTMIN', precision: 53, default: () => '(0)' })
  estmin: number;

  @Column('float', { name: 'ESTMAX', precision: 53, default: () => '(0)' })
  estmax: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 25 })
  codbarra: string | null;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'P'" })
  tipo: string;

  @Column('smallint', { name: 'ATUALESTOQUE', default: () => '(0)' })
  atualestoque: number;

  @Column('datetime', { name: 'DTATUALEST', nullable: true })
  dtatualest: Date | null;

  @Column('varchar', { name: 'EFETIVAEST', length: 1, default: () => "'N'" })
  efetivaest: string;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwctes)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgwctes)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwctes)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend2: TgwendEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgwctes)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgwctes)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwctes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgwctes)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgwctes2)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc3: TgfparEntity;
}
