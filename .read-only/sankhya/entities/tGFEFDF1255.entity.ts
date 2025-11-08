import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index(
  'PK_TGFEFDF1255',
  ['sequencia', 'codemp', 'dtref', 'regniv1', 'seq1250'],
  { unique: true },
)
@Entity('TGFEFDF1255', { schema: 'SANKHYA' })
export class Tgfefdf1255Entity {
  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 5,
    default: () => "'1001'",
  })
  regniv1: string;

  @Column('varchar', { name: 'REGISTRO', length: 5, default: () => "'1255'" })
  registro: string;

  @Column('int', { primary: true, name: 'SEQ1250' })
  seq1250: number;

  @Column('varchar', {
    name: 'COD_MOT_REST_COMPL',
    nullable: true,
    length: 100,
  })
  codMotRestCompl: string | null;

  @Column('numeric', {
    name: 'VL_CREDITO_ICMS_OP_MOT',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  vlCreditoIcmsOpMot: number | null;

  @Column('numeric', {
    name: 'VL_ICMS_ST_REST_MOT',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  vlIcmsStRestMot: number | null;

  @Column('numeric', {
    name: 'VL_FCP_ST_REST_MOT',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  vlFcpStRestMot: number | null;

  @Column('numeric', {
    name: 'VL_ICMS_ST_COMPL_MOT',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  vlIcmsStComplMot: number | null;

  @Column('numeric', {
    name: 'VL_FCP_ST_COMPL_MOT',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  vlFcpStComplMot: number | null;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfefdf1s2)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
