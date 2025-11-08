import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPFTRF', ['codemp', 'codfunc', 'codfatrisco'], { unique: true })
@Entity('TFPFTRF', { schema: 'SANKHYA' })
export class TfpftrfEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('varchar', { primary: true, name: 'CODFATRISCO', length: 10 })
  codfatrisco: string;

  @Column('smallint', { name: 'TPAVAL', nullable: true })
  tpaval: number | null;

  @Column('float', { name: 'INTCONC', nullable: true, precision: 53 })
  intconc: number | null;

  @Column('float', { name: 'LIMTOT', nullable: true, precision: 53 })
  limtot: number | null;

  @Column('smallint', { name: 'UNMED', nullable: true })
  unmed: number | null;

  @Column('varchar', { name: 'TECMEDICAO', nullable: true, length: 40 })
  tecmedicao: string | null;

  @Column('char', { name: 'INSALUBRIDADE', length: 1, default: () => "'N'" })
  insalubridade: string;

  @Column('char', { name: 'PERICULOSIDADE', length: 1, default: () => "'N'" })
  periculosidade: string;

  @Column('char', { name: 'APOSENTESP', length: 1, default: () => "'N'" })
  aposentesp: string;

  @Column('smallint', { name: 'UTILIZAEPI', default: () => '(0)' })
  utilizaepi: number;

  @Column('smallint', { name: 'UTILIZAEPC', default: () => '(0)' })
  utilizaepc: number;

  @Column('char', { name: 'EFICEPC', nullable: true, length: 1 })
  eficepc: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpftrfs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpftrfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
