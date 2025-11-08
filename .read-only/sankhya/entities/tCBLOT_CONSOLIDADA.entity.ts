import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbconsolidadaEntity } from './tCBCONSOLIDADA.entity';

@Index(
  'PK_TCBLOT_CONSOLIDADA',
  ['idconsolid', 'codemp', 'referencia', 'numlote'],
  { unique: true },
)
@Entity('TCBLOT_CONSOLIDADA', { schema: 'SANKHYA' })
export class TcblotConsolidadaEntity {
  @Column('smallint', { primary: true, name: 'IDCONSOLID' })
  idconsolid: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'NUMLOTE' })
  numlote: number;

  @Column('datetime', { name: 'DTMOV' })
  dtmov: Date;

  @Column('float', { name: 'TOTLOTE', nullable: true, precision: 53 })
  totlote: number | null;

  @Column('text', { name: 'COMENTARIOS', nullable: true })
  comentarios: string | null;

  @Column('varchar', { name: 'SITUACAO', length: 1 })
  situacao: string;

  @Column('int', { name: 'ULTLANC' })
  ultlanc: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { name: 'CODEMPCONSOLID', nullable: true })
  codempconsolid: number | null;

  @ManyToOne(
    () => TcbconsolidadaEntity,
    (tcbconsolidadaEntity) => tcbconsolidadaEntity.tcblotConsolidadas,
  )
  @JoinColumn([{ name: 'IDCONSOLID', referencedColumnName: 'idconsolid' }])
  idconsol: TcbconsolidadaEntity;
}
