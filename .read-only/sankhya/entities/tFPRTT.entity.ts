import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicusEntity } from './tSICUS.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpeveEntity } from './tFPEVE.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcsprjEntity } from './tCSPRJ.entity';

@Index(
  'PK_TFPRTT',
  [
    'codemp',
    'codfunc',
    'referencia',
    'tipfolha',
    'codevento',
    'sequencia',
    'codparc',
    'codcencus',
    'codproj',
  ],
  { unique: true },
)
@Entity('TFPRTT', { schema: 'SANKHYA' })
export class TfprttEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('varchar', { primary: true, name: 'TIPFOLHA', length: 1 })
  tipfolha: string;

  @Column('smallint', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'TIPEVENTO' })
  tipevento: number;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODCENCUS', default: () => '(0)' })
  codcencus: number;

  @Column('int', { primary: true, name: 'CODPROJ', default: () => '(0)' })
  codproj: number;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('float', { name: 'PERCRATEIO', nullable: true, precision: 53 })
  percrateio: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tfprtts)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus2: TsicusEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfprtts)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfprtts)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento2: TfpeveEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfprtts)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tfprtts)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;
}
