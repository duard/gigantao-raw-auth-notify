import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpctiEntity } from './tFPCTI.entity';

@Index('PK_TFPFCTI', ['codconv', 'codemp', 'codfunc'], { unique: true })
@Index('TFPFCTI_I01', ['codemp', 'codfunc', 'dtinicio'], {})
@Entity('TFPFCTI', { schema: 'SANKHYA' })
export class TfpfctiEntity {
  @Column('int', { primary: true, name: 'CODCONV' })
  codconv: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM' })
  dtfim: Date;

  @Column('char', { name: 'COMPARECEU', length: 1, default: () => "'N'" })
  compareceu: string;

  @Column('char', { name: 'TIPLOCALTRAB', length: 1, default: () => "'0'" })
  tiplocaltrab: string;

  @Column('datetime', { name: 'DTPREVPGTO', nullable: true })
  dtprevpgto: Date | null;

  @Column('char', { name: 'CALCULADO', length: 1, default: () => "'N'" })
  calculado: string;

  @Column('smallint', { name: 'SEQFOLHA', nullable: true })
  seqfolha: number | null;

  @Column('char', { name: 'USADIACARGAHR', length: 1, default: () => "'N'" })
  usadiacargahr: string;

  @Column('char', { name: 'ACEITOUCONV', length: 1, default: () => "'N'" })
  aceitouconv: string;

  @Column('char', {
    name: 'EMAILENV',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  emailenv: string | null;

  @Column('varchar', { name: 'PONTOJORNADA', length: 1, default: () => "'N'" })
  pontojornada: string;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpfctis)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpctiEntity, (tfpctiEntity) => tfpctiEntity.tfpfctis)
  @JoinColumn([{ name: 'CODCONV', referencedColumnName: 'codconv' }])
  codconv2: TfpctiEntity;
}
