import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpieccEntity } from './tFPIECC.entity';

@Index('PK_TFPICEC', ['codicsc', 'dtref', 'codemp', 'codfilial', 'tpcr'], {
  unique: true,
})
@Entity('TFPICEC', { schema: 'SANKHYA' })
export class TfpicecEntity {
  @Column('smallint', { primary: true, name: 'CODICSC' })
  codicsc: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODFILIAL' })
  codfilial: number;

  @Column('int', { primary: true, name: 'TPCR' })
  tpcr: number;

  @Column('float', { name: 'VRCR', nullable: true, precision: 53 })
  vrcr: number | null;

  @Column('float', { name: 'VRSUSPCR', nullable: true, precision: 53 })
  vrsuspcr: number | null;

  @ManyToOne(() => TfpieccEntity, (tfpieccEntity) => tfpieccEntity.tfpicecs)
  @JoinColumn([
    { name: 'CODICSC', referencedColumnName: 'codicsc' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFILIAL', referencedColumnName: 'codfilial' },
  ])
  tfpiecc: TfpieccEntity;
}
