import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgaculEntity } from './tGACUL.entity';
import { TgaareEntity } from './tGAARE.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgasafEntity } from './tGASAF.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfgruEntity } from './tGFGRU.entity';

@Index(
  'PK_TGAINS',
  ['codparc', 'codsaf', 'seqplanej', 'codgrupoprod', 'codprodins', 'codvol'],
  {
    unique: true,
  },
)
@Entity('TGAINS', { schema: 'SANKHYA' })
export class TgainsEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODSAF' })
  codsaf: number;

  @Column('int', { primary: true, name: 'CODGRUPOPROD' })
  codgrupoprod: number;

  @Column('int', { primary: true, name: 'CODPRODINS' })
  codprodins: number;

  @Column('char', { primary: true, name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('float', { name: 'QTDUNIT', precision: 53 })
  qtdunit: number;

  @Column('float', { name: 'QTDTOT', precision: 53 })
  qtdtot: number;

  @Column('float', { name: 'VLRUNIT', precision: 53 })
  vlrunit: number;

  @Column('float', { name: 'VLRTOT', precision: 53 })
  vlrtot: number;

  @Column('char', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('smallint', { name: 'CODTIPVENDA' })
  codtipvenda: number;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('int', { name: 'AREAPLANTIO', nullable: true })
  areaplantio: number | null;

  @Column('smallint', {
    primary: true,
    name: 'SEQPLANEJ',
    default: () => '(0)',
  })
  seqplanej: number;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgains)
  @JoinColumn([{ name: 'CODPRODINS', referencedColumnName: 'codprod' }])
  codprodins2: TgfproEntity;

  @ManyToOne(() => TgaculEntity, (tgaculEntity) => tgaculEntity.tgains)
  @JoinColumn([
    { name: 'CODPARC', referencedColumnName: 'codparc' },
    { name: 'CODSAF', referencedColumnName: 'codsaf' },
    { name: 'SEQPLANEJ', referencedColumnName: 'seqplanej' },
  ])
  tgacul: TgaculEntity;

  @ManyToOne(() => TgaareEntity, (tgaareEntity) => tgaareEntity.tgains)
  @JoinColumn([
    { name: 'CODPARC', referencedColumnName: 'codparc' },
    { name: 'CODAREA', referencedColumnName: 'codarea' },
  ])
  tgaare: TgaareEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgains2)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgains)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgasafEntity, (tgasafEntity) => tgasafEntity.tgains)
  @JoinColumn([{ name: 'CODSAF', referencedColumnName: 'codsaf' }])
  codsaf2: TgasafEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgains)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgains)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol2: TgfvolEntity;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tgains)
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod2: TgfgruEntity;
}
