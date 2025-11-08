import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpexaEntity } from './tFPEXA.entity';
import { TfpmtbEntity } from './tFPMTB.entity';
import { TfprcoEntity } from './tFPRCO.entity';

@Index('PK_TFPASO', ['nuaso'], { unique: true })
@Index('TFPASO_I01', ['codemp', 'codfunc'], {})
@Entity('TFPASO', { schema: 'SANKHYA' })
export class TfpasoEntity {
  @Column('int', { primary: true, name: 'NUASO' })
  nuaso: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { name: 'DTASO', nullable: true })
  dtaso: Date | null;

  @Column('datetime', { name: 'DTVENCASO', nullable: true })
  dtvencaso: Date | null;

  @Column('smallint', { name: 'TIPASO', nullable: true })
  tipaso: number | null;

  @Column('smallint', { name: 'RESULTADOASO', nullable: true })
  resultadoaso: number | null;

  @Column('varchar', { name: 'MEDICOASO', nullable: true, length: 100 })
  medicoaso: string | null;

  @Column('varchar', { name: 'TELMEDICOASO', nullable: true, length: 15 })
  telmedicoaso: string | null;

  @Column('varchar', { name: 'CRMMEDICOASO', nullable: true, length: 10 })
  crmmedicoaso: string | null;

  @Column('varchar', { name: 'UFCRMMEDASO', nullable: true, length: 2 })
  ufcrmmedaso: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'CODCNES', nullable: true, length: 7 })
  codcnes: string | null;

  @Column('varchar', { name: 'FRMCTTUNIDATEND', nullable: true, length: 100 })
  frmcttunidatend: string | null;

  @Column('varchar', { name: 'EMAILUNIDATEND', nullable: true, length: 100 })
  emailunidatend: string | null;

  @Column('smallint', { name: 'TPEXAME', nullable: true })
  tpexame: number | null;

  @Column('varchar', { name: 'CPFMED', nullable: true, length: 11 })
  cpfmed: string | null;

  @Column('varchar', { name: 'NISMED', nullable: true, length: 11 })
  nismed: string | null;

  @Column('char', { name: 'INDRECUSA', length: 1, default: () => "'N'" })
  indrecusa: string;

  @Column('varchar', { name: 'MEDICOASOMON', nullable: true, length: 100 })
  medicoasomon: string | null;

  @Column('varchar', { name: 'TELMEDICOASOMON', nullable: true, length: 13 })
  telmedicoasomon: string | null;

  @Column('varchar', { name: 'CRMMEDICOASOMON', nullable: true, length: 10 })
  crmmedicoasomon: string | null;

  @Column('varchar', { name: 'UFCRMMEDASOMON', nullable: true, length: 2 })
  ufcrmmedasomon: string | null;

  @Column('varchar', { name: 'CPFMEDMON', nullable: true, length: 11 })
  cpfmedmon: string | null;

  @Column('varchar', { name: 'RECIBOESOCIAL', nullable: true, length: 50 })
  reciboesocial: string | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpasos)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpasos)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TfpexaEntity, (tfpexaEntity) => tfpexaEntity.nuaso2)
  tfpexas: TfpexaEntity[];

  @OneToMany(() => TfpmtbEntity, (tfpmtbEntity) => tfpmtbEntity.nuaso2)
  tfpmtbs: TfpmtbEntity[];

  @OneToMany(() => TfprcoEntity, (tfprcoEntity) => tfprcoEntity.nuaso2)
  tfprcos: TfprcoEntity[];
}
