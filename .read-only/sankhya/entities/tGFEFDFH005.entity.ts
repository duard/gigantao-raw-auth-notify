import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFH005', ['codemp', 'dtref', 'regniv1', 'dtInv', 'motInv'], {
  unique: true,
})
@Entity('TGFEFDFH005', { schema: 'SANKHYA' })
export class Tgfefdfh005Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'H001'",
  })
  regniv1: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'H005'" })
  registro: string;

  @Column('datetime', { primary: true, name: 'DT_INV' })
  dtInv: Date;

  @Column('float', { name: 'VL_INV', nullable: true, precision: 53 })
  vlInv: number | null;

  @Column('varchar', {
    primary: true,
    name: 'MOT_INV',
    length: 2,
    default: () => "'0'",
  })
  motInv: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
