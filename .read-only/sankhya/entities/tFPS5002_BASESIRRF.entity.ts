import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5002InfoirrfEntity } from './tFPS5002_INFOIRRF.entity';

@Index(
  'PK_TFPS5002_BASESIRRF',
  ['dtref', 'codempmatriz', 'cpf', 'codcateg', 'indresbr', 'tpvalor'],
  { unique: true },
)
@Entity('TFPS5002_BASESIRRF', { schema: 'SANKHYA' })
export class Tfps5002BasesirrfEntity {
  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEMPMATRIZ' })
  codempmatriz: number;

  @Column('varchar', { primary: true, name: 'CPF', length: 11 })
  cpf: string;

  @Column('smallint', { primary: true, name: 'CODCATEG' })
  codcateg: number;

  @Column('char', { primary: true, name: 'INDRESBR', length: 1 })
  indresbr: string;

  @Column('smallint', { primary: true, name: 'TPVALOR' })
  tpvalor: number;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @ManyToOne(
    () => Tfps5002InfoirrfEntity,
    (tfps5002InfoirrfEntity) => tfps5002InfoirrfEntity.tfps5002Basesirrfs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMPMATRIZ', referencedColumnName: 'codempmatriz' },
    { name: 'CPF', referencedColumnName: 'cpf' },
    { name: 'CODCATEG', referencedColumnName: 'codcateg' },
    { name: 'INDRESBR', referencedColumnName: 'indresbr' },
  ])
  tfps5002Infoirrf: Tfps5002InfoirrfEntity;
}
