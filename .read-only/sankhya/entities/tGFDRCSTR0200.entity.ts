import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdrcstEntity } from './tGFDRCST.entity';

@Index(
  'PK_TGFDRCSTR0200',
  ['codemp', 'dtinicial', 'dtfinal', 'reg', 'codprod'],
  { unique: true },
)
@Entity('TGFDRCSTR0200', { schema: 'SANKHYA' })
export class Tgfdrcstr0200Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'0200'",
  })
  reg: string;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'CODITEM', length: 60 })
  coditem: string;

  @Column('varchar', { name: 'DESCRITEM', nullable: true, length: 140 })
  descritem: string | null;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 60 })
  codbarra: string | null;

  @Column('varchar', { name: 'CODANTITEM', nullable: true, length: 60 })
  codantitem: string | null;

  @Column('varchar', { name: 'UNIDINV', nullable: true, length: 6 })
  unidinv: string | null;

  @Column('varchar', { name: 'TIPOITEM', nullable: true, length: 2 })
  tipoitem: string | null;

  @Column('varchar', { name: 'CODNCM', nullable: true, length: 8 })
  codncm: string | null;

  @Column('smallint', { name: 'EXIPI', nullable: true })
  exipi: number | null;

  @Column('int', { name: 'CODGEN', nullable: true })
  codgen: number | null;

  @Column('int', { name: 'CODLST', nullable: true })
  codlst: number | null;

  @Column('float', { name: 'ALIQICMS', nullable: true, precision: 53 })
  aliqicms: number | null;

  @Column('int', { name: 'CEST', nullable: true })
  cest: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(
    () => TgfdrcstEntity,
    (tgfdrcstEntity) => tgfdrcstEntity.tgfdrcstr0s7,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTINICIAL', referencedColumnName: 'dtinicial' },
    { name: 'DTFINAL', referencedColumnName: 'dtfinal' },
  ])
  tgfdrcst: TgfdrcstEntity;
}
