import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index(
  'PKTGFEFDFH030',
  ['codemp', 'dtref', 'regniv1', 'dtInv', 'seqh010', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFH030', { schema: 'SANKHYA' })
export class Tgfefdfh030Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('datetime', { primary: true, name: 'DT_INV' })
  dtInv: Date;

  @Column('int', { primary: true, name: 'SEQH010' })
  seqh010: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 5,
    default: () => "'H001'",
  })
  regniv1: string;

  @Column('varchar', { name: 'REGISTRO', length: 5, default: () => "'H030'" })
  registro: string;

  @Column('numeric', {
    name: 'VL_ICMS_OP',
    nullable: true,
    precision: 10,
    scale: 6,
  })
  vlIcmsOp: number | null;

  @Column('numeric', {
    name: 'VL_BC_ICMS_ST',
    nullable: true,
    precision: 10,
    scale: 6,
  })
  vlBcIcmsSt: number | null;

  @Column('numeric', {
    name: 'VL_ICMS_ST',
    nullable: true,
    precision: 10,
    scale: 6,
  })
  vlIcmsSt: number | null;

  @Column('numeric', {
    name: 'VL_FCP',
    nullable: true,
    precision: 10,
    scale: 6,
  })
  vlFcp: number | null;

  @Column('varchar', {
    name: 'DIGITADO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  digitado: string | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfefdfhs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
