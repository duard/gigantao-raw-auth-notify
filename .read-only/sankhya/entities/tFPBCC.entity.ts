import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpieccEntity } from './tFPIECC.entity';

@Index('PK_TFPBCC', ['codicsc', 'dtref', 'codemp', 'codfilial', 'indcomerc'], {
  unique: true,
})
@Entity('TFPBCC', { schema: 'SANKHYA' })
export class TfpbccEntity {
  @Column('smallint', { primary: true, name: 'CODICSC' })
  codicsc: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODFILIAL' })
  codfilial: number;

  @Column('smallint', { primary: true, name: 'INDCOMERC' })
  indcomerc: number;

  @Column('float', { name: 'VRBCCOMPR', nullable: true, precision: 53 })
  vrbccompr: number | null;

  @Column('float', { name: 'VRCPSUSP', nullable: true, precision: 53 })
  vrcpsusp: number | null;

  @Column('float', { name: 'VRRATSUSP', nullable: true, precision: 53 })
  vrratsusp: number | null;

  @Column('float', { name: 'VRSENARSUSP', nullable: true, precision: 53 })
  vrsenarsusp: number | null;

  @ManyToOne(() => TfpieccEntity, (tfpieccEntity) => tfpieccEntity.tfpbccs)
  @JoinColumn([
    { name: 'CODICSC', referencedColumnName: 'codicsc' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFILIAL', referencedColumnName: 'codfilial' },
  ])
  tfpiecc: TfpieccEntity;
}
