import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpieccEntity } from './tFPIECC.entity';

@Index('PK_TFPBAC', ['codicsc', 'dtref', 'codemp', 'codfilial', 'indaquis'], {
  unique: true,
})
@Entity('TFPBAC', { schema: 'SANKHYA' })
export class TfpbacEntity {
  @Column('smallint', { primary: true, name: 'CODICSC' })
  codicsc: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODFILIAL' })
  codfilial: number;

  @Column('smallint', { primary: true, name: 'INDAQUIS' })
  indaquis: number;

  @Column('float', { name: 'VLRAQUIS', nullable: true, precision: 53 })
  vlraquis: number | null;

  @Column('float', { name: 'VRCPDESCPR', nullable: true, precision: 53 })
  vrcpdescpr: number | null;

  @Column('float', { name: 'VRCPNRET', nullable: true, precision: 53 })
  vrcpnret: number | null;

  @Column('float', { name: 'VRRATNRET', nullable: true, precision: 53 })
  vrratnret: number | null;

  @Column('float', { name: 'VRSENARNRET', nullable: true, precision: 53 })
  vrsenarnret: number | null;

  @Column('float', { name: 'VRCPCALCPR', nullable: true, precision: 53 })
  vrcpcalcpr: number | null;

  @Column('float', { name: 'VRRATDESCPR', nullable: true, precision: 53 })
  vrratdescpr: number | null;

  @Column('float', { name: 'VRRATCALCPR', nullable: true, precision: 53 })
  vrratcalcpr: number | null;

  @Column('float', { name: 'VRSENARDESC', nullable: true, precision: 53 })
  vrsenardesc: number | null;

  @Column('float', { name: 'VRSENARCALC', nullable: true, precision: 53 })
  vrsenarcalc: number | null;

  @ManyToOne(() => TfpieccEntity, (tfpieccEntity) => tfpieccEntity.tfpbacs)
  @JoinColumn([
    { name: 'CODICSC', referencedColumnName: 'codicsc' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFILIAL', referencedColumnName: 'codfilial' },
  ])
  tfpiecc: TfpieccEntity;
}
