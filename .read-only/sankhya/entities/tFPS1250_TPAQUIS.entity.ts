import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1250IdeprodutorEntity } from './tFPS1250_IDEPRODUTOR.entity';
import { Tfps1250Entity } from './tFPS1250.entity';

@Index(
  'PK_TFPS1250_TPAQUIS',
  ['codemp', 'dtref', 'sequencia', 'tpamb', 'chave1250', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS1250_TPAQUIS', { schema: 'SANKHYA' })
export class Tfps1250TpaquisEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE1250', length: 100 })
  chave1250: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { name: 'INDAQUIS', nullable: true })
  indaquis: number | null;

  @Column('float', { name: 'VLRTOTAQUIS', nullable: true, precision: 53 })
  vlrtotaquis: number | null;

  @OneToMany(
    () => Tfps1250IdeprodutorEntity,
    (tfps1250IdeprodutorEntity) => tfps1250IdeprodutorEntity.tfps1250Tpaquis,
  )
  tfps1250Ideprodutors: Tfps1250IdeprodutorEntity[];

  @ManyToOne(
    () => Tfps1250Entity,
    (tfps1250Entity) => tfps1250Entity.tfps1250Tpaquis,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1250', referencedColumnName: 'chave' },
  ])
  tfps1: Tfps1250Entity;
}
