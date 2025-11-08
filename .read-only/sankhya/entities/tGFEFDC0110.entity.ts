import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDC0110', ['codemp', 'dtref', 'regniv1', 'registro'], {
  unique: true,
})
@Entity('TGFEFDC0110', { schema: 'SANKHYA' })
export class Tgfefdc0110Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'0001'",
  })
  regniv1: string;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'0110'",
  })
  registro: string;

  @Column('int', { name: 'COD_INC_TRIB' })
  codIncTrib: number;

  @Column('int', { name: 'IND_APRO_CRED', nullable: true })
  indAproCred: number | null;

  @Column('int', { name: 'COD_TIPO_CONT', nullable: true })
  codTipoCont: number | null;

  @Column('int', { name: 'IND_REG_CUM', nullable: true })
  indRegCum: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
