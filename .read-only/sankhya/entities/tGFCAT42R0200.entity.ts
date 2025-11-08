import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tgfcat42Entity } from './tGFCAT42.entity';

@Index(
  'PK_TGFCAT42R0200',
  ['codemp', 'dtinicial', 'dtfinal', 'reg', 'codprod'],
  { unique: true },
)
@Entity('TGFCAT42R0200', { schema: 'SANKHYA' })
export class Tgfcat42R0200Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', { primary: true, name: 'REG', length: 4 })
  reg: string;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'CODITEM', length: 60 })
  coditem: string;

  @Column('varchar', { name: 'DESCRITEM', nullable: true, length: 60 })
  descritem: string | null;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 60 })
  codbarra: string | null;

  @Column('varchar', { name: 'UNIDINV', nullable: true, length: 6 })
  unidinv: string | null;

  @Column('varchar', { name: 'CODNCM', nullable: true, length: 8 })
  codncm: string | null;

  @Column('float', { name: 'ALIQICMS', nullable: true, precision: 53 })
  aliqicms: number | null;

  @Column('int', { name: 'CEST', nullable: true })
  cest: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(
    () => Tgfcat42Entity,
    (tgfcat42Entity) => tgfcat42Entity.tgfcat42R0s3,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTINICIAL', referencedColumnName: 'dtinicial' },
    { name: 'DTFINAL', referencedColumnName: 'dtfinal' },
  ])
  tgfcat: Tgfcat42Entity;
}
