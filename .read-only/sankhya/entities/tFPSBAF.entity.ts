import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpsbaEntity } from './tFPSBA.entity';

@Index('PK_TFPSBAF', ['codsobreaviso', 'codemp', 'codfunc'], { unique: true })
@Entity('TFPSBAF', { schema: 'SANKHYA' })
export class TfpsbafEntity {
  @Column('int', { primary: true, name: 'CODSOBREAVISO' })
  codsobreaviso: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpsbafs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpsbafs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpsbaEntity, (tfpsbaEntity) => tfpsbaEntity.tfpsbafs)
  @JoinColumn([
    { name: 'CODSOBREAVISO', referencedColumnName: 'codsobreaviso' },
  ])
  codsobreaviso2: TfpsbaEntity;
}
