import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpconEntity } from './tFPCON.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpfunEntity } from './tFPFUN.entity';

@Index(
  'PK_TFPPLS',
  ['codemp', 'codfunc', 'sequencia', 'codconvenio', 'referencia'],
  {
    unique: true,
  },
)
@Entity('TFPPLS', { schema: 'SANKHYA' })
export class TfpplsEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODCONVENIO' })
  codconvenio: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('datetime', { name: 'REFERENCIAFIM', nullable: true })
  referenciafim: Date | null;

  @Column('smallint', { name: 'TABFAIXA', nullable: true })
  tabfaixa: number | null;

  @Column('smallint', { name: 'CODFAIXA', nullable: true })
  codfaixa: number | null;

  @Column('float', {
    name: 'PARTICIPACAO',
    precision: 53,
    default: () => '(0)',
  })
  participacao: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODFAIXAPROVENTO', nullable: true })
  codfaixaprovento: number | null;

  @ManyToOne(() => TfpconEntity, (tfpconEntity) => tfpconEntity.tfppls)
  @JoinColumn([{ name: 'CODCONVENIO', referencedColumnName: 'codconvenio' }])
  codconvenio2: TfpconEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfppls)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfppls)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
