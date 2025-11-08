import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpicrcEntity } from './tFPICRC.entity';
import { TfpieccEntity } from './tFPIECC.entity';

@Index('PK_TFPICSC', ['codicsc', 'dtref', 'codemp'], { unique: true })
@Entity('TFPICSC', { schema: 'SANKHYA' })
export class TfpicscEntity {
  @Column('smallint', { primary: true, name: 'CODICSC' })
  codicsc: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { name: 'INDAPURACAO', nullable: true })
  indapuracao: number | null;

  @Column('varchar', { name: 'NRRECARQBASE', nullable: true, length: 40 })
  nrrecarqbase: string | null;

  @Column('smallint', { name: 'INDEXISTINFO', nullable: true })
  indexistinfo: number | null;

  @Column('float', { name: 'VRDESCCP', nullable: true, precision: 53 })
  vrdesccp: number | null;

  @Column('float', { name: 'VRCPSEG', nullable: true, precision: 53 })
  vrcpseg: number | null;

  @Column('varchar', { name: 'CLASSTRIB', nullable: true, length: 2 })
  classtrib: string | null;

  @Column('smallint', { name: 'INDCOOP', nullable: true })
  indcoop: number | null;

  @Column('smallint', { name: 'INDCONSTR', nullable: true })
  indconstr: number | null;

  @Column('smallint', { name: 'INDSUBSTPATR', nullable: true })
  indsubstpatr: number | null;

  @Column('float', { name: 'PERCREDCONTRIB', nullable: true, precision: 53 })
  percredcontrib: number | null;

  @Column('float', { name: 'FATORMES', nullable: true, precision: 53 })
  fatormes: number | null;

  @Column('float', { name: 'FATOR13', nullable: true, precision: 53 })
  fator13: number | null;

  @Column('char', { name: 'INDTRIBFOLHAPISCOFINS', nullable: true, length: 1 })
  indtribfolhapiscofins: string | null;

  @OneToMany(() => TfpicrcEntity, (tfpicrcEntity) => tfpicrcEntity.tfpicsc)
  tfpicrcs: TfpicrcEntity[];

  @OneToMany(() => TfpieccEntity, (tfpieccEntity) => tfpieccEntity.tfpicsc)
  tfpieccs: TfpieccEntity[];
}
