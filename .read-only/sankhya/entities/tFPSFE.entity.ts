import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TfpreqEntity } from './tFPREQ.entity';

@Index('PK_TFPSFE', ['codemp', 'codfunc', 'nusolicit', 'dtiniaqui'], {
  unique: true,
})
@Entity('TFPSFE', { schema: 'SANKHYA' })
export class TfpsfeEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('smallint', { primary: true, name: 'NUSOLICIT' })
  nusolicit: number;

  @Column('datetime', { name: 'DHSOLICIT' })
  dhsolicit: Date;

  @Column('varchar', { name: 'STATUS', length: 1 })
  status: string;

  @Column('datetime', { name: 'PREVINICIO' })
  previnicio: Date;

  @Column('smallint', { name: 'DIASSOLICITADOS' })
  diassolicitados: number;

  @Column('varchar', {
    name: 'ADIANTADECTERC',
    length: 1,
    default: () => "'N'",
  })
  adiantadecterc: string;

  @Column('varchar', {
    name: 'ABONOPECUNIARIO',
    length: 1,
    default: () => "'N'",
  })
  abonopecuniario: string;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('datetime', { primary: true, name: 'DTINIAQUI' })
  dtiniaqui: Date;

  @Column('smallint', { name: 'SEQFER', nullable: true })
  seqfer: number | null;

  @Column('smallint', { name: 'DIASABONOPEC', nullable: true })
  diasabonopec: number | null;

  @Column('smallint', { name: 'ID', nullable: true })
  id: number | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpsfes)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsiempEntity)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  empresa: TsiempEntity;

  @ManyToOne(() => TfpreqEntity)
  @JoinColumn([{ name: 'ID', referencedColumnName: 'id' }])
  tfpreq: TfpreqEntity;
}
