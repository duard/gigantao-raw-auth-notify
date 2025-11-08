import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcblucpresEntity } from './tCBLUCPRES.entity';

@Index(
  'PK_TCBLUCPRESAJ',
  ['codemp', 'dtref', 'trimestre', 'codnatlp', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TCBLUCPRESAJ', { schema: 'SANKHYA' })
export class TcblucpresajEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'DTREF' })
  dtref: number;

  @Column('char', { primary: true, name: 'TRIMESTRE', length: 1 })
  trimestre: string;

  @Column('smallint', { primary: true, name: 'CODNATLP' })
  codnatlp: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DTLANC' })
  dtlanc: Date;

  @Column('varchar', { name: 'HISTORICO', nullable: true, length: 100 })
  historico: string | null;

  @Column('float', { name: 'VLRLANC', precision: 53 })
  vlrlanc: number;

  @ManyToOne(
    () => TcblucpresEntity,
    (tcblucpresEntity) => tcblucpresEntity.tcblucpresajs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TRIMESTRE', referencedColumnName: 'trimestre' },
  ])
  tcblucpres: TcblucpresEntity;
}
