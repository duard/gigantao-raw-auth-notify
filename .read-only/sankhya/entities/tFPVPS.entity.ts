import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpconEntity } from './tFPCON.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index(
  'PK_TFPVPS',
  ['codemp', 'codfunc', 'sequencia', 'codconvenio', 'referencia', 'tipfolha'],
  {
    unique: true,
  },
)
@Entity('TFPVPS', { schema: 'SANKHYA' })
export class TfpvpsEntity {
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

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('float', { name: 'VALORPROVENTO', nullable: true, precision: 53 })
  valorprovento: number | null;

  @Column('char', {
    primary: true,
    name: 'TIPFOLHA',
    length: 1,
    default: () => "'N'",
  })
  tipfolha: string;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpvps)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpconEntity, (tfpconEntity) => tfpconEntity.tfpvps)
  @JoinColumn([{ name: 'CODCONVENIO', referencedColumnName: 'codconvenio' }])
  codconvenio2: TfpconEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpvps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
