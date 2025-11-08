import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps5001IdeadcEntity } from './tFPS5001_IDEADC.entity';
import { Tfps5001InfoperrefEntity } from './tFPS5001_INFOPERREF.entity';

@Index(
  'PK_TFPS5001_IDEESTABLOT',
  ['dtref', 'codempmatriz', 'cpf', 'indapuracao', 'codemp', 'codlotacao'],
  { unique: true },
)
@Entity('TFPS5001_IDEESTABLOT', { schema: 'SANKHYA' })
export class Tfps5001IdeestablotEntity {
  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEMPMATRIZ' })
  codempmatriz: number;

  @Column('varchar', { primary: true, name: 'CPF', length: 11 })
  cpf: string;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'CODLOTACAO', length: 30 })
  codlotacao: string;

  @Column('smallint', {
    primary: true,
    name: 'INDAPURACAO',
    default: () => '(1)',
  })
  indapuracao: number;

  @Column('varchar', { name: 'TPINSC', nullable: true, length: 2 })
  tpinsc: string | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @OneToMany(
    () => Tfps5001IdeadcEntity,
    (tfps5001IdeadcEntity) => tfps5001IdeadcEntity.tfps5001Ideestablot,
  )
  tfps5001Ideadcs: Tfps5001IdeadcEntity[];

  @OneToMany(
    () => Tfps5001InfoperrefEntity,
    (tfps5001InfoperrefEntity) => tfps5001InfoperrefEntity.tfps5001Ideestablot,
  )
  tfps5001Infoperrefs: Tfps5001InfoperrefEntity[];
}
