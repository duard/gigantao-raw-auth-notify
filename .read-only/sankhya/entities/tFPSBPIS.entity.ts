import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TfpieccEntity } from './tFPIECC.entity';

@Index('PK_TFPSBPIS', ['codicsc', 'dtref', 'codemp', 'codfilial'], {
  unique: true,
})
@Entity('TFPSBPIS', { schema: 'SANKHYA' })
export class TfpsbpisEntity {
  @Column('smallint', { primary: true, name: 'CODICSC' })
  codicsc: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODFILIAL' })
  codfilial: number;

  @Column('float', { name: 'VRBCPISPASEP', nullable: true, precision: 53 })
  vrbcpispasep: number | null;

  @Column('float', { name: 'VRBCPISPASEPSUSP', nullable: true, precision: 53 })
  vrbcpispasepsusp: number | null;

  @OneToOne(() => TfpieccEntity, (tfpieccEntity) => tfpieccEntity.tfpsbpis, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODICSC', referencedColumnName: 'codicsc' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFILIAL', referencedColumnName: 'codfilial' },
  ])
  tfpiecc: TfpieccEntity;
}
