import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFEFDF1250', ['codemp', 'dtref', 'regniv1', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDF1250', { schema: 'SANKHYA' })
export class Tgfefdf1250Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { name: 'REGISTRO', length: 5, default: () => "'1250'" })
  registro: string;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 5,
    default: () => "'1001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('numeric', {
    name: 'VL_CREDITO_ICMS_OP',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  vlCreditoIcmsOp: number | null;

  @Column('numeric', {
    name: 'VL_ICMS_ST_REST',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  vlIcmsStRest: number | null;

  @Column('numeric', {
    name: 'VL_FCP_ST_REST',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  vlFcpStRest: number | null;

  @Column('numeric', {
    name: 'VL_ICMS_ST_COMPL',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  vlIcmsStCompl: number | null;

  @Column('numeric', {
    name: 'VL_FCP_ST_COMPL',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  vlFcpStCompl: number | null;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfefdf1s)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
