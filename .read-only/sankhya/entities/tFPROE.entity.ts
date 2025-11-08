import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPROE', ['codemp', 'codfunc', 'sequencia'], { unique: true })
@Entity('TFPROE', { schema: 'SANKHYA' })
export class TfproeEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CGCCPF', nullable: true, length: 14 })
  cgccpf: string | null;

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('datetime', { name: 'DTDEM', nullable: true })
  dtdem: Date | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfproes)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfproes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
