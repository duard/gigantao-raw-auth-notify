import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfgruEntity } from './tGFGRU.entity';

@Index(
  'PK_TGFMMS',
  [
    'dtam',
    'codparc',
    'codgrupoprod',
    'codemp',
    'tipmov',
    'grupo',
    'mes',
    'ano',
  ],
  { unique: true },
)
@Entity('TGFMMS', { schema: 'SANKHYA' })
export class TgfmmsEntity {
  @Column('datetime', { primary: true, name: 'DTAM' })
  dtam: Date;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODGRUPOPROD' })
  codgrupoprod: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('char', {
    primary: true,
    name: 'TIPMOV',
    length: 1,
    default: () => "'P'",
  })
  tipmov: string;

  @Column('char', {
    primary: true,
    name: 'GRUPO',
    length: 15,
    default: () => "'-'",
  })
  grupo: string;

  @Column('smallint', { primary: true, name: 'MES' })
  mes: number;

  @Column('smallint', { primary: true, name: 'ANO' })
  ano: number;

  @Column('money', { name: 'VLRMOV' })
  vlrmov: number;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfmms)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfmms)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tgfmms)
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod2: TgfgruEntity;
}
