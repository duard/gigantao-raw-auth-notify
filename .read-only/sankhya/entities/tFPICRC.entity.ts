import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpicscEntity } from './tFPICSC.entity';

@Index('PK_TFPICRC', ['codicsc', 'dtref', 'codemp', 'tpcr'], { unique: true })
@Entity('TFPICRC', { schema: 'SANKHYA' })
export class TfpicrcEntity {
  @Column('smallint', { primary: true, name: 'CODICSC' })
  codicsc: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'TPCR' })
  tpcr: number;

  @Column('float', { name: 'VRCR', nullable: true, precision: 53 })
  vrcr: number | null;

  @Column('float', { name: 'VRSUSPCR', nullable: true, precision: 53 })
  vrsuspcr: number | null;

  @ManyToOne(() => TfpicscEntity, (tfpicscEntity) => tfpicscEntity.tfpicrcs)
  @JoinColumn([
    { name: 'CODICSC', referencedColumnName: 'codicsc' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
  ])
  tfpicsc: TfpicscEntity;
}
