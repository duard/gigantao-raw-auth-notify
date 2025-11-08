import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfcoEntity } from './tFPFCO.entity';

@Index('PK_TFPREQACS', ['id'], { unique: true })
@Entity('TFPREQACS', { schema: 'SANKHYA' })
export class TfpreqacsEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', {
    name: 'DHSOLICIT',
    nullable: true,
    default: () => 'getdate()',
  })
  dhsolicit: Date | null;

  @Column('char', {
    name: 'STATUS',
    nullable: true,
    length: 1,
    default: () => "'P'",
  })
  status: string | null;

  @Column('int', { name: 'CARGO', nullable: true })
  cargo: number | null;

  @Column('int', { name: 'CARGOANTIGO', nullable: true })
  cargoantigo: number | null;

  @Column('int', { name: 'CODHISTOCORCAR', nullable: true })
  codhistocorcar: number | null;

  @Column('varchar', { name: 'DESCRHISTOCORCAR', nullable: true, length: 200 })
  descrhistocorcar: string | null;

  @Column('float', { name: 'SALARIO', nullable: true, precision: 53 })
  salario: number | null;

  @Column('float', { name: 'SALARIOANTIGO', nullable: true, precision: 53 })
  salarioantigo: number | null;

  @Column('int', { name: 'CODHISTOCORSAL', nullable: true })
  codhistocorsal: number | null;

  @Column('varchar', { name: 'DESCRHISTOCORSAL', nullable: true, length: 200 })
  descrhistocorsal: string | null;

  @Column('datetime', { name: 'DTEFETIVACAO', nullable: true })
  dtefetivacao: Date | null;

  @Column('varchar', { name: 'EFETIVADO', nullable: true, length: 1 })
  efetivado: string | null;

  @Column('varchar', { name: 'DESCRHISTOCORFUN', nullable: true, length: 200 })
  descrhistocorfun: string | null;

  @Column('int', { name: 'CODHISTOCORFUN', nullable: true })
  codhistocorfun: number | null;

  @ManyToOne(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.tfpreqacs)
  @JoinColumn([{ name: 'FUNCAO', referencedColumnName: 'codfuncao' }])
  funcao: TfpfcoEntity;

  @ManyToOne(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.tfpreqacs2)
  @JoinColumn([{ name: 'FUNCAOANTIGA', referencedColumnName: 'codfuncao' }])
  funcaoantiga: TfpfcoEntity;
}
