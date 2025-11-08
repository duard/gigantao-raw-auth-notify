import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDCC010', ['codemp', 'dtref', 'regniv1', 'codempestab'], {
  unique: true,
})
@Entity('TGFEFDCC010', { schema: 'SANKHYA' })
export class Tgfefdcc010Entity {
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

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C010'" })
  registro: string;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('varchar', { name: 'IND_ESCRI', nullable: true, length: 1 })
  indEscri: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
