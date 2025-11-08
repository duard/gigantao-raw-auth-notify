import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfppssEntity } from './tFPPSS.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TFPPSF', ['codemp', 'codfunc', 'nuprocesso'], { unique: true })
@Entity('TFPPSF', { schema: 'SANKHYA' })
export class TfppsfEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TfppssEntity, (tfppssEntity) => tfppssEntity.tfppsfs)
  @JoinColumn([{ name: 'NUPROCESSO', referencedColumnName: 'nuprocesso' }])
  nuprocesso2: TfppssEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfppsfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfppsfs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
