import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfplogcalcEntity } from './tFPLOGCALC.entity';
import { TfpfsuEntity } from './tFPFSU.entity';

@Index(
  'PK_TFPBSU',
  ['referencia', 'codemp', 'codfunc', 'tipfolha', 'seqfolha'],
  { unique: true },
)
@Entity('TFPBSU', { schema: 'SANKHYA' })
export class TfpbsuEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('varchar', {
    primary: true,
    name: 'TIPFOLHA',
    length: 1,
    default: () => "'N'",
  })
  tipfolha: string;

  @Column('smallint', { primary: true, name: 'SEQFOLHA', default: () => '(1)' })
  seqfolha: number;

  @Column('smallint', { name: 'DIASTRAB', default: () => '(30)' })
  diastrab: number;

  @Column('float', { name: 'SALBRUTO', precision: 53 })
  salbruto: number;

  @Column('float', { name: 'SALLIQ', precision: 53 })
  salliq: number;

  @Column('float', { name: 'SALBASE', precision: 53 })
  salbase: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('datetime', { name: 'DTPAGAMENTO', nullable: true })
  dtpagamento: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('int', { name: 'NUMRPA', nullable: true })
  numrpa: number | null;

  @Column('char', { name: 'LIBESOCIAL', nullable: true, length: 1 })
  libesocial: string | null;

  @Column('char', { name: 'GERARPARESCISAO', nullable: true, length: 1 })
  gerarparescisao: string | null;

  @Column('smallint', { name: 'STATUS', nullable: true })
  status: number | null;

  @Column('char', { name: 'NAORECALCULA', nullable: true, length: 1 })
  naorecalcula: string | null;

  @Column('char', { name: 'DISSIDIO', nullable: true, length: 1 })
  dissidio: string | null;

  @Column('char', { name: 'DSC', nullable: true, length: 255 })
  dsc: string | null;

  @Column('int', { name: 'CODCONV', nullable: true })
  codconv: number | null;

  @Column('text', { name: 'PARAMETROS', nullable: true })
  parametros: string | null;

  @Column('varchar', { name: 'VALIDADO', length: 1, default: () => "'N'" })
  validado: string;

  @ManyToOne(
    () => TfplogcalcEntity,
    (tfplogcalcEntity) => tfplogcalcEntity.tfpbsus,
  )
  @JoinColumn([{ name: 'CODLOG', referencedColumnName: 'codlog' }])
  codlog: TfplogcalcEntity;

  @OneToMany(() => TfpfsuEntity, (tfpfsuEntity) => tfpfsuEntity.tfpbsu)
  tfpfsus: TfpfsuEntity[];
}
