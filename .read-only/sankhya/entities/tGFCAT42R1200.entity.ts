import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tgfcat42Entity } from './tGFCAT42.entity';
import { TgfcfoEntity } from './tGFCFO.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index(
  'PK_TGFCAT42R1200',
  ['codemp', 'dtinicial', 'dtfinal', 'reg', 'nunota', 'sequencia'],
  {
    unique: true,
  },
)
@Index('TGFCAT42R1200_I01', ['codemp', 'dtinicial', 'dtfinal', 'codprod'], {})
@Entity('TGFCAT42R1200', { schema: 'SANKHYA' })
export class Tgfcat42R1200Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', { primary: true, name: 'REG', length: 4 })
  reg: string;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CODMOD', length: 2 })
  codmod: string;

  @Column('varchar', { name: 'ECFFAB', nullable: true, length: 21 })
  ecffab: string | null;

  @Column('varchar', { name: 'SER', nullable: true, length: 3 })
  ser: string | null;

  @Column('int', { name: 'NUMDOC', nullable: true })
  numdoc: number | null;

  @Column('smallint', { name: 'INDOPER' })
  indoper: number;

  @Column('datetime', { name: 'DATA' })
  data: Date;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'CODITEM', nullable: true, length: 60 })
  coditem: string | null;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @Column('float', { name: 'ICMSTOT', nullable: true, precision: 53 })
  icmstot: number | null;

  @Column('float', { name: 'VLCONFR', nullable: true, precision: 53 })
  vlconfr: number | null;

  @Column('smallint', { name: 'CODLEGAL' })
  codlegal: number;

  @Column('char', { name: 'TIPMOV', length: 1 })
  tipmov: string;

  @Column('float', { name: 'VLRPARAATUALSALDO', nullable: true, precision: 53 })
  vlrparaatualsaldo: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('float', { name: 'BASEICMSTOT', nullable: true, precision: 53 })
  baseicmstot: number | null;

  @Column('float', { name: 'VLRUNIT', nullable: true, precision: 53 })
  vlrunit: number | null;

  @Column('varchar', { name: 'CGC_CPF', nullable: true, length: 14 })
  cgcCpf: string | null;

  @Column('float', { name: 'VLRICMS', nullable: true, precision: 53 })
  vlricms: number | null;

  @Column('smallint', { name: 'TIPODIVERGENCIA', nullable: true })
  tipodivergencia: number | null;

  @ManyToOne(
    () => Tgfcat42Entity,
    (tgfcat42Entity) => tgfcat42Entity.tgfcat42R1s3,
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

  @ManyToOne(() => TgfcfoEntity, (tgfcfoEntity) => tgfcfoEntity.tgfcat42R1s2)
  @JoinColumn([{ name: 'CODCFO', referencedColumnName: 'codcfo' }])
  codcfo: TgfcfoEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcat42R1s)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}
