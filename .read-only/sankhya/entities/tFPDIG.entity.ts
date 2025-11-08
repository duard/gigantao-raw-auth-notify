import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TFPDIG', ['codemp', 'codfunc'], { unique: true })
@Entity('TFPDIG', { schema: 'SANKHYA' })
export class TfpdigEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('image', { name: 'DIGITAL01', nullable: true })
  digital01: Buffer | null;

  @Column('image', { name: 'DIGITAL02', nullable: true })
  digital02: Buffer | null;

  @Column('image', { name: 'DIGITAL03', nullable: true })
  digital03: Buffer | null;

  @Column('image', { name: 'DIGITAL04', nullable: true })
  digital04: Buffer | null;

  @Column('image', { name: 'DIGITAL05', nullable: true })
  digital05: Buffer | null;

  @Column('image', { name: 'DIGITAL06', nullable: true })
  digital06: Buffer | null;

  @Column('image', { name: 'DIGITAL07', nullable: true })
  digital07: Buffer | null;

  @Column('image', { name: 'DIGITAL08', nullable: true })
  digital08: Buffer | null;

  @Column('image', { name: 'DIGITAL09', nullable: true })
  digital09: Buffer | null;

  @Column('image', { name: 'DIGITAL10', nullable: true })
  digital10: Buffer | null;

  @Column('char', { name: 'PODEREQ', length: 1 })
  podereq: string;

  @OneToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpdig, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
