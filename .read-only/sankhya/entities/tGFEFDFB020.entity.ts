import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFB020', ['codemp', 'dtref', 'regniv1', 'chave'], {
  unique: true,
})
@Entity('TGFEFDFB020', { schema: 'SANKHYA' })
export class Tgfefdfb020Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'B001'",
  })
  regniv1: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'B020'" })
  registro: string;

  @Column('varchar', { name: 'IND_OPER', length: 1 })
  indOper: string;

  @Column('varchar', { name: 'IND_EMIT', nullable: true, length: 1 })
  indEmit: string | null;

  @Column('varchar', { name: 'COD_PART', nullable: true, length: 60 })
  codPart: string | null;

  @Column('varchar', { name: 'COD_MOD', nullable: true, length: 2 })
  codMod: string | null;

  @Column('int', { name: 'COD_SIT', nullable: true })
  codSit: number | null;

  @Column('varchar', { name: 'SER', nullable: true, length: 3 })
  ser: string | null;

  @Column('int', { name: 'NUM_DOC', nullable: true })
  numDoc: number | null;

  @Column('varchar', { name: 'CHV_NFE', nullable: true, length: 44 })
  chvNfe: string | null;

  @Column('datetime', { name: 'DT_DOC', nullable: true })
  dtDoc: Date | null;

  @Column('int', { name: 'COD_MUN_SERV', nullable: true })
  codMunServ: number | null;

  @Column('float', { name: 'VL_CONT', nullable: true, precision: 53 })
  vlCont: number | null;

  @Column('float', { name: 'VL_MAT_TERC', nullable: true, precision: 53 })
  vlMatTerc: number | null;

  @Column('float', { name: 'VL_SUB', nullable: true, precision: 53 })
  vlSub: number | null;

  @Column('float', { name: 'VL_ISNT_ISS', nullable: true, precision: 53 })
  vlIsntIss: number | null;

  @Column('float', { name: 'VL_DED_BC', nullable: true, precision: 53 })
  vlDedBc: number | null;

  @Column('float', { name: 'VL_BC_ISS', nullable: true, precision: 53 })
  vlBcIss: number | null;

  @Column('float', { name: 'VL_BC_ISS_RT', nullable: true, precision: 53 })
  vlBcIssRt: number | null;

  @Column('float', { name: 'VL_ISS_RT', nullable: true, precision: 53 })
  vlIssRt: number | null;

  @Column('float', { name: 'VL_ISS', nullable: true, precision: 53 })
  vlIss: number | null;

  @Column('varchar', { name: 'COD_INF_OBS', nullable: true, length: 60 })
  codInfObs: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
