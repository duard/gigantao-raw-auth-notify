import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TsicidEntity } from './tSICID.entity';
import { TsiendEntity } from './tSIEND.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPEST', ['codemp', 'codfunc'], { unique: true })
@Entity('TFPEST', { schema: 'SANKHYA' })
export class TfpestEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('char', { name: 'NATESTAGIO', nullable: true, length: 1 })
  natestagio: string | null;

  @Column('char', { name: 'NIVESTAGIO', nullable: true, length: 1 })
  nivestagio: string | null;

  @Column('varchar', { name: 'AREAATUACAO', nullable: true, length: 50 })
  areaatuacao: string | null;

  @Column('varchar', { name: 'NRAPOL', nullable: true, length: 30 })
  nrapol: string | null;

  @Column('float', { name: 'VLRBOLSA', nullable: true, precision: 53 })
  vlrbolsa: number | null;

  @Column('datetime', { name: 'DTPREVTERM', nullable: true })
  dtprevterm: Date | null;

  @Column('varchar', { name: 'CNPJINSTENSINO', nullable: true, length: 14 })
  cnpjinstensino: string | null;

  @Column('varchar', { name: 'NMRAZAOINSTENS', nullable: true, length: 115 })
  nmrazaoinstens: string | null;

  @Column('varchar', { name: 'NRLOGRADINSTENS', nullable: true, length: 10 })
  nrlogradinstens: string | null;

  @Column('varchar', { name: 'CEPINSTENS', nullable: true, length: 8 })
  cepinstens: string | null;

  @Column('varchar', { name: 'CNPJAGTINTEG', nullable: true, length: 14 })
  cnpjagtinteg: string | null;

  @Column('varchar', { name: 'NMRAZAOAGTINTEG', nullable: true, length: 115 })
  nmrazaoagtinteg: string | null;

  @Column('varchar', { name: 'NRLOGRADAGTINTEG', nullable: true, length: 10 })
  nrlogradagtinteg: string | null;

  @Column('varchar', { name: 'CEPAGTINTEG', nullable: true, length: 8 })
  cepagtinteg: string | null;

  @Column('varchar', { name: 'CPFSUPERVISOR', nullable: true, length: 11 })
  cpfsupervisor: string | null;

  @Column('varchar', { name: 'NMSUPERVISOR', nullable: true, length: 60 })
  nmsupervisor: string | null;

  @Column('datetime', {
    name: 'DHALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dhalter: Date | null;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tfpests)
  @JoinColumn([{ name: 'CODCIDINSTENS', referencedColumnName: 'codcid' }])
  codcidinstens: TsicidEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tfpests2)
  @JoinColumn([{ name: 'CODCIDAGTINTEG', referencedColumnName: 'codcid' }])
  codcidagtinteg: TsicidEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.tfpests)
  @JoinColumn([{ name: 'CODENDINSTENS', referencedColumnName: 'codend' }])
  codendinstens: TsiendEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.tfpests)
  @JoinColumn([{ name: 'CODBAIINSTENS', referencedColumnName: 'codbai' }])
  codbaiinstens: TsibaiEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.tfpests2)
  @JoinColumn([{ name: 'CODBAIAGTINTEG', referencedColumnName: 'codbai' }])
  codbaiagtinteg: TsibaiEntity;

  @OneToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpest)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.tfpests2)
  @JoinColumn([{ name: 'CODENDAGTINTEG', referencedColumnName: 'codend' }])
  codendagtinteg: TsiendEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpests)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
