import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfphsaEntity } from './tFPHSA.entity';

@Index('PK_TFPHSAF', ['codsobreaviso', 'codemp', 'codfunc'], { unique: true })
@Entity('TFPHSAF', { schema: 'SANKHYA' })
export class TfphsafEntity {
  @Column('int', { primary: true, name: 'CODSOBREAVISO' })
  codsobreaviso: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfphsafs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfphsafs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfphsaEntity, (tfphsaEntity) => tfphsaEntity.tfphsafs)
  @JoinColumn([
    { name: 'CODSOBREAVISO', referencedColumnName: 'codsobreaviso' },
  ])
  codsobreaviso2: TfphsaEntity;
}
