import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5001Entity } from './tFPS5001.entity';

@Index('PK_TFPS5001_INFOCOMPLCONT', ['codinfocomplcont'], { unique: true })
@Index('TFPS5001_INFOCOMPLCONT_I01', ['codempmatriz', 'dtref', 'cpf'], {})
@Entity('TFPS5001_INFOCOMPLCONT', { schema: 'SANKHYA' })
export class Tfps5001InfocomplcontEntity {
  @Column('int', { primary: true, name: 'CODINFOCOMPLCONT' })
  codinfocomplcont: number;

  @Column('datetime', { name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { name: 'CODEMPMATRIZ' })
  codempmatriz: number;

  @Column('varchar', { name: 'CPF', length: 11 })
  cpf: string;

  @Column('varchar', { name: 'CODCBO', nullable: true, length: 6 })
  codcbo: string | null;

  @Column('varchar', { name: 'NATATIVIDADE', nullable: true, length: 1 })
  natatividade: string | null;

  @Column('int', { name: 'QTDDIASTRAB', nullable: true })
  qtddiastrab: number | null;

  @ManyToOne(
    () => Tfps5001Entity,
    (tfps5001Entity) => tfps5001Entity.tfps5001Infocomplconts,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMPMATRIZ', referencedColumnName: 'codempmatriz' },
    { name: 'CPF', referencedColumnName: 'cpf' },
    { name: 'INDAPURACAO', referencedColumnName: 'indapuracao' },
  ])
  tfps5: Tfps5001Entity;
}
