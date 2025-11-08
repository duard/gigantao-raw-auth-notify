import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiimpEntity } from './tSIIMP.entity';
import { TfptprEntity } from './tFPTPR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPAVI', ['codemp', 'codfunc', 'sequencia'], { unique: true })
@Index('TFPAVI_01', ['dtfimaviso'], {})
@Entity('TFPAVI', { schema: 'SANKHYA' })
export class TfpaviEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { name: 'DTAVISO' })
  dtaviso: Date;

  @Column('smallint', { name: 'TIPAVISO', default: () => '(0)' })
  tipaviso: number;

  @Column('char', { name: 'INICIATIVA', length: 1, default: () => "'E'" })
  iniciativa: string;

  @Column('char', { name: 'TIPREDUCAO', length: 1, default: () => "'J'" })
  tipreducao: string;

  @Column('smallint', { name: 'DIASAVISO', default: () => '(0)' })
  diasaviso: number;

  @Column('datetime', { name: 'DTFIMAVISO' })
  dtfimaviso: Date;

  @Column('datetime', { name: 'DTHOMOLOGA' })
  dthomologa: Date;

  @Column('datetime', { name: 'DTCANCEL', nullable: true })
  dtcancel: Date | null;

  @Column('smallint', { name: 'MOTIVOCANCEL', nullable: true })
  motivocancel: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('datetime', { name: 'DTNOTIFICACAO', nullable: true })
  dtnotificacao: Date | null;

  @Column('float', { name: 'FGTSSALDO', nullable: true, precision: 53 })
  fgtssaldo: number | null;

  @Column('char', { name: 'FGTSMESANTERIOR', length: 1, default: () => "'N'" })
  fgtsmesanterior: string;

  @Column('datetime', { name: 'DTQUITACAO', nullable: true })
  dtquitacao: Date | null;

  @Column('varchar', { name: 'OBSERVACAODET', nullable: true, length: 255 })
  observacaodet: string | null;

  @Column('varchar', { name: 'OBSERVACAOCANC', nullable: true, length: 255 })
  observacaocanc: string | null;

  @Column('smallint', { name: 'INDCUMPRPARC', nullable: true })
  indcumprparc: number | null;

  @Column('smallint', { name: 'DIASAVITRABIND', nullable: true })
  diasavitrabind: number | null;

  @Column('int', { primary: true, name: 'SEQUENCIA', default: () => '(0)' })
  sequencia: number;

  @Column('datetime', { name: 'DTINTERROMPEFER', nullable: true })
  dtinterrompefer: Date | null;

  @Column('datetime', { name: 'DTFIMREMUN', nullable: true })
  dtfimremun: Date | null;

  @Column('smallint', { name: 'INDSITREMUNDESLIG', nullable: true })
  indsitremundeslig: number | null;

  @Column('varchar', { name: 'PVD', nullable: true, length: 1 })
  pvd: string | null;

  @Column('int', { name: 'NUPRT', nullable: true })
  nuprt: number | null;

  @ManyToOne(() => TsiimpEntity, (tsiimpEntity) => tsiimpEntity.tfpavis)
  @JoinColumn([{ name: 'CODREL', referencedColumnName: 'codrel' }])
  codrel: TsiimpEntity;

  @ManyToOne(() => TfptprEntity, (tfptprEntity) => tfptprEntity.tfpavis)
  @JoinColumn([{ name: 'CODTPR', referencedColumnName: 'codtpr' }])
  codtpr: TfptprEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpavis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
