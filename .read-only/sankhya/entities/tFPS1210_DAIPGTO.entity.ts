import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1210AipgtoEntity } from './tFPS1210_AIPGTO.entity';

@Index(
  'PK_TFPS1210_DAIPGTO',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'cpfbenef',
    'dtTppgto',
    'codcateg',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1210_DAIPGTO', { schema: 'SANKHYA' })
export class Tfps1210DaipgtoEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CPFBENEF', length: 100 })
  cpfbenef: string;

  @Column('varchar', { primary: true, name: 'DT_TPPGTO', length: 100 })
  dtTppgto: string;

  @Column('varchar', { primary: true, name: 'CODCATEG', length: 100 })
  codcateg: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'TPBCIRRF', nullable: true, length: 2 })
  tpbcirrf: string | null;

  @Column('float', { name: 'VRBCIRRF', nullable: true, precision: 53 })
  vrbcirrf: number | null;

  @ManyToOne(
    () => Tfps1210AipgtoEntity,
    (tfps1210AipgtoEntity) => tfps1210AipgtoEntity.tfps1210Daipgtos,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CPFBENEF', referencedColumnName: 'cpfbenef' },
    { name: 'DT_TPPGTO', referencedColumnName: 'dtTppgto' },
    { name: 'CODCATEG', referencedColumnName: 'chave' },
  ])
  tfps1210Aipgto: Tfps1210AipgtoEntity;
}
