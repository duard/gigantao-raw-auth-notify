import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1070Entity } from './tFPS1070.entity';

@Index(
  'PK_TFPS1070_INFOSUSP',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'nuprocesso', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS1070_INFOSUSP', { schema: 'SANKHYA' })
export class Tfps1070InfosuspEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODSUSP', nullable: true })
  codsusp: number | null;

  @Column('varchar', { name: 'INDSUSP', nullable: true, length: 2 })
  indsusp: string | null;

  @Column('datetime', { name: 'DTDECISAO', nullable: true })
  dtdecisao: Date | null;

  @Column('char', { name: 'INDDEPOSITO', nullable: true, length: 1 })
  inddeposito: string | null;

  @Column('varchar', { primary: true, name: 'NUPROCESSO', length: 100 })
  nuprocesso: string;

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
    () => Tfps1070Entity,
    (tfps1070Entity) => tfps1070Entity.tfps1070Infosusps,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'NUPROCESSO', referencedColumnName: 'chave' },
  ])
  tfps1: Tfps1070Entity;
}
