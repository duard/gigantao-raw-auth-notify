import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';
import { TcaparEntity } from './tCAPAR.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index(
  'PK_TCAHPA',
  ['codemp', 'codano', 'codcur', 'codser', 'parcela', 'dtvenc', 'codalu'],
  {
    unique: true,
  },
)
@Index('TCAHPA_I01', ['nufin'], {})
@Entity('TCAHPA', { schema: 'SANKHYA' })
export class TcahpaEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODANO' })
  codano: number;

  @Column('char', { primary: true, name: 'CODCUR', length: 15 })
  codcur: string;

  @Column('char', { primary: true, name: 'CODSER', length: 2 })
  codser: string;

  @Column('char', { primary: true, name: 'PARCELA', length: 2 })
  parcela: string;

  @Column('datetime', { primary: true, name: 'DTVENC' })
  dtvenc: Date;

  @Column('int', { primary: true, name: 'CODALU' })
  codalu: number;

  @Column('int', { name: 'NUFIN' })
  nufin: number;

  @Column('decimal', {
    name: 'PERCDESC',
    nullable: true,
    precision: 15,
    scale: 4,
  })
  percdesc: number | null;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tcahpas)
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;

  @ManyToOne(() => TcaparEntity, (tcaparEntity) => tcaparEntity.tcahpas)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODANO', referencedColumnName: 'codano' },
    { name: 'CODCUR', referencedColumnName: 'codcur' },
    { name: 'CODSER', referencedColumnName: 'codser' },
    { name: 'PARCELA', referencedColumnName: 'parcela' },
  ])
  tcapar: TcaparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcahpas)
  @JoinColumn([{ name: 'CODALU', referencedColumnName: 'codparc' }])
  codalu2: TgfparEntity;
}
