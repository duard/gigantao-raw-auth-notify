import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfptprEntity } from './tFPTPR.entity';

@Index('PK_TFPREQRESC', ['id'], { unique: true })
@Entity('TFPREQRESC', { schema: 'SANKHYA' })
export class TfpreqrescEntity {
  @Column('smallint', { primary: true, name: 'ID' })
  id: number;

  @Column('char', { name: 'INICIATIVA', nullable: true, length: 1 })
  iniciativa: string | null;

  @Column('datetime', { name: 'DTDEM', nullable: true })
  dtdem: Date | null;

  @Column('smallint', { name: 'TIPAVISO', nullable: true })
  tipaviso: number | null;

  @Column('datetime', { name: 'DTAVISO', nullable: true })
  dtaviso: Date | null;

  @Column('smallint', { name: 'DIASAVISO', nullable: true })
  diasaviso: number | null;

  @Column('smallint', { name: 'INDCUMPRPARC', nullable: true })
  indcumprparc: number | null;

  @Column('varchar', { name: 'DESCRVAGA', nullable: true, length: 60 })
  descrvaga: string | null;

  @Column('int', { name: 'NUVAGAS', nullable: true })
  nuvagas: number | null;

  @Column('varchar', { name: 'RESUMO', nullable: true, length: 3103 })
  resumo: string | null;

  @Column('float', {
    name: 'FAIXASALARIALINICIAL',
    nullable: true,
    precision: 53,
  })
  faixasalarialinicial: number | null;

  @Column('float', {
    name: 'FAIXASALARIALFINAL',
    nullable: true,
    precision: 53,
  })
  faixasalarialfinal: number | null;

  @Column('smallint', { name: 'GRAUINSTR', nullable: true })
  grauinstr: number | null;

  @Column('smallint', { name: 'TEMVAGA', nullable: true, default: () => '(0)' })
  temvaga: number | null;

  @Column('int', { name: 'PERMESES', nullable: true })
  permeses: number | null;

  @Column('varchar', { name: 'TIPVAGA', nullable: true, length: 10 })
  tipvaga: string | null;

  @Column('varchar', { name: 'PVD', nullable: true, length: 1 })
  pvd: string | null;

  @Column('smallint', { name: 'DIASAVISOINDENIZADOS', nullable: true })
  diasavisoindenizados: number | null;

  @ManyToOne(() => TfptprEntity, (tfptprEntity) => tfptprEntity.tfpreqrescs)
  @JoinColumn([{ name: 'CODTPR', referencedColumnName: 'codtpr' }])
  codtpr: TfptprEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpreqrescs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
