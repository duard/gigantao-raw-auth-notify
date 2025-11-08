import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfgruEntity } from './tGFGRU.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index(
  'PK_TGFFAD',
  [
    'codemp',
    'codfunc',
    'nunota',
    'codserv',
    'dtexec',
    'hrinicio',
    'codgrupoprod',
  ],
  { unique: true },
)
@Index('TGFFAD_I01', ['nunota', 'codserv'], {})
@Entity('TGFFAD', { schema: 'SANKHYA' })
export class TgffadEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'CODSERV', default: () => '(0)' })
  codserv: number;

  @Column('datetime', { primary: true, name: 'DTEXEC' })
  dtexec: Date;

  @Column('smallint', { primary: true, name: 'HRINICIO' })
  hrinicio: number;

  @Column('smallint', { name: 'HRFIM' })
  hrfim: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('int', { name: 'MINUTOS', nullable: true })
  minutos: number | null;

  @Column('int', { primary: true, name: 'CODGRUPOPROD', default: () => '(0)' })
  codgrupoprod: number;

  @Column('char', { name: 'TIPLANC', nullable: true, length: 1 })
  tiplanc: string | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgffads)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tgffads)
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod2: TgfgruEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tgffads)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgffads)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
