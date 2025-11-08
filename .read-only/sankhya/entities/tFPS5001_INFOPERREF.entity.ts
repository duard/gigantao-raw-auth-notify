import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5001IdeestablotEntity } from './tFPS5001_IDEESTABLOT.entity';

@Index('PK_TFPS5001_INFOPERREF', ['codinfoperref'], { unique: true })
@Index('TFPS5001_INFOPERREF_I01', ['codempmatriz', 'dtref', 'codlotacao'], {})
@Entity('TFPS5001_INFOPERREF', { schema: 'SANKHYA' })
export class Tfps5001InfoperrefEntity {
  @Column('int', { primary: true, name: 'CODINFOPERREF' })
  codinfoperref: number;

  @Column('datetime', { name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { name: 'CODEMPMATRIZ' })
  codempmatriz: number;

  @Column('varchar', { name: 'CODLOTACAO', nullable: true, length: 30 })
  codlotacao: string | null;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('int', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('int', { name: 'INDSIMPLES', nullable: true })
  indsimples: number | null;

  @Column('varchar', { name: 'PERREF', nullable: true, length: 7 })
  perref: string | null;

  @Column('varchar', { name: 'IND13', nullable: true, length: 1 })
  ind13: string | null;

  @Column('varchar', { name: 'TPVRPERREF', nullable: true, length: 2 })
  tpvrperref: string | null;

  @Column('float', { name: 'VRPERREF', nullable: true, precision: 53 })
  vrperref: number | null;

  @ManyToOne(
    () => Tfps5001IdeestablotEntity,
    (tfps5001IdeestablotEntity) =>
      tfps5001IdeestablotEntity.tfps5001Infoperrefs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMPMATRIZ', referencedColumnName: 'codempmatriz' },
    { name: 'CPF', referencedColumnName: 'cpf' },
    { name: 'INDAPURACAO', referencedColumnName: 'indapuracao' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODLOTACAO', referencedColumnName: 'codlotacao' },
  ])
  tfps5001Ideestablot: Tfps5001IdeestablotEntity;
}
