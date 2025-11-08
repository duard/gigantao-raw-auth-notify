import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpapufaeEntity } from './tFPAPUFAE.entity';
import { TfpbiodmpEntity } from './tFPBIODMP.entity';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TFPESCFAE', ['codescala'], { unique: true })
@Index(
  'TFPESCFAE_IX01',
  [
    'alocacaoid',
    'esrano',
    'esrmes',
    'esrdia',
    'horarioinicio',
    'escalasiglasid',
    'escalaservicoid',
  ],
  {},
)
@Index('TFPESCFAE_IX02', ['cpf', 'ativo', 'horarioinicio'], {})
@Index('TFPESCFAE_IX03', ['conferido', 'horarioinicio'], {})
@Index('TFPESCFAE_IX04', ['ativo', 'horarioinicio'], {})
@Entity('TFPESCFAE', { schema: 'SANKHYA' })
export class TfpescfaeEntity {
  @Column('int', { primary: true, name: 'CODESCALA' })
  codescala: number;

  @Column('varchar', { name: 'ESCALASERVICOID', length: 30 })
  escalaservicoid: string;

  @Column('smallint', { name: 'ESRANO' })
  esrano: number;

  @Column('smallint', { name: 'ESRMES' })
  esrmes: number;

  @Column('smallint', { name: 'ESRDIA' })
  esrdia: number;

  @Column('datetime', { name: 'HORARIOINICIO' })
  horarioinicio: Date;

  @Column('datetime', { name: 'HORARIOFIM', nullable: true })
  horariofim: Date | null;

  @Column('datetime', { name: 'HORARIOINICIOC', nullable: true })
  horarioinicioc: Date | null;

  @Column('datetime', { name: 'HORARIOFIMC', nullable: true })
  horariofimc: Date | null;

  @Column('smallint', { name: 'ESRTIPO', nullable: true })
  esrtipo: number | null;

  @Column('datetime', { name: 'DATACAD', nullable: true })
  datacad: Date | null;

  @Column('smallint', { name: 'ATIVO' })
  ativo: number;

  @Column('smallint', { name: 'PREENCHIDO', nullable: true })
  preenchido: number | null;

  @Column('int', { name: 'ALOCACAOID' })
  alocacaoid: number;

  @Column('varchar', { name: 'ESCALASIGLASID', length: 2 })
  escalasiglasid: string;

  @Column('int', { name: 'USUARIOCAD', nullable: true })
  usuariocad: number | null;

  @Column('datetime', { name: 'DATAHORACAD', nullable: true })
  datahoracad: Date | null;

  @Column('int', { name: 'USUARIOALTER', nullable: true })
  usuarioalter: number | null;

  @Column('datetime', { name: 'DATAHORAALTER', nullable: true })
  datahoraalter: Date | null;

  @Column('char', { name: 'ESRTIPOPLANTAO', nullable: true, length: 1 })
  esrtipoplantao: string | null;

  @Column('smallint', { name: 'TIPOPLANTAOID', nullable: true })
  tipoplantaoid: number | null;

  @Column('int', { name: 'OCORRENCIAID', nullable: true })
  ocorrenciaid: number | null;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('char', { name: 'CONFERIDO', nullable: true, length: 1 })
  conferido: string | null;

  @OneToMany(
    () => TfpapufaeEntity,
    (tfpapufaeEntity) => tfpapufaeEntity.codescala2,
  )
  tfpapufaes: TfpapufaeEntity[];

  @OneToMany(
    () => TfpbiodmpEntity,
    (tfpbiodmpEntity) => tfpbiodmpEntity.codescala,
  )
  tfpbiodmps: TfpbiodmpEntity[];

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpescfaes, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
