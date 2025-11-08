import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDCF010', ['codemp', 'dtref', 'regniv1', 'codempestab'], {
  unique: true,
})
@Entity('TGFEFDCF010', { schema: 'SANKHYA' })
export class Tgfefdcf010Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'F001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'F010'" })
  registro: string;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
