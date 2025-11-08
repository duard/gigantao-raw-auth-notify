import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFC101', ['codemp', 'dtref', 'regniv1', 'chave', 'registro'], {
  unique: true,
})
@Entity('TGFEFDFC101', { schema: 'SANKHYA' })
export class Tgfefdfc101Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'C001'",
  })
  regniv1: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'C101'",
  })
  registro: string;

  @Column('float', { name: 'VL_FCP_UF_DEST', precision: 53 })
  vlFcpUfDest: number;

  @Column('float', { name: 'VL_ICMS_UF_DEST', nullable: true, precision: 53 })
  vlIcmsUfDest: number | null;

  @Column('float', { name: 'VL_ICMS_UF_REM', nullable: true, precision: 53 })
  vlIcmsUfRem: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
