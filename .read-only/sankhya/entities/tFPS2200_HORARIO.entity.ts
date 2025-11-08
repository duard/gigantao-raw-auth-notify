import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2200Entity } from './tFPS2200.entity';

@Index(
  'PK_TFPS2200_HORARIO',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chavepai', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS2200_HORARIO', { schema: 'SANKHYA' })
export class Tfps2200HorarioEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'DIA', nullable: true })
  dia: number | null;

  @Column('varchar', { name: 'CODHORCONTRAT', nullable: true, length: 30 })
  codhorcontrat: string | null;

  @Column('varchar', { primary: true, name: 'CHAVEPAI', length: 100 })
  chavepai: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @ManyToOne(
    () => Tfps2200Entity,
    (tfps2200Entity) => tfps2200Entity.tfps2200Horarios,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVEPAI', referencedColumnName: 'chave' },
  ])
  tfps2: Tfps2200Entity;
}
