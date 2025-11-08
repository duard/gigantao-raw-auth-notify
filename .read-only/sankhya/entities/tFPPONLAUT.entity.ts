import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TFPPONLAUT', ['codemp', 'codfunc', 'sequencia'], { unique: true })
@Entity('TFPPONLAUT', { schema: 'SANKHYA' })
export class TfpponlautEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CARGAS', length: 100 })
  cargas: string;

  @Column('datetime', { name: 'DTINI' })
  dtini: Date;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'N'" })
  ativo: string;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpponlauts)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tfpponlauts)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;
}
