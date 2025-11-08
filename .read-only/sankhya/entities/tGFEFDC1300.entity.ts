import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDC1300', ['codemp', 'dtref', 'regniv1', 'indNatRet'], {
  unique: true,
})
@Entity('TGFEFDC1300', { schema: 'SANKHYA' })
export class Tgfefdc1300Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'1001'",
  })
  regniv1: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'1300'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'IND_NAT_RET', length: 2 })
  indNatRet: string;

  @Column('datetime', { name: 'PR_REC_RET', nullable: true })
  prRecRet: Date | null;

  @Column('float', { name: 'VL_RET_APU', nullable: true, precision: 53 })
  vlRetApu: number | null;

  @Column('float', { name: 'VL_RET_DED', nullable: true, precision: 53 })
  vlRetDed: number | null;

  @Column('float', { name: 'VL_RET_PER', nullable: true, precision: 53 })
  vlRetPer: number | null;

  @Column('float', { name: 'VL_RET_DCOMP', nullable: true, precision: 53 })
  vlRetDcomp: number | null;

  @Column('float', { name: 'SLD_RET', nullable: true, precision: 53 })
  sldRet: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
