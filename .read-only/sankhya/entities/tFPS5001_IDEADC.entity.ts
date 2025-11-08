import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5001IdeestablotEntity } from './tFPS5001_IDEESTABLOT.entity';

@Index('PK_TFPS5001_IDEADC', ['codideadc'], { unique: true })
@Index('TFPS5001_IDEADC_I01', ['codempmatriz', 'dtref', 'codlotacao'], {})
@Entity('TFPS5001_IDEADC', { schema: 'SANKHYA' })
export class Tfps5001IdeadcEntity {
  @Column('int', { primary: true, name: 'CODIDEADC' })
  codideadc: number;

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

  @Column('datetime', { name: 'DTACCONV', nullable: true })
  dtacconv: Date | null;

  @Column('varchar', { name: 'TPACCONV', nullable: true, length: 1 })
  tpacconv: string | null;

  @Column('varchar', { name: 'DSC', nullable: true, length: 255 })
  dsc: string | null;

  @Column('varchar', { name: 'REMUNSUC', nullable: true, length: 1 })
  remunsuc: string | null;

  @ManyToOne(
    () => Tfps5001IdeestablotEntity,
    (tfps5001IdeestablotEntity) => tfps5001IdeestablotEntity.tfps5001Ideadcs,
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
