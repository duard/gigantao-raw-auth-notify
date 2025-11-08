import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TFPAEN', ['id'], { unique: true })
@Entity('TFPAEN', { schema: 'SANKHYA' })
export class TfpaenEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('datetime', { name: 'DHSOLICIT' })
  dhsolicit: Date;

  @Column('int', { name: 'CODEND', nullable: true })
  codend: number | null;

  @Column('varchar', { name: 'NUMEND', nullable: true, length: 6 })
  numend: string | null;

  @Column('varchar', { name: 'COMPLEMENTO', nullable: true, length: 30 })
  complemento: string | null;

  @Column('smallint', { name: 'CODBAI', nullable: true })
  codbai: number | null;

  @Column('smallint', { name: 'CODCID', nullable: true })
  codcid: number | null;

  @Column('varchar', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('varchar', { name: 'STATUS', length: 1, default: () => "'P'" })
  status: string;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpaens)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
