import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPFCPU', ['codemp', 'codfunc', 'dtinicio', 'nufcpu'], {
  unique: true,
})
@Index('TFPFCPU_I01', ['codemp', 'codfunc', 'seqcpu'], {})
@Entity('TFPFCPU', { schema: 'SANKHYA' })
export class TfpfcpuEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM' })
  dtfim: Date;

  @Column('smallint', { name: 'SEQCPU', nullable: true })
  seqcpu: number | null;

  @Column('float', { name: 'SALBASE', nullable: true, precision: 53 })
  salbase: number | null;

  @Column('float', { name: 'SALBASERED', nullable: true, precision: 53 })
  salbasered: number | null;

  @Column('float', { name: 'HORASSEM', nullable: true, precision: 53 })
  horassem: number | null;

  @Column('float', { name: 'HORASSEMRED', nullable: true, precision: 53 })
  horassemred: number | null;

  @Column('float', { name: 'PERREDCPU', nullable: true, precision: 53 })
  perredcpu: number | null;

  @Column('char', { name: 'AJUDACOMP', length: 1, default: () => "'N'" })
  ajudacomp: string;

  @Column('char', { name: 'SUSPCONTRATO', length: 1, default: () => "'N'" })
  suspcontrato: string;

  @Column('varchar', { name: 'OBSERVACAOMP', nullable: true, length: 255 })
  observacaomp: string | null;

  @Column('datetime', { name: 'DTFINALIZACAO', nullable: true })
  dtfinalizacao: Date | null;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('varchar', { name: 'STATUS', length: 1, default: () => "'O'" })
  status: string;

  @Column('smallint', { name: 'DIFDIAS', default: () => '(0)' })
  difdias: number;

  @Column('int', { primary: true, name: 'NUFCPU' })
  nufcpu: number;

  @Column('int', { name: 'NUFCPUORIG', nullable: true })
  nufcpuorig: number | null;

  @Column('datetime', { name: 'DTINICIOVAL', nullable: true })
  dtinicioval: Date | null;

  @Column('datetime', { name: 'DTFIMVAL', nullable: true })
  dtfimval: Date | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpfcpus)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpfcpus)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpfcpus2)
  @JoinColumn([{ name: 'CODUSUFINALIZACAO', referencedColumnName: 'codusu' }])
  codusufinalizacao: TsiusuEntity;
}
