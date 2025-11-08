import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpsinEntity } from './tFPSIN.entity';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TFPCPU', ['codemp', 'dtinicio', 'vlrcpu', 'codsind'], {
  unique: true,
})
@Entity('TFPCPU', { schema: 'SANKHYA' })
export class TfpcpuEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('text', { name: 'JUSTIFICATIVA' })
  justificativa: string;

  @Column('float', {
    primary: true,
    name: 'VLRCPU',
    precision: 53,
    default: () => '(0)',
  })
  vlrcpu: number;

  @Column('smallint', { primary: true, name: 'CODSIND', default: () => '(0)' })
  codsind: number;

  @Column('char', { name: 'AJUDACOMP', length: 1, default: () => "'N'" })
  ajudacomp: string;

  @Column('char', { name: 'SUSPCONTRATO', length: 1, default: () => "'N'" })
  suspcontrato: string;

  @Column('int', { name: 'SEQUENCIA' })
  sequencia: number;

  @ManyToOne(() => TfpsinEntity, (tfpsinEntity) => tfpsinEntity.tfpcpus)
  @JoinColumn([{ name: 'CODSIND', referencedColumnName: 'codsind' }])
  codsind2: TfpsinEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tfpcpus)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;
}
