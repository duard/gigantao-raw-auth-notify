import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TsiendEntity } from './tSIEND.entity';
import { TgflcdprEntity } from './tGFLCDPR.entity';
import { Tgflcdprr0045Entity } from './tGFLCDPRR0045.entity';

@Index(
  'PK_TGFLCDPRR0040',
  ['dtinicial', 'dtfinal', 'reg', 'codimovel', 'codparc'],
  {
    unique: true,
  },
)
@Entity('TGFLCDPRR0040', { schema: 'SANKHYA' })
export class Tgflcdprr0040Entity {
  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'0040'",
  })
  reg: string;

  @Column('smallint', { primary: true, name: 'CODIMOVEL' })
  codimovel: number;

  @Column('varchar', { name: 'PAIS', length: 2, default: () => "'BR'" })
  pais: string;

  @Column('varchar', { name: 'MOEDA', length: 3, default: () => "'BRL'" })
  moeda: string;

  @Column('varchar', { name: 'CADITR', length: 8 })
  caditr: string;

  @Column('varchar', { name: 'CAEPF', length: 14 })
  caepf: string;

  @Column('varchar', { name: 'INSCRESTADUAL', nullable: true, length: 14 })
  inscrestadual: string | null;

  @Column('varchar', { name: 'NOMEIMOVEL', length: 50 })
  nomeimovel: string;

  @Column('varchar', { name: 'NUM', nullable: true, length: 6 })
  num: string | null;

  @Column('varchar', { name: 'COMPL', nullable: true, length: 50 })
  compl: string | null;

  @Column('smallint', { name: 'UF' })
  uf: number;

  @Column('int', { name: 'CODMUN' })
  codmun: number;

  @Column('varchar', { name: 'CEP', length: 8 })
  cep: string;

  @Column('varchar', { name: 'TIPOEXPLORACAO', length: 1 })
  tipoexploracao: string;

  @Column('float', { name: 'PARTICIPACAO', precision: 53 })
  participacao: number;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgflcdprr0s4)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.tgflcdprr0s2)
  @JoinColumn([{ name: 'CODBAI', referencedColumnName: 'codbai' }])
  codbai: TsibaiEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.tgflcdprr0s2)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend: TsiendEntity;

  @ManyToOne(
    () => TgflcdprEntity,
    (tgflcdprEntity) => tgflcdprEntity.tgflcdprr0s4,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'DTINICIAL', referencedColumnName: 'dtinicial' },
    { name: 'DTFINAL', referencedColumnName: 'dtfinal' },
    { name: 'CODPARC', referencedColumnName: 'codparc' },
  ])
  tgflcdpr: TgflcdprEntity;

  @OneToMany(
    () => Tgflcdprr0045Entity,
    (tgflcdprr0045Entity) => tgflcdprr0045Entity.tgflcdprr0,
  )
  tgflcdprr0s: Tgflcdprr0045Entity[];
}
